import { relatedServicesBlock } from '@/queries/fragments/relatedServices'
import { basicHeroFragment } from '@/queries/fragments/basicHeroFragment'
import { sliderFragment } from '@/queries/fragments/sliderFragment'
import { sliderCtaFrag } from '@/queries/fragments/sliderCTAfragment'
import { InsightSliderFrag } from '@/queries/fragments/insightSliderFragment'
import { tabSliderFrag } from '@/queries/fragments/tabSliderFragment'
import { testimonySliderFrag } from '@/queries/fragments/testimonySliderFragment'
import { tabSectionFragment } from '@/queries/fragments/tabSectionFragment'



export const workBlocks = `
${basicHeroFragment}
fragment workBlocks on WorkBlocksCollection{
    items{
      __typename
      ...basicHeroFrag
    }
}
`

export const pageBlocks = `
${relatedServicesBlock}
${basicHeroFragment}
${sliderFragment}
fragment workBlocks on WorkBlocksCollection{
    items{
      __typename
      ...relatedServicesSlider
      ...basicHeroFrag
      ...sliderFrag
    }
}
`