export interface Service {
  category: string
  items: string[]
}

const servicesData: Service[] = [
  {
    category: "Web & AI Development Combos",
    items: [
      "Full‑stack AI web app with React + AI chatbot",
      "AI SaaS platform – front end + backend + GPT integration",
      "Custom generative AI features for existing web apps"
    ]
  },
  {
    category: "Specialized AI Components",
    items: [
      "AI chatbot setup with integration into your website",
      "LLM prompt optimization + system integration",
      "AI workflow automation (n8n / Make) + backend APIs"
    ]
  },
  {
    category: "Consulting & Strategy",
    items: [
      "AI integration planning and architectural consulting",
      "Workflow automation strategy",
      "Tooling advice (e.g., which API/models to adopt)"
    ]
  }
]

export default servicesData