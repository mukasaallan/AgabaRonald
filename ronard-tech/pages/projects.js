import Layout from '../components/Layout'

const projects = [
  {title:'Small Office Setup', desc:'Design and deploy reliable wired and wireless networks.'},
  {title:'PC Repair', desc:'Diagnostics, component replacement, and clean installations.'},
  {title:'Backup & Recovery', desc:'Automated backups and recovery workflows for critical data.'}
]

export default function Projects(){
  return (
    <Layout title="Projects">
      <section className="projects">
        <h2>Selected Projects</h2>
        <div className="grid">
          {projects.map(p=> (
            <article key={p.title} className="card">
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  )
}
