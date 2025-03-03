"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      title: "Facilities Operations Specialist",
      company: "DECO",
      period: "May 2024 - November 2024",
      description:
        "Performed precision windshield repairs with strict adherence to quality standards. Enhanced customer satisfaction and increased repair plan conversions by 80%. Streamlined operational processes to improve efficiency and reduce wait times.",
      skills: ["Customer Service", "Quality Control", "Process Improvement"],
    },
    {
      title: "Soccer Coach",
      company: "TNSC",
      period: "July 2020 - September 2022",
      description:
        "Designed and implemented tailored training programs to develop individual player skills and cohesive team strategies. Motivated athletes to build confidence and discipline through consistent coaching and support. Organized practice schedules and game plans, preparing the team for competitive success.",
      skills: ["Leadership", "Training & Development", "Team Management"],
    },
    {
      title: "Summer Camp Counselor",
      company: "TCHC & Jays Care Foundation",
      period: "July 2021 - August 2021",
      description:
        "Led engaging activities, including sports, arts, and field trips, in a safe and inclusive environment. Supported campers in building self-esteem and confidence through positive mentoring. Collaborated with staff to deliver dynamic group activities emphasizing teamwork and leadership.",
      skills: ["Youth Mentoring", "Activity Planning", "Team Collaboration"],
    },
    {
      title: "Lead Software Developer",
      company: "Queen's Web Development",
      period: "Feb 2024 - Apr 2024",
      description:
        "Designed and developed a responsive, user-friendly website for Queen's Cricket Club using ReactJS and CSS. Coordinated with stakeholders to define requirements and implemented features that improved usability by 30%. Ensured the website surpassed their expectations, resulting in a polished, user-friendly site.",
      skills: ["ReactJS", "CSS", "Web Development", "UI/UX"],
    },
    {
      title: "Data Analytics Associate",
      company: "Queen's Data Analytics Association (QDAA)",
      period: "Sep 2024 - Present",
      description:
        "Actively participated in bi-weekly workshops and hands-on coding sessions focused on key data analytics concepts, including machine learning, natural language processing, and data visualization. Gained practical experience with Python programming, data cleaning, and creating insightful visualizations using tools such as Pandas and Matplotlib.",
      skills: ["Python", "Data Analysis", "Pandas", "Matplotlib"],
    },
    {
      title: "Marketing Specialist",
      company: "Queen's Google Development",
      period: "Sep 2023 - Apr 2024",
      description:
        "Increased audience engagement by 60% through strategic social media campaigns for the Queen's Google Developer Student Club. Promoted workshops and events, contributing to a 20% increase in attendance.",
      skills: ["Marketing", "Social Media", "Event Promotion"],
    },
    {
      title: "Community Manager",
      company: "Clairvida",
      period: "Feb 2022 - Jun 2022",
      description:
        "Created and moderated Discord servers with 200+ active users, ensuring seamless operations and community engagement. Developed promotional content using Blender, leading to a 15% increase in product demand. Resolved 10+ technical support tickets monthly, maintaining a 95% customer satisfaction rate.",
      skills: ["Community Management", "Blender", "Technical Support"],
    },
  ]

  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "Queen's University",
      period: "September 2023 - April 2027 (Expected)",
      description:
        "Specializing in Software Development with relevant coursework in Software Specifications, Data Structures, Linear Data Analysis, and Computer Architecture. Maintaining a GPA of 4.1/4.3.",
    },
    {
      degree: "High School Diploma",
      institution: "SATEC @ W.A. Porter Collegiate",
      period: "September 2019 - June 2023",
      description:
        "Graduated with a 95% overall average. Specialist High Skills Major (SHSM) in Information and Communications Technology (ICT). Honor Roll Student all 4 years. Participated in varsity soccer (team co-captain in grade 12), track and field, and volleyball teams. Vice President of SAHA (South Asian Heritage Association).",
    },
  ]

  const awards = [
    {
      title: "Golden Boot Award",
      description: "Most Goals Scored, Varsity Soccer Team (2023)",
    },
    {
      title: "Coach of the Year Award",
      description: "Toronto Nepalese Soccer Club (TNSC), Recognized for Outstanding Leadership and Team Success (2021)",
    },
    {
      title: "Khukuri Cup Winner",
      description: "First Place, Soccer Tournament with $10,000 Prize (2022)",
    },
  ]

  return (
    <section id="experience" ref={ref} className="py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Experience & Education</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and educational background that have shaped my skills and expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Work Experience</h3>

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="relative overflow-hidden border-l-4 border-l-violet-600">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-violet-600 to-indigo-600" />
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{exp.title}</CardTitle>
                        <CardDescription>{exp.company}</CardDescription>
                      </div>
                      <Badge variant="outline" className="ml-2 border-violet-500/30">
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-violet-500/10 text-violet-700 dark:text-violet-300"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Education</h3>

            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="relative overflow-hidden border-l-4 border-l-violet-600">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-violet-600 to-indigo-600" />
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{edu.degree}</CardTitle>
                        <CardDescription>{edu.institution}</CardDescription>
                      </div>
                      <Badge variant="outline" className="ml-2 border-violet-500/30">
                        {edu.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Awards & Achievements</h3>
              {awards.map((award, index) => (
                <motion.div
                  key={award.title}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Card className="relative overflow-hidden border-l-4 border-l-violet-600">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-violet-600 to-indigo-600" />
                    <CardHeader>
                      <CardTitle>{award.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{award.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

