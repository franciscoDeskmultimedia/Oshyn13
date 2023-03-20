
export const GetHomepage = `
title
slug
blocksCollection(limit:10){
  items{
    __typename
    ...relatedServicesSlider
    ...basicHeroFrag
    ...sliderFrag
    ...sliderCtasFrag
    ...insightSliderFrag 
    ...tabSliderFrag
    ...testimonySliderFrag
    ...tabSectionFrag
  }
}
`;

// export const GetHomepage = `
// title
// slug
// ...allBlocks(limit:10){}
// `;