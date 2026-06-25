import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    nodejs,
    mongodb,
    nicolle,
    kim,
    food,
    project,
    next,
    python,
    flask,
    django,
    mysql,
    portrait1,
    mike, 
    frank,
    photographer,
    construction,
    realestate,
    diamond1,
    diamond2,
    mikeweb,
    purple,
    puzzle,
    songs,
    shows,
    books,
    books2, 
    cook,
    members,
    pets,
    pizza,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "React Developer",
        icon: web,
    },
    {
        title: "NextJS Developer",
        icon: mobile,
    },
    {
        title: "Full Stack Developer",
        icon: backend,
    },
    {
        title: "Frontend Specialist",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Next JS",
        icon: next, 
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "MySQL",
        icon: mysql,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "Flask",
        icon: flask, 
    },
    {
        name: "Django",
        icon: django
    },
];

const experiences = [
    {
        title: "Software Developer Freelance",
        company_name: "Purple Leaf Herbs",
        iconBg: "#383E56",
        date: "May 2026 - Current",
        points: [
            "Built and deployed a responsive Full Stack NextJS and Typescript applicaiton and website for Purple Leaf Herbs, a wellness and herbal services brand with a blog implementation.",
            "Integrated Prisma for database-backed blog content, created individual blog post pages with dynamic metadata, optimized images for mobile performance, and added SEO setup for production deployment.",
            "Focused on building a calm, professional wellness brand experience with both frontend polish and backend content management.",
        ],
    },
    {
        title: "Software Developer Intern",
        company_name: "Diamond Wings",
        iconBg: "#383E56",
        date: "April 2026 - June 2026",
        points: [
            "Built 3 full responsive NextJS Typescript web applications with implementation of SEO metadata and domain/DNS transfer support and Google Search Console setup.",
            "Strong UI/UX custom development through branding, service sections, inquiry forms, SEO setup, domain support, and production deployment for live business use.",
            "Handled all communications and API connections through LimoAnywhere, SendGrid, GoDaddy and microsoft Admin.",
        ],
    },
    {
        title: "Software Developer Intern",
        company_name: "ChangeLab Studio",
        iconBg: "#383E56",
        date: "December 2025 - April 2026",
        points: [
            "Built and maintained an interactive puzzle with React and used as a downloadable program for Ipads for a Japanese Retirement Home.",
            "Developed a custom drag-and-drop puzzle board, shuffle and hint functionality, bilingual content, responsive layouts, and PWA support. ",
            "cused on creating a smooth user experience across desktop and mobile while turning the project into a polished, deployment-ready application.",
        ],
    },

    {
        title: "Software Developer Freelance",
        company_name: "Bowen Records",
        iconBg: "#383E56",
        date: "October 2025 - December 2025",
        points: [
            "Built and deployed a responsive Next.js website for Bowen Records, a vintage vinyl and record collection business.",
            "Developed custom branded sections for buying, selling, requesting records, and showcasing the owner’s decades of collecting experience.",
            "Ensured easy store setup for future scalability with Stipe payments and full store implementation when ready to integrate.",
            "Added smooth navigation, mobile-friendly layouts, SEO metadata, domain setup, sitemap submission, and Google Search Console support to help prepare the site for real customers and search visibility.",
        ],
    },
    {
        title: "Technical Manager",
        company_name: "MyHomeLA",
        iconBg: "#383E56",
        date: "Feb 2021 - Dec 2021",
        points: [
            "Assisted in building and maintaining the company website and designing HTML email templates.",
            "Implemented marketing automation tools including Zapier, ClickFunnels, and Mailchimp to improve lead conversion rates.",
            "Managed client data organization and workflows based on lead status (cold, warm, hot).",
            "Coordinated transaction paperwork and digital documentation using DocuSign.",
            "Transitioned roles to pursue a career in software development after discovering a strong interest in the technical side of the business.",
        ],
    },

];

const testimonials = [
    {
        testimonial:
            "Cameron delivered a modern, responsive website that exceeded our expectations.",
        name: "Nicolle Bustos",
        designation: "Marketing",
        company: "CSUN",
        image: portrait1,
    },
    {
        testimonial:
            "Clear communication, strong frontend skills, and a polished final product.",
        name: "Mike Brown",
        designation: "CEO",
        company: "Better Brands",
        image: mike,
    },
    {
        testimonial:
            "Fast, professional, and detail-oriented. The entire process was seamless.",
        name: "Frank Bustos",
        designation: "CEO",
        company: "Diamond Wings",
        image: frank,
    },
];

const projects = [
  {
    name: "Diamond Wings",
    category: "freelance",
    description: "Software engineering internship.",

    overview:
      "Built and deployed a luxury chauffeur website for Diamond Wings with service sections, fleet presentation, contact flows, SEO setup, and domain support. The project focused on creating a premium brand experience that feels professional, trustworthy, and easy for customers to use.",

    role:
      "I handled the frontend build, responsive layouts, branding updates, service sections, SEO metadata, sitemap setup, domain support, deployment, and Google Search Console setup.",

    features: [
      "Luxury chauffeur landing page",
      "Fleet and service showcase",
      "Responsive Next.js layout",
      "Contact and inquiry flow",
      "SEO metadata and sitemap",
      "Custom domain setup",
    ],

    challenge:
      "The main challenge was making the site feel premium and professional while keeping the user flow simple for real customers looking to book transportation.",

    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "APIs",
        color: "pink-text-gradient",
      },
    ],
    image: diamond1,
    source_code_link: "https://github.com/cameronbowen444/DiamondWingsSite",
    source_code_link2: "https://diamondwings369.com/",
  },
  {
    name: "ChangeLab Puzzle",
    category: "freelance",
    description: "Software engineering internship.",

    overview:
      "Built an interactive drag-and-drop puzzle application for ChangeLab using React, Vite, and React DnD. The project turned a visual puzzle concept into a smooth web experience with shuffle logic, hint functionality, bilingual support, and responsive gameplay.",

    role:
      "I developed the puzzle board, drag-and-drop logic, shuffle behavior, hint feature, bilingual content support, responsive styling, and deployment-ready structure.",

    features: [
      "Custom drag-and-drop puzzle board",
      "React DnD gameplay functionality",
      "Shuffle and hint controls",
      "Responsive desktop and mobile layout",
      "Bilingual content support",
      "PWA-ready structure",
    ],

    challenge:
      "The main challenge was making the drag-and-drop experience feel smooth and accurate across different screen sizes while keeping the puzzle easy to understand.",

    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Drag-and-drop",
        color: "green-text-gradient",
      },
      {
        name: "downloadable",
        color: "pink-text-gradient",
      },
    ],
    image: puzzle,
    source_code_link: "https://github.com/cameronbowen444/ChangeLabProjects",
    source_code_link2: "https://change-lab-projects.vercel.app/",
  },
  {
    name: "DW Autos",
    category: "freelance",
    description: "Software engineering internship.",

    overview:
      "Built and deployed a vehicle concierge inquiry platform for Diamond Wings Autos. The site helps users request vehicles to buy, rent, or lease-to-own through a clean, premium inquiry experience.",

    role:
      "I handled the Next.js frontend, responsive sections, inquiry layout, branding direction, SEO metadata, sitemap setup, domain support, deployment, and Google Search Console setup.",

    features: [
      "Vehicle concierge inquiry page",
      "Buy, rent, and lease-to-own flow",
      "Responsive Next.js layout",
      "Premium automotive branding",
      "SEO and sitemap setup",
      "Custom domain support",
    ],

    challenge:
      "The main challenge was making the platform feel high-end while keeping the customer inquiry process clear and simple.",

    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "APIs",
        color: "green-text-gradient",
      },
      {
        name: "DNS",
        color: "pink-text-gradient",
      },
    ],
    image: diamond2,
    source_code_link: "https://github.com/cameronbowen444/DiamondWingsMiddleman",
    source_code_link2: "https://diamondwingsautos.com/",
  },
  {
    name: "Purple Leaf Herbs",
    category: "freelance",
    description: "Full Stack Engineer Internship.",

    overview:
      "Built and deployed a full-stack Next.js website for Purple Leaf Herbs with custom wellness branding, service sections, founder content, testimonials, contact features, and a dynamic blog system.",

    role:
      "I handled the frontend design, responsive layouts, image optimization, SEO metadata, contact features, Prisma setup, dynamic blog pages, and deployment.",

    features: [
      "Responsive Next.js website",
      "Custom wellness branding",
      "Service and founder sections",
      "Testimonials and contact modal",
      "Prisma-backed blog system",
      "Dynamic blog post pages",
    ],

    challenge:
      "The main challenge was balancing a calm wellness brand style with full-stack functionality, optimized mobile performance, and clean content management.",

    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "Prisma",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
    ],
    image: purple,
    source_code_link: "https://github.com/cameronbowen444/PurpleLeafHerbs",
    source_code_link2: "https://purple-leaf-herbs.vercel.app/",
  },
  {
    name: "Bowen Records",
    category: "freelance",
    description: "Full Stack Engineer Internship.",

    overview:
      "Built and deployed a responsive Next.js website for Bowen Records, a vintage vinyl and record collection business. The site showcases buying, selling, record requests, and the owner’s decades of collecting experience.",

    role:
      "I built the frontend, created custom branded sections, handled responsive styling, improved navigation, added SEO metadata, connected the domain, submitted the sitemap, and supported Google Search Console setup.",

    features: [
      "Vintage record store branding",
      "Buy, sell, and request record sections",
      "Owner/about content",
      "Responsive mobile-friendly layout",
      "SEO metadata and sitemap setup",
      "Domain and Search Console support",
    ],

    challenge:
      "The main challenge was creating a design that felt nostalgic and music-focused while still being clean, modern, and useful for real customers.",

    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "APIs",
        color: "pink-text-gradient",
      },
    ],
    image: mikeweb,
    source_code_link: "https://github.com/cameronbowen444/RecordStore",
    source_code_link2: "https://bowenrecords.com/",
  },
  {
    name: "Kim Bowen",
    category: "freelance",
    description: "Freelance project with React.",

    overview:
      "Built a custom portfolio website for Kim Bowen to showcase animation work, creative projects, and professional experience through a bold, character-driven design.",

    role:
      "I handled the React frontend, responsive layout, custom styling, animation-focused sections, project presentation, social links, and deployment setup.",

    features: [
      "Custom React portfolio",
      "Creative animation-focused branding",
      "Responsive project sections",
      "Social and contact links",
      "Custom visual styling",
      "Production deployment",
    ],

    challenge:
      "The main challenge was making the portfolio feel unique and creative while still keeping the layout clean and easy to navigate.",

    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "freelance",
        color: "green-text-gradient",
      },
      {
        name: "css_animations",
        color: "pink-text-gradient",
      },
    ],
    image: kim,
    source_code_link: "https://github.com/cameronbowen444/kim_bowen",
    source_code_link2: "https://kim-bowen.com/",
  },
  {
    name: "Nicolle Bustos",
    category: "freelance",
    description: "Freelance project with React.",

    overview:
      "Built a personal portfolio website for Nicolle Bustos with a clean, modern design focused on presenting her brand, work, and professional background.",

    role:
      "I handled the React frontend, Tailwind styling, responsive layout, section structure, project presentation, and deployment setup.",

    features: [
      "React portfolio website",
      "Tailwind CSS styling",
      "Responsive layout",
      "Personal brand sections",
      "Contact and social links",
      "Production deployment",
    ],

    challenge:
      "The main challenge was creating a polished personal site that felt clean and professional without overcomplicating the design.",

    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "freelance",
        color: "green-text-gradient",
      },
      {
        name: "tailwind_css",
        color: "pink-text-gradient",
      },
    ],
    image: nicolle,
    source_code_link: "https://github.com/cameronbowen444/nicolle_bustos",
    source_code_link2: "https://nicollebustos.com/",
  },
  {
    name: "Restaurant Site",
    category: "personal",
    description: "Educational project with Redux.",

    overview:
      "Built a restaurant website concept focused on menu browsing, polished UI sections, and frontend state management practice using React and Redux.",

    role:
      "I handled the React components, Redux state structure, responsive layout, styling, menu presentation, and frontend user flow.",

    features: [
      "React restaurant interface",
      "Redux state management",
      "Menu-focused layout",
      "Responsive design",
      "Reusable components",
      "Frontend deployment",
    ],

    challenge:
      "The main challenge was practicing cleaner state management while keeping the restaurant layout visually appealing and easy to browse.",

    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "advanced-react",
        color: "pink-text-gradient",
      },
    ],
    image: food,
    source_code_link: "https://github.com/cameronbowen444/restaurant_app",
    source_code_link2: "https://gregarious-starship-fd1238.netlify.app",
  },
  {
    name: "My Portfolio",
    category: "personal",
    description: "Portfolio React project.",

    overview:
      "Built a personal developer portfolio to showcase my skills, projects, experience, and personality through a modern interactive interface.",

    role:
      "I designed and developed the full portfolio, including animated sections, project cards, modal details, responsive layouts, 3D avatar integration, and deployment.",

    features: [
      "Animated React portfolio sections",
      "Interactive project cards and modals",
      "Responsive layout across screen sizes",
      "3D avatar canvas integration",
      "Custom tech and skill sections",
      "Production deployment",
    ],

    challenge:
      "The main challenge was making the portfolio feel unique and polished without overcomplicating the design or hurting usability.",

    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: project,
    source_code_link: "https://github.com/cameronbowen444/my_portfolio",
    source_code_link2: "https://cameron-bowen.com/",
  },
  {
    name: "Real Estate Website",
    category: "personal",
    description: "Educational project with React.",

    overview:
      "Built a real estate website concept focused on presenting property services, listings, and lead-focused calls to action in a professional layout.",

    role:
      "I handled the frontend structure, responsive design, property-focused sections, and user flow for potential clients.",

    features: [
      "Real estate landing page",
      "Property-focused content sections",
      "Responsive layout",
      "Lead-focused call-to-action flow",
      "Modern visual design",
      "Reusable React components",
    ],

    challenge:
      "The main challenge was making the site feel trustworthy and professional while keeping the layout simple for visitors.",

    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "single-page",
        color: "green-text-gradient",
      },
      {
        name: "vercel",
        color: "pink-text-gradient",
      },
    ],
    image: realestate,
    source_code_link: "https://github.com/cameronbowen444/ecommerce-store",
    source_code_link2: "https://real-estate-projects-sigma.vercel.app/",
  },
  {
    name: "Photographer Site",
    category: "personal",
    description: "Educational practice React project.",

    overview:
      "Built a photography portfolio website focused on visual presentation, clean spacing, and showcasing creative work in a professional way.",

    role:
      "I built the responsive frontend, image-focused sections, layout structure, and portfolio-style presentation.",

    features: [
      "Photography portfolio layout",
      "Image-focused design",
      "Responsive sections",
      "Clean visual hierarchy",
      "Portfolio showcase areas",
      "Modern frontend structure",
    ],

    challenge:
      "The main challenge was keeping the design clean enough to let the photography stand out while still making the site feel polished.",

    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "react-router",
        color: "pink-text-gradient",
      },
    ],
    image: photographer,
    source_code_link: "https://github.com/cameronbowen444/product_manager",
    source_code_link2: "https://photographer-projects.vercel.app/",
  },
  {
    name: "Construction Site",
    category: "personal",
    description: "Next.js SPA educational project.",

    overview:
      "Built a construction business website concept designed to present services, build trust, and help customers quickly understand the company’s work.",

    role:
      "I developed the frontend layout, responsive service sections, business branding, and clear call-to-action flow.",

    features: [
      "Construction business landing page",
      "Service showcase sections",
      "Responsive design",
      "Trust-focused layout",
      "Clear customer calls to action",
      "Reusable components",
    ],

    challenge:
      "The main challenge was creating a strong business feel while keeping the site clean, simple, and easy to navigate.",

    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "app-router",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "pink-text-gradient",
      },
    ],
    image: construction,
    source_code_link: "https://github.com/cameronbowen444/django-ecommerce",
    source_code_link2: "https://construction-site-flame.vercel.app/",
  },
  {
    name: "Share Music",
    category: "academic",
    description: "Full Stack Python Project",

    overview:
      "Built a full-stack music sharing application where users can add, view, and manage favorite songs through a Django-based interface. The project focused on database relationships, form handling, and clean user interaction.",

    role:
      "I built the Django models, views, templates, routing, form handling, validation behavior, database logic, and deployment setup.",

    features: [
      "Django full-stack application",
      "Song creation and listing",
      "Database-backed content",
      "User-focused page flow",
      "Template-based UI",
      "Railway deployment",
    ],

    challenge:
      "The main challenge was keeping the database relationships and form flow organized while making the app feel simple and easy to use.",

    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: songs,
    source_code_link: "https://github.com/cameronbowen444/FavoriteSongs",
    source_code_link2: "https://favoritesongs-production.up.railway.app/",
  },
  {
    name: "Pizza Restaurants",
    category: "academic",
    description: "Full Stack Python Project",

    overview:
      "Built a full-stack restaurant ordering application with menu browsing, cart functionality, checkout validation, user login, and order confirmation features. The project focused on creating a realistic restaurant flow where users can view menu items, add food to their cart, and complete an order.",

    role:
      "I handled the Django backend, page templates, cart logic, checkout flow, user authentication behavior, form validation, styling updates, and deployment setup.",

    features: [
      "Django full-stack restaurant app",
      "Menu category pages",
      "Cart and checkout flow",
      "User login and discount logic",
      "Order confirmation message",
      "Railway deployment",
    ],

    challenge:
      "The main challenge was connecting the cart, checkout totals, discount logic, and order confirmation flow in a way that felt smooth and realistic for users.",

    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "sqlite",
        color: "pink-text-gradient",
      },
    ],
    image: pizza,
    source_code_link: "https://github.com/cameronbowen444/DjangoRestaurant",
    source_code_link2: "https://djangorestaurant-production.up.railway.app/",
  },
  {
    name: "Pet Shelter",
    category: "academic",
    description: "Full Stack MERN",

    overview:
      "Built a MERN pet shelter application where users can view, add, update, and manage pets through a full-stack CRUD interface. The project focused on connecting a React frontend to an Express and MongoDB backend with validation and clean user flows.",

    role:
      "I handled the React frontend, Express routes, MongoDB/Mongoose models, CRUD operations, form handling, validation messages, and deployment preparation.",

    features: [
      "MERN full-stack application",
      "Create, read, update, and delete pets",
      "React forms and validation",
      "Express API routes",
      "MongoDB Atlas database",
      "Responsive project layout",
    ],

    challenge:
      "The main challenge was keeping the frontend forms, backend routes, and database validations connected cleanly across the full CRUD flow.",

    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb-atlas",
        color: "pink-text-gradient",
      },
    ],
    image: pets,
    source_code_link: "https://github.com/cameronbowen444/PetShelter",
    source_code_link2: "https://pet-shelter-tau.vercel.app/",
  },
  {
    name: "Employee Database",
    category: "academic",
    description: "Full Stack MERN",

    overview:
      "Built a full-stack employee database application for managing employee records with a React frontend, Express backend, and MongoDB database. The project includes employee form handling, update behavior, salary formatting, phone number formatting, and recruiter-friendly CRUD features.",

    role:
      "I developed the frontend components, backend routes, Mongoose schema, employee form logic, update modal behavior, input formatting, validation handling, and deployment setup.",

    features: [
      "Employee CRUD functionality",
      "React frontend",
      "Express backend",
      "MongoDB/Mongoose database",
      "Phone number auto-formatting",
      "Salary auto-formatting",
    ],

    challenge:
      "The main challenge was keeping the app simple enough for a recruiter demo while still showing real full-stack functionality and polished form behavior.",

    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: members,
    source_code_link: "https://github.com/cameronbowen444/EmployeeDatabase",
    source_code_link2: "https://employee-database-tau.vercel.app/",
  },
  {
    name: "CookBook with Youtube API",
    category: "academic",
    description: "Full Stack Python",

    overview:
      "Built a full-stack recipe sharing application with Flask, user authentication, recipe posting, and YouTube recipe search integration. The app lets users register, log in, share recipes, and explore related recipe videos.",

    role:
      "I handled the Flask backend, MySQL database setup, authentication flow, form validation, flash messages, recipe CRUD behavior, YouTube API integration, and deployment setup.",

    features: [
      "Flask full-stack application",
      "User registration and login",
      "Recipe creation and sharing",
      "MySQL database",
      "YouTube recipe search",
      "Railway deployment",
    ],

    challenge:
      "The main challenge was connecting authentication, recipe data, validation messages, and the YouTube API into one smooth user experience.",

    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "youtube-api",
        color: "pink-text-gradient",
      },
    ],
    image: cook,
    source_code_link: "https://github.com/cameronbowen444/ShareRecipes",
    source_code_link2: "https://sharerecipes-production.up.railway.app/",
  },
  {
    name: "TV Shows Database",
    category: "academic",
    description: "Full Stack Java",

    overview:
      "Built a Java Spring Boot TV shows database application where users can manage show records through a backend-driven application flow. The project focused on CRUD behavior, validation, authentication concepts, and deployment.",

    role:
      "I built the Spring Boot structure, page flow, database logic, validation behavior, authentication-related features, styling updates, and deployment configuration.",

    features: [
      "Spring Boot show database",
      "CRUD functionality",
      "Backend validation",
      "Authentication concepts",
      "Database-backed records",
      "Railway deployment",
    ],

    challenge:
      "The main challenge was organizing the app so users could manage show records clearly while keeping the backend logic reliable.",

    tags: [
      {
        name: "spring-boot",
        color: "blue-text-gradient",
      },
      {
        name: "bycrypt",
        color: "green-text-gradient",
      },
      {
        name: "vanilla-js",
        color: "pink-text-gradient",
      },
    ],
    image: shows,
    source_code_link: "https://github.com/cameronbowen444/TVShowsJava",
    source_code_link2: "https://tvshowsjava-production.up.railway.app/",
  },
  {
    name: "Authors and Books",
    category: "academic",
    description: "Full Stack Python",

    overview:
      "Built a Django authors and books application that manages relationships between authors and their favorite books. The project focused on ORM relationships, form handling, routing, and displaying connected database records.",

    role:
      "I built the Django models, routes, views, templates, form actions, ORM queries, relationship handling, styling updates, and deployment setup.",

    features: [
      "Django ORM relationships",
      "Authors and books management",
      "Favorite book linking",
      "Template-based frontend",
      "Database-backed records",
      "Railway deployment",
    ],

    challenge:
      "The main challenge was correctly handling the relationship between authors and books while keeping the interface simple and easy to follow.",

    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "vanilla-js",
        color: "pink-text-gradient",
      },
    ],
    image: books,
    source_code_link: "https://github.com/cameronbowen444/FavoriteBooks",
    source_code_link2: "https://favoritebooks-production.up.railway.app/",
  },
  {
    name: "Book Club",
    category: "academic",
    description: "Full Stack Java",

    overview:
      "Built a Java Spring Boot book club application where users can register, log in, add books, view book details, and manage book-related content. The project focused on MVC structure, backend validation, MySQL database integration, and deployment.",

    role:
      "I handled the Spring Boot MVC structure, Java models, controllers, JSP views, authentication flow, validation messages, MySQL setup, styling improvements, and Railway deployment.",

    features: [
      "Java Spring Boot application",
      "MVC architecture",
      "User login and registration",
      "Book creation and details",
      "MySQL database",
      "Railway deployment",
    ],

    challenge:
      "The main challenge was getting the older JSP-style Spring Boot project cleaned up, connected to production database variables, and deployed successfully.",

    tags: [
      {
        name: "spring-boot",
        color: "blue-text-gradient",
      },
      {
        name: "bycrypt",
        color: "green-text-gradient",
      },
      {
        name: "vanilla-js",
        color: "pink-text-gradient",
      },
    ],
    image: books2,
    source_code_link: "https://github.com/cameronbowen444/BookClubJava",
    source_code_link2: "https://bookclubjava-production.up.railway.app/",
  },
  
];

export { services, technologies, experiences, testimonials, projects };