import Link from 'next/link'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <h1 className="brand"><Link href="/">Ronard Tech</Link></h1>
        <nav className="nav">
          <Link href="/#services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
