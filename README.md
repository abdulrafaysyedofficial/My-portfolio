# My portfolio

Abdul Rafay Syed’s personal portfolio, covering operations, marketing, and team leadership.

A responsive dark monochrome portfolio with textured glass-style tiles built with plain HTML, CSS, and JavaScript. No build tools, external fonts, dependencies, analytics, or account setup are needed.

## Open the portfolio

Live website: [My portfolio](https://abdulrafaysyedofficial.github.io/My-portfolio/).

Open `index.html` in a current browser. All assets use relative paths, so the same files can also be served from a static web host or GitHub Pages.

## Files

- `index.html` — page content, a photo-led About introduction, skill summaries, work previews, academic projects, experience, and contact links.
- `styles.css` — responsive layouts, print styles, and reduced-motion support.
- `theme.css` — the dark monochrome palette, frosted surfaces, contrast, and section-label typography.
- `assets/glass-grain.svg` — a subtle grayscale texture used by the glass tiles.
- `script.js` — work filters, detailed project sheets, and the copy-email action. Project detail copy is grouped at the top.
- `assets/favicon.svg` — compact browser-tab icon.
- `assets/rafay-syed.jpeg` — the supplied portrait, displayed in a circular frame using CSS.
- `assets/lambton-college-logo.png` — the supplied Lambton College mark, shown with the academic capstone.
- `assets/osmania-university-logo.jpg` — the original university mark extracted from the supplied BBA research paper.
- `assets/tims-mints-concept.jpeg` — original capstone artwork from the supplied creative brief; CSS frames the Tim’s Mints logo beside its title.
- `assets/fhem-global-logo.png`, `assets/immigro-logo.png` and `assets/glentel-logo.png` — supplied company marks integrated into the headers of the upright project illustrations. The Glentel background was cleaned for display.
- `assets/osmania-university-logo-transparent.png` — background-free version of the supplied emblem for The Foundation; the original remains in the academic card and popup.
- `assets/tools/` — nine monochrome tool marks from Simple Icons 11.15.0, including source credits and the CC0 license.
- `assets/wes-verification-badge.png` — supplied WES badge displayed beside the Osmania University foundation entry.

The Tim’s Mints summary introduces the proposed mint candy for Tim Hortons cafés before describing the contribution. It draws on the supplied situation analysis, creative brief and media plan to highlight market analysis, customer profiling, pricing, positioning, integrated media planning, promotions and Canva creative work. It describes an academic product concept and planned campaign, with no launch or sales results claimed.

The PC buyer summary draws on the supplied BBA paper, highlighting questionnaire design, convenience sampling with 100 buyers and 20 sellers, primary and secondary research, response counts and percentage analysis, and recommendations by use case and budget. It identifies the project with Osmania University and presents findings as those of the academic study. The university mark appears in a rounded square frame on the card and in the project sheet.

The Foundation displays Lambton College and Osmania University logos directly on the page background, with the supplied WES verification alongside Osmania. PostgreSQL, Visual Studio Code and GitHub are included in the tools list, with a monochrome mini logo for every tool. Project sheets use a black base with the existing 72% opacity and frosted-glass blur.

## Portfolio content

The three categories are **Operations**, **Marketing**, and **Team Leadership**. The work examples cover Immigro campaign execution, district operations at Glentel, people development at Glentel, and recruitment marketing/CRM at FHEM. Academic project cards open detailed summaries connecting the PC market-research project to the BBA and Tim’s Mints marketing capstone to the postgraduate marketing program. Work and academic projects use the same accessible project sheets. Leadership includes ongoing candidate interviewing using the company’s structured framework, supported by training. The compact experience panel lists the two current roles and groups earlier sales, business development, and technical support experience.

Content is based on the resume and work descriptions provided by Rafay. Quantities marked approximately are retained as approximate. The approximately 40% store sales-volume growth is identified with the Durham region, the approximately 15 coordinated locations with the Toronto region, and the eight-month result as budget targets exceeded. Store performance is attributed to the Glentel store, with Rafay's contribution described separately. Project visuals are original workflow illustrations, not screenshots of employer systems or live campaign data.

The site displays a professional email address, LinkedIn profile, city, work history, and education. It does not include a home address, telephone number, private employer account information, or company-system screenshots.

## Update the content

1. Edit the visible page copy in `index.html`.
2. Edit `projects` in `script.js` to update the expandable work summaries.
3. Adjust colors and glass surfaces in `theme.css`; edit spacing and the font stack in `styles.css`.

Project filtering accepts space-separated categories on each card. Detail buttons reference a matching key in the `projects` object.

## Accessibility and behavior

- Semantic page landmarks, visible focus styles, and a skip link.
- Native modal project sheets support Escape and return focus to the opening button.
- Work filters announce the number of matching projects.
- Reduced-motion preferences and print styles are supported.
- All main page content remains readable without JavaScript. Interactive controls require JavaScript.
- Email links open the visitor's mail application. Copy email uses the browser clipboard when available, otherwise selects the visible email address for manual copying.

## GitHub Pages

The portfolio is designed for GitHub Pages. Keep these files at the repository root and publish the `main` branch from `/ (root)`. No compilation step is required.

## Review checks

Checked in a browser at 1440px, 390px, and 320px widths. Verified project filtering, work and academic project-sheet opening and closing, Escape and focus return, and copy-email confirmation. The dark theme, larger section labels, regional performance captions, mobile numbers alignment, and dark project sheets were also reviewed. No horizontal overflow or browser errors were observed at the tested mobile sizes. Local asset paths, section anchors, and accessibility references were checked; JavaScript syntax passed the Node.js check.
