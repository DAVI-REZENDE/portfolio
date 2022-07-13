import * as prismic from '@prismicio/client'
import { enableAutoPreviews } from '@prismicio/next'

export const endpoint = "https://portifoliodavirezende.prismic.io/api/v2"
export const repositoryName = prismic.getRepositoryName(endpoint)


// This factory function allows smooth preview setup
export function createClient(config: any = {}) {
  const client = prismic.createClient(endpoint, {
    ...config,
  })

  enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  })

  return client
}