export default function Skills() {
  const skills = [
    {
      title: "Communications Specialist",
      description: "Expert in strategic communications and public relations",
      color: "bg-rose-100 border-rose-200"
    },
    {
      title: "Highly Proficient in Youth Work",
      description: "Dedicated to empowering and developing young people",
      color: "bg-orange-100 border-orange-200"
    },
    {
      title: "Mediation Practitioner",
      description: "Skilled in conflict resolution and diplomatic solutions",
      color: "bg-amber-100 border-amber-200"
    },
    {
      title: "Councillor & Secretary at THA",
      description: "Leadership role in Tobago House of Assembly",
      color: "bg-yellow-100 border-yellow-200"
    },
    {
      title: "Global Thinker",
      description: "International perspective on local challenges",
      color: "bg-lime-100 border-lime-200"
    },
    {
      title: "Skilled Orator",
      description: "Powerful and persuasive public speaking abilities",
      color: "bg-emerald-100 border-emerald-200"
    },
    {
      title: "Orange Economy Champion",
      description: "Advocate for creative and cultural economy development",
      color: "bg-teal-100 border-teal-200"
    },
    {
      title: "Critical Thinker",
      description: "Analytical approach to problem-solving and strategy",
      color: "bg-cyan-100 border-cyan-200"
    },
    {
      title: "Tobago to The World Strategist",
      description: "Vision for global representation and cultural exchange",
      color: "bg-sky-100 border-sky-200"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-orange-50 to-peach-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <div className="relative">
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-100 absolute inset-0 flex items-center justify-center -z-10">
              SKILLS
            </h2>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 relative z-10 pt-8">
              Areas of Expertise
            </h2>
          </div>
          <p className="text-xl text-gray-700 mt-6 max-w-3xl mx-auto">
            A diverse range of skills and expertise spanning communication, leadership, and strategic thinking
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`${skill.color} p-6 rounded-xl border-2 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2`}
            >
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 leading-tight">
                  {skill.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {skill.description}
                </p>
                <div className="flex justify-end">
                  <div className="w-8 h-8 bg-white bg-opacity-50 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 