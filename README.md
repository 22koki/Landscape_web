# Riverstone Landscapes & Finishes

A responsive, lead-focused website for a Nairobi landscaping company. The site presents Riverstone's services and real project photography through a distinctive editorial design, then turns interest into a structured WhatsApp service request.

## Highlights

- Premium responsive homepage with clear service positioning
- Detailed services page covering design, construction and maintenance
- Filterable project mosaic using Riverstone's real portfolio images
- Full-screen, keyboard-accessible gallery viewer
- Quote form that creates a complete WhatsApp enquiry
- Working phone, email, WhatsApp and Instagram links
- Accessible navigation, focus states, semantic structure and reduced-motion support
- SEO descriptions and mobile theme styling

## Run locally

The production website lives in the `landscape` directory and requires no build step.

```bash
cd landscape
python -m http.server 8000
```

Open `http://localhost:8000` in a browser.

## Main files

- `landscape/index.html` — homepage
- `landscape/services.html` — complete service catalogue
- `landscape/gallery.html` — filterable project gallery
- `landscape/contact.html` — quote and contact experience
- `landscape/assets/site.css` — shared visual system and responsive styles
- `landscape/assets/site.js` — navigation, animations, gallery and quote interactions

## Contact configuration

The primary WhatsApp number is configured as `+254 725 429 407` in the page links and `landscape/assets/site.js`. The secondary telephone number is `+254 721 728 539`.

If either business number changes, update the visible text, `tel:` links and `wa.me` links together.

## Deployment

This is a static site. Deploy the `landscape` directory to GitHub Pages, Netlify, Vercel or any static hosting provider.

## Image notes

Portfolio images are served from the existing `landscape/gallerys` and `landscape/imgs` collections. CSS `object-fit` and a responsive masonry-style grid give mixed image dimensions a consistent, intentional presentation without modifying the originals.
