export default function Experience() {
  const experiences = [
    {
      year: "2023 - Present",
      title: "Councillor & Secretary",
      organization: "Tobago House of Assembly (THA)",
      description: "Leading strategic initiatives for Tobago&apos;s development and serving as a key liaison for government communications and youth affairs.",
      achievements: [
        "Spearheaded youth development programs",
        "Enhanced inter-agency communication protocols",
        "Promoted cultural and tourism initiatives"
      ]
    },
    {
      year: "2021 - 2023",
      title: "Communications Specialist",
      organization: "Public Sector",
      description: "Developed and executed comprehensive communication strategies to enhance public engagement and transparency.",
      achievements: [
        "Implemented digital communication frameworks",
        "Increased public participation by 40%",
        "Led crisis communication efforts"
      ]
    },
    {
      year: "2019 - 2021",
      title: "Youth Development Coordinator",
      organization: "Community Organizations",
      description: "Designed and implemented programs focused on empowering young people through education and skill development.",
      achievements: [
        "Launched mentorship programs",
        "Organized cultural exchange initiatives",
        "Facilitated entrepreneurship workshops"
      ]
    },
    {
      year: "2017 - 2019",
      title: "Mediation Practitioner",
      organization: "Regional Mediation Center",
      description: "Provided conflict resolution services and facilitated dialogue between diverse community stakeholders.",
      achievements: [
        "Resolved 95% of assigned cases successfully",
        "Trained community mediators",
        "Developed mediation protocols"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <div className="relative">
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-100 absolute inset-0 flex items-center justify-center -z-10">
              EXPERIENCE
            </h2>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 relative z-10 pt-8">
              Professional Journey
            </h2>
          </div>
          <p className="text-xl text-gray-700 mt-6 max-w-3xl mx-auto">
            A track record of leadership, innovation, and service in advancing Tobago&apos;s interests
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-orange-200"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-orange-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                {/* Content */}
                <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className="bg-gradient-to-br from-orange-50 to-peach-50 p-8 rounded-xl shadow-lg border border-orange-100">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-semibold text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                          {exp.year}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                      <p className="text-lg font-medium text-orange-600">{exp.organization}</p>
                      <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start">
                              <span className="text-orange-500 mr-2">•</span>
                              <span className="text-gray-700">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 