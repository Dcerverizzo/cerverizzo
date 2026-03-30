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
      subtitle: 'Software Engineer Full Stack com mais de 10 anos construindo interfaces e produtos digitais de alto impacto.',
      cta_primary: 'Ver Projetos',
      cta_secondary: 'Entre em Contato',
      scroll: 'scroll'
    },
    about: {
      index: '01',
      heading: 'Sobre mim',
      p1: 'Sou um Engenheiro de Software Full Stack com mais de 10 anos de experiência na construção de interfaces e aplicações web de alto desempenho.',
      p2: 'Atualmente atuo como Software Development Engineer na Cobre Fácil, especializado na construção de componentes UX/UI com JavaScript, React, Next.js, TypeScript e Node.js. Também ofereço serviços de desenvolvimento de sites personalizados e consultoria de tecnologia online.',
      stats: [
        { number: '10+', label: 'Anos de exp.' },
        { number: '50+', label: 'Projetos' },
        { number: '10+', label: 'Tecnologias' },
        { number: '3', label: 'Países' }
      ]
    },
    services: {
      index: '02',
      heading: 'Serviços',
      subtitle: 'Soluções digitais completas para negócios que querem se destacar online.',
      cta: 'Saiba mais',
      items: [
        {
          number: '01',
          title: 'Desenvolvimento de Sites Personalizados',
          description: 'Sites e aplicações web sob medida, com foco em performance, acessibilidade e experiência do usuário. Do design ao deploy.'
        },
        {
          number: '02',
          title: 'Consultoria de Tecnologia Online',
          description: 'Orientação estratégica para decisões tecnológicas, arquitetura de sistemas e escolha de stack. Sessões online para empresas e founders.'
        },
        {
          number: '03',
          title: 'UI/UX Engineering',
          description: 'Interfaces de alta fidelidade com animações e micro-interações. Implementação pixel-perfect a partir de designs Figma e referências visuais.'
        },
        {
          number: '04',
          title: 'Integração de APIs & Backend',
          description: 'Desenvolvimento de APIs RESTful, integração com serviços externos e soluções backend escaláveis com Node.js, Python e bancos de dados modernos.'
        }
      ]
    },
    projects: {
      index: '03',
      heading: 'Projetos Destacados',
      github: 'GitHub →',
      live: 'Ver Live →',
      cta: 'Ver todos os projetos →'
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
          period: '2022 — Presente',
          current: true,
          bullets: [
            'Desenvolvimento de componentes UX/UI com React, Next.js e TypeScript',
            'Construção e manutenção de APIs RESTful com Node.js',
            'Otimização de performance e acessibilidade em aplicações de grande escala'
          ]
        },
        {
          role: 'Software Engineer Full Stack',
          company: 'Projetos & Freelance',
          period: '2018 — 2022',
          current: false,
          bullets: [
            'Desenvolvimento de sites e sistemas personalizados para clientes nacionais e internacionais',
            'Consultoria técnica para startups em fase de produto',
            'Palestrante em eventos de tecnologia (SistemasBR, Didática Tech)'
          ]
        },
        {
          role: 'Desenvolvedor Web',
          company: 'Agências & CLT',
          period: '2016 — 2018',
          current: false,
          bullets: [
            'Desenvolvimento Frontend com HTML, CSS, JavaScript e PHP',
            'Criação de e-commerces e landing pages de alta conversão',
            'Suporte técnico e manutenção de sistemas legados'
          ]
        }
      ]
    },
    contact: {
      index: '06',
      heading_line1: 'Vamos construir algo',
      heading_line2: 'extraordinário.',
      cta_email: 'Enviar mensagem',
      cta_linkedin: 'LinkedIn →'
    },
    footer: {
      tagline: 'Software Engineer Full Stack. Sites personalizados e consultoria de tecnologia online.',
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
      subtitle: 'Full Stack Software Engineer with 10+ years building high-impact interfaces and digital products.',
      cta_primary: 'View Projects',
      cta_secondary: 'Get in Touch',
      scroll: 'scroll'
    },
    about: {
      index: '01',
      heading: 'About me',
      p1: 'I am a Full Stack Software Engineer with over 10 years of experience building high-performance interfaces and web applications.',
      p2: 'I currently work as a Software Development Engineer at Cobre Fácil, specializing in UX/UI components with JavaScript, React, Next.js, TypeScript, and Node.js. I also offer custom website development and online technology consulting.',
      stats: [
        { number: '10+', label: 'Years of exp.' },
        { number: '50+', label: 'Projects' },
        { number: '10+', label: 'Technologies' },
        { number: '3', label: 'Countries' }
      ]
    },
    services: {
      index: '02',
      heading: 'Services',
      subtitle: 'Complete digital solutions for businesses that want to stand out online.',
      cta: 'Learn more',
      items: [
        {
          number: '01',
          title: 'Custom Website Development',
          description: 'Tailor-made websites and web applications focused on performance, accessibility, and user experience. From design to deployment.'
        },
        {
          number: '02',
          title: 'Online Technology Consulting',
          description: 'Strategic guidance for technology decisions, system architecture, and stack selection. Online sessions for companies and founders.'
        },
        {
          number: '03',
          title: 'UI/UX Engineering',
          description: 'High-fidelity interfaces with animations and micro-interactions. Pixel-perfect implementation from Figma designs and visual references.'
        },
        {
          number: '04',
          title: 'API & Backend Integration',
          description: 'RESTful API development, integration with external services, and scalable backend solutions with Node.js, Python, and modern databases.'
        }
      ]
    },
    projects: {
      index: '03',
      heading: 'Featured Projects',
      github: 'GitHub →',
      live: 'View Live →',
      cta: 'View all projects →'
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
          period: '2022 — Present',
          current: true,
          bullets: [
            'UX/UI component development with React, Next.js, and TypeScript',
            'Building and maintaining RESTful APIs with Node.js',
            'Performance and accessibility optimization in large-scale applications'
          ]
        },
        {
          role: 'Full Stack Software Engineer',
          company: 'Projects & Freelance',
          period: '2018 — 2022',
          current: false,
          bullets: [
            'Custom website and system development for national and international clients',
            'Technical consulting for product-stage startups',
            'Speaker at technology events (SistemasBR, Didática Tech)'
          ]
        },
        {
          role: 'Web Developer',
          company: 'Agencies & CLT',
          period: '2016 — 2018',
          current: false,
          bullets: [
            'Frontend development with HTML, CSS, JavaScript, and PHP',
            'E-commerce and high-conversion landing page creation',
            'Technical support and legacy system maintenance'
          ]
        }
      ]
    },
    contact: {
      index: '06',
      heading_line1: "Let's build something",
      heading_line2: 'extraordinary.',
      cta_email: 'Send message',
      cta_linkedin: 'LinkedIn →'
    },
    footer: {
      tagline: 'Full Stack Software Engineer. Custom websites and online technology consulting.',
      nav_label: 'Navigation',
      social_label: 'Social',
      made_with: 'Built with Next.js & Tailwind CSS',
      rights: (year: number) => `© ${year} Daniel Cerverizzo. All rights reserved.`
    }
  }
} as const
