# Ali Ghorbani Ranjbary – Academic Website

Personal academic website inspired by [albruzos.github.io](https://albruzos.github.io/), designed for **GitHub Pages**.

## Structure

```
ali-site-v2/
├── index.html          ← News / Home (with profile sidebar + banners)
├── cv.html
├── publications.html
├── funding.html
├── awards.html
├── teaching.html
├── conferences.html
├── css/style.css
├── images/profile.jpg  ← Your photo
└── README.md
```

## Pages

| Page | Content |
|------|---------|
| **News** (index) | Home with photo, bio, location, latest highlights |
| **CV** | Full curriculum vitae |
| **Publications** | Journals, under-review, book chapters |
| **Funding** | Grants + Patent |
| **Awards** | Recognitions & reviewer activity |
| **Teaching** | Mentoring & student supervision |
| **Conferences** | Selected conference presentations |

## How to deploy on GitHub Pages

1. Download and unzip this folder.
2. Create or go to your repository:  
   `https://github.com/alighorbani-phd/alighorbaniranjbary.github.io`
3. Upload **all files** (keep the folder structure).
4. Go to **Settings → Pages**.
5. Source: Deploy from branch `main` / root.
6. Wait 1–2 minutes → site will be live.

## Customization needed

- Replace the `#` links in the sidebar (Email, Google Scholar, ORCID, ResearchGate) with your real URLs.
- You can change the banner texts/colors in `index.html`.
- To add a real banner image: put an image in `images/` and replace the `.banner-placeholder` div with an `<img>`.

## Local preview

Open `index.html` in a browser, or run:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000

---

Built as pure static HTML/CSS – no build step required.
