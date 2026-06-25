import React, { useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { Tilt } from "react-tilt";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { github, link } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const projectTabs = [
  { label: "Freelance", value: "freelance" },
  { label: "Academic", value: "academic" },
  { label: "Personal", value: "personal" },
];

const normalizeCategory = (category) => {
  if (!category) return "personal";

  const normalized = category
    .toString()
    .toLowerCase()
    .replace(/[\s_-]+/g, "");

  if (
    normalized === "freelance" ||
    normalized === "internship" ||
    normalized === "internships" ||
    normalized === "freelanceinternships" ||
    normalized === "freelanceinternship"
  ) {
    return "freelance";
  }

  if (normalized === "academic" || normalized === "school") {
    return "academic";
  }

  return "personal";
};

const defaultDetails = {
  overview:
    "This project was built to show real-world development skills including clean UI structure, responsive layouts, reusable components, and production-ready deployment. The goal was to create something that feels polished, functional, and easy to use.",
  role:
    "I handled the full build process including planning the layout, building the interface, structuring the components, testing responsiveness, and preparing the final project for deployment.",
  features: [
    "Responsive layout for desktop, tablet, and mobile",
    "Reusable React components",
    "Clean visual design and user-focused flow",
    "Interactive UI elements and smooth animations",
    "Organized project structure",
    "Deployment-ready setup",
  ],
  challenge:
    "The main challenge was keeping the design visually strong while still making the app easy to navigate, fast to use, and clean enough to maintain.",
};

const projectDetails = {
  "Diamond Wings": {
    overview:
      "Built and deployed modern business websites for Diamond Wings, including a luxury chauffeur service site and a vehicle concierge inquiry platform. The project focused on creating a polished brand experience, clear service presentation, and real customer inquiry flows.",
    role:
      "I handled the frontend build, responsive layouts, branding updates, inquiry sections, SEO metadata, sitemap setup, domain support, deployment, and Google Search Console setup.",
    features: [
      "Luxury chauffeur landing page",
      "Auto sales / vehicle concierge inquiry platform",
      "Responsive Next.js layouts",
      "Service and fleet showcase sections",
      "Inquiry and contact flows",
      "SEO metadata, sitemap, and Search Console setup",
    ],
    challenge:
      "The main challenge was building two different Diamond Wings experiences while keeping each site professional, mobile-friendly, and ready for real business use.",
  },

  ChangeLab: {
    overview:
      "Built an interactive puzzle web application for ChangeLab using React, Vite, and React DnD. The project turned a visual puzzle concept into a smooth drag-and-drop web experience with responsive gameplay.",
    role:
      "I developed the puzzle board, drag-and-drop functionality, shuffle logic, hint feature, bilingual content support, responsive styling, and deployment-ready structure.",
    features: [
      "Custom drag-and-drop puzzle board",
      "React DnD gameplay functionality",
      "Shuffle and hint features",
      "Responsive desktop and mobile layout",
      "Bilingual content support",
      "PWA-ready structure",
    ],
    challenge:
      "The main challenge was making the drag-and-drop experience feel smooth and accurate across different screen sizes while keeping the puzzle easy to understand.",
  },

  "Purple Leaf Herbs": {
    overview:
      "Built and deployed a full-stack Next.js website for Purple Leaf Herbs, including custom branding, wellness service sections, founder content, testimonials, contact features, and a dynamic blog system.",
    role:
      "I handled the frontend design, responsive layouts, image optimization, SEO metadata, contact features, Prisma setup, and dynamic blog pages with individual post metadata.",
    features: [
      "Responsive Next.js website",
      "Custom wellness branding",
      "Service and founder sections",
      "Testimonials and contact modal",
      "Prisma-backed blog system",
      "Dynamic blog post pages and SEO metadata",
    ],
    challenge:
      "The main challenge was balancing a calm wellness brand style with full-stack functionality, optimized mobile performance, and clean content management.",
  },

  "Bowen Records": {
    overview:
      "Built and deployed a responsive Next.js website for Bowen Records, a vintage vinyl and record collection business. The site showcases buying, selling, record requests, and the owner’s decades of collecting experience.",
    role:
      "I built the full frontend, created custom branded sections, handled responsive styling, improved navigation, added SEO metadata, connected the domain, submitted the sitemap, and supported Google Search Console setup.",
    features: [
      "Vintage record store branding",
      "Buy, sell, and request record sections",
      "Owner/about content",
      "Responsive mobile-friendly layout",
      "SEO metadata and sitemap setup",
      "Domain and Google Search Console support",
    ],
    challenge:
      "The main challenge was creating a design that felt nostalgic and music-focused while still being clean, modern, and useful for real customers.",
  },

  "My Portfolio": {
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
  },

  "NextJs Ecommerce Store": {
    overview:
      "Built a modern ecommerce store concept using Next.js with product-focused layouts, clean shopping sections, and a responsive user experience.",
    role:
      "I handled the page structure, UI components, product sections, responsive styling, and frontend ecommerce flow.",
    features: [
      "Next.js ecommerce layout",
      "Product display sections",
      "Responsive shopping experience",
      "Reusable UI components",
      "Clean product-focused design",
      "Deployment-ready structure",
    ],
    challenge:
      "The main challenge was making the store feel professional and easy to browse while keeping the code organized and scalable.",
  },

  "Restaurant Site": {
    overview:
      "Built a responsive restaurant website concept focused on presenting the brand, menu, location, and customer actions in a clean and modern layout.",
    role:
      "I created the frontend structure, responsive sections, visual layout, and call-to-action flow for visitors.",
    features: [
      "Restaurant landing page",
      "Menu and service sections",
      "Responsive design",
      "Clear call-to-action layout",
      "Reusable components",
      "Modern visual styling",
    ],
    challenge:
      "The main challenge was creating a design that felt appealing and simple while helping customers quickly find important restaurant information.",
  },

  "Real Estate Website": {
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
  },

  "Photographer Site": {
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
  },

  "Construction Site": {
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
  },
};

const getProjectDetails = (project) => {
  const savedDetails = projectDetails[project.name] || {};

  return {
    overview:
      project.overview ||
      project.longDescription ||
      savedDetails.overview ||
      defaultDetails.overview,
    role: project.role || savedDetails.role || defaultDetails.role,
    features: project.features || savedDetails.features || defaultDetails.features,
    challenge:
      project.challenge || savedDetails.challenge || defaultDetails.challenge,
  };
};

const ProjectModal = ({ project, onClose }) => {
  const details = getProjectDetails(project);

  return createPortal(
    <motion.div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 28, scale: 0.97 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[88vh] w-full max-w-4xl overflow-y-auto rounded-[28px] border border-white/10 bg-[#080d1f] shadow-[0_30px_100px_rgba(0,0,0,0.6)]"
      >
        <div className="sticky top-0 z-[999] flex items-center justify-between border-b border-white/10 bg-[#080d1f]/95 px-5 py-4 backdrop-blur-xl sm:px-7">
          <div className="min-w-0 pr-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#67e8f9]/75">
              Project Details
            </p>

            <p className="mt-1 truncate text-[15px] font-semibold text-white/80">
              {project.name}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#67e8f9]/35 bg-[#67e8f9]/10 text-[28px] font-light leading-none text-white shadow-[0_0_25px_rgba(103,232,249,0.15)] transition hover:scale-105 hover:border-[#67e8f9]/70 hover:bg-[#67e8f9]/20"
            aria-label="Close project modal"
          >
            ×
          </button>
        </div>

        <div className="relative overflow-hidden p-5 sm:p-7">
          <div className="pointer-events-none absolute right-[-120px] top-[-130px] h-[270px] w-[270px] rounded-full bg-[#1a2f5d]/80 blur-[90px]" />
          <div className="pointer-events-none absolute bottom-[-140px] left-[-130px] h-[260px] w-[260px] rounded-full bg-[#67e8f9]/10 blur-[90px]" />

          <div className="relative z-10">
            <div className="overflow-hidden rounded-[22px] border border-white/10 bg-black">
              <img
                src={project.image}
                alt={project.name}
                className="h-[230px] w-full object-cover sm:h-[330px]"
              />
            </div>

            <div className="mt-7">
              <h3 className="text-[32px] font-bold leading-tight text-white sm:text-[46px]">
                {project.name}
              </h3>

              <p className="mt-5 text-[16px] leading-[30px] text-secondary">
                {details.overview}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="rounded-[22px] border border-white/10 bg-white/[0.045] p-5">
                <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#67e8f9]/75">
                  My Role
                </p>

                <p className="mt-3 text-[15px] leading-[27px] text-white/80">
                  {details.role}
                </p>
              </div>

              <div className="rounded-[22px] border border-white/10 bg-white/[0.045] p-5">
                <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#67e8f9]/75">
                  Main Challenge
                </p>

                <p className="mt-3 text-[15px] leading-[27px] text-white/80">
                  {details.challenge}
                </p>
              </div>
            </div>

            <div className="mt-7 rounded-[22px] border border-white/10 bg-white/[0.045] p-5">
              <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#67e8f9]/75">
                Key Features
              </p>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {details.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex gap-3 rounded-2xl border border-white/10 bg-[#050816]/55 p-3 text-[14px] font-medium leading-[22px] text-white/80"
                  >
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#67e8f9] shadow-[0_0_12px_rgba(103,232,249,0.8)]" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {project.tags?.length > 0 && (
              <div className="mt-7">
                <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#67e8f9]/75">
                  Built With
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.name}
                      className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-1.5 text-[12px] font-medium text-white/75"
                    >
                      #{tag.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              {project.source_code_link && (
                <button
                  type="button"
                  onClick={() =>
                    window.open(project.source_code_link, "_blank")
                  }
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-[14px] font-semibold text-white transition hover:border-[#67e8f9]/40 hover:bg-[#67e8f9]/10"
                >
                  <img src={github} alt="github" className="h-5 w-5" />
                  View Code
                </button>
              )}

              {project.source_code_link2 && (
                <button
                  type="button"
                  onClick={() =>
                    window.open(project.source_code_link2, "_blank")
                  }
                  className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1a2f5d] to-[#0f7490] px-5 py-3 text-[14px] font-semibold text-white transition hover:-translate-y-0.5"
                >
                  <img src={link} alt="live link" className="h-5 w-5" />
                  Live Site
                </button>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
};

const ProjectCard = ({
  index,
  name,
  description,
  image,
  source_code_link,
  source_code_link2,
  onViewDetails,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        delay: Math.min(index * 0.12, 0.35),
        duration: 0.55,
        ease: "easeOut",
      }}
      className="h-full w-full"
    >
      <Tilt
        options={{
          max: 18,
          scale: 1.03,
          speed: 450,
        }}
        className="group relative flex h-full w-full flex-col overflow-hidden rounded-[26px] border border-white/10 bg-[#080d1f] p-4 shadow-[0_25px_80px_rgba(0,0,0,0.35)]"
      >
        <div className="pointer-events-none absolute bottom-[-90px] left-1/2 h-[190px] w-[280px] -translate-x-1/2 rounded-full bg-[#1a2f5d]/80 blur-[55px] transition duration-500 group-hover:bg-[#2563eb]/70" />
        <div className="pointer-events-none absolute bottom-[-110px] left-1/2 h-[150px] w-[230px] -translate-x-1/2 rounded-full bg-[#67e8f9]/25 blur-[55px] transition duration-500 group-hover:bg-[#67e8f9]/40" />

        <div className="relative h-[230px] w-full overflow-hidden rounded-[22px] border border-white/10 bg-black">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/20 to-transparent opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#6badf8]/10 via-transparent to-[#67e8f9]/10 opacity-0 transition duration-500 group-hover:opacity-100" />

          <div className="absolute right-3 top-3 flex gap-2">
            {source_code_link && (
              <button
                type="button"
                onClick={() => window.open(source_code_link, "_blank")}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/55 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#67e8f9]/50 hover:bg-[#1a2f5d]"
                aria-label={`${name} source code`}
              >
                <img
                  src={github}
                  alt="github"
                  className="h-5 w-5 object-contain"
                />
              </button>
            )}

            {source_code_link2 && (
              <button
                type="button"
                onClick={() => window.open(source_code_link2, "_blank")}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/55 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#67e8f9]/50 hover:bg-[#1a2f5d]"
                aria-label={`${name} live site`}
              >
                <img
                  src={link}
                  alt="live link"
                  className="h-5 w-5 object-contain"
                />
              </button>
            )}
          </div>

          <div className="absolute bottom-3 left-3 rounded-full border border-white/10 bg-black/45 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#67e8f9] backdrop-blur-md">
            Featured Build
          </div>
        </div>

        <div className="relative z-10 mt-5 flex flex-1 flex-col">
          <h3 className="text-[24px] font-bold leading-tight text-white">
            {name}
          </h3>

          <p className="mt-3 line-clamp-4 text-[14px] leading-[24px] text-secondary">
            {description}
          </p>

          <button
            type="button"
            onClick={onViewDetails}
            className="group/button mt-auto flex w-full items-center justify-center gap-2 rounded-2xl border border-[#67e8f9]/25 bg-[#67e8f9]/10 px-5 py-3.5 text-[14px] font-bold text-white shadow-[0_14px_35px_rgba(14,165,233,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#67e8f9]/60 hover:bg-[#67e8f9]/16"
          >
            <span>View Project Details</span>
            <span className="transition duration-300 group-hover/button:translate-x-1">
              →
            </span>
          </button>
        </div>

        <div className="relative z-10 mt-5 h-[2px] w-12 rounded-full bg-gradient-to-r from-[#6badf8] to-[#67e8f9] transition duration-300 group-hover:w-24" />
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState("freelance");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const category = normalizeCategory(project.category);
      return category === activeTab;
    });
  }, [activeTab]);

  return (
    <>
      <AnimatePresence initial={false}>
        {selectedProject && (
          <ProjectModal
            key={selectedProject.name}
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 max-w-3xl text-[17px] leading-[30px] text-secondary"
        >
          With over 50 repositories and a growing collection of real-world
          projects, I’ve built freelance, internship, academic, and personal
          applications from the ground up. Here are a few of my favorite pieces.
        </motion.p>
      </div>

      <div className="mt-8 grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
  {projectTabs.map((tab) => (
    <button
      key={tab.value}
      type="button"
      onClick={() => setActiveTab(tab.value)}
      className={`min-h-[46px] w-full rounded-full border px-4 py-2.5 text-center text-[13px] font-bold transition duration-300 sm:text-[14px] ${
        activeTab === tab.value
          ? "border-[#67e8f9]/60 bg-[#67e8f9]/15 text-white shadow-[0_0_28px_rgba(103,232,249,0.16)]"
          : "border-white/10 bg-white/[0.04] text-secondary hover:border-[#67e8f9]/35 hover:bg-[#67e8f9]/10 hover:text-white"
      }`}
    >
      {tab.label}
    </button>
  ))}
</div>
      <div className="mt-12 grid w-full grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.name}
              index={index}
              {...project}
              onViewDetails={() => setSelectedProject(project)}
            />
          ))
        ) : (
          <div className="col-span-full rounded-[22px] border border-white/10 bg-[#080d1f] p-6 text-secondary">
            No {projectTabs.find((tab) => tab.value === activeTab)?.label}{" "}
            projects added yet.
          </div>
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");