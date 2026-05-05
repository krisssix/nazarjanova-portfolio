export interface ProjectContent {
  about: string;
  problem: string;
  solution: string;
  snapshot?: { key: string; value: string }[];
  problemDetails?: { title: string; description: string }[];
  questions?: string[];
  goals?: { title: string; description: string }[];
  research?: {
    text: string;
    cards?: string[];
    methods?: string[];
    insights?: string[];
  };
  approach?: { title: string; description: string; decision: string }[];
  architecture?: {
    title: string;
    items: string[];
  }[];
  features?: {
    title: string;
    description: string;
    items: { title: string; description: string }[];
  };
  accessibility?: string[];
  screens?: { title: string; description: string }[];
  visualDesign?: {
    description: string;
    principles?: { title: string; description: string }[];
    colors: { color: string; name: string; desc: string }[];
  };
  painPoints?: string[];
  opportunities?: string[];
  userJourneys?: {
    description: string[];
    patterns: string[];
    insights: string[];
    persona: {
      name: string;
      role: string;
      image: string; // url or path
      points: string[];
    };
    journeySteps: { title: string; description: string }[];
  };
  impact?: string[];
  takeaways?: string | string[];
  process: { step: string; title: string; description: string }[];
  wireframesImage?: string;
  uiImage?: string;
  summary?: string;
  conceptualTransformation?: {
    before: string[];
    after: string[];
  };
  productContext?: {
    text: string;
    cards: { title: string; description: string }[];
  };
  roleDescription?: string;
  responsibilities?: string[];
  modules?: { title: string; description: string }[];
  dataTableDesign?: {
    text: string;
    cards: { title: string; description: string }[];
  };
  formsDetail?: {
    text: string;
    cards: { title: string; description: string }[];
  };
  dashboardDetail?: {
    text: string;
    focusAreas: string[];
  };
  outcomeText?: string;
  learningsText?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  duration: string;
  team?: string;
  description: string;
  challenges: string;
  figmaUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  tags: string[];
  gradient: string;
  image: string;
  content: ProjectContent;
}

export const projects: Project[] = [
  {
    id: "rtvs",
    title: "RTVS Redesign",
    subtitle: "END-TO-END APPLICATION",
    role: "UX Designer",
    duration: "8 months",
    figmaUrl: "https://www.figma.com/design/YGPl0XwzXFz4WMtHdEo1Tl/RTVS---Final-v%C3%BDstupy",
    description: "Improving core user flows and information architecture for Slovakia's public media platform, focusing on consistency, accessibility, and intuitive form-driven journeys.",
    challenges: "The audit revealed inconsistent navigation across subwebs, unclear form structures, and friction in multi-step processes, leading to high cognitive load for users.",
    tags: ["UX Research", "Design System", "Media Platform", "Accessibility"],
    gradient: "from-red-50 to-orange-100",
    image: "./images/project-rtv.png",
    content: {
      snapshot: [
        { key: "Role", value: "UX Designer" },
        { key: "Platform", value: "Responsive web" },
        { key: "Duration", value: "8 months" },
        { key: "Scope", value: "UX audit, flow analysis, navigation redesign, form simplification, accessibility, component standardization" },
        { key: "UX Focus", value: "Turning fragmented media experiences into clearer, scalable, and easier-to-use flows" },
        { key: "Outcome", value: "Redesigned experience with clearer navigation, simplified flows, and stronger visual consistency" }
      ],
      about: "RTVS Redesign focused on improving several core user flows across a complex public media platform. The work was based on analysis of existing interaction patterns, form-driven journeys, navigation structures, accessibility issues, and inconsistencies across the main RTVS website and related subwebs.\n\nThe goal was to turn fragmented and sometimes confusing experiences into clearer, more consistent, and scalable flows that improve usability, orientation, and task completion. The redesign was not only a visual update; it focused on simplifying how users move through content, forms, categories, and related media services.",
      problem: "The existing digital ecosystem suffered from fragmented navigation between the main site and subwebs, unclear progress feedback in complex forms, and inconsistent interface patterns that made the platform difficult to scale and maintain.",
      solution: "I simplified core flows, reduced unnecessary steps, improved labels, and standardized reusable components. By introducing clearer states for progress, errors, and success, the redesign reduces cognitive load across complex media journeys.",
      research: {
        text: "The project started with an analysis of the existing RTVS digital ecosystem and selected competitor platforms. The audit covered website structure, navigation, desktop and mobile behavior, accessibility, visual consistency, and interaction patterns. This helped identify recurring problems like inconsistent return paths and weak visual consistency between services.",
        cards: [
          "Navigation and information architecture",
          "Mobile and desktop usability",
          "Accessibility and focus behavior",
          "Visual consistency across subwebs",
          "Content discovery and search",
          "Forms, states, and completion flows"
        ]
      },
      problemDetails: [
        { title: "Fragmented navigation", description: "The main RTVS website and subwebs used different navigation patterns and return paths, making it hard for users to understand where they were." },
        { title: "Complex form-driven journeys", description: "User journeys relied on multi-step flows lacking clear labels, progress feedback, and understandable system states." },
        { title: "Inconsistent interface patterns", description: "Different sections used different typography and interaction styles, reducing predictability and scalability." },
        { title: "Accessibility and mobile friction", description: "Small touch targets and inconsistent mobile behavior created friction for keyboard and mobile users." }
      ],
      questions: [
        "How can users find relevant RTVS content faster?",
        "How can navigation stay consistent across all services?",
        "How can complex forms become easier to complete?",
        "How can the interface communicate states more clearly?"
      ],
      goals: [
        { title: "01 Audit & Flow Mapping", description: "Mapped existing journeys and navigation structures to identify friction points and inconsistencies." },
        { title: "02 Information Architecture", description: "Reorganized key flows and labels to make content discovery and navigation more intuitive." },
        { title: "03 Component Standardization", description: "Created consistent patterns for forms, buttons, states, and content modules." },
        { title: "04 Validation & Iteration", description: "Reviewed redesigned flows against usability, accessibility, and edge-case requirements." }
      ],
      approach: [
        {
          title: "Mapping the Existing Experience",
          description: "I reviewed key flows, forms, and transitions between the main website and related subwebs to understand user movement.",
          decision: "I focused on mapping real interaction points instead of only individual screens to reveal where users lose context."
        },
        {
          title: "Simplifying Navigation",
          description: "Audit showed inconsistent patterns between services, making return paths and orientation difficult for users.",
          decision: "I prioritized clearer navigation logic and stronger labels so users could move through the ecosystem without feeling lost."
        },
        {
          title: "Improving Form Experiences",
          description: "Key flows depended on forms that needed clearer grouping, better labels, and visible progress markers.",
          decision: "I reduced unnecessary steps and designed clearer progress, error, and success states to make completion predictable."
        },
        {
          title: "Standardizing Components",
          description: "Inconsistent interface patterns across subwebs affected visual coherence and maintenance efficiency.",
          decision: "I introduced reusable patterns for cards, buttons, and system states to make the interface more scalable."
        },
        {
          title: "Accessibility as Core UX",
          description: "Analysis highlighted issues with touch targets, focus behavior, and mobile interacts critical for public-service media.",
          decision: "I treated accessibility as part of the core UX, ensuring clearer hierarchy and more comfortable mobile interactions."
        },
        {
          title: "Creating a Scalable System",
          description: "RTVS combines diverse content (news, TV, radio, archive). The redesign needed to support this without fragmentation.",
          decision: "I designed patterns that could scale across different content types while still feeling like one coherent RTVS experience."
        }
      ],
      architecture: [
        { title: "Main RTVS", items: ["News", "Program", "Archive", "Television", "Radio", "Search"] },
        { title: "Subwebs", items: ["Clear return path", "Shared navigation", "Consistent footer", "Unified rules"] },
        { title: "User tasks", items: ["Find content", "Filter/search", "Complete form", "Understand status"] }
      ],
      features: {
        title: "Form & State Improvements",
        description: "The redesign focused on making form-driven journeys easier to follow through structured feedback and clearer states.",
        items: [
          { title: "Progress states", description: "Help users understand where they are in a multi-step process." },
          { title: "Error states", description: "Explain what went wrong and how to fix it immediately." },
          { title: "Success states", description: "Confirm completion clearly and reduce user uncertainty." },
          { title: "Loading states", description: "Communicate system activity to prevent repeated actions." }
        ]
      },
      accessibility: [
        "Readable visual hierarchy",
        "Clear and consistent focus states",
        "Comfortable touch target sizes",
        "High-contrast text and interactive elements",
        "Keyboard-friendly navigation patterns",
        "Understandable labels for screen readers"
      ],
      screens: [
        { title: "Homepage", description: "Clearer hierarchy for news, programs, and media sections." },
        { title: "Search", description: "Structured results, better filters, and improved scannability." },
        { title: "Program", description: "Improved orientation between days, channels, and broadcasts." },
        { title: "Forms", description: "Simplified steps, clearer labels, and validation states." },
        { title: "Navigation", description: "Consistent structure across main sections and subwebs." },
        { title: "Archive", description: "Easier discovery of older video and audio content." }
      ],
      visualDesign: {
        description: "The visual direction was built on clarity and accessibility, using a clean system of colors, typography, and interaction patterns that works across diverse media content. The goal was to create a modern, professional public-service identity that feels trustworthy and easy to navigate.",
        principles: [
          { title: "Clarity", description: "Removing visual noise to highlight core content and actions." },
          { title: "Consistency", description: "Standardizing patterns across all subwebs and services." },
          { title: "Accessibility", description: "Ensuring inclusive design for all user groups and devices." },
          { title: "Scalability", description: "Designing components that work for news, TV, and radio." }
        ],
        colors: [
          { color: "#E30613", name: "RTVS Red", desc: "Core brand color used for primary accents and markers." },
          { color: "#1A1A1A", name: "Deep Gray", desc: "Used for primary typography and dark backgrounds." },
          { color: "#F5F5F5", name: "Surface", desc: "Main background and subtle divider color." }
        ]
      },
      summary: "A redesign of RTVS core user flows focused on clearer navigation, simplified form journeys, accessibility, and consistent interaction patterns.",
      conceptualTransformation: {
        before: [
          "Fragmented navigation",
          "Inconsistent patterns",
          "Unclear form states",
          "Weak mobile behavior"
        ],
        after: [
          "Clearer IA",
          "Reusable components",
          "Predictable states",
          "Scalable media experience"
        ]
      },
      process: [
        { step: "01", title: "Audit", description: "Mapping friction points across existing journeys and subwebs." },
        { step: "02", title: "IA Redesign", description: "Simplifying navigation hierarchy and form structures." },
        { step: "03", title: "Standardization", description: "Defining reusable components and system states." },
        { step: "04", title: "Refinement", description: "Iterating on accessibility and mobile interaction comfort." }
      ],
      impact: [
        "Created a more consistent foundation across the fragmented ecosystem",
        "Reduced cognitive load in complex, multi-step form journeys",
        "Improved orientation and return paths between related subwebs",
        "Strengthened accessibility standards for a broad public audience"
      ],
      takeaways: "Redesigning a public media platform is about more than aesthetics; it's about making complex content structures understandable and creating patterns that scale across diverse digital services."
    }
  },
  {
    id: "ticketportal",
    title: "Ticket Portal Backoffice",
    subtitle: "ENTERPRISE MANAGEMENT SYSTEM",
    role: "Lead Designer",
    duration: "3 months",
    team: "1 designer, 4 developers",
    description:
      "Designed a unified enterprise backoffice for managing a complex cashless event ecosystem — from events, operators, and terminals to transactions, inventory, and payout workflows.",
    challenges:
      "Creating an intuitive interface for complex workflows across multiple business domains.",
    figmaUrl: "https://www.figma.com/design/JVFaiTlOGdcpfpQ4ehaZgo/Ticketportal-backoffice?node-id=1195-260768",
    tags: ["Product Design", "Design Systems", "Enterprise UX", "Prototyping"],
    gradient: "from-amber-50 to-orange-100",
    image: "./images/ticketportal.png",
    content: {
      snapshot: [
        { key: "Role", value: "Lead Designer" },
        { key: "Platform", value: "Responsive web backoffice" },
        { key: "Duration", value: "3 months" },
        { key: "Team", value: "1 designer, 4 developers" },
        { key: "Scope", value: "System architecture, dashboard, data tables, role-based modules, forms, reporting, component library" },
        { key: "UX Focus", value: "Designing a scalable enterprise backoffice for managing events, operators, sales points, terminals, transactions, inventory, and cashless payment workflows" },
        { key: "Outcome", value: "A unified management system that turns complex operational workflows into structured, consistent, and easier-to-use backoffice modules" }
      ],
      about: "Ticket Portal Backoffice is an enterprise management system designed to support the cashless operations of Ticketportal's event ecosystem.\n\nThe platform needed to help internal teams, organizers, operators, and merchants manage a complex network of events, sectors, sales points, terminals, warehouses, transactions, credit accounts, discounts, and payout-related workflows.\n\nThe goal was to design a unified backoffice that could replace fragmented operational tools with one structured, scalable, and consistent management environment.\n\nThis was not only a visual dashboard redesign. The main challenge was to translate a complex technical and operational architecture into clear modules, predictable workflows, reusable components, and data-heavy interfaces that could support daily event operations.",
      problem: "The system had to support a large number of interconnected entities: organizers, operators, merchants, events, sectors, sales points, terminals, warehouses, transactions, credit accounts, discounts, and payment integrations. Without a clear structure, users would need to switch between disconnected tools, repeat manual work, and handle operational errors under time pressure.",
      solution: "I designed a unified enterprise backoffice with structured modules, standardized data tables, reusable form patterns, clear detail pages, role-based access logic, and dashboard views that help users monitor operations, manage entities, and complete daily tasks more efficiently.",
      productContext: {
        text: "The backoffice is part of a larger cashless ecosystem built around Cashless CORE. Cashless CORE centralizes data, business logic, transactions, user accounts, credits, and API communication. It connects with the cashless management portal, POS application, ticketing system, CRM, mobile app, payment providers, and terminal management systems.\n\nThe management portal acts as the operational interface for users who need to configure, monitor, and manage this ecosystem.",
        cards: [
          { title: "Cashless CORE", description: "Central system for data, transactions, accounts, and integrations." },
          { title: "Management Portal", description: "Backoffice interface for admins, organizers, operators, and merchants." },
          { title: "POS Application", description: "Tablet-based application used during event sales." },
          { title: "External Integrations", description: "Ticketing system, CRM, mobile app, payment providers, TMS, and reporting tools." }
        ]
      },
      problemDetails: [
        { title: "Complex data relationships", description: "The system connects events, organizers, operators, merchants, sales points, terminals, warehouses, transactions, discounts, and credit accounts. Users need to understand these relationships without being overwhelmed." },
        { title: "Role-based complexity", description: "Different user groups need different levels of access. Admins, organizers, operators, and merchants should only see and manage what is relevant to their responsibilities." },
        { title: "High operational pressure", description: "Event operations are time-sensitive. Users need to configure, monitor, and troubleshoot data quickly, especially around terminals, sales points, inventory, transactions, and payouts." },
        { title: "Data-heavy workflows", description: "The system relies on tables, filters, forms, detail pages, status labels, and reports. These patterns need to be consistent, predictable, and efficient." }
      ],
      questions: [
        "What is happening across events and sales points?",
        "Which terminals, merchants, or operators need attention?",
        "Where can I find and edit the right entity?",
        "What status, transaction, or configuration issue needs action?"
      ],
      process: [
        { step: "01", title: "Workflow Analysis", description: "Mapped operational workflows across events, operators, merchants, sales points, terminals, warehouses, transactions, and credit accounts." },
        { step: "02", title: "System Architecture", description: "Structured the backoffice into clear modules that match the business logic and user responsibilities." },
        { step: "03", title: "Component Library", description: "Designed reusable patterns for tables, filters, forms, detail pages, dashboards, status labels, and actions." },
        { step: "04", title: "Prototyping & Handoff", description: "Created high-fidelity screens and documented interaction patterns for developer handoff and implementation." }
      ],
      roleDescription: "As the lead designer, I was responsible for translating complex business and technical requirements into a structured backoffice experience. I designed the information architecture, key modules, data-heavy layouts, reusable components, dashboard patterns, and high-fidelity screens.\n\nMy work focused on making complex operational workflows easier to understand, manage, and scale.",
      responsibilities: [
        "Backoffice information architecture",
        "Module structure and navigation",
        "Dashboard UX and data visualization",
        "Data table patterns",
        "Filtering and search behavior",
        "Form and detail page design",
        "Role-based workflow considerations",
        "Component library",
        "High-fidelity UI design",
        "Developer handoff support"
      ],
      approach: [
        {
          title: "Turning System Complexity into Clear Modules",
          description: "The cashless ecosystem contains many interconnected entities, including organizers, operators, merchants, events, sectors, sales points, terminals, warehouses, transactions, discounts, and credit accounts. The first design challenge was to organize this complexity into a structure users could understand.",
          decision: "I designed the backoffice around clear business modules instead of exposing the full technical complexity of the system. Each module focuses on a specific operational area, making the interface easier to navigate and scale."
        },
        {
          title: "Designing for Role-Based Workflows",
          description: "Different users interact with the system in different ways. Administrators need broad system control, organizers need event-level management, operators need operational oversight, and merchants need access to sales-related areas.",
          decision: "I considered role-based access as part of the UX structure. The interface needed to support different levels of visibility, permissions, and task ownership without creating separate experiences for every user type."
        },
        {
          title: "Making Data Tables Usable",
          description: "A large part of the system depends on structured data: lists of events, sales points, terminals, warehouses, transactions, merchants, credit accounts, and configurations. These views needed to be scannable and efficient.",
          decision: "I standardized table layouts, column hierarchy, filters, status labels, search behavior, and row actions to help users find, compare, and manage data faster."
        },
        {
          title: "Simplifying Forms and Entity Management",
          description: "Many tasks involve creating or editing entities such as events, operators, sales points, terminals, merchants, sectors, items, warehouses, and discounts. These workflows can become error-prone if forms are too long or unclear.",
          decision: "I designed consistent form patterns with clear grouping, predictable input behavior, validation, and logical action placement. The goal was to reduce uncertainty and make entity management feel repeatable."
        },
        {
          title: "Supporting Monitoring and Operational Awareness",
          description: "Backoffice users need to understand the current state of the system: active events, terminal status, sales performance, transactions, inventory, and operational issues.",
          decision: "I designed dashboard and reporting views that prioritize key operational signals before detailed data. Users should first understand what needs attention, then drill down into tables or details."
        },
        {
          title: "Creating a Scalable Component System",
          description: "Because the product includes many modules and repeated workflows, the UI needed to stay consistent as the system grows.",
          decision: "I introduced reusable components for cards, filters, tables, forms, status indicators, navigation, charts, empty states, loading states, and action menus. This helped create consistency for users and efficiency for development."
        }
      ],
      architecture: [
        { title: "Core Management", items: ["Dashboard", "Events", "Organizers", "Operators", "Merchants"] },
        { title: "Operations", items: ["Sectors", "Sales Points", "Terminals", "Warehouses", "Items & Price Lists"] },
        { title: "Financial & Data", items: ["Transactions", "Credit Accounts", "Discounts", "Payouts", "Reports"] },
        { title: "System Support", items: ["Roles & Permissions", "Integrations", "Logs", "Settings"] }
      ],
      modules: [
        { title: "Dashboard", description: "Overview of system activity, performance, operational signals, and key metrics." },
        { title: "Events", description: "Management of cashless event setup, configuration, and operational context." },
        { title: "Organizers & Operators", description: "Structured management of business entities and their relationships." },
        { title: "Merchants", description: "Management of sellers, assigned sales points, and related permissions." },
        { title: "Sales Points", description: "Configuration of sales locations, local stock, assigned terminals, and pricing logic." },
        { title: "Terminals", description: "Overview and management of payment terminals, status, assignment, and configuration." },
        { title: "Warehouses", description: "Inventory and stock-related management for event operations." },
        { title: "Transactions", description: "Searchable and filterable overview of transaction data and payment-related activity." },
        { title: "Credit Accounts", description: "Management of customer credit accounts, balances, and related account actions." },
        { title: "Discounts", description: "Setup and management of discount rules and their relation to users, orders, or products." },
        { title: "Reports", description: "Operational and financial outputs for monitoring and decision-making." },
        { title: "Settings", description: "System-level configuration, access, and supporting administration." }
      ],
      dataTableDesign: {
        text: "Because the backoffice is data-heavy, table design became one of the most important UX patterns. Tables needed to support fast scanning, filtering, comparison, and direct access to detail pages.",
        cards: [
          { title: "Column hierarchy", description: "Important identifiers, statuses, and actions are visually prioritized." },
          { title: "Filtering", description: "Users can narrow large datasets by event, status, date, entity, or operational category." },
          { title: "Status labels", description: "Clear labels help users quickly understand whether an item is active, inactive, pending, failed, or requires action." },
          { title: "Row actions", description: "Common actions are placed close to the relevant row to reduce navigation overhead." }
        ]
      },
      formsDetail: {
        text: "Entity creation and editing flows needed to feel consistent across the system. Whether users are creating an event, terminal, sales point, merchant, warehouse, or discount, the interaction pattern should feel familiar.",
        cards: [
          { title: "Grouped inputs", description: "Related fields are grouped to reduce cognitive load." },
          { title: "Clear validation", description: "Errors explain what went wrong and how to fix it." },
          { title: "Predictable actions", description: "Save, cancel, edit, and delete actions are placed consistently." },
          { title: "Detail overview", description: "Users can review key entity information before editing." }
        ]
      },
      dashboardDetail: {
        text: "The dashboard was designed to give users a quick operational overview before they dive into individual modules. It helps users monitor activity, spot issues, and understand current performance.",
        focusAreas: [
          "Active events",
          "Transaction activity",
          "Terminal status",
          "Sales point performance",
          "Inventory signals",
          "Financial summaries",
          "Operational alerts",
          "Reports and exports"
        ]
      },
      visualDesign: {
        description: "The visual direction focused on clarity, efficiency, and trust. Because the product is used for operational and financial workflows, the interface needed to feel structured, calm, and reliable.",
        principles: [
          { title: "Clarity", description: "Users should understand where they are, what they are managing, and what action is available." },
          { title: "Consistency", description: "Repeated patterns should behave the same way across modules." },
          { title: "Efficiency", description: "High-frequency tasks should be fast to scan, filter, edit, and complete." },
          { title: "Scalability", description: "The design system should support new modules, entities, reports, and integrations over time." }
        ],
        colors: [
          { color: "#1A1A1A", name: "Deep Black", desc: "Primary typography and structural elements." },
          { color: "#F5F5F0", name: "Warm Light", desc: "Backgrounds and secondary interface areas." },
          { color: "#3B82F6", name: "System Blue", desc: "Active states, links, and primary actions." }
        ]
      },
      outcomeText: "The result is a unified enterprise backoffice concept for managing a complex cashless event ecosystem. The design brings together dashboards, structured data tables, entity management, terminal oversight, inventory-related modules, transaction views, reports, and role-based workflows into one consistent interface.\n\nThe system helps users manage event operations from a central place, reduce context switching, and work with complex operational data more confidently.",
      learningsText: "This project showed that enterprise UX is not about making complex systems look simple at any cost. It is about creating structure, predictability, and hierarchy so users can manage complexity without losing control.\n\nThe most important design decision was to build the interface around operational modules and repeated patterns instead of treating every feature as a separate screen.",
      impact: [
        "Unified management system for a complex cashless event ecosystem",
        "Structured modules replacing fragmented operational tools",
        "Consistent data table patterns across all entity types",
        "Reusable component library for development efficiency"
      ],
      takeaways: [
        "Enterprise backoffice UX depends on clear structure more than visual decoration.",
        "Data-heavy systems need strong table, filter, status, and action patterns.",
        "Role-based access should shape navigation and workflow design from the beginning.",
        "Reusable components reduce learning effort for users and speed up development.",
        "Dashboards should highlight operational signals before detailed data.",
        "Complex systems feel easier when repeated workflows behave consistently."
      ]
    }
  },
  {
    id: "lims",
    title: "LIMS — Laboratory Management",
    subtitle: "MASTER'S THESIS PROJECT",
    role: "Lead Designer & Developer & Analyst",
    duration: "Academic Project",
    team: "Supervisor: Ing. David Procházka, Ph.D.",
    description:
      "Laboratory Information Management System designed for research on plastic-eating organisms. A complete end-to-end project including research, design, and development — contributing to environmental sustainability.",
    challenges:
      "Balancing academic requirements with real-world usability for scientific researchers.",
    liveUrl: "https://nazarjanova.my.canva.site/lims",
    githubUrl: "https://github.com/krisssix/lims-project",
    tags: ["Full Stack", "UX Design", "Development", "Research"],
    gradient: "from-emerald-50 to-teal-100",
    image: "./images/lims.png",
    content: {
      about: "This project originated as my Master’s thesis at Mendel University, focused on supporting research on plastic-eating organisms. The goal was to design and develop a custom Laboratory Information Management System (LIMS) tailored to the specific workflows of a research lab.\n\nUnlike generic LIMS solutions, this system needed to reflect real laboratory processes — from sample registration and experiment tracking to result analysis — while remaining intuitive for non-technical users.",
      problem: "Research teams relied on fragmented tools such as spreadsheets, handwritten logs, and disconnected systems. Existing commercial LIMS solutions were either too complex, too expensive, or not adaptable to the specific needs of this niche research domain.",
      solution: "I designed and developed a fully custom, end-to-end LIMS application that digitizes and streamlines the entire laboratory workflow. By combining UX thinking with technical implementation, I created a system that is both powerful and easy to use in a real lab environment.",
      painPoints: [
        "Data inconsistencies and loss of traceability",
        "Time-consuming manual data entry",
        "High risk of human error",
        "Poor visibility across experiments and results"
      ],
      opportunities: [
        "Centralized sample and experiment management",
        "Structured data input with validation to reduce errors",
        "Clear visualization of experiment progress and results",
        "Role-based access for different types of users",
        "Scalable architecture for future research needs"
      ],
      process: [
        { step: "01", title: "Requirements & Research", description: "Conducted interviews and shadowed researchers to understand workflows, identifying bottlenecks like manual tasks and missing validation." },
        { step: "02", title: "UX & System Design", description: "Designed a clean, task-oriented interface optimized for fast data entry, minimizing cognitive load and structuring data hierarchically." },
        { step: "03", title: "Development", description: "Built the full-stack application with a modular architecture, scalable database structure, and support for dynamic forms." },
        { step: "04", title: "Evaluation & Iteration", description: "Tested the system with actual lab users and refined usability of forms, data presentation, and performance." }
      ],
      impact: [
        "Reduced manual data handling and errors",
        "Improved traceability of experiments and samples",
        "Increased efficiency of daily lab operations",
        "Provided a scalable foundation for future research tools"
      ],
      takeaways: "This project strengthened my ability to bridge design and engineering in a complex, real-world domain. It also taught me how to translate highly specialized workflows into intuitive digital products."
    }
  },
  {
    id: "smart-home",
    title: "Smart Home Mobile App",
    subtitle: "UX/UI DESIGN CASE STUDY",
    role: "UX/UI Designer",
    duration: "Concept Project",
    description: "A comprehensive mobile ecosystem designed to simplify complex smart home management into a clear, task-oriented experience across monitoring, security, and family access.",
    challenges: "Smart homes involve a vast array of devices, permissions, and security states. Without a clear structure, users quickly feel overwhelmed and lose confidence in the system.",
    tags: ["Product Design", "UX Research", "Smart Home", "Mobile UI"],
    figmaUrl: "https://www.figma.com/design/nDLqSofI9XeTwKhr4hdAzp/Smart-Home---PEF-MENDELU?node-id=174-297&t=EFoQeUCvrcm0cnzh-0",
    gradient: "from-blue-50 to-indigo-100",
    image: "./images/SH.png",
    content: {
      snapshot: [
        { key: "Role", value: "UX/UI Designer" },
        { key: "Platform", value: "Mobile app" },
        { key: "Type", value: "Concept project" },
        { key: "Scope", value: "Dashboard, room navigation, device control, family access, security, scan flow" },
        { key: "UX Focus", value: "Simplifying a complex smart home ecosystem into a clear, visual, task-oriented experience" },
        { key: "Outcome", value: "A high-fidelity mobile concept that centralizes home monitoring, control, access, and security" }
      ],
      about: "Smart Home App is a mobile concept for managing connected devices, household members, and home security from one place. The goal was to design a calm, intuitive, and trustworthy experience for users who need to control multiple smart devices across different rooms without feeling overwhelmed. The app combines home monitoring, device control, family access management, security features, and device setup into one unified mobile experience.\n\nThe main design challenge was to turn a technically complex smart home ecosystem into an interface that feels simple, visual, and easy to use in everyday life.",
      problem: "Traditional smart home interfaces often suffer from information overload, making it hard to see 'if everything is okay' at a glance. Fragmented controls across rooms and devices lead to friction, while security-sensitive actions require a high level of trust that dense, technical dashboards fail to provide.",
      solution: "I designed a visual, room-based mobile experience that centralizes monitoring, control, family access, and security into one approachable dashboard. By prioritizing user intent over device lists, the app provides a tangible connection between digital controls and the physical home.",
      problemDetails: [
        { title: "Information overload", description: "Users need to understand what is happening at home quickly, but too much device data can make the interface crowded and difficult to scan." },
        { title: "Fragmented control", description: "Actions are spread across rooms, devices, settings, and permissions, making simple tasks feel unnecessarily complicated." },
        { title: "Trust and safety", description: "The app controls private and security-sensitive parts of the home, so the interface must feel reliable, predictable, and safe." }
      ],
      questions: [
        "Is everything okay at home?",
        "What needs my attention?",
        "What can I control right now?",
        "Who has access to my home?"
      ],
      goals: [
        { title: "Create a clear home overview", description: "Show active devices, selected floor, home status, and key household metrics at a glance." },
        { title: "Make device control fast", description: "Let users control common devices, especially lights, without unnecessary navigation layers." },
        { title: "Support shared households", description: "Provide a clear way to manage family members, guests, and different access levels." },
        { title: "Design calm security", description: "Make alerts and camera views easy to understand without making everyday use feel stressful." }
      ],
      approach: [
        {
          title: "Structuring Around User Intent",
          description: "Instead of organizing the app only around device categories, I structured the experience around the tasks users want to complete: check status, control rooms, and respond to events.",
          decision: "I avoided making the device list the main entry point. A list-first approach works for power users, but fails the casual user's first question: 'Is everything okay?'"
        },
        {
          title: "The Dashboard as Control Center",
          description: "The dashboard uses an isometric house view to make the home more tangible than a flat list and connects digital controls with physical areas.",
          decision: "I prioritized a visual home overview over a dense technical dashboard to reduce cognitive load and help users quickly understand home state."
        },
        {
          title: "Room-Based Device Control",
          description: "Smart home users think spatially. Room-based navigation matches how people describe actions: 'turn off the bedroom light'.",
          decision: "I used floor plan and realistic room views to balance precision with familiarity, using color-coded icons for easy scanning."
        },
        {
          title: "Simplifying Light Control",
          description: "Lighting is the most frequent interaction, so the light detail screen focuses on direct actions: power, brightness, and color.",
          decision: "I kept controls visible and direct. High-frequency interactions should not be hidden behind advanced settings or nested menus."
        },
        {
          title: "Shared Household Access",
          description: "Different members need different levels of access. Parents, children, and guests all require distinct permissions.",
          decision: "I treated family access as a core product feature because permissions affect physical safety and privacy, not just account preferences."
        },
        {
          title: "Calm Security Experience",
          description: "The security section focuses on cameras and alerts. It needs to be fast and clear but not visually overwhelming.",
          decision: "I avoided aggressive warning visuals as the default state. Security should feel reliable and calm during normal use."
        }
      ],
      screens: [
        { title: "Dashboard", description: "Main overview for home status, active devices, and metrics." },
        { title: "Room Detail", description: "Spatial control through floor plans and realistic views." },
        { title: "Smart Light", description: "Direct control for brightness, color, and power." },
        { title: "Security", description: "Camera activity, alerts, and suspicious activity monitoring." },
        { title: "Family Members", description: "Management of household access and permissions." },
        { title: "Scan Flow", description: "Guided setup for adding new devices or scanning rooms." }
      ],
      visualDesign: {
        description: "The visual style is clean, bright, and friendly. Rounded cards, soft shadows, simple iconography, and generous spacing make the interface feel approachable. The design avoids a cold, overly technical look.",
        colors: [
          { color: "#3F82FF", name: "Tech Blue", desc: "Trust, technology, and primary control." },
          { color: "#F59E42", name: "Warm Orange", desc: "Lighting states and active device feedback." },
          { color: "#27CF8B", name: "Safe Green", desc: "Success states and security clearance." }
        ]
      },
      process: [
        { step: "01", title: "Research", description: "Identifying core user pain points in existing smart home solutions." },
        { step: "02", title: "Information Architecture", description: "Defining the spatial hierarchy and task-oriented navigation." },
        { step: "03", title: "Visual System", description: "Creating a clean, trustworthy design language for home control." },
        { step: "04", title: "Prototyping", description: "Validating high-frequency interaction patterns for lights and security." }
      ],
      impact: [
        "Centralized smart home control from one dashboard",
        "Natural, room-based navigation matching real behavior",
        "Fast access to frequently used controls",
        "Calm, trustworthy security experience"
      ],
      takeaways: "This project taught me that for complex ecosystems, the most valuable 'feature' is often a reduction in navigation layers. By aligning the digital interface with the user's spatial mental model of their home, I was able to make technology feel integrated rather than intrusive."
    }
  }
];
