import { useState } from 'react'

export default function ContactForm(){
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [message,setMessage] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    // fallback: open user's mail client with prefilled message
    const subject = encodeURIComponent('Website inquiry from ' + name)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:info@ronardtech.example?subject=${subject}&body=${body}`
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Name
        <input value={name} onChange={e=>setName(e.target.value)} required />
      </label>
      <label>
        Email
        <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
      </label>
      <label>
        Message
        <textarea value={message} onChange={e=>setMessage(e.target.value)} rows={6} required />
      </label>
      <button className="btn" type="submit">Send</button>
    </form>
  )
}
