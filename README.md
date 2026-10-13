# TOMA® — Interactive Creative Archive

A scroll-free, click-through creative portfolio with cinematic transitions, animated geometric scenes, searchable galleries, filters, and project detail views. Built with plain HTML/CSS/JavaScript and no paid framework or plugins.

## Information architecture

- **Intro:** animated entry scene and navigation
- **Moving image:** searchable animation archive, filtered by film, loop, and study
- **Spatial worlds:** architecture/landscape case studies with individual detail screens
- **Art archive:** searchable traditional artwork archive filtered by medium
- **About:** short biography and résumé link
- **Contact:** professional contact email

## Preview
Open `index.html` in a modern browser. Galleries are generated from `content.js`. The starter includes sample entries so you can test the interactions. Replace the sample entries with your own. The galleries only render thumbnails for the active archive view; images use lazy loading.

## Add your content

Edit `content.js` in a text editor. It contains three arrays:
- `animations`
- `projects`
- `artworks`

Each entry supports `title`, `category`, `year`, `medium`, `image`, and `description`. Animation entries can include a `video` URL. Project entries can include an `assets` array of objects such as `{"label":"Floor plan","image":"assets/projects/project-01-plan.jpg"}`.

Use paths relative to the site root, for example:
- `assets/animations/film-001-poster.jpg`
- `assets/projects/project-01-render.jpg`
- `assets/artworks/artwork-001.jpg`

Create the matching folders inside `assets/` and put images there. Keep filenames simple (letters, numbers, hyphens). JPG, PNG, and WebP are supported. The browser only loads a thumbnail when it is needed; keep large original files out of the first gallery view.

### Scaling to hundreds of items
- Add one JSON-like object per item in the matching array.
- Use a compressed thumbnail for each item (e.g. 600–1000 px wide) and a separate larger image in the detail view if desired.
- For animation, use a poster image in the gallery and a video URL only when the visitor opens the detail view. Avoid bundling 100 large videos in GitHub.
- For 20 projects, add `assets` entries for renderings, plans, sections, diagrams, and process images to each project's `assets` array.
- Do not upload copyrighted/client-confidential work without permission.

## Personalize
- Replace the email placeholder in `index.html`.
- Add your résumé at `assets/Toma-Resume.pdf`.
- Rewrite About text to suit your practice.

## Update your existing GitHub Pages website for free
1. Unzip this package.
2. Open https://github.com/tomatiasha/tomatiasha.github.io
3. Click **Add file → Upload files**.
4. Upload/replace `index.html`, `styles.css`, `script.js`, and `content.js` from this package. Confirm replacements if prompted.
5. Upload any folders from `assets` that contain your own content. Empty folders are not tracked by Git, so add images or a small `.gitkeep` file if needed.
6. Click **Commit changes** and wait a few minutes.
7. Visit https://tomatiasha.github.io and refresh.

If the site is already published, you do not need to change Pages settings or Custom domain.

## Free hosting notes
GitHub Pages can serve a public static site at no hosting charge, subject to GitHub's current terms and usage limits. Because your archive includes hundreds of images and 100+ animations, use optimized thumbnails and external video embeds. A public static site has no private admin panel: editing the archive means changing `content.js` and uploading files. Large media hosting may have separate limits; check current service terms before relying on any third-party free tier.
