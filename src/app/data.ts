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
}

export const about: About = {
  heading: 'About me',
  text: 'Crafting Web Apps with React since 2024. Passionate about interface design and attention to detail, striving to create great experiences.',
}

export const newsletter: Newsletter = {
  text: 'Subscribe to my personal newsletter for project updates, great links, and some personal notes.',
  placeholder: 'you@example.com',
  button: 'Subscribe',
}

export const projects: Project[] = [
  {
    title: 'The Profit Blueprint',
    description: 'Description 1',
    background:
      'https://res.cloudinary.com/dedobvqub/image/upload/v1739875688/TPB_Logo_Background_urvhmy.png',
  },
  {
    title: 'The Profit Blueprint 2',
    description: 'Description 1',
    background:
      'https://res.cloudinary.com/dedobvqub/image/upload/v1739875688/TPB_Logo_Background_urvhmy.png',
  },
]
