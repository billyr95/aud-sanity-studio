// src/sanity/schemaTypes/homeSlider.js

import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'homeSlider',
  title: 'Home Slider',
  type: 'document',
  description: 'Slides for the fullscreen video slider on the home page',
  fields: [
    defineField({
      name: 'displayTitle',
      title: 'Display Title',
      type: 'string',
      description: "Title shown over the video (e.g. \"Hardee's\", \"Jean Paul Gaultier\")",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'video',
      title: 'Slide Video',
      type: 'cloudinary.asset',
      description: 'Autoplay video shown in the center of the slide',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'cloudinary.asset',
      description: 'Blurred background image behind the video',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'projectLink',
      title: 'Project Link',
      type: 'string',
      description: 'URL path for the "View Project" button (e.g. /work/projects/rizzlerHardees)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titleClass',
      title: 'Title Style',
      type: 'string',
      description: 'Controls title sizing — use for long names like Jean Paul Gaultier',
      options: {
        list: [
          { title: 'Default', value: '' },
          { title: 'Smaller (for long names)', value: 'slide-jeanpaul' },
        ],
      },
      initialValue: '',
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Order in the slider (1 = first)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      description: 'Show this slide',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'displayTitle',
      order: 'displayOrder',
    },
    prepare({ title, order }) {
      return {
        title,
        subtitle: `Slide ${order}`,
      };
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'displayOrderAsc',
      by: [{ field: 'displayOrder', direction: 'asc' }],
    },
  ],
});