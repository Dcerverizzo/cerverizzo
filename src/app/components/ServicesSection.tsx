'use client'

const services = [
  {
    number: '01',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: 'Desenvolvimento de Sites Personalizados',
    description: 'Sites e aplicações web sob medida, com foco em performance, acessibilidade e experiência do usuário. Do design ao deploy.',
    link: '#contact'
  },
  {
    number: '02',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    title: 'Consultoria de Tecnologia Online',
    description: 'Orientação estratégica para decisões tecnológicas, arquitetura de sistemas e escolha de stack. Sessões online para empresas e founders.',
    link: '#contact'
  },
  {
    number: '03',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'UI/UX Engineering',
    description: 'Interfaces de alta fidelidade com animações e micro-interações. Implementação pixel-perfect a partir de designs Figma e referências visuais.',
    link: '#contact'
  },
  {
    number: '04',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: 'Integração de APIs & Backend',
    description: 'Desenvolvimento de APIs RESTful, integração com serviços externos e soluções backend escaláveis com Node.js, Python e bancos de dados modernos.',
    link: '#contact'
  }
]

export default function ServicesSection () {
  return (
    <section
      id="services"
      className="section-padding"
      style={{ backgroundColor: 'var(--color-bg-surface)' }}
    >
      <div className="container-editorial">
        {/* Section header */}
        <div style={{ marginBottom: '64px' }} className="reveal">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-accent-primary)' }} />
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-xs)',
              letterSpacing: 'var(--tracking-widest)',
              textTransform: 'uppercase',
              color: 'var(--color-accent-primary)'
            }}>
              02
            </span>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-2xl)',
            fontWeight: 700,
            letterSpacing: 'var(--tracking-tight)',
            lineHeight: 'var(--leading-tight)',
            color: 'var(--color-text-primary)',
            margin: '0 0 16px'
          }}>
            Serviços
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-base)',
            fontWeight: 300,
            color: 'var(--color-text-secondary)',
            maxWidth: '480px',
            lineHeight: 'var(--leading-body)',
            margin: 0
          }}>
            Soluções digitais completas para negócios que querem se destacar online.
          </p>
        </div>

        {/* Services grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1px',
            backgroundColor: 'var(--color-border)'
          }}
        >
          {services.map((service) => (
            <ServiceCard key={service.number} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard ({ service }: { service: typeof services[0] }) {
  return (
    <div
      className="reveal"
      style={{
        backgroundColor: 'var(--color-bg-surface)',
        padding: 'var(--space-8)',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        transition: 'background-color 0.4s ease, box-shadow 0.4s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--color-bg-elevated)'
        e.currentTarget.style.boxShadow = '0 0 40px var(--color-accent-glow)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--color-bg-surface)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Card top */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <span style={{
          color: 'var(--color-accent-primary)',
          opacity: 0.5,
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--text-sm)',
          letterSpacing: 'var(--tracking-widest)'
        }}>
          {service.number}
        </span>
        <span style={{ color: 'var(--color-accent-primary)' }} aria-hidden="true">
          {service.icon}
        </span>
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-xl)',
        fontWeight: 700,
        color: 'var(--color-text-primary)',
        lineHeight: 'var(--leading-tight)',
        margin: 0
      }}>
        {service.title}
      </h3>

      {/* Description */}
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-base)',
        fontWeight: 300,
        color: 'var(--color-text-muted)',
        lineHeight: 'var(--leading-body)',
        margin: 0,
        flexGrow: 1
      }}>
        {service.description}
      </p>

      {/* Footer link */}
      <a
        href={service.link}
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-sm)',
          color: 'var(--color-accent-primary)',
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          transition: 'gap 0.2s ease',
          position: 'relative',
          width: 'fit-content'
        }}
      >
        Saiba mais →
      </a>
    </div>
  )
}
