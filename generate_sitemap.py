import os
import datetime
from urllib.parse import urljoin

# ⚠️ 請改成你的 GitHub Pages 網址
BASE_URL = "https://brokenfish0922.github.io/"

ROOT_DIR = "./"
urls = []

for root, dirs, files in os.walk(ROOT_DIR):
    for file in files:
        if file.endswith(".html"):
            filepath = os.path.relpath(os.path.join(root, file), ROOT_DIR)
            url = urljoin(BASE_URL, filepath.replace("\\", "/"))

            # 取得最後修改時間
            lastmod_time = os.path.getmtime(os.path.join(root, file))
            lastmod = datetime.datetime.utcfromtimestamp(lastmod_time).strftime("%Y-%m-%d")

            urls.append((url, lastmod))

# 產生 sitemap.xml
sitemap_content = '<?xml version="1.0" encoding="UTF-8"?>\n'
sitemap_content += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

for url, lastmod in urls:
    sitemap_content += f"  <url>\n"
    sitemap_content += f"    <loc>{url}</loc>\n"
    sitemap_content += f"    <lastmod>{lastmod}</lastmod>\n"
    sitemap_content += f"  </url>\n"

sitemap_content += "</urlset>"

with open("sitemap.xml", "w", encoding="utf-8") as f:
    f.write(sitemap_content)

print("✅ 已產生 sitemap.xml（含 lastmod）")

# 產生 robots.txt
robots_content = f"""User-agent: *
Allow: /

Sitemap: {BASE_URL}sitemap.xml
"""

with open("robots.txt", "w", encoding="utf-8") as f:
    f.write(robots_content)

print("✅ 已產生 robots.txt")
