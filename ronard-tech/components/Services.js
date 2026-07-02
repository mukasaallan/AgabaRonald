const services = [
  { title: 'Computer Repair', desc: 'Hardware & software troubleshooting, diagnostics, part replacement.' },
  { title: 'Network Setup', desc: 'Secure Wi‑Fi, wired networks, and small office setups.' },
  { title: 'Managed IT', desc: 'Maintenance plans, backups, and remote support.' }
]

export default function Services(){
  return (
    <section id="services" className="services container">
      <h3>Our Services</h3>
      <div className="grid">
        {services.map(s => (
          <article key={s.title} className="card">
            <h4>{s.title}</h4>
            <p>{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
