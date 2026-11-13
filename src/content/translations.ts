export type Lang = 'pt' | 'en'

export const translations = {
  pt: {
    nav: {
      home: 'Home',
      portfolio: 'Portfolio',
      blog: 'Blog',
      resume: 'Currículo',
      hire: 'Contratar'
    },
    hero: {
      available: '[ Disponível para projetos ]',
      subtitle: 'Desenvolvedor Full Stack com mais de 8 anos de experiência, 6 deles numa fintech de pagamentos. Sites, sistemas e checkouts que convertem.',
      cta_primary: 'Ver Case Studies',
      cta_secondary: 'Entre em Contato',
      scroll: 'scroll'
    },
    about: {
      index: '01',
      heading: 'Sobre mim',
      p1: 'Sou Desenvolvedor Full Stack há mais de 8 anos. Os últimos 6 foram na Cobre Fácil, uma plataforma brasileira de cobrança e pagamentos (boleto, Pix, cartão, assinaturas e nota fiscal).',
      p2: 'Lá eu trabalho do front ao back: checkout, área do cliente e design system em React e TypeScript, e integrações de pagamento e de nota fiscal no backend PHP. O redesign do checkout que fiz aumentou em 22% a conversão de pagamentos. Pela minha empresa, também atendo clientes como PJ, com nota fiscal: sites, sistemas sob medida e integrações de pagamento.',
      stats: [
        { number: '8+', label: 'Anos como dev' },
        { number: '6', label: 'Anos em fintech' },
        { number: '+22%', label: 'Conversão no checkout' },
        { number: 'PJ', label: 'Emito nota fiscal' }
      ]
    },
    services: {
      index: '02',
      heading: 'Serviços',
      subtitle: 'Pacotes com escopo e prazo definidos. Atendo como PJ, com nota fiscal. Orçamento em até 24 h úteis.',
      cta: 'Pedir orçamento',
      items: [
        {
          number: '01',
          title: 'Landing page de vendas',
          description: 'Uma página com texto e design, responsiva e rápida, integrada a Hotmart, WhatsApp ou formulário, com SEO básico.',
          meta: '5 dias úteis',
          price: 'A partir de R$ 1.500'
        },
        {
          number: '02',
          title: 'Site institucional',
          description: 'Até 5 páginas, com botão de WhatsApp, galeria, SEO local e perfil no Google Meu Negócio.',
          meta: '10 dias úteis',
          price: 'A partir de R$ 2.800'
        },
        {
          number: '03',
          title: 'Pagamento no seu site ou sistema',
          description: 'Checkout com Pix, boleto e cartão, emissão de nota fiscal e confirmação automática de pagamento por webhook.',
          meta: 'Prazo sob escopo',
          price: 'A partir de R$ 2.000'
        },
        {
          number: '04',
          title: 'Manutenção mensal',
          description: 'Hospedagem, domínio, atualizações de segurança e até 2 h de ajustes por mês. Seu site sempre no ar.',
          meta: 'Contínuo',
          price: 'R$ 250/mês'
        }
      ]
    },
    projects: {
      index: '03',
      heading: 'Projetos Destacados',
      github: 'GitHub →',
      live: 'Ver Live →',
      cta: 'Ver todos os projetos →',
      work_title: 'Case studies com resultado',
      work_desc: 'Decisões de produto, execução de design e resultados medidos.',
      work_metric_label: 'case studies',
      view_case: 'Ver case study →',
      details: 'Detalhes',
      source_private: 'Código privado',
      search_placeholder: 'Buscar projetos...',
      search_label: 'Buscar projetos',
      all_languages: 'Todas as linguagens',
      language_label: 'Filtrar por linguagem',
      sort_label: 'Ordenar',
      sort_relevance: 'Relevância',
      sort_newest: 'Mais recentes',
      sort_oldest: 'Mais antigos',
      sort_name: 'Nome (A–Z)',
      featured: 'Destaque',
      all_projects: 'Todos os projetos',
      empty: 'Nenhum projeto encontrado.',
      clear_filters: 'Limpar filtros',
      results: (n: number) => n === 1 ? '1 projeto' : `${n} projetos`,
      status: {
        production: 'Em produção',
        development: 'Em desenvolvimento',
        client: 'Projeto de cliente'
      }
    },
    stack: {
      index: '04',
      heading: 'Stack',
      subtitle: 'Tecnologias que uso no dia a dia.',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Banco de Dados',
        devops: 'DevOps & Ferramentas'
      }
    },
    experience: {
      index: '05',
      heading: 'Experiência',
      resume_heading: 'Currículo Completo',
      resume_description: 'Faça o download do meu currículo completo em PDF para uma visão detalhada da minha experiência e habilidades.',
      download_pdf: 'Download PDF',
      view_online: 'Ver online →',
      timeline: [
        {
          role: 'Software Development Engineer',
          company: 'Cobre Fácil',
          period: '2020 — Presente',
          current: true,
          bullets: [
            'Redesign do checkout de pagamento: +22% de conversão, medido em produção',
            'Biblioteca de componentes React do design system: ~40% menos tempo pra entregar telas novas',
            'Integrações de pagamento (Zoop, Celcoin) e de NFS-e (PlugNotas) no backend PHP (Yii)'
          ]
        },
        {
          role: 'Design Engineer (freela)',
          company: 'Shop My Feed',
          period: '2024',
          current: false,
          bullets: [
            'Interface completa de social commerce de moda em React, do Figma ao produto',
            'Linguagem visual espelhada no Instagram, de onde vinha o público, pra reduzir o atrito na entrada'
          ]
        },
        {
          role: 'Front End Engineer',
          company: 'Didáctica',
          period: '2018 — 2020',
          current: false,
          bullets: [
            'Redesign mobile-first da plataforma de webinars, com queda de 45% nos casos de abandono',
            'Biblioteca de componentes compartilhada por 3 produtos: ~50% menos código duplicado',
            'Palestrante em eventos de tecnologia (SistemasBR, Didática Tech)'
          ]
        },
        {
          role: 'Analista de Suporte (estágio → sênior)',
          company: 'Sistemas BR',
          period: '2016 — 2018',
          current: false,
          bullets: [
            'Implantou Scrum no time de suporte (8 pessoas): backlog de ~120 pra ~40 chamados em 2 meses',
            'Soluções pós-venda sob medida pra clientes corporativos: ~20% menos churn no primeiro ano'
          ]
        }
      ]
    },
    blog_section: {
      index: '06',
      heading: 'Do Blog',
      subtitle: 'Reflexões e aprendizados sobre desenvolvimento, design e tecnologia.',
      cta: 'Ver todos os artigos →'
    },
    contact: {
      index: '07',
      heading_line1: 'Vamos construir algo',
      heading_line2: 'extraordinário.',
      subtitle: 'Me conte o que você precisa. Respondo com um orçamento em até 24 h úteis.',
      email_subject: 'Orçamento de projeto',
      cta_email: 'Pedir orçamento',
      cta_linkedin: 'LinkedIn →'
    },
    work: {
      section_label: '03 — Work',
      heading: 'Case Studies',
      subtitle: 'Decisões de produto. Execução de design. Resultados mensuráveis.',
      view_case: 'Ver case study →',
      back_home: '← Voltar ao início',
      view_cases: 'Ver cases →'
    },
    case_study: {
      problem_label: 'O Problema',
      problem_heading: 'Identificando o problema real',
      decision_label: 'A Decisão',
      decision_heading: 'O raciocínio de produto',
      execution_label: 'A Execução',
      execution_heading: 'Da decisão à implementação',
      result_label: 'O Resultado',
      stack_label: 'Stack Usada',
      role_label: 'Meu Papel',
      period_label: 'Período',
      link_label: 'Link',
      company_label: 'Empresa',
      result_meta_label: 'Resultado',
      prev_label: '← Anterior',
      next_label: 'Próximo →',
      cta_question: 'Gostou do processo?',
      cta_heading: 'Vamos trabalhar juntos.',
      cta_button: 'Entrar em contato'
    },
    footer: {
      tagline: 'Desenvolvedor Full Stack. Sites, sistemas e integrações de pagamento, com nota fiscal.',
      nav_label: 'Navegação',
      social_label: 'Redes',
      made_with: 'Feito com Next.js & Tailwind CSS',
      rights: (year: number) => `© ${year} Daniel Cerverizzo. Todos os direitos reservados.`
    }
  },

  en: {
    nav: {
      home: 'Home',
      portfolio: 'Portfolio',
      blog: 'Blog',
      resume: 'Resume',
      hire: 'Hire Me'
    },
    hero: {
      available: '[ Available for projects ]',
      subtitle: 'Full Stack Developer with 8+ years of experience, the last 6 at a payments fintech. Websites, systems and checkouts that convert.',
      cta_primary: 'View Case Studies',
      cta_secondary: 'Get in Touch',
      scroll: 'scroll'
    },
    about: {
      index: '01',
      heading: 'About me',
      p1: 'I have been a Full Stack Developer for 8+ years. The last 6 were at Cobre Fácil, a Brazilian billing and payments platform (bank slips, Pix, cards, subscriptions and invoicing).',
      p2: 'I work across the stack there: checkout, client area and the design system in React and TypeScript, plus payment and invoicing integrations on the PHP backend. My checkout redesign raised payment conversion by 22%. Through my own company I also take client projects: websites, custom systems and payment integrations.',
      stats: [
        { number: '8+', label: 'Years as a dev' },
        { number: '6', label: 'Years in fintech' },
        { number: '+22%', label: 'Checkout conversion' },
        { number: 'B2B', label: 'Invoiced projects' }
      ]
    },
    services: {
      index: '02',
      heading: 'Services',
      subtitle: 'Packages with defined scope and timeline, invoiced through my company. Quotes within one business day.',
      cta: 'Request a quote',
      items: [
        {
          number: '01',
          title: 'Sales landing page',
          description: 'One page with copy and design, responsive and fast, connected to your checkout, WhatsApp or a form, with basic SEO.',
          meta: '5 business days',
          price: 'From R$ 1,500'
        },
        {
          number: '02',
          title: 'Company website',
          description: 'Up to 5 pages, with WhatsApp button, gallery, local SEO and Google Business Profile.',
          meta: '10 business days',
          price: 'From R$ 2,800'
        },
        {
          number: '03',
          title: 'Payments in your site or system',
          description: 'Checkout with Pix, bank slips and cards, invoice issuance and automatic payment confirmation via webhook.',
          meta: 'Timeline by scope',
          price: 'From R$ 2,000'
        },
        {
          number: '04',
          title: 'Monthly maintenance',
          description: 'Hosting, domain, security updates and up to 2 hours of changes per month. Your site always online.',
          meta: 'Ongoing',
          price: 'R$ 250/month'
        }
      ]
    },
    projects: {
      index: '03',
      heading: 'Featured Projects',
      github: 'GitHub →',
      live: 'View Live →',
      cta: 'View all projects →',
      work_title: 'Case studies with results',
      work_desc: 'Product decisions, design execution and measured results.',
      work_metric_label: 'case studies',
      view_case: 'View case study →',
      details: 'Details',
      source_private: 'Private source',
      search_placeholder: 'Search projects...',
      search_label: 'Search projects',
      all_languages: 'All languages',
      language_label: 'Filter by language',
      sort_label: 'Sort',
      sort_relevance: 'Relevance',
      sort_newest: 'Newest',
      sort_oldest: 'Oldest',
      sort_name: 'Name (A–Z)',
      featured: 'Featured',
      all_projects: 'All projects',
      empty: 'No projects found.',
      clear_filters: 'Clear filters',
      results: (n: number) => n === 1 ? '1 project' : `${n} projects`,
      status: {
        production: 'In production',
        development: 'In development',
        client: 'Client project'
      }
    },
    stack: {
      index: '04',
      heading: 'Stack',
      subtitle: 'Technologies I use every day.',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Database',
        devops: 'DevOps & Tools'
      }
    },
    experience: {
      index: '05',
      heading: 'Experience',
      resume_heading: 'Full Resume',
      resume_description: 'Download my complete resume in PDF for a detailed view of my experience and skills.',
      download_pdf: 'Download PDF',
      view_online: 'View online →',
      timeline: [
        {
          role: 'Software Development Engineer',
          company: 'Cobre Fácil',
          period: '2020 — Present',
          current: true,
          bullets: [
            'Payment checkout redesign: +22% conversion, measured in production',
            'React component library for the design system: ~40% less time to ship new screens',
            'Payment (Zoop, Celcoin) and service-invoice (PlugNotas) integrations on the PHP (Yii) backend'
          ]
        },
        {
          role: 'Design Engineer (freelance)',
          company: 'Shop My Feed',
          period: '2024',
          current: false,
          bullets: [
            'Full fashion social-commerce UI in React, from Figma to product',
            "Mirrored Instagram's visual language, where users came from, to reduce friction at entry"
          ]
        },
        {
          role: 'Front End Engineer',
          company: 'Didáctica',
          period: '2018 — 2020',
          current: false,
          bullets: [
            'Mobile-first redesign of the webinar platform, cutting abandonment cases by 45%',
            'Shared component library used by 3 products: ~50% less duplicated code',
            'Speaker at technology events (SistemasBR, Didática Tech)'
          ]
        },
        {
          role: 'Support Analyst (intern → senior)',
          company: 'Sistemas BR',
          period: '2016 — 2018',
          current: false,
          bullets: [
            'Introduced Scrum to an 8-person support team: backlog from ~120 to ~40 tickets in 2 months',
            'Custom post-sale solutions for corporate clients: ~20% lower churn in the first year'
          ]
        }
      ]
    },
    blog_section: {
      index: '06',
      heading: 'From the Blog',
      subtitle: 'Thoughts and learnings on software development, design, and technology.',
      cta: 'View all posts →'
    },
    contact: {
      index: '07',
      heading_line1: "Let's build something",
      heading_line2: 'extraordinary.',
      subtitle: 'Tell me what you need. I reply with a quote within one business day.',
      email_subject: 'Project quote',
      cta_email: 'Request a quote',
      cta_linkedin: 'LinkedIn →'
    },
    work: {
      section_label: '03 — Work',
      heading: 'Case Studies',
      subtitle: 'Product decisions. Design execution. Measured results.',
      view_case: 'View case study →',
      back_home: '← Back to home',
      view_cases: 'View cases →'
    },
    case_study: {
      problem_label: 'The Problem',
      problem_heading: 'Identifying the real problem',
      decision_label: 'The Decision',
      decision_heading: 'Product reasoning',
      execution_label: 'The Execution',
      execution_heading: 'From decision to implementation',
      result_label: 'The Result',
      stack_label: 'Stack Used',
      role_label: 'My Role',
      period_label: 'Period',
      link_label: 'Link',
      company_label: 'Company',
      result_meta_label: 'Result',
      prev_label: '← Previous',
      next_label: 'Next →',
      cta_question: 'Liked the process?',
      cta_heading: "Let's work together.",
      cta_button: 'Get in touch'
    },
    footer: {
      tagline: 'Full Stack Developer. Websites, custom systems and payment integrations.',
      nav_label: 'Navigation',
      social_label: 'Social',
      made_with: 'Built with Next.js & Tailwind CSS',
      rights: (year: number) => `© ${year} Daniel Cerverizzo. All rights reserved.`
    }
  }
} as const
