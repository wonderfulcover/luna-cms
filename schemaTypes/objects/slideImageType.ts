import {defineField, defineType} from 'sanity'

export const slideImageType = defineType({
    title: 'Slide Image',
    name: 'slideImage',
    type: 'object',
    fields: [
        {
            title: 'Image',
            name: 'image',
            type: 'image',
            options: {
                hotspot: true
            }
        }, 
        {
            title: 'Alt Text',
            name: 'altText',
            type: 'string',
            description: 'Describe the image for screen readers and search engines'
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
            media: 'image'
        }
    }
})