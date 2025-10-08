# A-Frame VR Project with Vite

A modern VR web application built with A-Frame 1.7.0 and Vite for fast development and building.

## Features

- 🥽 **A-Frame 1.7.0** - Latest version of the web VR framework
- ⚡ **Vite** - Fast development server and build tool
- 🎨 **Interactive 3D Scene** - Click objects to see animations
- 📱 **VR Ready** - Works with VR headsets and mobile devices
- 🎮 **Keyboard Controls** - Arrow keys for desktop navigation
- 💫 **Animations** - Smooth transitions and effects

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## VR Experience

### Desktop Usage
- Use your mouse to look around
- Click on objects to interact with them
- Use arrow keys to move around the scene

### VR Headset
- Click the "Enter VR" button to enter VR mode
- Compatible with Oculus, HTC Vive, and other WebXR devices

### Mobile VR
- Works on smartphones with VR viewers like Google Cardboard
- Use the device's gyroscope for head tracking

## Project Structure

```
├── index.html          # Main HTML file with A-Frame scene
├── src/
│   ├── style.css       # CSS styles for the application
│   └── main.js         # JavaScript functionality
├── package.json        # Project dependencies and scripts
├── vite.config.js      # Vite configuration
└── README.md           # This file
```

## Scene Contents

The VR scene includes:
- **Ground plane** - A large green surface
- **Interactive box** - Changes color when clicked
- **Rotating sphere** - Spins when clicked
- **Moving cylinder** - Moves up and down when clicked
- **Dynamic lighting** - Ambient and directional lights
- **Sky background** - Blue gradient sky
- **Welcome text** - Instructions for users

## Customization

### Adding New Objects
Add new A-Frame entities to the scene in `index.html`:

```html
<a-entity geometry="primitive: box" position="0 1 -3" color="#ff0000"></a-entity>
```

### Styling
Modify `src/style.css` to customize the appearance and add new animations.

### Functionality
Add new interactions in `src/main.js` using A-Frame's event system.

## Browser Compatibility

- Chrome (recommended for VR)
- Firefox
- Safari
- Edge

For VR support, use Chrome with WebXR enabled.

## Troubleshooting

### VR Not Working
1. Ensure you're using Chrome with WebXR enabled
2. Check that your VR headset is properly connected
3. Make sure you're accessing the site via HTTPS in production

### Performance Issues
1. Reduce the number of objects in the scene
2. Lower the quality of textures and models
3. Use simpler geometries

## License

ISC License

## Contributing

Feel free to submit issues and enhancement requests!
