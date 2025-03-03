"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Globe, Palette, GitBranch, BarChart2, Brain, Cloud } from "lucide-react"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skills = [
    {
      name: "Programming Languages",
      icon: <Code className="h-8 w-8" />,
      description: "Python, C++, Java, JavaScript, TypeScript, Swift, R",
      color: "from-blue-500 to-cyan-400",
    },
    {
      name: "Web Development",
      icon: <Globe className="h-8 w-8" />,
      description: "HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, Vercel",
      color: "from-green-500 to-emerald-400",
    },
    {
      name: "Design Tools",
      icon: <Palette className="h-8 w-8" />,
      description: "Figma, Photoshop, Blender",
      color: "from-purple-500 to-violet-400",
    },
    {
      name: "Version Control",
      icon: <GitBranch className="h-8 w-8" />,
      description: "Git, GitHub",
      color: "from-orange-500 to-amber-400",
    },
    {
      name: "Languages",
      icon: <Globe className="h-8 w-8" />,
      description: "English (Fluent), Nepali (Fluent), Spanish (Beginner), French (Beginner)",
      color: "from-indigo-500 to-blue-400",
    },
    {
      name: "Data Analysis",
      icon: <BarChart2 className="h-8 w-8" />,
      description: "Python, Pandas, Data Visualization, MATLAB",
      color: "from-cyan-500 to-blue-400",
    },
    {
      name: "Machine Learning",
      icon: <Brain className="h-8 w-8" />,
      description: "Scikit-learn, TensorFlow, Neural Networks",
      color: "from-green-500 to-teal-400",
    },
    {
      name: "Cloud Technologies",
      icon: <Cloud className="h-8 w-8" />,
      description: "AWS, Azure, Google Cloud Platform",
      color: "from-blue-500 to-indigo-400",
    },
  ]

  return (
    <section id="skills" ref={ref} className="py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter mb-4">My Skills</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've developed expertise in various technologies and tools throughout my education and projects. Here are
            some of the key areas I specialize in.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative group"
            >
              <div
                className={`absolute inset-0 rounded-xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`}
              />
              <div className="relative bg-card border rounded-xl p-6 h-full flex flex-col items-center text-center transition-all duration-300 group-hover:shadow-lg">
                <div className={`p-3 rounded-full bg-gradient-to-r ${skill.color} mb-4 text-white`}>{skill.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{skill.name}</h3>
                <p className="text-muted-foreground text-sm">{skill.description}</p>

                <motion.div
                  className="w-0 h-0.5 bg-gradient-to-r from-violet-600 to-indigo-600 absolute bottom-0 left-1/2 -translate-x-1/2"
                  whileHover={{ width: "80%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

