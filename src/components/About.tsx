export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <div className="relative">
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-100 absolute inset-0 flex items-center justify-center -z-10">
              ABOUT
            </h2>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 relative z-10 pt-8">
              About Tashia
            </h2>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Tashia Burris is a dynamic communications specialist and passionate advocate for Tobago&apos;s development 
              on the global stage. With deep roots in the soil of Tobago, she has dedicated her career to amplifying 
              the voices of her community and bridging local wisdom with international opportunities.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              As a skilled orator and critical thinker, Tashia brings a unique perspective to youth development, 
              cultural preservation, and economic advancement. Her work at the THA has positioned her as a key 
              figure in shaping Tobago&apos;s future while honoring its rich heritage.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Through her commitment to service and love for people, Tashia continues to champion the Orange Economy 
              and innovative approaches to sustainable development, ensuring that Tobago&apos;s influence extends far 
              beyond its shores.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="grid gap-6">
              {[
                {
                  title: "Born and Bred in Tobago",
                  description: "Deep cultural roots and authentic connection to the island's heritage",
                  icon: "🏝️"
                },
                {
                  title: "Committed to Service",
                  description: "Dedicated to advancing Tobago's interests through public service",
                  icon: "🤝"
                },
                {
                  title: "Lover of People",
                  description: "Passionate about human connection and community development",
                  icon: "❤️"
                }
              ].map((value, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-orange-50 rounded-xl">
                  <div className="text-3xl">{value.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-700">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 