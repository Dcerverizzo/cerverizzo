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
    slug: 'shop-my-feed',
    category: 'E-commerce / Product Design',
    company: 'Shop My Feed',
    period: '', // TODO: adicionar período
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
      // SUBSTITUIR: /public/work/shop-my-feed/hero.jpg — tela principal do feed
      src: '/images/smf-feed1.png',
      alt: 'Shop My Feed — tela principal do feed'
    },
    executionImages: [
      {
        // SUBSTITUIR: /public/work/shop-my-feed/outfit-view.jpg — flat lay com variantes
        src: '/images/smf-photo-profile.png',
        alt: 'Flat lay com variantes de outfit'
      },
      {
        // SUBSTITUIR: /public/work/shop-my-feed/product-detail.jpg — detalhe do produto
        src: '/images/smf-photo.png',
        alt: 'Detalhe do produto'
      },
      {
        // SUBSTITUIR: /public/work/shop-my-feed/checkout-cta.jpg — CTA fixo no bottom
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
      // SUBSTITUIR: /public/work/webinar-mobile/hero.jpg
      src: 'https://placehold.co/1200x480/111111/C8B89A',
      alt: 'Webinar Mobile — Clickmob'
    },
    executionImages: [
      {
        // SUBSTITUIR: /public/work/webinar-mobile/before.jpg — experiência anterior (desktop-first)
        src: 'https://placehold.co/600x400/111111/C8B89A',
        alt: 'Experiência anterior — desktop-first'
      },
      {
        // SUBSTITUIR: /public/work/webinar-mobile/after.jpg — experiência redesenhada (mobile-first)
        src: 'https://placehold.co/600x400/111111/C8B89A',
        alt: 'Experiência redesenhada — mobile-first'
      }
    ]
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
      // SUBSTITUIR: /public/work/checkout-cobrefacil/hero.jpg
      // Atenção: verificar política de NDA antes de publicar prints da plataforma
      src: '/images/hero.png',
      alt: 'Checkout — Cobre Fácil'
    },
    executionImages: [
      {
        // SUBSTITUIR: /public/work/checkout-cobrefacil/cta-fixed.jpg — CTA fixo no bottom com preço visível
        src: '/images/checkout.png',
        alt: 'CTA fixo no bottom com preço visível'
      },
      {
        // SUBSTITUIR: /public/work/checkout-cobrefacil/error-states.jpg — estados de erro específicos por campo
        // Atenção: verificar política de NDA antes de publicar
        src: '/images/cta-fixed.png',
        alt: 'Estados de erro específicos por campo'
      }
    ],
    ndaNote: {
      pt: 'Verificar política de NDA antes de publicar prints da plataforma.',
      en: 'Check NDA policy before publishing platform screenshots.'
    }
  }
]
