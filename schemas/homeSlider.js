// sanity/schemaTypes/homeSlider.js
// Schema for individual home slider slides
// Each document = one slide in the home page slider

export default {
  name: 'homeSlider',
  title: 'Home Slider',
  type: 'document',
  fields: [
    {
      name: 'project',
      title: 'Project',
      type: 'reference',
      to: [{ type: 'project' }],
      description: 'Link to a project (used for fallback title, video, background, and link)',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'displayTitle',
      title: 'Display Title',
      type: 'string',
      description: 'Custom title for the slider (leave blank to use project title)',
    },
    {
      name: 'video',
      title: 'Slider Video',
      type: 'cloudinary.asset',
      description: 'Video shown in the slider (leave blank to use project hero video)',
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'cloudinary.asset',
      description: 'Blurred background image (leave blank to use project work page image)',
    },
    {
      name: 'titleClass',
      title: 'Title CSS Class',
      type: 'string',
      description: 'CSS class for custom title styling',
      options: {
        list: [
          { title: 'Default (large)', value: '' },
          { title: 'Jean Paul Style (smaller)', value: 'slide-jeanpaul' },
          { title: 'Flipped Frog Style', value: 'slide-flippedfrog' },
          { title: 'Frog Eating Style', value: 'slide-frogeating' },
        ],
      },
    },
    {
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
      initialValue: 0,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      description: 'Show this slide in the home slider',
      initialValue: true,
    },
  ],

  preview: {
    select: {
      customTitle: 'displayTitle',
      projectTitle: 'project.title',
      order: 'displayOrder',
      isActive: 'isActive',
    },
    prepare({ customTitle, projectTitle, order, isActive }) {
      const title = customTitle || projectTitle || 'Untitled Slide';
      return {
        title: `${order ?? '?'}. ${title}`,
        subtitle: isActive ? 'Active' : 'Hidden',
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
};