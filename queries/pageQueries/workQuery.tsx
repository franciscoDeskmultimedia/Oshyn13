import { relatedServicesBlock } from '@/queries/fragments/relatedServices'
import { basicHeroFragment } from '@/queries/fragments/basicHeroFragment'
import { sliderFragment } from '@/queries/fragments/sliderFragment'
import { sliderCtaFrag } from '@/queries/fragments/sliderCTAfragment'
import { InsightSliderFrag } from '@/queries/fragments/insightSliderFragment'
import { tabSliderFrag } from '@/queries/fragments/tabSliderFragment'
import { testimonySliderFrag } from '@/queries/fragments/testimonySliderFragment'
import { tabSectionFragment } from '@/queries/fragments/tabSectionFragment'
import { workBlocks } from '../fragments/blocks'

const workQuery = `
    slug
    title
    client
    featuredImage{
        url
        fileName
        width
        height
        title
    }
    blocksCollection(limit:10){
        ...workBlocks
    }

`

const allWorksSlugs = () => {
    return`
    ${workBlocks}
        query {
            workCollection(where: { slug_exists: true },limit: 50) {
                items {
                    ${workQuery}
                }
            }
        }
    `
}

const workSingle = (slug:any,preview:any,) => {
    return `
    ${workBlocks}
        query getWork{
            workCollection(where: { slug: "${slug}" }, preview: ${preview ? 'true' : 'false'}, limit: 1) {
                items {
                    ${workQuery}
                }
            }
        }
    `
}

export { workSingle, allWorksSlugs }