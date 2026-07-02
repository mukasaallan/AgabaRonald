import Layout from '../components/Layout'

export default function About(){
  return (
    <Layout title="About">
      <section className="about">
        <h2>About Ronard Tech</h2>
        <p>
          Ronard Tech Computer Solutions provides dependable IT support, repairs, and consulting for
          individuals and small businesses. We value fast turnarounds, clear pricing, and reliable
          recommendations.
        </p>
        <h3>Why choose us</h3>
        <ul>
          <li>Experienced technicians</li>
          <li>Transparent pricing</li>
          <li>Remote and on-site support</li>
        </ul>
      </section>
    </Layout>
  )
}
