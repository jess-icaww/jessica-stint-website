import { defineField, defineType } from 'sanity'

export const update = defineType({
    name: 'update',
    title: 'Update',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title', maxLength: 96 },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'date',
            title: 'Date',
            type: 'date',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            rows: 4,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'tag',
            title: 'Tag',
            type: 'string',
            description: 'e.g. Fundraising, Logistics, Training, Team, Testimony, Spiritual',
        }),
        defineField({
            name: 'featured',
            title: 'Featured (shows as the big highlighted update)',
            type: 'boolean',
            initialValue: false,
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [{ type: 'block' }, { type: 'image' }],
        }),
        defineField({
            name: 'prayerSnippet',
            title: 'Prayer Snippet',
            type: 'text',
            rows: 2,
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'date',
            media: 'image',
        },
    },
})