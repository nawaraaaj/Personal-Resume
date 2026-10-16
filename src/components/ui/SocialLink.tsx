import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { site } from '../../data/site'

const socials = [
  { label: 'GitHub', href: site.github, Icon: FaGithub },
  { label: 'LinkedIn', href: site.linkedin, Icon: FaLinkedin },
]

export default function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-5 ${className}`}>
      {socials.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="text-ink transition-colors hover:text-accent"
          >
            <Icon size={22} />
          </a>
        </li>
      ))}
    </ul>
  )
}