export const relatedServicesBlock = `
fragment relatedServicesSlider on RelatedServicesSlider{
  title
  description
  relatedServicesCollection(limit:10){
    items{
      slug
      title
      exerpt
      featuredImage{
        width
        height
        url
        title
      }
    }
  }
  cta{
    url
    text
  }
}`