import { RichText } from 'prismic-dom'
import type { GetStaticProps, NextPage } from 'next'
// import Playground from 'javascript-playgrounds'
import { createClient } from '../services/prismic'
import { Header } from '../components/Header'
import { Welcome } from '../components/Welcome'
import { AboutMe } from '../components/AboutMe'
import { Skills } from '../components/Skills'
import { Projects } from '../components'
import { Editor } from '../components/Editor'
import { Experience } from '../components/Experience'
import { Education } from '../components/Education'

type ObjectLink = {
  type: string
  url: string
}

interface ProjectType {
  id: string
  title: string
  thumb: string
  description: string
  publishedAt: string
  githubLink: ObjectLink
  deployLink: ObjectLink
  tags: string[]
}

interface PropsType {
  projects?: ProjectType[]
}

const Home: NextPage = ({ projects }: PropsType) => {
  return (
    <>
      <Header />
      <Welcome />
      <AboutMe />
      <Experience />
      <Education />
      <Skills />
      <Projects projects={projects} />
      {/* <Editor /> */}
    </>
  )
}

export default Home

export async function getStaticProps(e: any) {
  const client = createClient({ previewData: e.previewData })

  const { results } = await client.get()

  const projects = results.map((project) => {
    return {
      id: project.uid,
      title: RichText.asText(project.data.title),
      thumb: RichText.asText(project.data.thumbUrl),
      description: RichText.asText(project.data.description),
      githubLink: project.data.githubLink,
      deployLink: project.data.deployLink,
      publishedAt: new Date(project.data.publishedAt).toLocaleDateString(
        'pt-BR',
        {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        },
      ),
      tags: project.tags,
    }
  })

  return {
    props: { projects }, // Will be passed to the page component as props
    revalidate: 60 * 60, // 1 hour
  }
}
