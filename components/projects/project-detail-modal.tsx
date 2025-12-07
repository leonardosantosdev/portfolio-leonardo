// components/projects/project-detail-modal.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react"; // se não usar lucide, troque por um botão simples
import type { Project } from "@/lib/types";

interface ProjectDetailModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  const images = project.images ?? [];
  const [activeIndex, setActiveIndex] = useState(0);

  // sempre que trocar de projeto, volta para a primeira imagem
  useEffect(() => {
    setActiveIndex(0);
  }, [project]);

  const activeImage = images[activeIndex];

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 px-4 sm:px-6"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      onClick={onClose}
    >
      <div
        className="relative flex w-full max-w-5xl max-h-[90vh] flex-col overflow-hidden rounded-2xl bg-background shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* botão fechar */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background/80 text-muted-foreground hover:bg-muted"
          aria-label="Fechar"
        >
          <X className="h-4 w-4" />
        </button>

        {/* conteúdo com scroll */}
        <div className="flex-1 overflow-y-auto px-5 pb-6 pt-6 sm:px-7 sm:pt-7">
          <div className="space-y-6 sm:space-y-7">
            {/* título / role */}
            <div className="space-y-2 pr-10">
              <p className="text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
                {project.role}
              </p>
              <h2 className="text-xl font-semibold sm:text-2xl">{project.title}</h2>
            </div>

            {/* descrição */}
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>{project.longDescription ?? project.summary}</p>
            </div>

            {/* tech badges */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border px-3 py-1 text-[0.7rem] font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* imagens */}
            {activeImage && (
              <div className="space-y-3">
                {/* imagem principal grande */}
                <div className="relative mx-auto aspect-[16/9] w-full overflow-hidden rounded-xl border border-border bg-muted">
                  <Image
                    src={activeImage}
                    alt={project.imageAlt}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* thumbs com scroll horizontal */}
                {images.length > 1 && (
                  <div className="flex gap-3 overflow-x-auto pb-1">
                    {images.map((src, index) => (
                      <button
                        key={src}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        className={`relative h-20 w-32 flex-shrink-0 overflow-hidden rounded-lg border ${
                          index === activeIndex ? "border-primary" : "border-border"
                        }`}
                        aria-label={`Ver imagem ${index + 1}`}
                      >
                        <Image
                          src={src}
                          alt={project.imageAlt}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* links opcionais */}
            <div className="mt-1 flex flex-wrap gap-3 text-xs font-medium">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary underline-offset-2 hover:underline"
                >
                  Live demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary underline-offset-2 hover:underline"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
