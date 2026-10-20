import ProjectCard from "../components/ui/ProjectCard";
import { projects } from "../data/projects";
import { site } from "../data/site";

export default function Projects() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-10">
        <p className="mt-3 max-w-2xl text-base text-muted sm:text-lg">
          A quick view of the .NET and C# projects I built to solve real backend,
          desktop, and architecture problems with clean, maintainable code.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <p className="mt-12 text-center text-sm text-muted">
        See more projects and experiments on my{" "}
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-accent underline-offset-4 hover:underline"
        >
          GitHub profile
        </a>
        .
      </p>
    </section>
  );
}
