"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Github,
  Linkedin,
  Mail,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter mb-4">About Me</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full mx-auto mb-6" />
        </motion.div>

        <div className="flex flex-col items-center gap-12">
          <motion.div
            className="w-64 h-64 relative"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
            }
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute inset-0 rounded-full bg-green-600/20 blur-xl" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-green-600">
              <Image
                src="/images/Headshot2Canva.png"
                alt="Babinson Batala"
                fill
                quality={100}
                className="object-cover transition-all duration-500 hover:scale-105"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            className="max-w-3xl space-y-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate Computing student at Queen's University with a
              keen eye for design and a love for creating seamless user
              experiences. I specialize in building modern, responsive websites
              and applications using various programming languages and tools.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new technologies,
              contributing to projects at Queen's, or enjoying outdoor
              activities. I believe in continuous learning and pushing the
              boundaries of what's possible in digital experiences.
            </p>

            <p className="text-muted-foreground leading-relaxed font-medium">
              This portfolio is a living document of my journey. I'm constantly
              updating it with new projects, skills, and experiences as I grow
              in my career.
            </p>

            <div className="flex flex-col gap-4 pt-4 max-w-md mx-auto">
              <Button
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/19mi1Y4MC0N9CyNTZgdb-rWNoaC6OvNIj/view?usp=sharing"
                  )
                }
              >
                Download CV
              </Button>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-green-500 hover:bg-green-500/10 bg-transparent"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/babinson-batala-2051a7264/",
                      "_blank"
                    )
                  }
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-green-500 hover:bg-green-500/10 bg-transparent"
                  onClick={() =>
                    window.open("https://github.com/babinson2005", "_blank")
                  }
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-green-500 hover:bg-green-500/10 bg-transparent"
                  onClick={() =>
                    window.open("mailto:bobbybatala320@gmail.com", "_blank")
                  }
                >
                  <Mail className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-green-500 hover:bg-green-500/10 bg-transparent"
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/profile.php?id=100062752530703",
                      "_blank"
                    )
                  }
                >
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-green-500 hover:bg-green-500/10 bg-transparent"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/b0bby.batala/",
                      "_blank"
                    )
                  }
                >
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-green-500 hover:bg-green-500/10 bg-transparent"
                  onClick={() =>
                    window.open("https://x.com/BobbyBatala", "_blank")
                  }
                >
                  <Twitter className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 max-w-2xl mx-auto">
              <Card className="bg-background/50 backdrop-blur-sm border-green-500/20">
                <CardContent className="p-4 text-center">
                  <motion.p
                    className="text-3xl font-bold gradient-text"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.5 }
                    }
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    4.1
                  </motion.p>
                  <p className="text-sm text-muted-foreground">
                    GPA (out of 4.3)
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background/50 backdrop-blur-sm border-green-500/20">
                <CardContent className="p-4 text-center">
                  <motion.p
                    className="text-3xl font-bold gradient-text"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.5 }
                    }
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    2027
                  </motion.p>
                  <p className="text-sm text-muted-foreground">
                    Graduation Year
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background/50 backdrop-blur-sm border-green-500/20 col-span-2 sm:col-span-1">
                <CardContent className="p-4 text-center">
                  <motion.p
                    className="text-3xl font-bold gradient-text"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.5 }
                    }
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    4+
                  </motion.p>
                  <p className="text-sm text-muted-foreground">Projects</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
