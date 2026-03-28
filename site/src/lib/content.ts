// Content parsed from the info.md file,single source of truth

export const siteContent = {
  name: "Emmanuel Ayemere",
  title: "Software Engineer · Systems Architect · Builder",
  tagline: "Building software systems, teams, and tools for the AI era.",
  github: "https://github.com/EhisEA",
  linkedin: "https://linkedin.com/in/ayemere-emmanuel",
  email: "emmanueleayemere@gmail.com",

  hero: {
    heading: "Builder of Software Systems",
    description:
      "For the past 7+ years I have been building systems across healthcare, fintech, live streaming, and digital marketplaces.",
    philosophy: [
      "I don't define myself by the tools I use.",
      "I define myself by the systems I build and the problems I solve.",
    ],
    aiInterest:
      "Recently I have become deeply interested in how AI transforms how humans build software.",
    aiVision:
      "I am exploring how AI can act not just as a chatbot, but as an executable reasoning tool that helps humans design and build systems faster.",
  },

  about: {
    intro:
      "I am a software engineer and systems architect who enjoys building complex systems and helping teams deliver products that scale.",
    journey:
      "Across my career I have built across diverse domains, stabilizing teams and designing architectures that enable products to grow.",
    commitment:
      "I stay with the systems I build long enough to see them evolve, scale, and create real impact.",
    domains: [
      "Telemedicine infrastructure",
      "Cross-border payments",
      "Crypto finance platforms",
      "Talent discovery platforms",
      "Multi-service delivery platforms",
    ],
    mentoring:
      "Along the way I have also mentored engineers, helped teams think more clearly about problems, and led projects from idea → architecture → production.",
    currentFocus:
      "Today my curiosity is increasingly focused on the AI-assisted future of software development.",
  },

  howIThink: {
    premise: "I see engineering primarily as problem solving.",
    observation: "Languages and frameworks change constantly.",
    constants: [
      "understand systems",
      "reason through problems",
      "design architectures",
      "build reliable solutions",
    ],
    aiAmplification: "AI is now amplifying this process.",
    quote: "AI expands how quickly humans can move from idea → working system.",
    future:
      "The future of engineering will likely involve humans collaborating with AI systems to design, reason about, and build software.",
    closing: "This is the frontier I am exploring.",
  },

  systems: [
    {
      title: "Telemedicine Infrastructure",
      company: "MobiHealth",
      url: "https://mobihealthinternational.com",
      status: "live" as const,
      problem:
        "Built telemedicine and B2B infrastructure enabling clinics, HMOs, pharmacies, and more to plug into remote healthcare delivery.",
      built: [
        "Rebuilt core architecture",
        "Stabilized engineering team",
        "Built telemedicine platform",
        "Designed B2B infrastructure layer",
        "Internal tools for operations and management",
      ],
      impact: [
        "500% increase in engineering productivity",
        "B2B infrastructure powering multiple clinic partnerships",
        "Telemedicine infrastructure deployed across clinics, pharmacies, and PHCs",
      ],
    },
    {
      title: "Cross-Border Payments Platform",
      company: "Hizo",
      url: "https://hizo.africa",
      status: "live" as const,
      problem:
        "Built a cross-border payments platform enabling users to spend money internationally.",
      built: [
        "Currency conversion rate engine",
        "Multi-wallet infrastructure",
        "Virtual card issuance",
        "Multi-tier KYC identity verification",
      ],
      impact: [
        "1000% increase in users",
        "3000% increase in revenue",
      ],
    },
    {
      title: "Crypto Finance Platform",
      company: "Vent Africa",
      url: "https://vent.africa",
      status: "live" as const,
      problem:
        "Built a crypto finance platform for trading, stablecoin storage, and instant payouts across Africa.",
      built: [
        "Multi-asset trading",
        "Fiat and crypto withdrawals",
        "Bank payout infrastructure",
        "Transaction analytics",
        "In-app education platform",
        "Gamified referral system",
      ],
      impact: [
        "Trusted by thousands of users",
        "50% increase in retention",
        "Improved performance and security",
      ],
    },
    {
      title: "Live Streaming Platform",
      company: "Raven Live",
      url: "https://www.ravenlive.com",
      status: "discontinued" as const,
      problem:
        "Built a platform enabling African creators to monetize live content globally.",
      built: [
        "Live video streaming",
        "Digital wallet",
        "Ticketing infrastructure",
        "Real-time chat",
        "Creator monetization tools",
      ],
      impact: [
        "Live video streaming infrastructure",
        "Creator monetization system",
        "Real-time chat & ticketing",
        "Digital wallet integration",
      ],
    },
    {
      title: "Multi-Service Delivery Platform",
      company: "Trazo",
      url: "https://usetrazo.com",
      status: "live" as const,
      problem:
        "Built a multi-service delivery platform for food, groceries, pharmacy, gas, laundry, and cleaning across Nigerian cities.",
      built: [
        "End-to-end ordering with scheduled/future orders",
        "Wallet system with card and bank top-ups",
        "\"Pay-for-Me\" social commerce feature",
        "Real-time delivery tracking with QR verification",
        "Rider earnings and wallet management",
        "Multi-city operations",
      ],
      impact: [
        "Live across cities in Nigeria",
        "4+ service categories on one platform",
        "Full system architected and shipped",
      ],
    },
    {
      title: "Talent Discovery Platform",
      company: "De9jaSpirit Talent Hunt",
      url: "https://dth.ng",
      status: "live" as const,
      problem:
        "Built a talent discovery and competition platform, from applications to live voting to weekly rewards.",
      built: [
        "Contestant application and audition pipeline",
        "Talent competition with seasonal voting rounds",
        "Social timeline with posts, reactions, and short-form video",
        "Live streaming for performances",
        "In-app e-commerce and subscription system",
        "Ad placement algorithm balancing revenue and UX",
      ],
      impact: [
        "40% increase in platform revenue",
        "Turned a competition app into a daily-use platform",
      ],
    },
    {
      title: "Food Delivery Platform",
      company: "Chops",
      url: "https://buychops.com",
      status: "coming-soon" as const,
      problem:
        "Built a food delivery platform end-to-end, customer and rider systems.",
      built: [
        "Search and ordering system",
        "Gamified ordering experience",
        "Real-time delivery tracking",
        "Notification infrastructure",
      ],
      impact: ["Coming soon"],
    },
    {
      title: "Food Delivery System",
      company: "Kudel Express",
      url: null,
      status: "discontinued" as const,
      problem:
        "Designed full system architecture and built User, Vendor, and Delivery apps through to production launch.",
      built: [
        "Menu creation system",
        "Food search and ordering",
        "Real-time communication",
        "Payment infrastructure",
        "Notification system",
        "CI/CD pipeline",
      ],
      impact: [
        "Empowered first-time restaurants to experience food delivery",
        "Extended restaurant revenue through digital ordering",
        "3 apps delivered (customer, vendor, rider)",
      ],
    },
  ],

  metrics: [
    { value: "7+", label: "Years Building" },
    { value: "8+", label: "Systems Shipped" },
    { value: "500%", label: "Productivity Gains" },
    { value: "3000%", label: "Revenue Growth" },
  ],

  mentoring: {
    headline: "I build people, not just software.",
    description:
      "Long-term mentor to engineers and professionals across tech and adjacent industries. Several mentees now lead teams and run their own companies.",
    details:
      "Along the way I have helped teams think more clearly about problems, and led projects from idea → architecture → production.",
  },

  aiExperiments: {
    workshops: {
      title: "AI Beyond the Chat Interface",
      description:
        "I run hands-on sessions teaching people across fields, engineers, product designers, product managers, institutional professionals, and more, how to use AI as an executable thinking and execution tool, not just a chatbot.",
      result:
        "Participants typically report productivity increases of 200–500% after integrating AI into their existing workflows.",
      participants: [
        "Software Engineers",
        "Product Designers",
        "Product Managers",
        "Production Engineers",
        "Non-technical Professionals",
      ],
      topics: [
        "AI-augmented workflows across disciplines",
        "Reasoning and problem-solving with AI",
        "Using AI to extend your existing skills",
        "Moving from awareness to real execution",
      ],
    },
    exploration: {
      title: "Current Exploration",
      description: "I am currently experimenting with ideas around:",
      areas: [
        "AI-assisted system architecture",
        "AI developer tooling",
        "Agent-based workflows",
        "Intent → system generation",
      ],
      example: {
        description:
          "A system where a developer describes a problem and AI helps generate:",
        outputs: [
          "System architecture",
          "Implementation plan",
          "Code scaffolding",
          "Working prototype",
        ],
      },
    },
  },


  writing: {
    intro: "Topics I enjoy writing about:",
    topics: [
      "AI will change how software is built",
      "Why engineers should think like architects",
      "AI beyond the chat interface",
      "From idea to system",
    ],
  },


  thesis: {
    statement:
      "The future of software development is not just writing code.",
    vision:
      "It is designing systems in collaboration with intelligent tools.",
    mission: "I want to help build that future.",
  },
};
