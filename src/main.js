// A-Frame VR Project - Main JavaScript
console.log('A-Frame VR Project loaded successfully!');

// Wait for A-Frame to be ready
document.addEventListener('DOMContentLoaded', () => {
    const scene = document.querySelector('a-scene');
    
    // Add some interactive functionality
    const box = document.querySelector('a-box');
    const sphere = document.querySelector('a-sphere');
    const cylinder = document.querySelector('a-cylinder');
    
    // Add click events to objects
    if (box) {
        box.addEventListener('click', () => {
            // Change color on click
            const colors = ['#4CC3D9', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            box.setAttribute('color', randomColor);
            
            // Add a temporary scale animation
            box.setAttribute('scale', '1.2 1.2 1.2');
            setTimeout(() => {
                box.setAttribute('scale', '1 1 1');
            }, 200);
        });
    }
    
    if (sphere) {
        sphere.addEventListener('click', () => {
            // Rotate the sphere
            sphere.setAttribute('animation', 'property: rotation; to: 0 405 0; dur: 2000; easing: easeInOutQuad');
            
            // Reset animation after completion
            setTimeout(() => {
                sphere.removeAttribute('animation');
            }, 2000);
        });
    }
    
    if (cylinder) {
        cylinder.addEventListener('click', () => {
            // Move the cylinder up and down
            cylinder.setAttribute('animation', 'property: position; to: 1 2 0.75; dur: 1000; easing: easeInOutQuad');
            
            setTimeout(() => {
                cylinder.setAttribute('animation', 'property: position; to: 1 0.75 -3; dur: 1000; easing: easeInOutQuad');
            }, 1000);
            
            // Reset animation after completion
            setTimeout(() => {
                cylinder.removeAttribute('animation');
            }, 2000);
        });
    }
    
    // Add keyboard controls for non-VR users
    document.addEventListener('keydown', (event) => {
        const camera = document.querySelector('a-camera');
        const currentPosition = camera.getAttribute('position');
        
        switch(event.code) {
            case 'ArrowUp':
                camera.setAttribute('position', {
                    x: currentPosition.x,
                    y: currentPosition.y,
                    z: currentPosition.z - 0.5
                });
                break;
            case 'ArrowDown':
                camera.setAttribute('position', {
                    x: currentPosition.x,
                    y: currentPosition.y,
                    z: currentPosition.z + 0.5
                });
                break;
            case 'ArrowLeft':
                camera.setAttribute('position', {
                    x: currentPosition.x - 0.5,
                    y: currentPosition.y,
                    z: currentPosition.z
                });
                break;
            case 'ArrowRight':
                camera.setAttribute('position', {
                    x: currentPosition.x + 0.5,
                    y: currentPosition.y,
                    z: currentPosition.z
                });
                break;
        }
    });
    
    // VR mode detection
    scene.addEventListener('enter-vr', () => {
        console.log('Entered VR mode');
        document.body.style.background = '#000';
    });
    
    scene.addEventListener('exit-vr', () => {
        console.log('Exited VR mode');
        document.body.style.background = '';
    });
    
    // Scene loaded event
    scene.addEventListener('loaded', () => {
        console.log('A-Frame scene loaded successfully');
        
        // Add a welcome message
        const welcomeText = document.createElement('a-text');
        welcomeText.setAttribute('value', 'Welcome to A-Frame VR!');
        welcomeText.setAttribute('position', '0 2.5 -4');
        welcomeText.setAttribute('align', 'center');
        welcomeText.setAttribute('color', '#fff');
        welcomeText.setAttribute('width', '6');
        scene.appendChild(welcomeText);
        
        // Add instructions
        const instructions = document.createElement('a-text');
        instructions.setAttribute('value', 'Click objects to interact • Use VR headset for immersive experience');
        instructions.setAttribute('position', '0 2 -4.5');
        instructions.setAttribute('align', 'center');
        instructions.setAttribute('color', '#ddd');
        instructions.setAttribute('width', '4');
        scene.appendChild(instructions);
    });
});

// Export for potential module usage
export { };
