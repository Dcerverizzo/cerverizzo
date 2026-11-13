import Nav from './components/Nav'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import ProjectsSection from './components/ProjectsSection'
import StackSection from './components/StackSection'
import ExperienceSection from './components/ExperienceSection'
import BlogSection from './components/BlogSection'
import RecentPosts from './components/RecentPosts'
import ContactSection from './components/ContactSection'
import SiteFooter from './components/SiteFooter'
import CustomCursor from './components/CustomCursor'
import ScrollReveal from './components/ScrollReveal'
import { fetchRepos } from '@/lib/github/fetch'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Daniel Cerverizzo | Software Engineer',
  description: 'Desenvolvedor Full Stack com mais de 8 anos de experiência, 6 em fintech de pagamentos. Sites, sistemas e integrações de pagamento, com nota fiscal.',
  metadataBase: new URL('https://cerverizzo.dev/')
}

export default async function Home () {
  const repos = await fetchRepos()

  return (
    <>
      <Nav />
      <CustomCursor />
      <ScrollReveal />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection repos={repos} />
        <StackSection />
        <ExperienceSection />
        <BlogSection>
          <RecentPosts limit={3} grid />
        </BlogSection>
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
