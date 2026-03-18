export interface ExperienceItem {
  role: string
  company: string
  location?: string
  duration: string
  points: string[]
}

export interface PersonExperience {
  name: string
  experiences: ExperienceItem[]
}

const experienceData: PersonExperience[] = [
  {
    name: "Samadrita",
    experiences: [
      {
        role: "Gen AI Engineer",
        company: "Capgemini",
        duration: "Present",
        points: [
          "Designed and deployed AI chatbot using GPT-4o, LangGraph, and AI Agents",
          "Built autonomous issue-resolution chatbot with backend execution",
          "Implemented RAG, embeddings, and prompt engineering",
          "Trained chatbot on proprietary datasets",
          "Evaluated Azure OpenAI, GPT, and LLaMA models"
        ]
      }
    ]
  },
  {
    name: "Shekhar",
    experiences: [
      {
        role: "Senior Software Engineer",
        company: "Capgemini Technology Services India LTD.",
        location: "Bengaluru, KA",
        duration: "Dec 2022 – Present",
        points: [
          "Developed AI-powered chatbot using client-specific datasets",
          "Applied ML for context-aware responses",
          "Built frontend using React.js, HTML, CSS",
          "Integrated backend via REST APIs",
          "Designed scalable modular architecture",
          "Performed production-level testing"
        ]
      }
    ]
  }
]

export default experienceData