# CNW 2026: Rastuc Labs Computational Neuroscience Workshop (2nd edition)

Jekyll site for GitHub Pages. Content lives in `_config.yml` and `_data/*.yml`; you rarely need to touch HTML.

## Edit content
| What | Where |
|---|---|
| Dates, contact email, registration / abstract / 1st-edition links | `_config.yml` |
| Speakers (add `photo: assets/img/name.jpg` to show a photo) | `_data/speakers.yml` |
| Day-by-day schedule | `_data/program.yml` |
| Committee | `_data/committee.yml` |
| Topics list | `_data/topics.yml` |
| Section copy (About, Past edition) | `index.html` |
| Colors / fonts | top of `assets/css/style.css` |

## Preview locally (optional)
    bundle install
    bundle exec jekyll serve      # http://localhost:4000

## Deploy to GitHub Pages
1. Create a repo. For a root URL use `<org>.github.io` (e.g. `rastuclabs.github.io`), or any repo name for a project site.
2. Push these files to the `main` branch.
3. Repo **Settings → Pages → Build and deployment**: Source = *Deploy from a branch*, Branch = `main`, folder `/ (root)`.
4. In `_config.yml` set `url` to your Pages URL, and `baseurl` to `""` (root site) or `"/repo-name"` (project site). Push again.
5. Wait about a minute; the site appears at the URL shown in Settings → Pages.

Custom domain (optional): add it under Settings → Pages and create a CNAME DNS record pointing to `<org>.github.io`.
