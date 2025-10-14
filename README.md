# Air Jordan 1 — Figma Plugin

A customizable **Air Jordan 1** 3D model plugin for Figma.  
Easily design, preview, and export high-quality renders of the legendary sneaker — perfect for moodboards, presentations, or sneakerhead mockups.

![cover](air-jordan-1-cover.png) 

## Features

- **Full colorway customization**  
  - Tweak every panel of the AJ1  
  - Includes **original colorway presets** for quick inspiration  

- **Background control**  
  - Choose solid colors to match your design  

- **Dynamic shoe positioning**  
  - **Flat** — clean, side-view placement  
  - **Hover** — floating angle with optional animated wobble  

- **Camera & motion controls**  
  - Adjustable POV (camera perspective)  
  - Auto-rotate toggle with speed control  

- **High-resolution export**  
  - **2400 × 2400 PNG** (still)  
  - **2400 × 2400 WEBM** (animated)

## Usage

1. Open the **Plugins → air-jordan-1** panel in Figma.  
2. Select a colorway preset **or** build your own.  
3. Adjust:
   - Shoe position (Flat / Hover)  
   - Camera POV and auto-rotate speed  
   - Background color  
4. Export as:
   - **PNG** (still render)  
   - **WEBM** (animated render)  

## Inspiration

The Air Jordan 1 is more than just a sneaker — it’s design history.  
This plugin is built for designers, sneaker fans, and storytellers who want a **quick, customizable way** to bring the AJ1 into their work.

## Getting Started

1. Install **air-jordan-1** from the Figma Community  
2. Open via `Plugins → air-jordan-1`  
3. Adjust controls and export your render

## Development  

Clone this repo and run locally:  

```bash
git clone https://github.com/erikdotdesign/air-jordan-1.git
cd air-jordan-1
npm install
npm run dev
Load the manifest.json into Figma → Plugins → Development → Import plugin from manifest…
```

This plugin is built with:  
- [Three.js](https://threejs.org/) for 3D rendering  
- [React-three-fiber](https://r3f.docs.pmnd.rs/getting-started/introduction) for 3D rendering
- [Figma Plugin API](https://www.figma.com/plugin-docs/)  
- React + TypeScript 

## License 

MIT