import type { NavigationMenuItem } from '@nuxt/ui'

export const navLinks: NavigationMenuItem[] = [{
  label: 'Home',
  icon: 'i-lucide-home',
  to: '/'
}, {
  label: 'Projetos',
  icon: 'i-lucide-folder',
  to: '/projects'
}, {
  label: 'Sobre Mim',
  icon: 'i-lucide-user',
  to: '/about'
}]
