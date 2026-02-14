# Schoolsite Frontend (Client)

This repository contains the frontend client for the Schoolsite application. It is a single-page application (SPA) built with **React**, **TypeScript**, and **Vite**, using **Tailwind CSS** for styling.

## Project Structure

- `client/`: Contains the main React application source code.
- `patches/`: Contains patches for dependencies (e.g., `wouter`).
- `package.json`: Defines project dependencies and scripts.

## Getting Started

### Prerequisites

- Node.js (version 18+)

### Installation

1.  **Clone the repository** (once it's a separate repo).
2.  **Install dependencies**:
    ```bash
    pnpm install
    ```

### Running the Application

- **Development**:
  ```bash
  pnpm run dev
  ```
  The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

- **Production Build**:
  ```bash
  pnpm run build
  ```
  The build artifacts will be placed in the `dist` directory.

- **Preview Production Build**:
  ```bash
  pnpm run preview
  ```

## Configuration

The frontend is configured to communicate with the backend server. Ensure the backend server is running and accessible. You may need to configure the API base URL in the frontend's environment variables or configuration files (e.g., in `client/src/const.ts` or a similar file).
