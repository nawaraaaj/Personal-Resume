type ProjectLinksProps = {
  githubUrl: string;
  liveUrl?: string;
};

export default function ProjectLinks({ githubUrl, liveUrl }: ProjectLinksProps) {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View project on GitHub"
        className="inline-flex items-center justify-center rounded-sm border border-accent bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-accent-dark hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
      >
        GitHub
      </a>

      {liveUrl ? (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View live demo"
          className="inline-flex items-center justify-center rounded-sm border border-ink px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-canvas focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
        >
          Live Demo
        </a>
      ) : null}
    </div>
  );
}
