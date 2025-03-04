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
  link?: string
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
    title: 'Full-Stack Developer',
    start: '2024',
    end: 'Present',
    id: 'work1',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'How I Set Up A New Laptop',
    description:
      'This post is for Mac computer users who might be interested in automating their setup workflow.',
    link: '/blog/how-i-setup-a-new-laptop',
    uid: 'blog-1',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/RodrigoRafaelSantos7',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/rodrigosantos7/',
  },
]

export const EMAIL = 'hello@rodrigosantos.dev'
export const WEBSITE_URL = 'https://rodrigosantos.dev'
