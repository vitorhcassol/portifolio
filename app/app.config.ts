export default defineAppConfig({
  global: {
    picture: {
      dark: '/home/avatar.jpeg',
      light: '/home/avatar.jpeg',
      alt: 'My profile picture'
    },
    meetingLink: 'https://cal.com/vitor-cassol',
    email: 'vitor.cassol.ltda@gmail.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `Vitor Cassol • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'mdi-linkedin',
      'to': 'https://www.linkedin.com/in/vitorcassol',
      'target': '_blank',
      'aria-label': 'Vitor Cassol on Linkedin'
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/vitorhcassol',
      'target': '_blank',
      'aria-label': 'Vitor Cassol on GitHub'
    }]
  }
})
