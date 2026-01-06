import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Jane brings an extraordinary emotional depth to every role. Her voice is both powerful and nuanced, and her stage presence is captivating.",
    author: "Michael Chen",
    title: "Director, Hamilton National Tour",
  },
  {
    quote:
      "Working with Jane has been an absolute joy. She is not only a talented performer but also a consummate professional who elevates every production.",
    author: "Sarah Williams",
    title: "Music Director, Wicked",
  },
  {
    quote:
      "Jane Doe is a rare talent who combines technical mastery with genuine artistry. Her performance as Fantine was unforgettable.",
    author: "The New York Times",
    title: "Theatre Review",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-background relative shadow-2xl">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Press & Testimonials</h2>
          <p className="text-muted-foreground">What directors, critics, and collaborators say</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-lg p-8 shadow-lg relative">
              <Quote className="h-10 w-10 text-accent mb-4 opacity-20" />
              <blockquote className="text-pretty mb-6 leading-relaxed">{testimonial.quote}</blockquote>
              <div className="border-t pt-4">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
