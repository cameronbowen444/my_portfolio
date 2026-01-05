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
    nextstore,
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
    realestate
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
        title: "Freelance Frontend Developer",
        company_name: "Better Brands",
        iconBg: "#383E56",
        date: "Oct 2023 - Current",
        points: [
            "Designed, developed, and maintained modern web applications using React and related frontend technologies.",
            "Led projects end-to-end, handling UI/UX design, development, and deployment from scratch.",
            "Collaborated with designers and marketing professionals to deliver high-quality, brand-focused interfaces.",
            "Implemented responsive design, cross-browser compatibility, performance optimizations, and security best practices.",
        ],
    },
    {
        title: "Freelance React Developer",
        company_name: "Kim Bowen",
        iconBg: "#383E56",
        date: "Sep 2021 - Sep 2022",
        points: [
            "Built and maintained a responsive portfolio website using React, CSS animations, Bootstrap, and FormSubmit API for email form handling.",
            "Designed the layout and interactions by analyzing industry portfolio examples and applying custom responsive animations.",
            "Fully redesigned the project with additional custom features, making it one of my strongest freelance projects.",
            "Used Photoshop to design custom visual assets and backgrounds to enhance the site’s visual impact.",
        ],
    },
    {
        title: "Freelance React Developer",
        company_name: "Nicolle Bustos",
        iconBg: "#383E56",
        date: "Sep 2023 - Sep 2023",
        points: [
            "Developed a modern portfolio website using React, Tailwind CSS, Framer Motion, and a form API integrated with Gmail.",
            "Implemented responsive layouts and motion effects to create a polished, professional user experience.",
            "Delivered the project on a tight timeline to support a job application deadline.",
            "Gained hands-on freelance experience by delivering a real, production-ready website for a client.",
        ],
    },
    {
        title: "Freelance Web Developer",
        company_name: "Diamond Wings",
        iconBg: "#383E56",
        date: "April 2023 - May 2023",
        points: [
            "Integrated and assembled pre-designed components into a functional, responsive website.",
            "Added custom code enhancements to tailor the site to business requirements.",
            "Ensured responsive design and cross-browser compatibility.",
            "Implemented automated services for ride bookings and email notifications using an existing database and backend integrations.",
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
        name: "Kim Bowen",
        description:
            "Freelance project with react.",
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
        description:
            "Freelance project with react",
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
        name: "NextJs Ecommerce Store",
        description:
            "NextJs & typescript educational project",
        tags: [
            {
                name: "typescript",
                color: "blue-text-gradient",
            },
            {
                name: "nextjs",
                color: "green-text-gradient",
            },
            {
                name: "sanity",
                color: "pink-text-gradient",
            },
        ],
        image: nextstore,
        source_code_link: "https://github.com/cameronbowen444/next_ecommerce_store",
        source_code_link2: "https://next-ecommerce-store-bce3-b43sog551-cameronbowen444s-projects.vercel.app/",
    },
    {
        name: "Restuarant site",
        description:
            "Educational Project w/ redux.",
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
                name: "css modules",
                color: "pink-text-gradient",
            },
        ],
        image: food,
        source_code_link: "https://github.com/cameronbowen444/restaurant_app",
        source_code_link2: "https://gregarious-starship-fd1238.netlify.app",
    },
    {
        name: "My Portfolio",
        description:
            "Portfolio react project",
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
        description:
            "Educational Project with react",
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
        description:
            "Educational practice react project.",
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
        description:
            "NextJs SPA educational project.",
        tags: [
            {
                name: "NextJs",
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
];

export { services, technologies, experiences, testimonials, projects };