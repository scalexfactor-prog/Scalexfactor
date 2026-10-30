export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    "question": "What is the standard turnaround time for a complete web platform rebuild?",
    "answer": "Most custom full-stack builds are delivered within 4 to 8 weeks through structured two-week sprints. High-velocity marketing sites and CRO overhauls can launch in as few as 21 days with continuous integration."
  },
  {
    "question": "Do you contractually guarantee Core Web Vitals and Lighthouse scores?",
    "answer": "Yes. Our standard engineering contracts stipulate a minimum 90+ Lighthouse benchmark across Performance, Accessibility, Best Practices, and SEO on standard mobile networks prior to client sign-off."
  },
  {
    "question": "How do you handle post-launch website maintenance and security?",
    "answer": "We provide dedicated High-Availability SLA maintenance packages including 24/7 server health tracking, daily cloud backups, weekly dependency patches, and guaranteed sub-hour emergency response times."
  },
  {
    "question": "How do we track the direct commercial ROI of our SEO and ad campaigns?",
    "answer": "We deploy a customized analytics dashboard linking your web conversion events directly into your CRM (HubSpot, Salesforce, or custom DB). You see clear multi-touch attribution connecting visitor clicks to booked revenue."
  }
];
