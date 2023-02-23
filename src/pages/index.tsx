import Head from 'next/head'
import TokenPage from './token'

export default function Home() {
    return (
        <>
            <Head>
                <title>Avascan App</title>
            </Head>
            <main>
                <TokenPage />
            </main>
        </>
    )
}
