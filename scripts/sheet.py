import sys
from PIL import Image
Image.MAX_IMAGE_PIXELS=None
D='/tmp/claude-0/-home-claude/563191bf-5a11-5b51-a92e-320092061843/scratchpad/qa/'
for n in sys.argv[1:]:
    im=Image.open(D+n+'_full.png').convert('RGB'); W,H=im.size
    mob=W<1000
    sh,sc,per=(3600,.24,5) if mob else (2700,.36,3)
    if W==1536: sh,sc,per=(3000,.26,4)
    k=(H+sh-1)//sh; tw=int(W*sc)
    c=Image.new('RGB',(min(per,k)*(tw+8),int(sh*sc)*((k+per-1)//per)),(255,0,255))
    for i in range(k):
        cr=im.crop((0,i*sh,W,min(H,(i+1)*sh))); cr=cr.resize((tw,int(cr.size[1]*sc)))
        c.paste(cr,((i%per)*(tw+8),(i//per)*int(sh*sc)))
    c.save(D+n+'_sheet.jpg',quality=85); print(n,W,H)
