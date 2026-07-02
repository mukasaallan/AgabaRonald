import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <h1 className="brand"><Link href="/"><Image src="/image.jpg" alt="Ronard Tech Logo" width={40} height={40} className="logo" /> Ronard Tech</Link></h1>
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
