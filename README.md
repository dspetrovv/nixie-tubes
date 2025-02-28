# Nixie Tubes

This project simulates the Nixie Tubes effect in the browser. It’s not perfect — there’s a lot of DOM manipulation to mimic real Nixie Tubes (where unused symbols stay dark), filling it with characters. The JSDoc might feel underwhelming, and some parts (like fonts or elements) could be swapped for images with added functionality or linked via CDN. That said, I intentionally made it offline-friendly, so all these choices are deliberate.

**Fun fact:** Did you know Nixie Tubes got their name from "Numeric Indicator eXperimental No. 1" (NIX I)? Developed in the 1950s by Haydu Brothers and later produced by Burroughs Corporation, these glass tubes use a neon-argon gas mix to create an orange glow through a discharge around digit-shaped cathodes. They were widely used in calculators, clocks, and counters until LEDs replaced them in the 1970s. Today, they’re popular again among retro fans for use in homemade clocks and other projects.

## Installation

To set up the project locally, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.20.5 or higher recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/dspetrovv/nixie-tubes
   cd nixie-tubes
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Project

### Development Mode

To start the development server with hot reloading:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal).

### Build for Production

To create an optimized production build:

```bash
npm run build
```

The built files will be output to the `dist` directory.

### Preview the Build

To preview the production build locally:

```bash
npm run preview
```

This will start a local server with the contents of the `dist` folder.

## Project Structure

```
nixie-tubes/
├── dist/             # Output directory for production build
├── public/           # Public assets (e.g., application icon)
├── src/              # Source files
│   ├── classes/      # Classes for the application logic
│   ├── styles/       # Styles and local font files (e.g., Poppins-Regular.ttf)
│   ├── main.js       # Entry point for Vite
│   └── app.js        # Main application logic (works with classes and core functionality)
├── index.html        # Main HTML file
├── vite.config.js    # Vite configuration
├── package.json      # Dependencies and scripts
├── package-lock.json # Lockfile for exact dependency versions
├── .prettierrc       # Prettier configuration for code formatting
├── .gitignore        # Git ignore file for excluding files from version control
└── README.md         # This file
```

## Fonts

This project uses the **Poppins** font, downloaded from [Google Fonts](https://fonts.google.com/). The font is included locally in the `src/styles` directory and is licensed under the SIL Open Font License (OFL).

### Font License Summary

- **Usage**: Free to use, modify, and redistribute for personal or commercial purposes.
- **Requirements**: The font is distributed under the SIL Open Font License. Copyright: "Copyright 2020 The Poppins Project Authors".
- **Restrictions**:
  - Cannot be sold standalone.
  - Modified versions cannot use the original font name without permission.
- For full license details, visit [scripts.sil.org/OFL](https://scripts.sil.org/OFL).

## Notes

- Fonts are embedded locally, so the project works offline after building.

## License

The project itself does not impose any additional license beyond the font’s SIL Open Font License for Poppins. Feel free to use and modify it as needed!
