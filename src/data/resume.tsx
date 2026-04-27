import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import {
  PytorchIcon,
  RedisIcon,
  MongoIcon,
  TwilioIcon,
  AwsIcon,
  GcpIcon,
  DrizzleIcon,
  LangchainIcon,
  DynamoIcon,
  BullmqIcon,
  ZustandIcon,
  WandbIcon,
  NvidiaIcon,
  PineconeIcon,
  LivekitIcon,
  OpenaiIcon,
  ClaudeIcon,
  McpIcon,
  ExpressIcon,
  MuiIcon,
  ShadcnIcon,
  TailwindIcon,
  ZodIcon,
  OpenapiIcon,
  OpentelemetryIcon,
  LangfuseIcon,
} from "@/components/skill-icons";
import { SiPrisma } from "react-icons/si";

export const DATA = {
  name: "Alex Sikand",
  initials: "AS",
  url: "https://alexsikand.com",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description: "Full-Stack AI Engineer",
  summary:
    "Full-stack engineer who ships production AI from architecture to revenue. Built CallSaver's voice AI platform end-to-end (100+ paying customers, sole engineer), shipped AWS infrastructure for 1,000+ enterprise dealerships at Impel, and productionized computer vision models at Silk Labs.",
  avatarUrl: "/alex-sikand.png",
  skillGroups: [
    {
      name: "Languages",
      items: [
        { name: "TypeScript", icon: Typescript },
        { name: "Python", icon: Python },
      ],
    },
    {
      name: "Cloud & Infrastructure",
      items: [
        { name: "AWS", icon: AwsIcon },
        { name: "GCP", icon: GcpIcon },
        { name: "Docker", icon: Docker },
      ],
    },
    {
      name: "Backend & APIs",
      items: [
        { name: "Node.js", icon: Nodejs },
        { name: "Express", icon: ExpressIcon },
        { name: "Zod", icon: ZodIcon },
        { name: "OpenAPI", icon: OpenapiIcon },
        { name: "OpenTelemetry", icon: OpentelemetryIcon },
        { name: "BullMQ", icon: BullmqIcon },
        { name: "Twilio", icon: TwilioIcon },
      ],
    },
    {
      name: "Frontend",
      items: [
        { name: "React.js", icon: ReactLight },
        { name: "Next.js", icon: NextjsIconDark },
        { name: "Zustand", icon: ZustandIcon },
        { name: "Tailwind CSS", icon: TailwindIcon },
        { name: "shadcn/ui", icon: ShadcnIcon },
        { name: "Material UI", icon: MuiIcon },
      ],
    },
    {
      name: "Databases & ORMs",
      items: [
        { name: "PostgreSQL", icon: Postgresql },
        { name: "MongoDB", icon: MongoIcon },
        { name: "DynamoDB", icon: DynamoIcon },
        { name: "Vector Databases" },
        { name: "Pinecone", icon: PineconeIcon },
        { name: "Redis", icon: RedisIcon },
        { name: "Prisma", icon: SiPrisma },
        { name: "Drizzle", icon: DrizzleIcon },
      ],
    },
    {
      name: "AI / ML",
      items: [
        { name: "OpenAI", icon: OpenaiIcon },
        { name: "Claude", icon: ClaudeIcon },
        { name: "MCP", icon: McpIcon },
        { name: "PyTorch", icon: PytorchIcon },
        { name: "LangChain", icon: LangchainIcon },
        { name: "Triton Inference Server", icon: NvidiaIcon },
        { name: "TensorRT", icon: NvidiaIcon },
        { name: "Weights & Biases", icon: WandbIcon },
        { name: "LiveKit", icon: LivekitIcon },
        { name: "Langfuse", icon: LangfuseIcon },
        { name: "RAG" },
        { name: "Computer Vision" },
      ],
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://google.com", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "apsikand@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/SikandAlex",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/alexsikand",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:apsikand@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "CallSaver",
      href: "https://callsaver.ai",
      badges: [],
      location: "Remote",
      title: "Founding Engineer",
      logoUrl: "/callsaver.png",
      start: "Jan 2025",
      end: "Present",
      skills: [
        "TypeScript",
        "Node.js",
        "Express",
        "Zod",
        "OpenTelemetry",
        "React.js",
        "Next.js",
        "AWS",
        "Redis",
        "BullMQ",
        "Twilio",
        "LiveKit",
        "OpenAI",
        "Claude",
        "Langfuse",
        "Drizzle",
        "PostgreSQL",
      ],
      description:
        "- Shipped voice AI platform **from zero to 100+ paying customers** as sole engineer — STT-LLM-TTS pipeline handling inbound calls, appointment booking, and after-hours routing for field service businesses.\n- Built and deployed the full product surface: API, customer dashboard, marketing site, billing, job queues, and CRM integrations across separate staging and production environments.\n- Owned architecture, deployment, and on-call from day one — debugging latency, tuning inference cost, and integrating webhooks with downstream CRMs.",
    },
    {
      company: "Impel",
      href: "https://impel.ai",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/impel.png",
      start: "Feb 2024",
      end: "Jan 2025",
      skills: [
        "TypeScript",
        "Node.js",
        "AWS",
        "PostgreSQL",
        "DynamoDB",
        "MongoDB",
        "Twilio",
      ],
      description:
        "- Built and operated AWS infrastructure powering **ServiceAI across 1,000+ car dealerships**, processing **250K+ outbound customer messages daily** via email and SMS.\n- Maintained the omni-channel re-engagement platform driving dealership-customer reactivation and lifetime-value lift.",
    },
    {
      company: "Pivotal",
      href: "https://pivotal.aero",
      badges: [],
      location: "Palo Alto, CA",
      title: "Software Engineer",
      logoUrl: "/pivotal.png",
      start: "Jul 2022",
      end: "Jun 2023",
      skills: ["Python", "React.js", "TypeScript", "Material UI", "OpenAPI"],
      description:
        "- Built Python Django backend processing big-data telemetry from eVTOL aircraft for flight-data analysis.\n- Modernized **30+ legacy UI components** to current major versions and generated an **OpenAPI spec covering 400+ API methods** to unblock client integration.",
    },
    {
      company: "Silk Labs",
      href: "#",
      badges: [],
      location: "Las Vegas, NV",
      title: "Machine Learning Engineer",
      logoUrl: "/silk-labs.png",
      start: "Sep 2020",
      end: "Jul 2022",
      skills: [
        "Python",
        "PyTorch",
        "Computer Vision",
        "Triton Inference Server",
        "TensorRT",
        "Weights & Biases",
        "Docker",
      ],
      description:
        "- Led ML Ops at Silk Labs — built labeling pipelines for synthetic image data and training infrastructure on multi-GPU clusters.\n- Productionized computer vision models for stadium-scale facial detection, firearm detection, and super-resolution — served **150+ concurrent RTSP camera feeds** via Triton Inference Server with INT8 quantization.",
    },
  ],
  education: [
    {
      school: "Boston University",
      href: "https://www.bu.edu",
      degree: "M.S. Artificial Intelligence",
      logoUrl: "/boston-university.png",
      start: "2020",
      end: "2021",
    },
    {
      school: "Boston University",
      href: "https://www.bu.edu",
      degree: "B.A. Computer Science",
      logoUrl: "/boston-university.png",
      start: "2016",
      end: "2020",
    },
  ],
  courses: [
    {
      code: "CS 400",
      name: "Full Stack App Development",
      school: "Boston University",
    },
    {
      code: "CS 411",
      name: "Software Engineering",
      school: "Boston University",
    },
    {
      code: "CS 440",
      name: "Artificial Intelligence",
      school: "Boston University",
    },
    {
      code: "CS 542",
      name: "Machine Learning",
      school: "Boston University",
    },
    {
      code: "CS 565",
      name: "Algorithmic Data Mining",
      school: "Boston University",
    },
    {
      code: "CS 591",
      name: "Deep Learning",
      school: "Boston University",
    },
    {
      code: "CS 591",
      name: "Parallel Computing",
      school: "Boston University",
    },
    {
      code: "CS 591",
      name: "User Centric Systems for Data Science",
      school: "Boston University",
    },
    {
      code: "CS 660",
      name: "Graduate Databases",
      school: "Boston University",
    },
    {
      code: "MA 225",
      name: "Multivariate Calculus",
      school: "Boston University",
    },
  ],
  certifications: [
    {
      name: "Python and Statistics for Financial Analysis",
      issuer: "The Hong Kong University of Science and Technology",
      issued: "May 2020",
      credentialId: "96BNGXH536RA",
      href: "https://www.coursera.org/account/accomplishments/verify/96BNGXH536RA",
      logoUrl: "/hkust.png",
    },
    {
      name: "Finding Hidden Messages in DNA (Bioinformatics I)",
      issuer: "Coursera Verified Certificates",
      issued: "Jul 2015",
      credentialId: "TBTFFGBSF9",
      href: "https://www.coursera.org/account/accomplishments/verify/TBTFFGBSF9",
      logoUrl: "/coursera.png",
    },
  ],
  projects: [
    {
      title: "CallSaver",
      href: "https://callsaver.ai",
      dates: "Jan 2025 - Present",
      active: true,
      description:
        "Every missed call costs you money. Our AI Receptionist answers instantly, books jobs 24/7, and earns you thousands in lost revenue.",
      technologies: [
        "TypeScript",
        "Node.js",
        "React",
        "Next.js",
        "AWS",
        "Redis",
        "Stripe",
        "LiveKit",
        "Twilio",
      ],
      links: [
        {
          type: "Website",
          href: "https://callsaver.ai",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/callsaver.png",
      video: "",
    },
    {
      title: "StackPass",
      href: "https://getstackpass.com",
      dates: "2026",
      active: true,
      description:
        "Auto-sync your paying Substack subscribers to a private Discord role. Cancellations revoke access automatically.",
      technologies: [
        "TypeScript",
        "Next.js",
        "Drizzle",
        "PostgreSQL",
        "Stripe",
        "Discord",
      ],
      links: [
        {
          type: "Website",
          href: "https://getstackpass.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/stackpass.svg",
      video: "",
    },
  ],
  hackathons: [],
} as const;
