export interface AchievementItem {
  title: string
  issuer?: string
  description?: string
}

export interface PersonAchievements {
  name: string
  achievements: AchievementItem[]
}

const achievementsData: PersonAchievements[] = [
  {
    name: "Samadrita",
    achievements: [
      {
        title: "Microsoft Certified: Azure AI Fundamentals",
        issuer: "Microsoft",
        description: "Credential ID: ICBF4AC403F5A86D"
      },
      {
        title: "Natural Language Processing in Python",
        issuer: "Udemy"
      },
      {
        title: "NASSCOM Certification",
        issuer: "National Association of Software and Service Companies",
        description: "Recognised by NCVET : CN-0706970"
      },
      {
        title: "Google Business Intelligence Professional Certificate",
        issuer: "Coursera"
      },
      {
        title: "IBM Data Science Foundations",
        issuer: "Coursera / IBM"
      }
    ]
  },
  {
    name: "Shekhar",
    achievements: [
      {
        title: "AWS Certified Cloud Practitioner"
      },
      {
        title: "Google Cloud Digital Leader"
      }
    ]
  }
]

export default achievementsData