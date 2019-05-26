---
path: "/browser_particles"
title: "Browser Particles"
date: "2013-07-29"
tags: ["programming"]
hexagonImages: ["browser_particles_hexagon.png"]
---

I have been working on a mobile game with M&M Entertainment again, and our new game calls for a particle-based animation on top of the gameboard. I went to work in OpenGL ES building an Objective-C module for the mostly-complete Titanium app. Setting up the GLKit view, textures and geometries, communicating which textures are needed and when, and then cleaning up the objects after they are used turns out to be a pretty complex set of tasks. That stuff produces great results, but was eating more time that I would have preferred. I decided to use a WebView and "HTML5" techniques to render a graphics on top of the gameboard.

The question then became how to render the dynamic particles and move them in the most performant way in a webkit browser. A quick internet search returned loads of articles about turning on the GPU by using `translateZ` in CSS3. It's true that elements with that bit of CSS will be sent to the GPU. But, in the case of dynamically positioned particles, every time we set the position in CSS, the element would have to be sent again to the GPU. In 2D CSS, it turns out faster to just move the particles without the GPU. Here is an example of doing that smoothly with 500 small images.

The &lt;canvas&gt; element provides a way to render dynamic particles with the GPU. [Here](https://bl.ocks.org/jbeuckm/5971531) is an example that moves 2000 particles with the canvas. It works great on webkit in iOS and we're using it for the game.

![browser_particles.png](browser_particles.png)

Where WebGL is available, it enables the best possible performance for the dynamic particles. There are demos with one or two MILLIONs of particles that work smoothly in the browser.
