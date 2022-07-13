import { useEffect } from 'react'
import { RichText } from 'prismic-dom'
import type { NextPage } from 'next'
// import Playground from 'javascript-playgrounds'
import { createClient } from '../services/prismic'

const Home: NextPage = (props) => {

  useEffect(() => {
    console.log(props);
    
  }, [])

  return (
    <div>

      Hello Word

      
    </div>
  )
}

export default Home

export async function getStaticProps({ previewData }: any) {
  const client = createClient({ previewData })

  const {results} = await client.get()
  const projects = results.map(project => {
    return {
      id: project.uid,
      title: RichText.asText(project.data.title),
      thumb: RichText.asText(project.data.thumbUrl),
      description: RichText.asText(project.data.description),
      githubLink: project.data.githubLink,
      deployLink: project.data.deployLink,
      publishedAt: new Date(project.data.publishedAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  })

  return {
    props: { projects }, // Will be passed to the page component as props
  }
}