export const TECH_STACK = {
  frontend: [
    { name: 'React', category: 'Frontend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Tailwind CSS', category: 'UI/UX' },
    { name: 'Vite', category: 'Tools' },
  ],
  backend: [
    { name: 'Node.js', category: 'Runtime' },
    { name: 'Fastify', category: 'Framework' },
    { name: 'Prisma ORM', category: 'Database' },
    { name: 'Bancos de Dados Relacionais / SQL', category: 'Database' },
  ],
  specialties: [
    { name: 'Electron', category: 'Desktop' },
    { name: 'Automação & Web Scraping', category: 'Scripts' },
  ],
} as const

export const FLAT_TECH_STACK = [
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Vite',
  'Node.js',
  'Fastify',
  'Prisma ORM',
  'SQL',
  'Electron',
  'Automação & Web Scraping'
] as const

export type TechStackType = typeof TECH_STACK