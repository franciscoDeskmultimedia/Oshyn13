import { relatedServicesBlock } from '@/queries/fragments/relatedServices'
import { basicHeroFragment } from '@/queries/fragments/basicHeroFragment'
import { sliderFragment } from '@/queries/fragments/sliderFragment'
import { sliderCtaFrag } from '@/queries/fragments/sliderCTAfragment'
import { InsightSliderFrag } from '@/queries/fragments/insightSliderFragment'
import { tabSliderFrag } from '@/queries/fragments/tabSliderFragment'
import { testimonySliderFrag } from '@/queries/fragments/testimonySliderFragment'
import { tabSectionFragment } from '@/queries/fragments/tabSectionFragment'



export const allBlocks = `
${relatedServicesBlock}
${basicHeroFragment}
${sliderFragment}
${sliderCtaFrag}
${InsightSliderFrag}
${tabSliderFrag}
${testimonySliderFrag}
${tabSectionFragment}
fragment allBlocks on blocksCollection{
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
`