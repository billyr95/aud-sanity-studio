// schemas/homeSlider.js

import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'homeSlider',
  title: 'Home Slider',
  type: 'document',
  description: 'Controls which projects appear in the home page slider and in what order',
  fields: [
    defineField({
      name: 'project',
      title: 'Project',
      type: 'reference',
      to: [{ type: 'project' }],
      description: 'Select the project to feature in this slide',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'displayTitle',
      title: 'Display Title Override',
      type: 'string',
      description: 'Optional: override the project title shown on the slide (leave blank to use project title)',
    }),
    defineField({
      name: 'video',
      title: 'Slide Video Override',
      type: 'cloudinary.asset',
      description: 'Optional: override the video shown in the slider (leave blank to use project hero video)',
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image Override',
      type: 'cloudinary.asset',
      description: 'Optional: override the blurred background image (leave blank to use project background)',
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
      projectTitle: 'project.title',
      order: 'displayOrder',
    },
    prepare({ title, projectTitle, order }) {
      return {
        title: title || projectTitle || 'Untitled',
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