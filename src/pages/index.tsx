import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <Head>
                <title>Avascan App</title>
            </Head>
            <main>
                <Link href="/token/8005">
                    Go to Token 8005
                </Link>
            </main>
        </>
    )
}
