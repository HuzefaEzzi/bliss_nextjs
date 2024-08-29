import Head from 'next/head'
import { FormEvent } from 'react'

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <div>
      <Head>
        <title>Contact Us - Bliss</title>
        <meta name="description" content="Get in touch with Bliss" />
      </Head>

      <main>
        <h1>Contact Us</h1>
        <section>
          <p>Phone: 9840985279</p>
          <p>Instagram: <a href="https://www.instagram.com/bliss_by_batul" target="_blank" rel="noopener noreferrer">@bliss_by_batul</a></p>
        </section>
        <section>
          <h2>Send us a message</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Send</button>
          </form>
        </section>
      </main>
    </div>
  )
}
