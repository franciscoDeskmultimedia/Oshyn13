export const InsightSliderFrag = `
fragment insightSliderFrag on InsightSlider{
    title
    description
    ctaCollection(limit:5){
        items{
            text
            url
        }
    }
    slideCollection(limit:10){
        items{
            slug
            title
            author{
                name
                picture{
                    title
                    url
                    width
                    height	
                }
            }
            featuredImage{
                title
                url
                width
                height
            } 
        }
    }
}
`