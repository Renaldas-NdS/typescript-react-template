import { describe, it, expect, vi } from 'vitest'
import {
  formatDate,
  debounce,
  generateId,
  isEmpty,
  deepClone,
} from '../utils/helpers'

describe('Utility Functions', () => {
  describe('formatDate', () => {
    it('formats a date correctly', () => {
      const date = new Date('2024-01-15')
      const formatted = formatDate(date)
      expect(formatted).toContain('January')
      expect(formatted).toContain('15')
      expect(formatted).toContain('2024')
    })

    it('handles string dates', () => {
      const formatted = formatDate('2024-01-15')
      expect(formatted).toContain('January')
    })
  })

  describe('debounce', () => {
    it('debounces function calls', () => {
      vi.useFakeTimers()
      const mockFn = vi.fn()
      const debouncedFn = debounce(mockFn, 100)

      debouncedFn()
      debouncedFn()
      debouncedFn()

      expect(mockFn).not.toHaveBeenCalled()

      vi.advanceTimersByTime(100)

      expect(mockFn).toHaveBeenCalledTimes(1)

      vi.useRealTimers()
    })
  })

  describe('generateId', () => {
    it('generates unique IDs', () => {
      const id1 = generateId()
      const id2 = generateId()

      expect(id1).toBeTruthy()
      expect(id2).toBeTruthy()
      expect(id1).not.toBe(id2)
    })
  })

  describe('isEmpty', () => {
    it('returns true for empty values', () => {
      expect(isEmpty(null)).toBe(true)
      expect(isEmpty(undefined)).toBe(true)
      expect(isEmpty('')).toBe(true)
      expect(isEmpty([])).toBe(true)
      expect(isEmpty({})).toBe(true)
    })

    it('returns false for non-empty values', () => {
      expect(isEmpty('text')).toBe(false)
      expect(isEmpty([1, 2, 3])).toBe(false)
      expect(isEmpty({ key: 'value' })).toBe(false)
      expect(isEmpty(0)).toBe(false)
    })
  })

  describe('deepClone', () => {
    it('creates a deep copy of an object', () => {
      const original = {
        name: 'John',
        nested: { value: 42 },
        array: [1, 2, 3],
      }

      const cloned = deepClone(original)

      expect(cloned).toEqual(original)
      expect(cloned).not.toBe(original)
      expect(cloned.nested).not.toBe(original.nested)
    })
  })
})