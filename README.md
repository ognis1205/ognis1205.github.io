My Home Page
==============================

[ognis1205.github.io](https://ognis1205.github.io/)

Implementation Notes
==============================

 1. **React/Next.js/ChakraUI**
 
    The portfolio website is implemented as a SPA/SSR application based on Next.js/ChakraUI.

 2. **WebGL/GLSL and OffscreenCanvas/Web Worker**
 
    The "MNIST Dice" is a small neural network running entirely in a WebGL GLSL shader. To reduce the performance
	penalty due to the initial compilation of the shader, I used *OffscreenCanvas* and *Web Worker*.

 3. **GitHub Action based Web Feed**
 
    The */timeline* page requires my SNS activities to render. I implemented *GitHub Action*-based custom web feeds
	for this requirement.

Relating Projects
==============================

 - [SIREN-GAN](https://github.com/ognis1205/siren-gan)
 - [Instagram Web Feed Action](https://github.com/ognis1205/instagram-web-feed-action)
