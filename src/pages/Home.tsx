import Button from '../components/ui/Button'
import Marker from '../components/ui/Marker'

import SocialLinks from '../components/ui/SocialLink'
import { site } from '../data/site'

export default function Home() {
  return (
    <section className="relative flex min-h-[calc(100vh-65px)] items-center overflow-hidden">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 pb-40 pt-12 md:grid-cols-2 md:gap-16">
        <img
          src="hello3.svg"
          alt="Illustration of a developer working at a desk"
          className="mx-auto w-full max-w-sm md:max-w-lg"
        />

        <div className="font-nunito">
          <p className="text-xl font-light uppercase text-accent">Hello!</p>

          <h1 className="mb-4 mt-2 animate-fade-left text-[length:calc(1.375rem+1.5vw)] font-extrabold leading-[1.2] min-[1200px]:text-[2.5rem] motion-reduce:animate-none">
            I'm {site.firstname} <Marker>{site.lastname}</Marker>
          </h1>

          <p className="mt-10 text-xl text-ink">{site.role}</p>

          <SocialLinks className="mt-6" />

          <div className="mt-10">
            <Button href={site.cv} download>
              Download CV ↓
            </Button>
          </div>
        </div>
      </div>

      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 w-full text-surface"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M0 120 L0 70 C 240 10, 480 10, 720 60 C 960 110, 1200 110, 1440 50 L1440 120 Z" />
      </svg>
    </section>
  )
}