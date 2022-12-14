export const useCustomMeta = () => {
  let defaultDesc = 'KU TalaiMap - Talai realtime tracking'
  let defaultImage = '/og.png'

  const setMeta = (title: string, desc = defaultDesc, image = defaultImage) => {
    useMeta({
      title,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: desc },
        { name: 'og:title', content: title },
        { name: 'og:site_name', content: 'TalaiMap' },
        { name: 'og:description', content: desc },
        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: 'https://talaimap.vercel.app/' },
        { name: 'og:image', content: image },
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    })
  }

  return {
    setMeta,
  }
}
