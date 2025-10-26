import { useAppStore } from '@/store/useAppStore'
import './Home.css'

const Home = () => {
  const { count, increment, decrement, reset } = useAppStore()

  return (
    <div className="home">
      <h1>Welcome to React Production Template</h1>
      <p className="description">
        A production-ready React template with TypeScript, Vite, React Router,
        Zustand, and Vitest.
      </p>

      <div className="counter-section">
        <h2>Counter Example (Zustand State)</h2>
        <div className="counter">
          <button onClick={decrement} className="counter-btn">
            -
          </button>
          <span className="counter-value">{count}</span>
          <button onClick={increment} className="counter-btn">
            +
          </button>
        </div>
        <button onClick={reset} className="reset-btn">
          Reset
        </button>
      </div>

      <div className="features">
        <h2>Features</h2>
        <ul>
          <li>⚡️ Vite for blazing fast development</li>
          <li>⚛️ React 18 with TypeScript</li>
          <li>🧭 React Router for navigation</li>
          <li>🐻 Zustand for state management</li>
          <li>🧪 Vitest + React Testing Library</li>
          <li>📏 ESLint + Prettier for code quality</li>
          <li>🎨 CSS Modules support</li>
          <li>📦 Production-ready build configuration</li>
        </ul>
      </div>
    </div>
  )
}

export default Home