"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Design Team Member",
      company: "Queen's University AI Hub (QMIND)",
      period: "Sep 2025 - Present",
      description:
        "Building predictive features from NFL datasets (e.g., yards per play, turnover margin, power ratings) by cleaning and engineering inputs, enabling more accurate outcome modeling. Developing and evaluating machine learning models including logistic regression, random forests, and neural networks by training on historical game data, achieving improved prediction accuracy and continuously refining performance with new weekly results.",
      skills: [
        "Machine Learning",
        "Feature Engineering",
        "Python",
        "Data Analysis",
      ],
    },
    {
      title: "Soccer Coach",
      company: "TNSC",
      period: "Jul 2020 - Aug 2025",
      description:
        "Designed and implemented personalized training programs to improve player performance and team cohesion. Motivated athletes through consistent coaching and organized structured game plans that led to competitive success.",
      skills: ["Leadership", "Training & Development", "Team Management"],
    },
    {
      title: "Summer Camp Counselor",
      company: "TCHC & Jays Care Foundation",
      period: "Jul 2021 - Aug 2025",
      description:
        "Fostered a safe and inclusive environment by leading sports, arts, and field trip activities for youth. Mentored campers to build self-esteem and collaborated with staff to deliver team-building programs emphasizing leadership and cooperation.",
      skills: ["Youth Mentoring", "Activity Planning", "Team Collaboration"],
    },
    {
      title: "Lead Software Developer",
      company: "Queen's Web Development",
      period: "Sep 2023 - Apr 2025",
      description:
        "Led the full development lifecycle of websites for Queen’s Cricket Club and Table Tennis Club using ReactJS, CSS, HTML, and SQL integration, boosting registrations by 20%. Directed client communication from concept to deployment by converting requirements into Figma wireframes and implementing user-driven improvements to enhance functionality and user experience. Managed a team of 5 developers through task assignment, code reviews, and progress coordination, ensuring timely delivery and consistent coding standards.",
      skills: [
        "ReactJS",
        "SQL",
        "Web Development",
        "Team Leadership",
        "UI/UX Design",
      ],
    },
    {
      title: "Data Analyst",
      company: "Queen's Data Analytics Association (QDAA)",
      period: "Sep 2024 - Apr 2025",
      description:
        "Applied machine learning techniques in Python (Pandas, scikit-learn) to design workshops on regression, classification, and clustering, enabling students to build models that connected theory with real-world applications. Directed a 6-week capstone project for 150 students by mentoring them through the development of end-to-end predictive models, delivering insights that increased member satisfaction by 25%.",
      skills: [
        "Python",
        "Machine Learning",
        "Pandas",
        "scikit-learn",
        "Mentorship",
      ],
    },
    {
      title: "Marketing Specialist",
      company: "Queen's Google Development",
      period: "Sep 2023 - Apr 2024",
      description:
        "Increased audience engagement by 60% by launching targeted social media campaigns for the Queen’s Google Developer Student Club. Promoted workshops and events through coordinated digital marketing strategies, contributing to a 20% increase in attendance.",
      skills: ["Marketing", "Social Media", "Event Promotion"],
    },
    {
      title: "Facilities Operations Specialist",
      company: "DECO",
      period: "May 2024 - Aug 2024",
      description:
        "Enhanced customer satisfaction and increased repair plan conversions by 80% by performing precision windshield repairs with strict adherence to quality standards. Streamlined operational workflows to reduce wait times and improve service efficiency.",
      skills: ["Customer Service", "Quality Control", "Process Improvement"],
    },
    {
      title: "Community Manager",
      company: "Clairvida",
      period: "Feb 2022 - Jun 2022",
      description:
        "Increased product demand by 15% by developing promotional content in Blender and moderating Discord communities of 200+ active users. Resolved 10+ technical support tickets monthly to maintain a 95% customer satisfaction rate.",
      skills: ["Community Management", "Blender", "Technical Support"],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "Queen's University",
      period: "September 2023 - April 2027 (Expected)",
      description:
        "Specializing in Artificial Inteligence with relevant coursework in Software Specifications, Data Structures, Linear Data Analysis, and Computer Architecture. Maintaining a GPA of 4.1/4.3.",
    },
    {
      degree: "High School Diploma",
      institution: "SATEC @ W.A. Porter Collegiate",
      period: "September 2019 - June 2023",
      description:
        "Graduated with a 95% overall average. Specialist High Skills Major (SHSM) in Information and Communications Technology (ICT). Honor Roll Student all 4 years. Participated in varsity soccer (team co-captain in grade 12), track and field, and volleyball teams. Vice President of SAHA (South Asian Heritage Association).",
    },
  ];

  const awards = [
    {
      title: "Udemy - Machine Learning Certificate",
      description:
        "Completed an applied ML program covering data wrangling (pandas/NumPy), model training (scikit-learn), evaluation (RMSE, MAE), and feature engineering.",
    },
    {
      title: "Golden Boot Award",
      description: "Most Goals Scored, Varsity Soccer Team (2023)",
    },
    {
      title: "Coach of the Year Award",
      description:
        "Toronto Nepalese Soccer Club (TNSC), Recognized for Outstanding Leadership and Team Success (2021)",
    },
    {
      title: "Khukuri Cup Winner X2",
      description:
        "First Place, Soccer Tournament with $10,000 Prize (2022 & 2025)",
    },
    {
      title: "Dashain Cup Winner",
      description: "First Place, Soccer Tournament with $7,000 Prize (2025)",
    },
    {
      title: "Nepal Cup Winner",
      description: "First Place, Soccer Tournament with $5,000 Prize (2025)",
    },
  ];

  return (
    <section id="experience" ref={ref} className="py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter mb-4">
            Experience & Education
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and educational background that have shaped
            my skills and expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Work Experience</h3>

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -50 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                }
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="relative overflow-hidden border-l-4 border-l-green-600">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-green-600 to-emerald-600" />
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{exp.title}</CardTitle>
                        <CardDescription>{exp.company}</CardDescription>
                      </div>
                      <Badge
                        variant="outline"
                        className="ml-2 border-green-500/30"
                      >
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-green-500/10 text-green-700 dark:text-green-300"
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
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
                }
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="relative overflow-hidden border-l-4 border-l-green-600">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-green-600 to-emerald-600" />
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{edu.degree}</CardTitle>
                        <CardDescription>{edu.institution}</CardDescription>
                      </div>
                      <Badge
                        variant="outline"
                        className="ml-2 border-green-500/30"
                      >
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
              <h3 className="text-2xl font-semibold mb-6">
                Awards & Achievements
              </h3>
              {awards.map((award, index) => (
                <motion.div
                  key={award.title}
                  initial={{ opacity: 0, x: 50 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
                  }
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Card className="relative overflow-hidden border-l-4 border-l-green-600">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-green-600 to-emerald-600" />
                    <CardHeader>
                      <CardTitle>{award.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {award.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
