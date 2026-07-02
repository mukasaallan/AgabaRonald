import Layout from '../components/Layout'
import ContactForm from '../components/ContactForm'

export default function Contact(){
  return (
    <Layout title="Contact">
      <section className="contact-page">
        <h2>Contact Us</h2>
        <p>Use the form below to get in touch, or email us directly at info@ronardtech.example.</p>
        <ContactForm />
      </section>
    </Layout>
  )
}
