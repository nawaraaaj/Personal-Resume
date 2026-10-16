import Button from '../components/ui/Button'
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

        <div>
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-accent">
            Hello!
          </p>

          <h1 className="mt-3 text-5xl font-semibold tracking-tight md:text-6xl">
            I'm{' '}
            <span className="relative inline-block">
              {site.name}
              <svg
                className="absolute -bottom-3 left-0 h-3 w-full text-accent"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2 8 C 40 2, 100 12, 198 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="mt-8 text-2xl text-muted">{site.role}</p>

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