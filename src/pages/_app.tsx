import type { AppProps } from 'next/app'
import ioc from '@/services'
import '@/styles/globals.css'
import { IOCContainerProvider } from '@/providers/iocContainerProvider'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <IOCContainerProvider container={ioc}>
            <Component {...pageProps} />
        </IOCContainerProvider>
    )
}
