import { basePath } from "./site";

export const profile = {
  name: "Md Tanjiqur Rahman Prince",
  title: "DevOps Engineer",
  subtitle: "Full-Stack Background",
  location: "Mirpur-10, Dhaka, Bangladesh",
  email: "tanjiqprince@gmail.com",
  phone: "+8801792615335",
  linkedin: "https://linkedin.com/in/tanjiqur-rahman-prince",
  github: "https://github.com/trPrince",
  resumePath: `${basePath}/DevOps_Resume_Prince.pdf`,
};

export const about = {
  paragraphs: [
    "DevOps Engineer with experience automating deployments, managing CI/CD pipelines, and orchestrating containerized environments in Azure and DigitalOcean.",
    "A strong full-stack background enables deep visibility throughout the development lifecycle and rapid debugging of complex deployment issues.",
    "Currently learning AWS and preparing for the AWS Solutions Architect Associate (SAA) certification, building on a foundation in infrastructure automation.",
  ],
};

export const skillGroups = [
  {
    category: "CI/CD",
    skills: ["GitHub Actions", "ArgoCD"],
  },
  {
    category: "Docker & Kubernetes",
    skills: ["Docker", "Docker Compose", "Kubernetes", "Helm"],
  },
  {
    category: "Infrastructure as Code",
    skills: ["Terraform", "Ansible"],
  },
  {
    category: "Cloud Providers",
    skills: ["Azure", "DigitalOcean", "AWS (learning)"],
  },
  {
    category: "Security & Networking",
    skills: ["Traefik", "Nginx", "Cert Manager", "Sealed Secrets"],
  },
  {
    category: "Web & Frameworks",
    skills: [
      "Next.js",
      "React.js",
      "Vue.js",
      "Hardhat",
      "ethers.js",
      "Gun.js",
      "Odoo",
    ],
  },
  {
    category: "Tools",
    skills: ["VS Code", "Cursor", "Lens"],
  },
];

export const experience = {
  company: "Indetechs Software Limited",
  role: "Full-Stack & DevOps Engineer",
  period: "May 2022 – Present",
  projects: [
    {
      name: "Flute & Trumpet",
      description:
        "Healthcare federated learning platforms for healthcare research",
      url: "https://flute.iw.technovativesolutions.co.uk",
      highlights: [
        "Automate deployments and Slack alerts through CI/CD pipelines using GitHub Actions on self-hosted runners",
        "Own and manage the GitHub organization and Azure subscription for ISO-compliant resource access",
        "Own all deployment responsibilities of the team",
        "Develop multiple modules of the frontend applications using Next.js",
      ],
      tags: ["GitHub Actions", "Azure", "Next.js", "Self-hosted Runners"],
    },
    {
      name: "BYO-DPP",
      description: "Build Your Own DPP — Digital Product Passport",
      url: "https://digiprodpass.com",
      highlights: [
        "Maintained multi-environment (dev, staging, prod, demo) CI/CD pipelines and deployment workflows",
        "Managed and modified ArgoCD repositories for GitOps-based deployment",
        "Used Helm charts to configure and deploy Keycloak, Cert Manager, and Sealed Secrets",
        "Planned architecture and created the frontend monorepo using Turborepo & Next.js",
      ],
      tags: ["ArgoCD", "Helm", "Turborepo", "Next.js", "GitOps"],
    },
    {
      name: "JIDEP",
      description:
        "Joint Industrial Data Exchange Platform for a more circular industry",
      url: "https://jidep.co",
      highlights: [
        "Prepared and maintained CI/CD pipelines using GitHub Actions to build Docker images, store in GHCR, and deploy to DigitalOcean managed K8s",
        "Wrote smart contracts in Solidity, tested with Mocha, deployed via Hardhat and RESTful APIs with Express and ethers.js",
        "Developed RESTful APIs using Express for distributed data storage with Gun.js",
        "Developed the platform using Odoo (Python MVC backend, OWL JS framework frontend)",
      ],
      tags: [
        "GitHub Actions",
        "GHCR",
        "DigitalOcean K8s",
        "Hardhat",
        "Gun.js",
        "Odoo",
      ],
    },
    {
      name: "Albatross",
      description:
        "Knowledge-based engineering approach to develop better batteries for vehicles",
      url: "https://albatross-h2020.eu",
      highlights: ["Developed the project website using Vue.js"],
      tags: ["Vue.js"],
    },
  ],
};

export const education = {
  degree: "B.Sc. in Computer Science and Engineering",
  institution: "Shahjalal University of Science and Technology",
  period: "Jan 2017 – Jul 2021",
  gpa: "3.41 / 4.00",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
