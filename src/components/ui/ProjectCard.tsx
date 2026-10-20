import TechTag from "../ui/TechTag";
import type { Project } from "../../data/projects";
import ProjectLinks from "./ProjectLink";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-white/20 shadow-[0_10px_30px_rgba(35,31,27,0.06)] animate-fade-left motion-reduce:animate-none"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-start justify-between gap-3">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">
              {project.title}
            </h2>
            <p className="mt-1 text-sm text-muted">{project.tagline}</p>
          </div>

          <span className="rounded-full border border-line bg-canvas px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-muted">
            {project.status}
          </span>
        </div>

        <p className="mt-3 text-sm leading-6 text-ink/90">
          {project.description}
        </p>

        <ul className="mt-5 space-y-2">
          {project.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex gap-2 text-sm leading-6 text-ink/90"
            >
              <span aria-hidden="true" className="text-accent">
                •
              </span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <TechTag key={`${project.id}-${item}`}>{item}</TechTag>
          ))}
        </div>

        <ProjectLinks githubUrl={project.githubUrl} liveUrl={project.liveUrl} />
      </div>
    </article>
  );
}