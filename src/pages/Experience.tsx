const experiences = [
  {
    role: '.NET Trainee',
    company: 'Chanakya Software',
    period: 'August 2026 – Present',
    current: true,
    stack: [
      '.NET Framework',
      'ASP.NET MVC 5',
      'ASP.NET Web API',
      'Razor',
      'C#',
      'ADO.NET',
      'Dapper',
      'SQL Server',
      'jQuery',
      'AJAX',
    ],
    points: [
      'Develop and maintain legacy enterprise applications and backend services using .NET Framework, ASP.NET MVC 5, ASP.NET Web API, Razor, C#, ADO.NET and Dapper.',
      'Design SQL Server queries, stored procedures, and table-valued functions to support application features and business workflows.',
      'Develop automated report generation features that create Word, PDF, and Excel documents directly from application data.',
      'Build Windows Services for background/scheduled processing and implement email notification workflows.',
      'Implement dynamic, responsive UI interactions in Razor-based applications using JavaScript, jQuery, and AJAX.',
    ],
  },
  {
    role: '.NET Intern',
    company: 'NBIT Pvt. Ltd.',
    period: 'March 2026 – June 2026',
    current: false,
    stack: ['ASP.NET Core Web API', 'EF Core', 'React', 'TypeScript', 'Git'],
    points: [
      'Built and maintained RESTful APIs using ASP.NET Core Web API and Entity Framework Core.',
      'Developed interactive frontend components using React and TypeScript, integrating them with backend APIs.',
      'Participated in code reviews, Git-based version control workflows, and deployment processes.',
    ],
  },
]

export default function Experience() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-12 md:py-16">
      <h1 className="sr-only">Experience</h1>

      <ol className="ml-2 border-l-2 border-stone-200">
        {experiences.map((job) => (
          <li
            key={`${job.company}-${job.period}`}
            className="relative pb-14 pl-8 last:pb-0 md:pl-10"
          >
            {/* timeline dot */}
            <span className="absolute -left-[9px] top-1 flex h-4 w-4 items-center justify-center">
              {job.current && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40 motion-reduce:animate-none" />
              )}
              <span
                className={`relative h-4 w-4 rounded-full border-[3px] border-accent ${
                  job.current ? 'bg-accent' : 'bg-white'
                }`}
              />
            </span>

            <div className="flex flex-wrap items-center gap-3">
              <p className="text-sm font-medium uppercase tracking-wider text-muted">
                {job.period}
              </p>
              {job.current && (
                <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-white">
                  Current
                </span>
              )}
            </div>

            <h2 className="mt-2 text-xl font-semibold text-ink md:text-2xl">
              {job.role}
            </h2>
            <p className="font-medium text-accent">{job.company}</p>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted marker:text-accent">
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <ul className="mt-5 flex flex-wrap gap-2">
              {job.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-medium text-ink"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  )
}