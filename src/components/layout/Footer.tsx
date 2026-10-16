import { site } from "../../data/site";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <ul className="flex gap-6">
          <li>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href={`mailto:${site.email}`} className="hover:text-accent">
              Email
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
