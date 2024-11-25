import {defineField, defineType} from 'sanity'

export const featureItemType = defineType({
    title: 'Feature Item',
    name: 'featureItem',
    type: 'object',
    fields: [
        {
            title: 'ICON',
            name: 'icon',
            type: 'image',
            options: {
                hotspot: true
            }
        },         
        {
            title: 'title',
            name: 'title',
            type: 'string',
            description: 'title for the image'
        },
        {
            title: 'Caption',
            name: 'caption',
            type: 'string',
            description: 'Caption for the image'
        },
        {
            title: 'Link',
            name: 'link',
            type: 'url',
            description: 'Add a link to the image'
        },
    ],
    preview: {
        select: {
            title: 'title',
            media: 'icon'
        }
    }
})