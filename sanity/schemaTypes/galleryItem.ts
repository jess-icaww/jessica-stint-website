import { defineField, defineType } from 'sanity'

export const galleryItem = defineType({
    name: 'galleryItem',
    title: 'Gallery Item',
    type: 'document',
    fields: [
        defineField({
            name: 'type',
            title: 'Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Photo', value: 'photo' },
                    { title: 'Video', value: 'video' },
                ],
                layout: 'radio',
            },
            initialValue: 'photo',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Image',
            description: 'For photos, this is the photo itself. For videos, this is the cover thumbnail shown in the grid.',
            type: 'image',
            options: { hotspot: true },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'videoUrl',
            title: 'Video URL',
            description: 'YouTube embed URL, e.g. https://www.youtube.com/embed/VIDEO_ID',
            type: 'url',
            hidden: ({ parent }) => parent?.type !== 'video',
            validation: (Rule) =>
                Rule.custom((value, context: any) => {
                    if (context.parent?.type === 'video' && !value) {
                        return 'Video URL is required for video items'
                    }
                    return true
                }),
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
            description: 'e.g. Shibuya, Tokyo',
        }),
        defineField({
            name: 'date',
            title: 'Date',
            type: 'date',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'aspectRatio',
            title: 'Grid Shape',
            description: 'Controls how big this item appears in the gallery grid.',
            type: 'string',
            options: {
                list: [
                    { title: 'Square', value: 'square' },
                    { title: 'Portrait (tall)', value: 'portrait' },
                    { title: 'Landscape (wide, short)', value: 'landscape' },
                    { title: 'Wide (extra wide)', value: 'wide' },
                ],
            },
            initialValue: 'square',
            validation: (Rule) => Rule.required(),
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'location',
            media: 'image',
        },
    },
})
