"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Linkedin, Github, Facebook, Instagram, Twitter } from "lucide-react"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "bobbybatala320@gmail.com",
      link: "mailto:bobbybatala320@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "647-614-0391",
      link: "tel:6476140391",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Scarborough, ON",
      link: null,
    },
  ]

  return (
    <section ref={ref} id="contact" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Get In Touch</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out through any of these channels. I'd love to connect with you!
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
                  <div className="p-3 rounded-full bg-green-500/10 text-green-600 mb-4">{info.icon}</div>
                  <h3 className="font-medium mb-2">{info.title}</h3>
                  {info.link ? (
                    <a href={info.link} className="text-muted-foreground hover:text-green-600 transition-colors">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{info.value}</p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full hover:bg-green-500/10 bg-transparent"
              onClick={() => window.open("https://www.linkedin.com/in/babinson-batala-2051a7264/", "_blank")}
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full hover:bg-green-500/10 bg-transparent"
              onClick={() => window.open("https://github.com/babinson2005", "_blank")}
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full hover:bg-green-500/10 bg-transparent"
              onClick={() => window.open("https://www.facebook.com/profile.php?id=100062752530703", "_blank")}
            >
              <Facebook className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full hover:bg-green-500/10 bg-transparent"
              onClick={() => window.open("https://www.instagram.com/b0bby.batala/", "_blank")}
            >
              <Instagram className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full hover:bg-green-500/10 bg-transparent"
              onClick={() => window.open("https://x.com/BobbyBatala", "_blank")}
            >
              <Twitter className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
