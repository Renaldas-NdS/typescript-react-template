# Production Ready TypeScript React Template

A complete, production-ready React template with TypeScript, Vite, React Router, Zustand, and Vitest. 
This template follows industry best practices and includes everything you need to start building modern web applications.

## 🚀 Features

- **Vite** - Lightning-fast development server and optimized builds
- **React 18** - Latest React with TypeScript support
- **React Router v6** - Declarative routing with nested routes
- **Zustand** - Lightweight and intuitive state management
- **Vitest** - Fast unit testing with React Testing Library
- **ESLint + Prettier** - Code quality and formatting
- **CSS** - Vanilla CSS with CSS Modules support
- **Production Optimized** - Code splitting, minification, and optimization
- **Path Aliases** - Clean imports with `@/` prefix
- **Environment Variables** - Secure configuration management
- **TypeScript** - Full type safety throughout the application

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0

Check your versions:
```bash
node --version
npm --version
```

## Installation

1. **Clone or download this template**

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
```

Edit `.env` and configure your environment variables as needed.

## Development

Start the development server:
```bash
npm run dev
```

The application will open automatically at `http://localhost:3000`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm test` | Run tests in watch mode |
| `npm run test:ui` | Run tests with UI dashboard |
| `npm run test:coverage` | Generate test coverage report |
| `npm run lint` | Lint code with ESLint |
| `npm run lint:fix` | Fix linting issues automatically |
| `npm run format` | Format code with Prettier |
| `npm run type-check` | Check TypeScript types |

## Project Structure

```
react-template/
├── public/                 # Static assets
├── src/
│   ├── __tests__/         # Test files
│   │   ├── setup.ts       # Test configuration
│   │   ├── Home.test.tsx  # Component tests
│   │   └── helpers.test.ts # Utility tests
│   ├── components/        # Reusable components
│   │   ├── Layout.tsx
│   │   └── Layout.css
│   ├── pages/             # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   └── NotFound.tsx
│   ├── store/             # Zustand stores
│   │   └── useAppStore.ts
│   ├── hooks/             # Custom React hooks
│   │   └── useFetch.ts
│   ├── utils/             # Utility functions
│   │   ├── helpers.ts
│   │   └── api.ts
│   ├── types/             # TypeScript type definitions
│   │   └── index.ts
│   ├── App.tsx            # Main app component with routes
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles
├── .env.example           # Environment variables template
├── .eslintrc.cjs          # ESLint configuration
├── .prettierrc            # Prettier configuration
├── .gitignore             # Git ignore rules
├── index.html             # HTML entry point
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
├── vitest.config.ts       # Vitest configuration
└── README.md              # This file
```

## Building for Production

### Build the application

```bash
npm run build
```

This will:
- Compile TypeScript
- Bundle and minify your code
- Optimize assets
- Output to the `dist/` directory

### Preview the production build

```bash
npm run preview
```

### Production Build Optimizations

The template includes several production optimizations:

- **Code Splitting** - Vendor and router code split into separate chunks
- **Minification** - Terser minification for smallest bundle size
- **Tree Shaking** - Removes unused code
- **Asset Optimization** - Images and fonts optimized automatically
- **Source Maps** - Disabled in production (configurable in `vite.config.ts`)

## Testing

### Run tests in watch mode
```bash
npm test
```

### Run tests with UI dashboard
```bash
npm run test:ui
```

### Generate coverage report
```bash
npm run test:coverage
```

Coverage reports will be generated in the `coverage/` directory.

### Writing Tests

Example test file structure:
```typescript
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import MyComponent from './MyComponent'

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />)
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })
})
```

## Routing

Routes are defined in `src/App.tsx`:

```typescript
<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="*" element={<NotFound />} />
  </Route>
</Routes>
```

To add a new route:
1. Create your page component in `src/pages/`
2. Add the route in `src/App.tsx`

## State Management

This template uses Zustand for state management. Example store:

```typescript
import { create } from 'zustand'

interface AppState {
  count: number
  increment: () => void
}

export const useAppStore = create<AppState>(set => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 })),
}))
```

Use in components:
```typescript
import { useAppStore } from '@/store/useAppStore'

const MyComponent = () => {
  const { count, increment } = useAppStore()
  return <button onClick={increment}>{count}</button>
}
```

## API Integration

Use the included API service (`src/utils/api.ts`):

```typescript
import { api } from '@/utils/api'

// GET request
const data = await api.get<User[]>('/users')

// POST request
const result = await api.post('/users', { name: 'John' })
```

Or use the custom `useFetch` hook:
```typescript
import { useFetch } from '@/hooks/useFetch'

const { data, loading, error } = useFetch<User[]>('/api/users')
```

## Environment Variables

All environment variables must be prefixed with `VITE_` to be exposed to the client:

```env
VITE_API_URL=http://localhost:8000/api
VITE_APP_NAME=My App
```

Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL
```

## Code Quality

### Linting
```bash
npm run lint        # Check for issues
npm run lint:fix    # Auto-fix issues
```

### Formatting
```bash
npm run format      # Format all files with Prettier
```

### Type Checking
```bash
npm run type-check  # Check TypeScript types
```

## 🚀 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Upload the dist/ folder to Netlify
```

### Deploy to GitHub Pages
Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/repo-name"
```

Then:
```bash
npm run build
# Deploy the dist/ folder
```

### Docker
Create a `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html
```

Build and run:
```bash
docker build -t my-app .
docker run -p 80:80 my-app
```

## 🔧 Customization

### Change the Port
Edit `vite.config.ts`:
```typescript
server: {
  port: 3000, // Change this
}
```

### Add Path Aliases
Edit `tsconfig.json` and `vite.config.ts`:
```json
"paths": {
  "@/*": ["./src/*"],
  "@components/*": ["./src/components/*"]
}
```

### Configure Build Output
Edit `vite.config.ts`:
```typescript
build: {
  outDir: 'build', // Change output directory
  sourcemap: true,  // Enable source maps
}
```

## Best Practices

1. **Component Organization**
   - One component per file
   - Co-locate styles with components
   - Use TypeScript for all components

2. **State Management**
   - Use Zustand for global state
   - Keep local state in components when possible
   - Persist important state to localStorage

3. **Testing**
   - Write tests for critical business logic
   - Test user interactions, not implementation details
   - Maintain >80% code coverage

4. **Performance**
   - Use React.memo() for expensive components
   - Implement code splitting for large routes
   - Optimize images and assets

5. **Type Safety**
   - Define interfaces for all data structures
   - Avoid using `any` type
   - Use strict TypeScript settings

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- React Team for the amazing framework
- Vite for the blazing-fast build tool
- Zustand for simple state management
- The open-source community

## Support

If you have any questions or need help, please:
- Open an issue in the repository
- Check the documentation
- Join our community discussions

---

**Happy Coding!**