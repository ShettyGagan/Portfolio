import Image from "next/image";

export default function AboutMeSection() {
  const currentIntro = "Hello! I'm a passionate developer specializing in creating modern web applications.";
  const currentDescription = `With a strong foundation in JavaScript, React, and Node.js, I enjoy tackling complex problems and building intuitive user experiences. I'm always eager to learn new technologies and collaborate on exciting projects that make a positive impact. 
  
When I'm not coding, you can find me exploring new hiking trails or experimenting with new recipes in the kitchen. I believe in continuous learning and strive to grow both personally and professionally.`;

  return (
    <section id="about" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary text-center mb-12">
          About Me
        </h2>
        <div className="grid md:grid-cols-5 gap-12 items-center"> {/* Changed items-start to items-center */}
          <div className="md:col-span-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
              <Image
                src="/1714299739440.jpg"
                alt="Profile Picture - Gagan Shetty"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                data-ai-hint="professional person"
              />
            </div>
          </div>
          <div className="md:col-span-3">
            <h3 className="font-headline text-2xl font-semibold text-foreground mb-4">
              {currentIntro}
            </h3>
            <p className="text-base md:text-lg text-muted-foreground whitespace-pre-line leading-relaxed">
              {currentDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
