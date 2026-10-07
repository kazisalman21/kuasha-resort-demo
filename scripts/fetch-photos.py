"""Download the original Pexels photos listed in scripts/images.json into assets-src/originals/.
Then run scripts/grade.py to regenerate public/img/."""
import json, os, urllib.request
os.makedirs('assets-src/originals', exist_ok=True)
for name, m in json.load(open('scripts/images.json')).items():
    p = f"assets-src/originals/{m['id']}.jpg"
    if os.path.exists(p): continue
    u = f"https://images.pexels.com/photos/{m['id']}/pexels-photo-{m['id']}.jpeg?auto=compress&cs=tinysrgb&w=2400"
    open(p, 'wb').write(urllib.request.urlopen(urllib.request.Request(u, headers={'User-Agent': 'Mozilla/5.0'}), timeout=60).read())
    print('saved', name)
