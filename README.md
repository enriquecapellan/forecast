# Weather Forecast App

A modern weather forecast web application built with Next.js, React, and Tailwind CSS. This project is a code challenge for a job opportunity.

## Features
- Search for weather by location
- Displays current weather and forecast
- Responsive, clean UI using Tailwind CSS
- Modular component structure

## Tech Stack
- [Next.js](https://nextjs.org/) (v15)
- [React](https://react.dev/) (v19)
- [Tailwind CSS](https://tailwindcss.com/) (v3)
- TypeScript
- Lucide Icons

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd weather-forecast
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Development
To start the development server:
```bash
npm run dev
# or
yarn dev
```
The app will be available at `http://localhost:3000`.

### Build
To build for production:
```bash
npm run build
```

### Start
To start the production server:
```bash
npm run start
```


### Testing
This project uses Jest and React Testing Library for unit and integration tests.

To run all tests:
```bash
npm test
# or
yarn test
```

Test files are located in the `__tests__` directory, organized by feature and component.

To run tests for a specific file:
```bash
npx jest __tests__/components/button.test.tsx
```

You can add new tests by creating files in the `__tests__` directory. See existing tests for examples.

### Lint
To run lint checks:
```bash
npm run lint
```

## Project Structure
```
app/            # Main app directory (pages, layout, components)
components/     # Shared UI components
lib/            # Utility and API logic
public/         # Static assets
styles/         # Global styles
types/          # TypeScript types
```

## Customization
- Tailwind config: `tailwind.config.ts`
- PostCSS config: `postcss.config.mjs`
- Next.js config: `next.config.mjs`

## License
This project is for evaluation purposes only.
