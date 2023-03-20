export const sliderFragment = `
fragment sliderFrag on Slider{
    sliderItemsCollection(limit:10){
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
      tabSlider{
        title
        description
        sliderCollection(limit:20){
          items{
            title
            logosCollection(limit:20){
              items{
                title
                url
                width
                height
              }
            }
          }
        }
      }
}
`