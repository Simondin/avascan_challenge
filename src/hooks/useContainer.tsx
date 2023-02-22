import { IOCContainerContext, IOCContainerProviderProps } from "@/providers/iocContainerProvider"
import React from "react"

export const useContainer = () => {
    const result = React.useContext<IOCContainerProviderProps>(IOCContainerContext)

    return result.container
}