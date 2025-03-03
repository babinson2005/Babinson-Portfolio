"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import ImageCarousel from "@/components/image-carousel";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<
    null | (typeof projects)[0]
  >(null);

  const projects = [
    {
      id: 1,
      title: "Remote-Controlled Car",
      description:
        "Built a remote-control car using Arduino, integrating Bluetooth, ultrasonic, and infrared sensors for navigation.",
      images: [
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6057-images-1.jpg-J2JIP3tvniqCD06T3npha4Vm2Kl5oO.jpeg",
          alt: "RC car front view with LED lights",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6057-images-2.jpg-V0QsPhwDbK67OErnxHEuSKqKfKKHIt.jpeg",
          alt: "RC car showing custom design with googly eyes",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6057-images-0.jpg-A2LIpDqOmJN4Jo3TADi5OszMTLuitR.jpeg",
          alt: "RC car with green LED lights",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6057-images-4.jpg-w7v7ePnDuIsconzUTlxBYsjsvuJaaJ.jpeg",
          alt: "RC car showing 2FASTN label",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6057-images-3.jpg-uX4pdCrPbOFu0JU6RzqdkMqWk4Q06w.jpeg",
          alt: "RC car side view with lighting effects",
        },
      ],
      category: "hardware",
      tags: ["Arduino", "Bluetooth", "Sensors", "Hardware"],
      link: "#",
      github: "https://github.com/babinson2005/arduino-rc-car",
      longDescription:
        "Built a remote-control car using Arduino, integrating Bluetooth, ultrasonic, and infrared (IR) sensors for navigation. Developed a custom Bluetooth app for seamless control and optimized motor performance via Arduino IDE.",
    },
    {
      id: 2,
      title: "Simon Says Game",
      description:
        "Created a multi-level 'Simon Says' game in Python with high-score tracking and a dynamic UI designed in Figma.",
      images: [
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/simon-says-g1pZmiNb5ECZQcfBVb6kMreotJLsih.png",
          alt: "Simon Says game interface",
        },
      ],
      category: "software",
      tags: ["Python", "Tkinter", "Pygame", "Figma"],
      link: "#",
      github: "https://github.com/babinson2005/simon-says",
      longDescription:
        "Created a multi-level 'Simon Says' game in Python with high-score tracking and a dynamic UI designed in Figma. Used Tkinter and Pygame libraries for pattern recognition, interactive gameplay, and responsive interface design.",
    },
    {
      id: 3,
      title: "Queen's Cricket Club Website",
      description:
        "Designed and developed a responsive, user-friendly website for Queen's Cricket Club using ReactJS and CSS.",
      images: [
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-01%20at%208.09.35%E2%80%AFPM-AJ54isOtZPp09TzW6OVbEdkIWDioQ9.png",
          alt: "Queen's Cricket Club homepage",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-01%20at%208.10.53%E2%80%AFPM-trPWUcGGAsjG3ODqQsxysnlbygIXxX.png",
          alt: "Queen's Cricket Club about page",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-01%20at%208.10.35%E2%80%AFPM-l5YTeJOxcJZXTMWQa7FTYZNXUcvCCk.png",
          alt: "Queen's Cricket Club blog page",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-01%20at%208.10.17%E2%80%AFPM-oWYr8XN785T9gVUqLYWVhaDpIBxL8b.png",
          alt: "Queen's Cricket Club contact page",
        },
      ],
      category: "web",
      tags: ["ReactJS", "CSS", "Web Development"],
      link: "#",
      github: "https://github.com/babinson2005/queens-cricket",
      longDescription:
        "Designed and developed a responsive, user-friendly website for Queen's Cricket Club using ReactJS and CSS. Coordinated with stakeholders to define requirements and implemented features that improved usability by 30%. Ensured the website surpassed their expectations, resulting in a polished, user-friendly site.",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

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
          <div className="w-20 h-1.5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here's a selection of my recent work across various domains and
            technologies. Click on any project to learn more.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-8">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className="rounded-full"
            >
              All
            </Button>
            <Button
              variant={filter === "web" ? "default" : "outline"}
              onClick={() => setFilter("web")}
              className="rounded-full"
            >
              Web Development
            </Button>
            <Button
              variant={filter === "software" ? "default" : "outline"}
              onClick={() => setFilter("software")}
              className="rounded-full"
            >
              Software
            </Button>
            <Button
              variant={filter === "hardware" ? "default" : "outline"}
              onClick={() => setFilter("hardware")}
              className="rounded-full"
            >
              Hardware
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="sync">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
                onClick={() => setSelectedProject(project)}
              >
                <Card className="overflow-hidden border-violet-500/10 h-full cursor-pointer">
                  <ImageCarousel images={project.images} />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-violet-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
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
                        className="capitalize border-violet-500/30"
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
                              window.open(project.github, "_blank");
                            }}
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
                            window.open(project.link, "_blank");
                          }}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-card border rounded-xl max-w-3xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <ImageCarousel
                images={selectedProject.images}
                className="w-full"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">
                  {selectedProject.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">
                  {selectedProject.longDescription}
                </p>
                <div className="flex gap-4">
                  <Button
                    className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700"
                    onClick={() => window.open(selectedProject.link, "_blank")}
                  >
                    View Live
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                  {selectedProject.github && (
                    <Button
                      variant="outline"
                      onClick={() =>
                        window.open(selectedProject.github, "_blank")
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
