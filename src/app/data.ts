type About = {
  heading: string
  text: string
}

type Newsletter = {
  text: string
  placeholder: string
  button: string
}

type Project = {
  title: string
  description: string
  background: string
  link: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const ABOUT: About = {
  heading: 'About me',
  text: 'Crafting Web Apps with React since 2024. Passionate about interface design and attention to detail, striving to create great experiences.',
}

export const NEWSLETTER: Newsletter = {
  text: 'Subscribe to my personal newsletter for project updates, great links, and some personal notes.',
  placeholder: 'you@example.com',
  button: 'Subscribe',
}

export const PROJECTS: Project[] = [
  {
    title: 'The Profit Blueprint',
    description:
      'An online platform, supporting 2,000+ daily active users and over 220K unique visitors per month.',
    background:
      'https://res.cloudinary.com/dedobvqub/image/upload/v1739875688/TPB_Logo_Background_urvhmy.png',
    link: 'https://the-profit-blueprint.com',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Freelance',
    title: 'Front-end Developer',
    start: '2024',
    end: 'Present',
    link: '',
    id: 'work1',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/RodrigoRafaelSantos7',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ibelick',
  },
]

export const EMAIL = 'hello@rodrigosantos.dev'
export const WEBSITE_URL = 'https://rodrigosantos.dev'
