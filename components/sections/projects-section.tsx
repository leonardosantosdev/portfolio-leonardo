// components/sections/projects-section.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import type { Project, ProjectsContent } from "@/lib/types";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProjectDetailModal } from "@/components/projects/project-detail-modal";

interface ProjectsSectionProps {
  content: ProjectsContent;
}

export function ProjectsSection({ content }: ProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <Section id="projects" title={content.title} subtitle={content.subtitle}>
      <div className="grid gap-6 md:grid-cols-2">
        {content.items.map((project) => (
          <button
            key={project.title}
            type="button"
            onClick={() => setSelectedProject(project)}
            className="text-left"
          >
            <Card className="cursor-pointer flex h-full flex-col gap-4 overflow-hidden p-0 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={
                    project.images && project.images.length > 0
                      ? project.images[0]
                      : "/avatar.jpg"
                  }
                  alt={project.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-3 p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-sm font-semibold">{project.title}</h3>
                  <p className="text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
                    {project.role}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">{project.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </div>
            </Card>
          </button>
        ))}
      </div>

      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </Section>
  );
}
