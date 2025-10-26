// import { describe, it, expect } from 'vitest'
// import { render, screen, fireEvent } from '@testing-library/react'
// import { BrowserRouter } from 'react-router-dom'
// import Home from '../pages/Home'

// describe('Home Component', () => {
//   const renderHome = () => {
//     return render(
//       <BrowserRouter>
//         <Home />
//       </BrowserRouter>
//     )
//   }

//   it('renders the welcome heading', () => {
//     renderHome()
//     expect(
//       screen.getByText('Welcome to React Production Template')
//     ).toBeInTheDocument()
//   })

//   it('displays initial counter value', () => {
//     renderHome()
//     const counterValue = screen.getByText(/\d+/)
//     expect(counterValue).toBeInTheDocument()
//   })

//   it('increments counter when + button is clicked', () => {
//     renderHome()
//     const incrementButton = screen.getByText('+')
//     const counterValue = screen.getByText(/\d+/)
//     const initialValue = parseInt(counterValue.textContent || '0')

//     fireEvent.click(incrementButton)

//     expect(parseInt(counterValue.textContent || '0')).toBe(initialValue + 1)
//   })

//   it('decrements counter when - button is clicked', () => {
//     renderHome()
//     const decrementButton = screen.getByText('-')
//     const counterValue = screen.getByText(/\d+/)
//     const initialValue = parseInt(counterValue.textContent || '0')

//     fireEvent.click(decrementButton)

//     expect(parseInt(counterValue.textContent || '0')).toBe(initialValue - 1)
//   })

//   it('resets counter when reset button is clicked', () => {
//     renderHome()
//     const resetButton = screen.getByText('Reset')
//     const incrementButton = screen.getByText('+')
//     const counterValue = screen.getByText(/\d+/)

//     // Increment a few times
//     fireEvent.click(incrementButton)
//     fireEvent.click(incrementButton)

//     // Reset
//     fireEvent.click(resetButton)

//     expect(parseInt(counterValue.textContent || '0')).toBe(0)
//   })

//   it('displays features list', () => {
//     renderHome()
//     expect(screen.getByText(/Vite for blazing fast development/i)).toBeInTheDocument()
//     expect(screen.getByText(/React 18 with TypeScript/i)).toBeInTheDocument()
//     expect(screen.getByText(/Zustand for state management/i)).toBeInTheDocument()
//   })
// })