const testimonials = [
  {
    quote: "Clydra has revolutionized how we manage our IoT product relationships. The platform's ability to track device performance while managing customer relationships is unmatched.",
    author: "Sarah Johnson",
    position: "CTO, SmartTech Solutions",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    quote: "As we expanded into Asian markets, Clydra's multi-language support and regional compliance features saved us countless hours and potential headaches.",
    author: "Michael Chen",
    position: "VP Global Operations, ConnectWave",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    quote: "The analytics capabilities in Clydra helped us identify key growth opportunities we would have otherwise missed. It's been instrumental in our expansion strategy.",
    author: "Elena Rodriguez",
    position: "CEO, FutureSense Technologies",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-primary-900 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h2>
          <p className="text-lg text-gray-300">
            See what our customers have to say about Clydra
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-primary-800/50 backdrop-blur-sm p-8 rounded-lg border border-primary-700"
            >
              <div className="flex flex-col h-full">
                <blockquote className="text-gray-300 italic mb-6 flex-grow">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full object-cover mr-4" 
                  />
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;