import { useCallback, useState } from "react"

function useQuery<P, T>(api: (args: P) => Promise<T>):
    [(args?: P) => Promise<T>, boolean] {
    const [isLoading, setLoading] = useState(false)

    const call = useCallback(
        async (args?: P) => {
            setLoading(true)
            try {
                return await api(args!)
            } catch (e) {
                throw e
            } finally {
                setLoading(false)
            }
        }, [api])

    return [call, isLoading]
}

export default useQuery
