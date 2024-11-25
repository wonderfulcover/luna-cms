import {defineField, defineType} from 'sanity'

export const landingType = defineType({
    name: 'landing',
    title: 'Landing Page',
    type: 'document',    
    groups: [
        {
          name: 'hero',
          title: 'HERO',
        },
        {
            name: 'utilities',
            title: 'UTILITIES',
        },
        {
            name: 'about',
            title: 'ABOUT',
        },
        {
            name: 'integration',
            title: 'INTEGRATION',
        },
        {
            name: 'exchanges',
            title: 'EXCHANGES',
        },
        {
            name: 'news',
            title: 'NEWS',
        },
    ],
    fields: [
        {
            
            group: 'hero',
            name: 'heroTitle',
            title: 'HERO TITLE',
            type: 'string',
        },
        {
            
            group: 'hero',
            name: 'heroSubTitle',
            title: 'HERO SUB TITLE',
            type: 'string',
        },
        {
            
            group: 'utilities',
            name: 'utilityLabel',
            title: 'UTILITY LABEL',
            type: 'string',
        },
        {
            
            group: 'utilities',
            name: 'utilityList',
            title: 'UTILITY LIST',
            type: 'array',
            of: [{type: 'slideImage'}],
        },
        {
            
            group: 'about',
            name: 'aboutLabel',
            title: 'ABOUT LABEL',
            type: 'string',            
        },
        {
            
            group: 'about',
            name: 'aboutTitle',
            title: 'ABOUT TITLE',
            type: 'string',
        },
        {
            
            group: 'about',
            name: 'aboutSubTitle',
            title: 'ABOUT SUB TITLE',
            type: 'string',
        },
        {
            
            group: 'integration',
            name: 'integrationLabel',
            title: 'INTEGRATION LABEL',
            type: 'string',            
        },
        {
            
            group: 'integration',
            name: 'integrationTitle',
            title: 'INTEGRATION TITLE',
            type: 'string',            
        },
        {
            
            group: 'integration',
            name: 'integrationSubTitle',
            title: 'INTEGRATION SUBTITLE',
            type: 'string',            
        },
        {
            group: 'integration',
            name: 'integrationList',
            title: 'INTEGRATED APPS',
            type: 'array',
            of: [{type: 'slideImage'}],
        },
        {
            
            group: 'exchanges',
            name: 'exchangeLabel',
            title: 'EXCHANGE LABEL',
            type: 'string',            
        },
        {
            group: 'exchanges',
            name: 'exchangeList',
            title: 'EXCHANGE LIST',
            type: 'array',
            of: [{type: 'slideImage'}],
        },
        {
            
            group: 'news',
            name: 'newsLabel',
            title: 'NEWS LABEL',
            type: 'string',            
        },
        {
            group: 'news',
            name: 'newsList',
            title: 'NEWS LIST',
            type: 'array',
            of: [{type: 'slideImage'}],
        }
    ],
})