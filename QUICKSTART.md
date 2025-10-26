# Quick Start Guide

## Get Started in 3 Steps

### 1. Install Dependencies
```bash
cd react-template
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

The app will open at `http://localhost:3000`

### 3. Build for Production
```bash
npm run build
```

The production build will be in the `dist/` folder.

## What's Inside?

- **Full TypeScript setup** with strict mode enabled
- **React Router v6** with nested routes (Home, About, 404)
- **Zustand** state management with persistence
- **Vitest + React Testing Library** with example tests
- **ESLint + Prettier** pre-configured
- **Vite** for fast development and optimized builds
- **Production-ready** build configuration

## Next Steps

1. **Read the README.md** for full documentation
2. **Run tests**: `npm test`
3. **Check code quality**: `npm run lint`
4. **Customize**: Edit `src/pages/Home.tsx` to get started

## Key Files to Edit

- `src/App.tsx` - Add routes
- `src/pages/` - Create new pages
- `src/store/useAppStore.ts` - Manage global state
- `src/components/` - Build reusable components
- `.env` - Configure environment variables

## Testing

```bash
npm test              # Run tests
npm run test:ui       # Test with UI
npm run test:coverage # Coverage report
```

## Build Commands

```bash
npm run dev          # Development mode
npm run build        # Production build
npm run preview      # Preview production build
npm run lint         # Check code quality
npm run format       # Format code
```

## Tips

- Use `@/` imports for cleaner paths: `import { api } from '@/utils/api'`
- All environment variables must start with `VITE_`
- Keep components small and focused
- Write tests for critical features
- Use the Zustand store for global state

---

**Need help?** Check the full README.md for detailed documentation.