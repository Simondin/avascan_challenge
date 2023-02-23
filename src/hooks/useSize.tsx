import { ResponsiveContext, ResponsiveValue } from "grommet"
import { useContext } from "react"


const useSize = (): ResponsiveValue => {
    const size = useContext<ResponsiveValue>(ResponsiveContext)
    return size
}

export default useSize