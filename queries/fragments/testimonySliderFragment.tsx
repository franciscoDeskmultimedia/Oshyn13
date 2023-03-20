export const testimonySliderFrag = `
fragment testimonySliderFrag on TestimonySlider{
    title
    description
    testimoniesCollection(limit : 10){
        items{
            testimonyImage{
                title
                url
                width
                height
            }
            name
            position
            company
            testymony
        }
    }
}
`