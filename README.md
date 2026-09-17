# Ali Ghorbani Ranjbary – Personal Academic Website

A clean, multi-page static website designed for **GitHub Pages**, similar in structure to academic sites like [albruzos.github.io](https://albruzos.github.io/).

## Pages included

- `index.html` – Home / About
- `experience.html` – Professional experience, mentoring, services
- `education.html` – Education & awards
- `publications.html` – Journals, under-review papers, book chapters
- `research.html` – Research interests & skills
- `other.html` – Grants, patent, conferences
- `contact.html` – Contact information

## How to deploy on GitHub Pages

1. Create a new GitHub repository (e.g. `yourusername.github.io` or `ali-ghorbani-site`).
2. Upload all files and the `css` folder to the repository (keep the same structure).
3. Go to **Settings → Pages**.
4. Under **Source**, select the branch (usually `main`) and folder `/ (root)`.
5. Save. Your site will be live at `https://yourusername.github.io/` (or `https://yourusername.github.io/repo-name/`).

## Customization

- Edit the HTML files to update content, add real email / Google Scholar / ORCID links.
- Change colors in `css/style.css` (variables at the top).
- Add more pages by copying an existing HTML file and linking it in the navigation of all pages.

## Local preview

Just open `index.html` in any browser, or use a simple local server:

```bash
# Python
python -m http.server 8000

# or Node
npx serve .
```

Then visit http://localhost:8000

---

Built as a simple static site – no build tools required.
