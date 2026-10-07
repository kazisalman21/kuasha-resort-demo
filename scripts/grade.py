"""Grade and export the demo photography. One consistent look: soft contrast,
lifted shadows, olive greens, calmer blues, warm whites. Outputs responsive WebP."""
import json, os, sys, numpy as np
from PIL import Image, ImageFilter
SRC=os.environ.get('PHOTO_SRC','assets-src/originals'); OUT='public/img'
WIDTHS=[480,800,1200,1600,2200]
meta=json.load(open('scripts/images.json'))
def rgb2hsv(a):
    r,g,b=a[...,0],a[...,1],a[...,2]; mx=a.max(-1); mn=a.min(-1); d=mx-mn+1e-8
    h=np.where(mx==r,((g-b)/d)%6,np.where(mx==g,(b-r)/d+2,(r-g)/d+4))/6
    s=np.where(mx>0,(mx-mn)/(mx+1e-8),0); return np.stack([h,s,mx],-1)
def hsv2rgb(h):
    H,S,V=h[...,0]*6,h[...,1],h[...,2]; i=np.floor(H).astype(int)%6; f=H-np.floor(H)
    p=V*(1-S); q=V*(1-S*f); t=V*(1-S*(1-f))
    r=np.choose(i,[V,q,p,p,t,V]); g=np.choose(i,[t,V,V,q,p,p]); b=np.choose(i,[p,p,t,V,V,q]); return np.stack([r,g,b],-1)
def grade(im):
    a=np.asarray(im.convert('RGB')).astype(np.float32)/255
    # tone: lift blacks, soften highlights, gentle mid contrast
    a=0.035+a*0.93; a=a+0.06*np.sin(np.pi*(a-0.5))*(a*(1-a))*2
    hsv=rgb2hsv(a); h,s,v=hsv[...,0],hsv[...,1],hsv[...,2]
    green=np.exp(-((h-0.30)/0.08)**2); blue=np.exp(-((h-0.58)/0.07)**2)
    h=h-0.018*green                     # greens toward olive
    s=s*(0.86-0.24*blue-0.06*green)     # calmer blues and greens
    s=np.minimum(s,0.78)
    hsv=np.stack([h%1,s,v],-1); a=hsv2rgb(hsv)
    # warm white balance + slight shadow warmth
    a[...,0]*=1.025; a[...,2]*=0.965; a[...,1]*=1.0
    lum=a.mean(-1,keepdims=True); a=a+(0.012*(1-lum))*np.array([1,0.6,0])
    return Image.fromarray((np.clip(a,0,1)*255).astype(np.uint8))
manifest={}
only=sys.argv[1:]
for name,m in meta.items():
    if only and name not in only: continue
    src=f"{SRC}/{m['id']}.jpg"; im=Image.open(src); im=grade(im)
    W,H=im.size; widths=[w for w in WIDTHS if w<=W] or [W]
    for w in widths:
        r=im.resize((w,round(H*w/W)),Image.LANCZOS)
        r.save(f'{OUT}/{name}-{w}.webp','WEBP',quality=76 if w>=1600 else 80,method=6)
    # placeholder colour + tiny blur
    small=im.resize((8,8),Image.BILINEAR); c=np.asarray(small).reshape(-1,3).mean(0)
    manifest[name]={'w':W,'h':H,'widths':widths,'color':'#%02x%02x%02x'%tuple(int(x) for x in c),'focus':m['focus'],'alt':m['alt'],'pexelsId':m['id']}
    print(name,W,H,widths)
old={}
p='src/data/images.json'
if os.path.exists(p): old=json.load(open(p))
old.update(manifest); json.dump(old,open(p,'w'),indent=1)
