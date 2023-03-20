export const tabSliderFrag = `
fragment tabSliderFrag on TabSlider{
    title
        description
        sliderCollection(limit : 3){
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
`