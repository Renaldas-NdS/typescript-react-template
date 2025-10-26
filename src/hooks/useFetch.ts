import { useState, useEffect } from 'react'

interface UseFetchOptions {
  method?: string
  headers?: Record<string, string>
  body?: string
}

interface UseFetchResult<T> {
  data: T | null
  loading: boolean
  error: Error | null
  refetch: () => void
}

export function useFetch<T = unknown>(
  url: string,
  options?: UseFetchOptions
): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)
  const [refetchTrigger, setRefetchTrigger] = useState<number>(0)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch(url, options)

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const result = await response.json()
        setData(result)
      } catch (e) {
        setError(e instanceof Error ? e : new Error('An error occurred'))
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url, refetchTrigger])

  const refetch = () => setRefetchTrigger(prev => prev + 1)

  return { data, loading, error, refetch }
}