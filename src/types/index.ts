// Common types used throughout the application

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  createdAt: string
}

export interface ApiResponse<T> {
  data: T
  message?: string
  success: boolean
}

export interface PaginatedResponse<T> {
  data: T[]
  page: number
  pageSize: number
  total: number
  hasMore: boolean
}

export interface ErrorResponse {
  error: string
  message: string
  statusCode: number
}

export type LoadingState = 'idle' | 'loading' | 'success' | 'error'

export interface FormField {
  name: string
  label: string
  type: 'text' | 'email' | 'password' | 'number' | 'textarea'
  required?: boolean
  placeholder?: string
  validation?: (value: string) => string | null
}