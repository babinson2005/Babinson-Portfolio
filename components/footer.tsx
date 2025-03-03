"use client"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-muted py-12">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold gradient-text">Babinson Batala</h2>
          <p className="text-muted-foreground mt-2">Crafting innovative solutions for tomorrow's challenges.</p>
        </div>

        <p className="text-muted-foreground text-sm text-center">
          © {new Date().getFullYear()} Babinson Batala. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

