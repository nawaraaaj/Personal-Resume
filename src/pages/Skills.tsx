const skillGroups = [
  { title: "Languages", skills: ["C#", "JavaScript", "TypeScript", "SQL"] },
    {
    title: 'Backend',
    skills: ['ASP.NET Core', 'ASP.NET MVC', 'ADO.NET', 'Dapper', 'EF Core', 'REST APIs', 'JWT', 'OAuth 2.0'],
  },
  {
    title: "Architecture & Patterns",
    skills: [
      "Clean Architecture",
      "CQRS",
      "MediatR",
      "Repository Pattern",
      "FluentMigrator",
    ],
  },
  {
    title: "Frontend",
    skills: ["React", "HTML", "Razor", "CSS", "Tailwind CSS", "Bootstrap"],
  },
  { title: "Databases", skills: ["MySQL", "SQLite", "SQL Server"] },
  {
    title: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "Jira",
      "Slack",
      "VS Code",
      "Visual Studio",
      "SSMS",
    ],
  },
  {
    title: "Cloud & Deployment",
    skills: ["Azure App Service", "Azure Database for MySQL", "Vercel"],
  },
];

export default function Skills() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <h1 className="sr-only">Skills</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className="group relative overflow-hidden rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100 motion-reduce:transition-none" />

            <div className="flex items-baseline justify-between">
              <h2 className="text-lg font-semibold text-ink">{group.title}</h2>
            </div>

            <ul className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-lg bg-stone-100 px-3 py-1.5 text-sm font-medium text-ink"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
