import type { Repo } from './types'

// Curated list, ordered by relevance. Metadata mirrors github.com/Dcerverizzo;
// private projects have no html_url.
const projects: Repo[] = [
  {
    name: 'treino-app',
    title: 'App de Treino — Força e Corrida',
    html_url: null,
    description: 'PWA de musculação e corrida com boneco de recuperação muscular, Modo Treino série a série, VO2máx estimado e fila offline para academia sem sinal.',
    description_en: 'Strength and running PWA with a muscle recovery body map, set-by-set Workout Mode, estimated VO2max and an offline queue for gyms with no signal.',
    language: 'TypeScript',
    topics: ['nextjs', 'trpc', 'drizzle', 'pwa'],
    created_at: '2026-09-17T00:00:00Z',
    homepage: null,
    image: '/work/treino-app/hero.webp',
    status: 'production',
    caseStudy: 'treino-app'
  },
  {
    name: 'scheduling-saas',
    title: 'Agenda SaaS com WhatsApp',
    html_url: null,
    description: 'Agendamento online multi-empresa para barbearias, salões e clínicas: profissional, serviço, disponibilidade, confirmação e lembrete pelo WhatsApp.',
    description_en: 'Multi-tenant online booking for barbershops, salons and clinics: staff, services, availability, confirmation and WhatsApp reminders.',
    language: 'TypeScript',
    topics: ['nextjs', 'prisma', 'postgres', 'bullmq', 'turborepo'],
    created_at: '2026-08-19T00:00:00Z',
    homepage: null,
    status: 'development'
  },
  {
    name: 'alves-mansano',
    title: 'Alves & Mansano Gastronomia',
    html_url: null,
    description: 'Site institucional para buffet e catering de eventos: apresentação, como atuam, eventos, galeria e pedido de proposta pelo WhatsApp.',
    description_en: 'Website for an event catering and buffet company: about, how they work, events, gallery and quote requests via WhatsApp.',
    language: 'TypeScript',
    topics: ['nextjs', 'site-cliente', 'seo'],
    created_at: '2026-04-10T00:00:00Z',
    homepage: null,
    image: '/images/project-alves-mansano.webp',
    status: 'client'
  },
  {
    name: 'cerverizzo',
    title: 'cerverizzo.dev',
    html_url: 'https://github.com/Dcerverizzo/cerverizzo',
    description: 'Este site: portfólio, case studies e blog em Next.js, com tema claro/escuro e versão em português e inglês.',
    description_en: 'This site: portfolio, case studies and blog in Next.js, with light/dark themes and Portuguese and English versions.',
    language: 'TypeScript',
    topics: ['portfolio', 'nextjs', 'i18n'],
    created_at: '2023-08-26T00:00:00Z',
    homepage: 'https://cerverizzo.dev'
  },
  {
    name: 'web-scraping-jobs',
    html_url: 'https://github.com/Dcerverizzo/web-scraping-jobs',
    description: 'Agregador de vagas internacionais com Node.js e Puppeteer, coletando de vários sites em um só lugar.',
    description_en: 'International job aggregator built with Node.js and Puppeteer, collecting listings from several sites into one place.',
    language: 'JavaScript',
    topics: ['puppeteer', 'nodejs', 'scraping'],
    created_at: '2023-10-26T00:00:00Z',
    homepage: null
  },
  {
    name: 'spotify',
    html_url: 'https://github.com/Dcerverizzo/spotify',
    description: 'Interface inspirada no Spotify feita com Next.js e TypeScript.',
    description_en: 'Spotify-inspired interface built with Next.js and TypeScript.',
    language: 'TypeScript',
    topics: ['nextjs', 'typescript'],
    created_at: '2023-08-03T00:00:00Z',
    homepage: 'https://spotify-eta-three.vercel.app'
  },
  {
    name: 'jobs',
    html_url: 'https://github.com/Dcerverizzo/jobs',
    description: 'Quadro de vagas em Vue.js que consome uma API externa e carrega os cards de forma progressiva.',
    description_en: 'Vue.js job board that consumes an external API and loads cards progressively.',
    language: 'Vue',
    topics: ['vue', 'api'],
    created_at: '2023-11-03T00:00:00Z',
    homepage: null
  },
  {
    name: 'heartFoundation',
    html_url: 'https://github.com/Dcerverizzo/heartFoundation',
    description: 'Sistema em React para gestão de ordens de serviço do departamento de saúde de um hospital.',
    description_en: 'React system for managing service orders in a hospital\'s health department.',
    language: 'JavaScript',
    topics: ['react', 'saude'],
    created_at: '2020-03-03T00:00:00Z',
    homepage: null
  },
  {
    name: 'financialTools',
    html_url: 'https://github.com/Dcerverizzo/financialTools',
    description: 'API de finanças pessoais ("Seu Barriga") em Node.js, feita como estudo de caso de desenvolvimento de APIs.',
    description_en: 'Personal finance API ("Seu Barriga") in Node.js, built as an API development case study.',
    language: 'JavaScript',
    topics: ['nodejs', 'api'],
    created_at: '2023-08-24T00:00:00Z',
    homepage: null
  },
  {
    name: 'microservices-fc',
    html_url: 'https://github.com/Dcerverizzo/microservices-fc',
    description: 'Estudo de microsserviços em Go.',
    description_en: 'Microservices study in Go.',
    language: 'Go',
    topics: ['go', 'microservices'],
    created_at: '2024-01-30T00:00:00Z',
    homepage: null
  },
  {
    name: 'Porterminal',
    html_url: 'https://github.com/Dcerverizzo/Porterminal',
    description: 'Portfólio em formato de terminal interativo, para explorar skills e projetos por comandos.',
    description_en: 'Portfolio as an interactive terminal, exploring skills and projects through commands.',
    language: 'JavaScript',
    topics: ['terminal', 'portfolio'],
    created_at: '2016-09-20T00:00:00Z',
    homepage: null
  }
]

export async function fetchRepos (): Promise<Repo[]> {
  return projects
}
