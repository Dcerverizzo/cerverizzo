import type { Lang } from '@/content/translations'

export interface CaseStudyImage {
  src: string
  alt: string
}

export interface LocalizedStrings {
  pt: string
  en: string
}

export interface LocalizedParagraphs {
  pt: string[]
  en: string[]
}

export interface CaseStudy {
  slug: string
  category: string
  company: string
  period: string
  role: string
  stack: string[]
  resultMetric: string
  resultText: LocalizedStrings
  title: string
  tagline: LocalizedStrings
  problem: LocalizedParagraphs
  decision: LocalizedParagraphs
  execution: LocalizedParagraphs
  heroImage: CaseStudyImage
  executionImages: CaseStudyImage[]
  externalLink?: string
  ndaNote?: LocalizedStrings
}

export function localized (cs: CaseStudy, lang: Lang) {
  return {
    tagline: cs.tagline[lang],
    problem: cs.problem[lang],
    decision: cs.decision[lang],
    execution: cs.execution[lang],
    resultText: cs.resultText[lang],
    ndaNote: cs.ndaNote?.[lang]
  }
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'treino-app',
    category: 'Produto Próprio / Mobile PWA',
    company: 'Projeto próprio',
    period: 'Set 2026 – Presente',
    role: 'Produto, Design e Engenharia',
    stack: ['Next.js 16', 'TypeScript', 'tRPC', 'Drizzle ORM', 'MySQL', 'PWA'],
    resultMetric: '38',
    resultText: {
      pt: 'Treinos finalizados nas primeiras três semanas, por 8 pessoas que testam o app. Musculação virou rotina. Corrida quase não apareceu — e esse é o próximo problema a resolver.',
      en: 'Workouts completed in the first three weeks by 8 people testing the app. Strength training became routine. Running barely showed up — and that is the next problem to solve.'
    },
    title: 'App de Treino — Força e Corrida',
    tagline: {
      pt: 'Eu treinava com uma planilha e corria com outro app. O corpo era um só, os dados não.',
      en: 'I trained with a spreadsheet and ran with another app. One body, two disconnected datasets.'
    },
    problem: {
      pt: [
        'Desde 2018 eu anoto meus treinos. Primeiro no Obsidian, depois numa planilha de Excel com série, repetição e carga. Funcionava, mas era como dirigir olhando só pelo retrovisor: eu sabia o que tinha feito, nunca o que fazer a seguir.',
        'A corrida morava em outro lugar. O relógio mandava para o Strava, o Strava guardava os dados e nenhum dos dois sabia que eu tinha feito agachamento pesado no dia anterior.',
        'Testei os apps do mercado. Eles resolviam bem o planejamento, mas o histórico ficava fraco ou atrás de paywall. E nenhum respondia à pergunta que eu fazia toda manhã: o que eu treino hoje sem atropelar o que treinei ontem?'
      ],
      en: [
        'I have been logging my workouts since 2018. First in Obsidian, then in an Excel spreadsheet with sets, reps and load. It worked, but it was like driving while looking only at the rear-view mirror: I knew what I had done, never what to do next.',
        'Running lived somewhere else. My watch synced to Strava, Strava kept the data, and neither knew I had done heavy squats the day before.',
        'I tried the apps on the market. They handled planning well, but history was weak or behind a paywall. And none of them answered the question I asked every morning: what do I train today without running over what I trained yesterday?'
      ]
    },
    decision: {
      pt: [
        'A primeira decisão foi o que o app não seria. Não seria uma biblioteca com mil exercícios e vídeo. O centro seria o registro real do que aconteceu e a leitura disso ao longo do tempo.',
        'Para unir força e corrida, escolhi uma linguagem visual que os dois entendem: o corpo. Um boneco que fica vermelho nos músculos treinados e esfria com o tempo. A regra é simples — até 3 séries, o músculo esfria em 3 dias; de 4 a 6, em 5 dias; 7 ou mais, em 7 dias. A corrida marca as pernas, sempre com intensidade menor que a musculação. Carga ficou de fora do cálculo: 60 kg no supino e 60 kg no leg press não dizem a mesma coisa.',
        'O Strava não entrega o VO2máx do relógio. Em vez de depender de uma integração que não existe, o app calcula pela fórmula VDOT do Jack Daniels a partir do melhor pace recente, e aceita o valor do relógio se eu quiser corrigir.',
        'A decisão que mais mudou o produto veio depois, treinando com ele. Na academia, com a respiração alta, tinha informação demais na tela. Separei o antes do durante: uma tela para preparar o treino e um Modo Treino no estilo player — uma série por vez, números grandes, um botão Feito e o descanso correndo em anel.'
      ],
      en: [
        'The first decision was what the app would not be. It would not be a library with a thousand exercises and videos. The core would be the real record of what happened and how to read it over time.',
        'To unite strength and running, I chose a visual language both understand: the body. A figure that turns red on the muscles you trained and cools down over time. The rule is simple — up to 3 sets, the muscle cools in 3 days; 4 to 6, in 5 days; 7 or more, in 7 days. Running marks the legs, always at a lower intensity than lifting. Load was left out of the formula: 60 kg on the bench press and 60 kg on the leg press do not mean the same thing.',
        'Strava does not expose the VO2max from the watch. Instead of depending on an integration that does not exist, the app estimates it with Jack Daniels\' VDOT formula from the best recent pace, and accepts the watch value as an override.',
        'The decision that changed the product the most came later, while training with it. At the gym, out of breath, there was too much on the screen. I split before from during: one screen to prepare the workout and a player-style Workout Mode — one set at a time, big numbers, a Done button and rest time running in a ring.'
      ]
    },
    execution: {
      pt: [
        'Next.js 16 com tRPC e Drizzle sobre MySQL, publicado como PWA para instalar na tela inicial do iPhone. Sem app nativo: a velocidade de publicar uma correção no mesmo dia valia mais que as APIs que eu perderia.',
        'Os bugs mais importantes só apareceram no celular, dentro da academia. O iOS dava zoom em qualquer campo com fonte menor que 16px. O Safari suspendia o áudio do alarme de descanso depois de alguns segundos parado — o teste automatizado pulava o descanso e nunca pegou isso. E a Vercel roda em UTC: um treino feito às 23h caía no dia seguinte no calendário.',
        'O sinal ruim da academia virou decisão de arquitetura. Antes, uma série registrada sem conexão sumia da tela. Agora ela fica numa fila no aparelho e sobe sozinha quando o sinal volta. Como o registro de série já era idempotente, enviar duas vezes não duplica nada.',
        'Depois que amigos pediram para usar, o app ganhou contas por convite, onboarding, painel de admin e métricas de uso — tudo lido com consultas agregadas, sem expor dado pessoal de ninguém.'
      ],
      en: [
        'Next.js 16 with tRPC and Drizzle on MySQL, shipped as a PWA installed on the iPhone home screen. No native app: being able to ship a fix the same day was worth more than the APIs I would give up.',
        'The most important bugs only showed up on a phone, inside the gym. iOS zoomed into any input with a font smaller than 16px. Safari suspended the rest-timer audio after a few idle seconds — the automated test skipped the rest period and never caught it. And Vercel runs in UTC: a workout logged at 11pm landed on the next day in the calendar.',
        'Poor gym signal became an architecture decision. Before, a set logged without connection disappeared from the screen. Now it waits in an on-device queue and syncs on its own when the signal returns. Since set logging was already idempotent, sending twice never duplicates anything.',
        'Once friends asked to use it, the app gained invite-only accounts, onboarding, an admin panel and usage metrics — all read through aggregated queries, without exposing anyone\'s personal data.'
      ]
    },
    heroImage: {
      src: '/work/treino-app/hero.webp',
      alt: 'Três telas do app: resumo da semana, Modo Treino com supino e boneco com músculos treinados em vermelho'
    },
    executionImages: [
      {
        src: '/work/treino-app/modo-treino.webp',
        alt: 'Modo Treino: uma série por vez, com sugestão de subir a carga e guia de execução do exercício'
      },
      {
        src: '/work/treino-app/boneco-resumo.webp',
        alt: 'Boneco com recuperação muscular e resumo do treino com recordes pessoais'
      }
    ]
  },
  {
    slug: 'shop-my-feed',
    category: 'E-commerce / Product Design',
    company: 'Shop My Feed',
    period: '',
    role: 'Design Engineer (Freelance)',
    stack: ['React', 'TypeScript', 'Figma', 'CSS3'],
    resultMetric: 'UX nativo',
    resultText: {
      pt: 'Interface que não pede adaptação do usuário — ele já sabe usar antes de aprender.',
      en: 'Interface that requires no user adaptation — they already know how to use it before learning.'
    },
    title: 'Shop My Feed',
    tagline: {
      pt: 'Projetado para usuários que já sabiam navegar — eles só precisavam de um motivo para ficar.',
      en: 'Designing for users who already knew how to navigate — they just needed a reason to stay.'
    },
    problem: {
      pt: [
        'A plataforma de moda Shop My Feed precisava de uma experiência de e-commerce completa — do dashboard ao detalhe do produto. O desafio não era técnico.',
        'Era comportamental: a maioria da base de usuários viria do Instagram. Usuários vindos de uma plataforma com uma gramática visual muito específica. Se a interface parecesse estranha, eles sairiam antes de comprar.'
      ],
      en: [
        'The Shop My Feed fashion platform needed a complete e-commerce experience — from the dashboard to the product detail. The challenge wasn\'t technical.',
        'It was behavioral: most of the user base would come from Instagram. Users coming from a platform with a very specific visual grammar. If the interface felt unfamiliar, they\'d leave before buying.'
      ]
    },
    decision: {
      pt: [
        'A decisão central de UX foi manter consistência deliberada de linguagem visual com o Instagram — não copiar, mas respeitar o modelo mental que os usuários já traziam. Mesma gramática de navegação. Feed de produtos vertical. Thumbnails quadrados. Elementos de interação em posições esperadas.',
        'A visualização de outfit foi implementada como flat lay com variantes em círculos — um padrão que o usuário já conhecia do Pinterest/Instagram mas aplicado diretamente ao e-commerce, eliminando a fricção de imaginar como as peças combinam.',
        'O CTA de compra foi fixado no bottom com preço sempre visível — decisão de conversão consciente que mantém o contexto sem interromper a navegação. O assistente de IA foi integrado dentro do contexto do produto, não como widget genérico flutuante, mantendo a experiência coesa com a jornada de compra.'
      ],
      en: [
        'The central UX decision was to maintain deliberate visual language consistency with Instagram — not to copy, but to respect the mental model users already brought. Same navigation grammar. Vertical product feed. Square thumbnails. Interaction elements in expected positions.',
        'The outfit view was implemented as a flat lay with circular variants — a pattern users already knew from Pinterest/Instagram but applied directly to e-commerce, eliminating the friction of imagining how pieces combine.',
        'The purchase CTA was fixed at the bottom with the price always visible — a conscious conversion decision that keeps context without interrupting navigation. The AI assistant was integrated within the product context, not as a generic floating widget, keeping the experience cohesive with the purchase journey.'
      ]
    },
    execution: {
      pt: [
        'Implementado em React a partir das especificações no Figma, com foco em pixel fidelity e consistência entre estados (empty, loading, error).',
        'A atenção foi nos detalhes que a maioria dos devs pula: espaçamento consistente, timing de animações, estados de hover e active em todos os elementos interativos, acessibilidade em mobile.'
      ],
      en: [
        'Implemented in React from Figma specifications, with a focus on pixel fidelity and consistency across states (empty, loading, error).',
        'The focus was on details most developers skip: consistent spacing, animation timing, hover and active states on all interactive elements, mobile accessibility.'
      ]
    },
    heroImage: {
      src: '/images/smf-feed1.png',
      alt: 'Shop My Feed — tela principal do feed'
    },
    executionImages: [
      {
        src: '/images/smf-photo-profile.png',
        alt: 'Flat lay com variantes de outfit'
      },
      {
        src: '/images/smf-photo.png',
        alt: 'Detalhe do produto'
      },
      {
        src: '/images/smf-product.png',
        alt: 'CTA fixo no bottom'
      }
    ]
  },
  {
    slug: 'webinar-mobile',
    category: 'UX Redesign / Mobile',
    company: 'Didáctica',
    period: 'Jun 2018 – Jan 2020',
    role: 'Front End Engineer',
    stack: ['JavaScript', 'CSS3', 'HTML5'],
    resultMetric: '−45%',
    resultText: {
      pt: 'Redução nos casos de abandono e problemas de acesso via mobile após o redesign completo da experiência mobile-first.',
      en: 'Reduction in abandonment cases and access issues on mobile after the complete mobile-first experience redesign.'
    },
    title: 'Webinar Mobile — Clickmob',
    tagline: {
      pt: 'O produto funcionava. Para o dispositivo errado.',
      en: 'The product worked. For the wrong device.'
    },
    problem: {
      pt: [
        'A plataforma de educação online da Didáctica recebia reclamações constantes: "não consigo acessar", "trava no celular", "desisti de assistir".',
        'A análise dos dados revelou o problema real: mais de 60% dos acessos eram via dispositivos mobile. Mas a experiência de webinar havia sido construída pensando exclusivamente em desktop. O produto funcionava — para o dispositivo errado.'
      ],
      en: [
        'Didáctica\'s online education platform was receiving constant complaints: "I can\'t access it", "it freezes on my phone", "I gave up watching".',
        'Data analysis revealed the real problem: over 60% of access was via mobile devices. But the webinar experience had been built thinking exclusively about desktop. The product worked — for the wrong device.'
      ]
    },
    decision: {
      pt: [
        'Antes de qualquer nova feature, a decisão foi redesenhar a experiência mobile do zero. A prioridade foi invertida: mobile passou a ser o contexto principal de design, não uma adaptação do desktop.',
        'O redesign focou nos pontos críticos de abandono: acesso ao stream, controles de vídeo em tela touch, legibilidade de conteúdo em telas menores e performance de carregamento em conexões móveis.'
      ],
      en: [
        'Before any new feature, the decision was to redesign the mobile experience from scratch. The priority was reversed: mobile became the primary design context, not a desktop adaptation.',
        'The redesign focused on critical abandonment points: stream access, video controls on touch screens, content readability on smaller screens, and loading performance on mobile connections.'
      ]
    },
    execution: {
      pt: [
        'Redesign completo da interface de webinar para mobile-first. Controles reposicionados para zona de alcance do polegar.',
        'Layout responsivo reconstruído do zero, não adaptado. Performance otimizada para conexões variáveis.'
      ],
      en: [
        'Complete webinar interface redesign for mobile-first. Controls repositioned for thumb reach zone.',
        'Responsive layout rebuilt from scratch, not adapted. Performance optimized for variable connections.'
      ]
    },
    heroImage: {
      src: '/images/didactica_team.jpg',
      alt: 'Time da Didáctica'
    },
    executionImages: []
  },
  {
    slug: 'checkout-cobrefacil',
    category: 'Conversion Design / Fintech',
    company: 'Cobre Fácil',
    period: 'Mar 2020 – Presente',
    role: 'Design Engineer',
    stack: ['React', 'TypeScript', 'CSS3'],
    resultMetric: '+22%',
    resultText: {
      pt: 'Aumento na taxa de conversão de pagamentos após redesign do fluxo de checkout. Resultado medido em produção.',
      en: 'Increase in payment conversion rate after checkout flow redesign. Result measured in production.'
    },
    title: 'Checkout — Cobre Fácil',
    tagline: {
      pt: 'Usuários chegavam à última etapa. Depois saíam. O problema não era o pagamento — era a interface.',
      en: "Users were reaching the last step. Then leaving. The problem wasn't the payment — it was the interface."
    },
    problem: {
      pt: [
        'Usuários chegavam até a etapa final do checkout da plataforma de pagamentos Cobre Fácil e abandonavam. A taxa de conversão estava abaixo do esperado.',
        'A análise do fluxo revelou três problemas de UI críticos: o CTA de pagamento sumia ao rolar a tela, o preço final só aparecia no último passo, e as mensagens de erro eram genéricas — o usuário não sabia o que precisava corrigir.'
      ],
      en: [
        'Users were reaching the final checkout step of Cobre Fácil\'s payment platform and abandoning. The conversion rate was below expectations.',
        'Flow analysis revealed three critical UI problems: the payment CTA disappeared when scrolling, the final price only appeared in the last step, and error messages were generic — users didn\'t know what they needed to fix.'
      ]
    },
    decision: {
      pt: [
        'Cada problema mapeado recebeu uma solução direta de UI: CTA fixo no bottom com preço sempre visível ao lado — elimina a necessidade de rolar para encontrar a ação principal.',
        'Resumo do valor exibido em todas as etapas do checkout — elimina a ansiedade de não saber o total até o fim.',
        'Mensagens de erro específicas por campo com instrução de correção — elimina a frustração de erros genéricos que não orientam o usuário. Cada decisão foi tomada com um princípio: reduzir fricção cognitiva na etapa de maior intenção de compra.'
      ],
      en: [
        'Each mapped problem received a direct UI solution: fixed CTA at the bottom with price always visible alongside — eliminates the need to scroll to find the primary action.',
        'Value summary displayed at all checkout steps — eliminates the anxiety of not knowing the total until the end.',
        'Specific error messages per field with correction instructions — eliminates frustration from generic errors that don\'t guide the user. Each decision was made with one principle: reduce cognitive friction at the highest purchase intent step.'
      ]
    },
    execution: {
      pt: [
        'Implementado em React com TypeScript. O componente de CTA fixo foi construído para funcionar em todos os breakpoints sem sobrepor conteúdo crítico.',
        'Os estados de erro foram padronizados em um sistema de validação consistente reusável em outros formulários da plataforma.'
      ],
      en: [
        'Implemented in React with TypeScript. The fixed CTA component was built to work across all breakpoints without overlapping critical content.',
        'Error states were standardized in a consistent validation system reusable across other platform forms.'
      ]
    },
    heroImage: {
      src: '/images/hero.png',
      alt: 'Checkout — Cobre Fácil'
    },
    executionImages: [
      {
        src: '/images/checkout.png',
        alt: 'CTA fixo no bottom com preço visível'
      },
      {
        src: '/images/cta-fixed.png',
        alt: 'Estados de erro específicos por campo'
      }
    ]
  }
]
