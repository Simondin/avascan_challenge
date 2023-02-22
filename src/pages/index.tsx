import Head from 'next/head'
import TokenDetails from './tokenDetails'

export default function Home() {
    return (
        <>
            <Head>
                <title>Avascan App</title>
            </Head>
            <main>
                <TokenDetails />
            </main>
        </>
    )
}
