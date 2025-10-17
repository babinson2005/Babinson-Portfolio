// components/sections/Projects.tsx
"use client";

import { useMemo, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import ImageCarousel from "@/components/image-carousel"; // <-- must have "use client" at the top of that file

type Project = {
  id: number;
  title: string;
  description: string;
  images: { src: string; alt: string }[];
  category: "web" | "software" | "hardware";
  tags: string[];
  link: string;
  github?: string;
  longDescription: string;
};

/* 1) HOIST DATA OUTSIDE to avoid re-creation + layout jitter */
const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Queen's Table Tennis Club Website",
    description:
      "Developed and deployed a fully responsive website for the Queen's Table Tennis Club to streamline communications and showcase events.",
    images: [
      {
        src: "/images/tabletennisfp.png",
        alt: "Queen's Table Tennis Club homepage",
      },
    ],
    category: "web",
    tags: ["Next.js", "React", "CSS", "Web Development", "Deployment"],
    link: "https://qutabletennis.qweb.dev/",
    github: "https://github.com/babinson2005/qutabletennis",
    longDescription:
      "Designed and built a responsive website for the Queen's Table Tennis Club using Next.js and CSS. Deployed via Vercel for fast load and reliability.",
  },
  {
    id: 2,
    title: "Queen's Cricket Club Website",
    description:
      "Designed and developed a responsive, user-friendly website for Queen's Cricket Club using ReactJS and CSS.",
    images: [
      {
        src: "/images/cricketclubfp.png",
        alt: "Queen's Cricket Club homepage",
      },
    ],
    category: "web",
    tags: ["ReactJS", "CSS", "Web Development"],
    link: "https://queenscricketclub.netlify.app/",
    github: "https://github.com/babinson2005/queens-cricket",
    longDescription:
      "Responsive site for Queen's Cricket Club with improved usability. Deployed on Netlify.",
  },
  {
    id: 3,
    title: "Simon Says Game",
    description:
      "Created a multi-level 'Simon Says' game in Python with high-score tracking and a dynamic UI designed in Figma.",
    images: [
      { src: "/images/simon-says.png", alt: "Simon Says game interface" },
    ],
    category: "software",
    tags: ["Python", "Tkinter", "Pygame", "Figma"],
    link: "#",
    github: "https://github.com/babinson2005/simon-says",
    longDescription:
      "Tkinter/Pygame game with pattern memory, levels, and high scores.",
  },
  {
    id: 4,
    title: "Remote-Controlled Car",
    description:
      "Built a remote-control car using Arduino, integrating Bluetooth, ultrasonic, and infrared sensors for navigation.",
    images: [
      {
        src: "/images/IMG_6057-images-0.jpg",
        alt: "RC car with green LED lights",
      },
      {
        src: "/images/IMG_6057-images-1.jpg",
        alt: "RC car front view with LED lights",
      },
      {
        src: "/images/IMG_6057-images-2.jpg",
        alt: "RC car side view with lighting effects",
      },
      { src: "/images/IMG_6057-images-3.jpg", alt: "RC car custom design" },
      { src: "/images/IMG_6057-images-4.jpg", alt: "RC car 2FASTN label" },
    ],
    category: "hardware",
    tags: ["Arduino", "Bluetooth", "Sensors", "Hardware"],
    link: "#",
    github: "https://github.com/babinson2005/arduino-rc-car",
    longDescription:
      "Arduino RC car with Bluetooth control and ultrasonic/IR sensors. Custom app and tuned motor performance.",
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [filter, setFilter] = useState<"all" | "web" | "software" | "hardware">(
    "all"
  );
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  /* 2) MEMOIZE FILTERED LIST so first client render === server render */
  const filteredProjects = useMemo(() => {
    return filter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <section id="projects" ref={ref} className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here's a selection of my recent work across various domains and
            technologies. Click on any project to learn more.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {(["all", "web", "software", "hardware"] as const).map((cat) => (
              <Button
                key={cat}
                variant={filter === cat ? "default" : "outline"}
                onClick={() => setFilter(cat)}
                className="rounded-full capitalize"
              >
                {cat === "all" ? "All" : cat}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* 3) DO NOT wrap the grid in AnimatePresence on first render */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id} // stable
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="group"
              onClick={() => setSelectedProject(project)}
            >
              <Card className="overflow-hidden border-green-500/10 h-full cursor-pointer">
                {/* 4) Ensure ImageCarousel is a client component & doesn't use Date.now/Math.random/useId in SSR */}
                <ImageCarousel images={project.images} />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-green-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge
                        key={`${project.id}-${tag}`}
                        variant="secondary"
                        className="bg-background/80 backdrop-blur-sm"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <Badge
                      variant="outline"
                      className="capitalize border-green-500/30"
                    >
                      {project.category}
                    </Badge>
                    <div className="flex gap-2">
                      {project.github && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(
                              project.github,
                              "_blank",
                              "noopener,noreferrer"
                            );
                          }}
                          aria-label="Open GitHub"
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(
                            project.link,
                            "_blank",
                            "noopener,noreferrer"
                          );
                        }}
                        aria-label="Open Live Link"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 5) Keep AnimatePresence only for the modal (client-only) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              initial={{ scale: 0.95, y: 12 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 12 }}
              className="bg-card border rounded-xl max-w-3xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <ImageCarousel images={selectedProject.images} />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">
                  {selectedProject.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tags.map((tag) => (
                    <Badge
                      key={`${selectedProject.id}-modal-${tag}`}
                      variant="secondary"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">
                  {selectedProject.longDescription}
                </p>
                <div className="flex gap-4">
                  <Button
                    className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                    onClick={() =>
                      window.open(
                        selectedProject.link,
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                  >
                    View Live
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                  {selectedProject.github && (
                    <Button
                      variant="outline"
                      onClick={() =>
                        window.open(
                          selectedProject.github!,
                          "_blank",
                          "noopener,noreferrer"
                        )
                      }
                    >
                      View Code
                      <Github className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
