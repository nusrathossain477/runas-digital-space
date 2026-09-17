import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Brain,
  Code2,
  Download,
  FileText,
  GraduationCap,
  Microscope,
  ShieldCheck,
} from "lucide-react";

import heroImage from "@/assets/hero-abstract.jpg";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { SkillGroup } from "@/components/SkillGroup";
import { ProjectCard } from "@/components/ProjectCard";
import { education, expertise, highlights, site } from "@/content/site";
import { skillGroups } from "@/content/skills";
import { featuredProjects } from "@/content/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nusrat Hossain Runa — CSE Student & Builder" },
      {
        name: "description",
        content:
          "Nusrat Hossain Runa, Computer Science & Engineering student at Green University of Bangladesh, exploring AI, cyber security and research through hands-on projects.",
      },
      { property: "og:title", content: "Nusrat Hossain Runa — CSE Student & Builder" },
      {
        property: "og:description",
        content:
          "Projects, study materials, activities and achievements from a CSE student exploring AI, cyber security and research.",
      },
    ],
  }),
  component: Home,
});

const expertiseIcons = {
  brain: Brain,
  shield: ShieldCheck,
  microscope: Microscope,
  code: Code2,
} as const;

function Home() {
  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden pt-32 sm:pt-40">
        <div className="halo pointer-events-none absolute inset-x-0 -top-40 h-[28rem]" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <p className="eyebrow">{site.status}</p>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] sm:text-5xl md:text-6xl">
              Hi, I'm
              <br />
              <span className="text-gradient">{site.name}.</span>
            </h1>
            <p className="mt-5 font-display text-lg text-foreground/90 sm:text-xl">
              {site.role}
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              {site.intro}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/projects" className="btn btn-primary">
                Explore My Work <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <a
                href={site.cvUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
              >
                View CV <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </div>

            <p className="mt-8 text-xs text-muted-foreground">
              Currently exploring · {site.exploring.join(" · ")}
            </p>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="panel relative overflow-hidden p-2">
              <img
                src={heroImage}
                alt="Abstract flowing gradient artwork in violet and blue"
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full rounded-2xl object-cover"
              />
            </div>
            {/*
              To use your own photo instead: add it to src/assets, import it here
              and swap the src above.
            */}
          </Reveal>
        </div>
      </section>

      {/* ---------------- ABOUT ---------------- */}
      <section className="mx-auto max-w-6xl px-6 pt-28 sm:pt-36">
        <SectionHeader label="01 — About Me" title="A little about me." />
        <Reveal delay={80} className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              I'm a Computer Science &amp; Engineering student at Green University of
              Bangladesh with a strong interest in Artificial Intelligence, Cyber
              Security, and research.
            </p>
            <p>
              My undergraduate journey has given me opportunities to work on machine
              learning applications, web-based management systems, and data
              communication simulations. I enjoy turning concepts from the classroom
              into practical, working systems.
            </p>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              I also value sharing what I learn. Through student mentorship and
              academic activities, I have had opportunities to support junior students
              and contribute beyond coursework.
            </p>
            <p>
              I'm currently focused on strengthening my technical foundation, exploring
              research opportunities, and building projects that turn ideas into useful
              systems.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ---------------- HIGHLIGHTS ---------------- */}
      <section className="mx-auto max-w-6xl px-6 pt-20">
        <div className="panel grid grid-cols-2 gap-y-8 p-8 sm:p-10 lg:grid-cols-4">
          {highlights.map((item, i) => (
            <Reveal key={item.label} delay={i * 80}>
              <p className="font-display text-2xl font-semibold sm:text-3xl">
                {item.value}
              </p>
              <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
                {item.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- EXPERTISE ---------------- */}
      <section className="mx-auto max-w-6xl px-6 pt-28 sm:pt-36">
        <SectionHeader label="02 — Expertise" title="Areas I'm exploring." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {expertise.map((item, i) => {
            const Icon = expertiseIcons[item.icon];
            return (
              <Reveal key={item.title} delay={i * 70}>
                <article className="panel panel-lift h-full p-7">
                  <span className="grid size-11 place-items-center rounded-2xl border border-border bg-surface-raised/60">
                    <Icon className="size-5 text-primary" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ---------------- SKILLS ---------------- */}
      <section className="mx-auto max-w-6xl px-6 pt-28 sm:pt-36">
        <SectionHeader
          label="Skills"
          title="Tools and concepts I work with."
          description="Grouped by area — no invented proficiency scores, just what I actually use and study."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 60}>
              <SkillGroup {...group} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- EDUCATION + CV ---------------- */}
      <section className="mx-auto max-w-6xl px-6 pt-28 sm:pt-36">
        <SectionHeader label="03 — Education" title="Where I'm studying." />
        <div className="mt-10 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <article className="panel h-full p-7 sm:p-9">
              <span className="grid size-11 place-items-center rounded-2xl border border-border bg-surface-raised/60">
                <GraduationCap className="size-5 text-primary" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-semibold">{education.institution}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{education.degree}</p>
              <p className="mt-3 text-sm text-primary">{education.cgpaLabel}</p>

              <div className="hairline my-6" />
              <p className="eyebrow text-[0.66rem]">Selected relevant areas</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {education.areas.map((area) => (
                  <li key={area} className="chip">
                    {area}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={100}>
            <article className="panel relative h-full overflow-hidden p-7 sm:p-9">
              <div className="halo pointer-events-none absolute inset-0" />
              <div className="relative">
                <span className="grid size-11 place-items-center rounded-2xl border border-border bg-surface-raised/60">
                  <FileText className="size-5 text-primary" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-semibold">My CV</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Want to know more about my academic and technical journey?
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  <a
                    href={site.cvUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    View CV <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                  <a href={site.cvUrl} download className="btn btn-ghost">
                    <Download className="size-4" aria-hidden="true" /> Download CV
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* ---------------- FEATURED PROJECTS ---------------- */}
      <section className="mx-auto max-w-6xl px-6 pt-28 sm:pt-36">
        <SectionHeader label="04 — Featured Projects" title="Things I've built." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <Link to="/projects" className="btn btn-ghost">
            View All Projects <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
