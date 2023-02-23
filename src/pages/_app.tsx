import type { AppProps } from 'next/app'
import ioc from '@/services'
import '@/styles/globals.css'
import { IOCContainerProvider } from '@/providers/iocContainerProvider'
import { Grommet, ResponsiveContext } from 'grommet'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <IOCContainerProvider container={ioc}>
            <Grommet>
                <Component {...pageProps} />
            </Grommet>
        </IOCContainerProvider>
    )
}
