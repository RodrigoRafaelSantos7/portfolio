type About = {
  heading: string
  text: string
}

type Newsletter = {
  text: string
  placeholder: string
  button: string
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
