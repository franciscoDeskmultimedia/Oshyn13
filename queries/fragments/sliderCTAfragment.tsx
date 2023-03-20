export const sliderCtaFrag = `
fragment sliderCtasFrag on SliderCta{
    slidesCollection(limit:10){
        items{
           title
          description{
            json
          }
          cta{
            text
            url
          }
          image{
            url
            height
            width
            title
          }
        }
      }
}
`