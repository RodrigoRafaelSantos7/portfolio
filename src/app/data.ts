export type Project = {
  name: string
  subTitle?: string
  description: string
  link: string
  underDevelopment?: boolean
  image: string
  techStack?: string[]
  id: string
}

export const PROJECTS: Project[] = [
  {
    name: 'The Profit Blueprint',
    description:
      'An online platform to help young entrepreneurs start their own business. Currently has over 2000+ daily active users.',
    link: 'https://the-profit-blueprint.com/',
    image:
      'https://res.cloudinary.com/dedobvqub/image/upload/v1739875688/TPB_Logo_Background_urvhmy.png',
    id: 'project1',
  },
  {
    name: 'Coral Infantil de Setúbal',
    description:
      'A website for a non-profit organization in my home town. *Still under development*.',
    link: '',
    underDevelopment: true,
    image:
      'https://res.cloudinary.com/dedobvqub/image/upload/v1740147638/459591107_3908270396122187_8608528738810136292_n_1_bp7aqt.jpg',
    id: 'project2',
  },
]
