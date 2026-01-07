# ProphetsTree 

An interactive web application visualizing the genealogical tree of the Prophets, built with D3.js and modern web technologies. Focuses on a clean, mobile-first experience with Arabic (RTL) support.

## Features 

*   **Interactive Tree:** Zoomable and pannable genealogical tree using D3.js.
*   **Prophet Details:** Click on any node to view detailed information in a responsive bottom sheet.
*   **Mobile First:** Optimized layout for mobile devices, including touch interactions.
*   **Search:** Built-in search functionality to quickly find specific Prophets.
*   **Themes:** Supports Light and Dark modes.
*   **Arabic Support:** Fully localized interface with RTL layout.
*   **PWA Ready:** Built with offline capabilities in mind.

## Tech Stack 

*   **Framework:** [Vite](https://vitejs.dev/) + [TypeScript](https://www.typescriptlang.org/)
*   **Visualization:** [D3.js (v7)](https://d3js.org/)
*   **Styling:** Vanilla CSS, Material Design 3 tokens.
*   **Fonts:** Amiri (Headings) & Cairo (Body).
*   **Mobile Wrapper:** [Capacitor](https://capacitorjs.com/) (Android configured).

## Getting Started 

### Prerequisites

*   Node.js (v18+ recommended)
*   npm

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/withered12/ProphetsTree.git
    cd ProphetsTree
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

### Development

Start the development server:

```bash
npm run dev
```

### Build

Build for production:

```bash
npm run build
```

## Project Structure 

*   `src/data/prophets.ts`: Graph data definition.
*   `src/logic/treeGraph.ts`: D3.js visualization logic.
*   `src/main.ts`: Main application logic and UI handling.
*   `src/styles/`: CSS styles and theme definitions.

## License 📄

[MIT](LICENSE)
