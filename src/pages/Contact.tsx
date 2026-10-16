import ContactForm from '../components/sections/ContactForm'
import SocialLinks from '../components/ui/SocialLink'
import { site } from '../data/site'

export default function Contact() {
  return (
    <section className="mx-auto grid max-w-5xl gap-12 px-6 py-16 md:grid-cols-5 md:py-24">
      <div className="md:col-span-2">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-accent">
          Contact
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
          Let's talk.
        </h1>
        <p className="mt-6 text-muted">
          Hiring, collaborating, or just have a question? Send a message and I'll
          reply as soon as I can.
        </p>

        <a
          href={`mailto:${site.email}`}
          className="mt-6 inline-block border-b border-accent pb-0.5 font-medium hover:text-accent"
        >
          {site.email}
        </a>

        <SocialLinks className="mt-8" />
      </div>

      <div className="md:col-span-3">
        <ContactForm />
      </div>
    </section>
  )
}