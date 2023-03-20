export const tabSectionFragment = `
fragment tabSectionFrag on TabSection{
    title
    tabCollection(limit:3){
        items{
            tabTitle
            tab{
                __typename
                ... on Content{
                    title
                    content{
                        json
                    }
                }
                ... on HubspotForm{
                    portalId
                    formId
                }
                ... on Iframe{
                    iframe
                }
            }
        }
    }
}
`