# CNW 2026: Rastuc Labs Computational Neuroscience Workshop (2nd edition)

Jekyll site for GitHub Pages. Content lives in `_config.yml` and `_data/*.yml`; 

## Edit content
| What | Where |
|---|---|
| Dates, contact email, registration / abstract / 1st-edition links | `_config.yml` |
| Speakers (photo, bio, talk) | `_data/speakers.yml` |
| Day-by-day schedule | `_data/program.yml` |
| Committee | `_data/committee.yml` |
| Topics list | `_data/topics.yml` |
| Partner logos (carousel) | `_data/partners.yml` |
| Section copy (About, Past edition) | `index.html` |
| Colors / fonts | top of `assets/css/style.css` |

### Adding a speaker
Each entry in `_data/speakers.yml` drives both the landing-page card and the
full profile on `/speakers/` (`speakers.html`).

- `slug` — the anchor for the "Meet the speaker" link, e.g. `/speakers/#sorrentino`. Keep it unique and lowercase.
- `photo` — path relative to the site root, e.g. `/assets/img/2026/foto_Sorrentino.jpeg`. Leave empty (`""`) to show the speaker's initial instead.
- `bio` — a YAML literal block (`bio: |`). Separate paragraphs with a blank line. Omit the key and the biography block is simply not rendered.
- `status` — `Confirmed` or `Invited`.

### Adding a partner
Add an entry to `_data/partners.yml` and drop the logo into `assets/img/partners/`:

    - name: "Organisation name"
      logo: "/assets/img/partners/logo.png"

The Partners carousel duplicates the list automatically for a seamless loop, so only add each partner once. Logos are shown `object-fit: contain` inside a fixed tile, so any aspect ratio works — prefer a light or transparent background.

## Preview locally
    bundle install
    bundle exec jekyll serve      # http://localhost:4000

