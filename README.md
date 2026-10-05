# Ujjesha Verma portfolio

A hand-written, responsive recreation of https://unlimited-environment-804842.framer.app/ in HTML, CSS, and JavaScript. No build step, package installation, or Framer dependency.

## Preview

Open `index.html` in a browser, or serve this folder with any static web server.

## Deploy

Upload the contents of this folder to a static host. For GitHub Pages, place these files in the root of a repository and select that branch/root in Settings > Pages. Do not upload this ZIP as a single file: extract it first.

## Features

- Original portfolio copy, images, project links, social profiles, CV link, and Calendly link.
- All displayed images and JetBrains Mono font served locally from `assets/`.
- Responsive desktop and mobile layouts with the green grid, dotted paper, polaroid, tape, and paperclip design.
- Accessible labels, keyboard focus styles, reduced-motion support, and manual tool carousel controls.

## Intentional differences and important limits

- The tools carousel is manually scrollable (touch, trackpad, and previous/next buttons), rather than an automatically moving marquee.
- Framer's generated scripts, edit controls, branding badge, and form backend are not included.
- The contact form opens the visitor's email app with a draft addressed to `ujjesha.design@gmail.com`. It does not send or store submissions on a server. The visitor must send the email themselves. A real form backend can be connected later.
- The original 2025 label and 290K/4-week Aura Kid claim are preserved as source-site copy, not updated metrics.
- The portrait is static, not an animated image transition.

## Custom domain

No domain is hardcoded and no DNS changes are included. Confirm the exact domain spelling and chosen hosting service first, then use that host's verified custom-domain records. Add a CNAME file only after the domain is confirmed.

## Edit

Content and links: `index.html`.
Layout and appearance: `style.css`.
Carousel and email form: `script.js`.

The original images, font, logos, and profile links retain their respective owners' rights. No new license is granted by this recreation.
