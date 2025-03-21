type Project = {
  title: string
  description: string
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

export const PROJECTS: Project[] = [
  {
    title: 'Quantum Studio',
    description: 'A creative web agency.',
    link: 'https://quantumstudio.pt',
    id: 'project1',
  },
  {
    title: 'Compramos a Sua Casa',
    description: 'A real estate broker website.',
    link: 'https://compramosasuacasa.com/',
    id: 'project2',
  },
  {
    title: 'SOS Hair',
    description: 'A braid studio with a booking platform (in progress).',
    link: 'https://sos-hair.pt/',
    id: 'project3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Developing Taste',
    description: 'Why taste matters and how to develop it.',
    link: '/blog/developing-taste',
    uid: 'blog-1',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/ibelick',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/ibelick',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ibelick',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/ibelick',
  },
]

export const EMAIL = 'your@email.com'
