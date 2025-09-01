'use client'

interface SimpleHeroProps {
  backgroundImage: string
  title: string
  description: string
}

export default function SimpleHero({
  backgroundImage,
  title,
  description
}: SimpleHeroProps) {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: "rgba(28, 28, 28, 0.5)",
        }}
      ></div>
      
      {/* Main Content */}
      <div className="relative z-10 px-4 max-w-7xl mx-auto text-center">
        <h1 
          className="mb-6"
          style={{
            fontFamily: 'Helvetica',
            fontWeight: 300,
            fontStyle: 'normal',
            fontSize: '70px',
            lineHeight: '70px',
            letterSpacing: '0%',
            textAlign: 'center',
            color: 'white'
          }}
        >
          {title}
        </h1>
        <p 
          className="max-w-4xl mx-auto"
          style={{
            fontFamily: 'Grift',
            fontWeight: 500,
            fontStyle: 'normal',
            fontSize: '32px',
            lineHeight: '40px',
            letterSpacing: '0%',
            textAlign: 'center',
            color: 'white'
          }}
        >
          {description}
        </p>
      </div>
    </section>
  )
}
