import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children, title, description }) {
  return (
    <>
      <Head>
        <title>{title ? `${title} | Ronard Tech` : 'Ronard Tech Computer Solutions'}</title>
        <meta name="description" content={description || 'Ronard Tech Computer Solutions — IT services, repairs, and consulting.'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="site-root">
        <Header />
        <main className="container">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
