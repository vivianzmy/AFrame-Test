# Public Assets

This directory contains static assets that will be served directly by Vite without any processing.

## Common files to place here:

- `favicon.ico` - Website icon
- `robots.txt` - Search engine instructions
- `manifest.json` - Web app manifest
- Images and textures for A-Frame scenes
- Audio files for VR experiences
- 3D models (.gltf, .glb, .obj, etc.)
- Other static assets

## Usage in A-Frame:

Assets in this folder can be referenced directly in your A-Frame scenes:

```html
<!-- Example: Using an image texture -->
<a-box src="/texture.jpg"></a-box>

<!-- Example: Using a 3D model -->
<a-entity gltf-model="/model.glb"></a-entity>

<!-- Example: Using audio -->
<a-sound src="/ambient.mp3" autoplay="true"></a-sound>
```

The `/` prefix tells Vite to serve the file from the public directory.
