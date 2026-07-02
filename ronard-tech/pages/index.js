import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ronard Tech Computer Solutions</title>
        <meta name="description" content="Ronard Tech Computer Solutions — professional IT services, repairs, and consulting." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="site-root">
        <Header />
        <main>
          <Hero />
          <Services />
        </main>
        <Footer />
      </div>
    </>
  )
}
