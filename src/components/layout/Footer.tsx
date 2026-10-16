import { site } from "../../data/site";
import SocialLinks from "../ui/SocialLink";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}