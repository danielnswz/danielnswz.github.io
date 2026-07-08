import { Nav } from './components/Nav'
import { MeshBackground } from './components/MeshBackground'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Qualifications } from './components/Qualifications'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <MeshBackground />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Qualifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}