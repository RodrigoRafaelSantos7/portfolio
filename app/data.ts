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

export const PROJECTS: Project[] = [
  {
    title: 'Quantum Studio',
    description: 'A creative web agency.',
    link: 'https://quantumstudio.pt',
    id: 'project1',
  },
  {
    title: 'The Profit Blueprint',
    description: 'A course on web business models.',
    link: 'https://the-profit-blueprint.com',
    id: 'project2',
  },
  {
    title: 'Compramos a Sua Casa',
    description: 'A real estate broker website.',
    link: 'https://compramosasuacasa.com/',
    id: 'project3',
  },
  {
    title: 'SOS Hair',
    description: 'A braid studio with a booking platform (in progress).',
    link: 'https://sos-hair.pt/',
    id: 'project4',
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

export const EMAIL = 'hello@rodrigosantos.dev'
