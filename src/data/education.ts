export interface EducationItem {
  degree: string
  institute: string
  location?: string
  year: string
  extra?: string
}

export interface PersonEducation {
  name: string
  education: EducationItem[]
}

const educationData: PersonEducation[] = [
  {
    name: "Samadrita",
    education: [
      {
        degree: "Bachelor of Technology",
        institute: "Institute of Engineering and Management",
        location: "Kolkata",
        year: "2019 – 2023",
        extra: "CGPA: 8.53"
      }
    ]
  },
  {
    name: "Shekhar",
    education: [
      {
        degree: "Bachelor of Technology, Electronics and Communication Engineering",
        institute: "Sikkim Manipal Institute of Technology",
        location: "Majitar, Sikkim, India",
        year: "July 2018 – Oct 2022"
      },
      {
        degree: "Intermediate (12th)",
        institute: "Eden Junior College",
        location: "Patna, Bihar, India",
        year: "July 2016 – July 2018"
      },
      {
        degree: "Boards (10th)",
        institute: "Loyola High School",
        location: "Patna, Bihar, India",
        year: "March 2015 – March 2016"
      }
    ]
  }
]

export default educationData