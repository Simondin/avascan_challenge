import { IOCServices } from "@/services"
import React from "react"

type ExtendedIOCContainerProps = {
    children: JSX.Element
} & IOCContainerProviderProps

export type IOCContainerProviderProps = {
    container: IOCServices
}

export const IOCContainerContext = React.createContext<IOCContainerProviderProps>(undefined as any)

export const IOCContainerProvider = (props: ExtendedIOCContainerProps) => {
    return (
        <IOCContainerContext.Provider value={{ container: props.container }}>
            {props.children}
        </IOCContainerContext.Provider>
    )
}
