// schemas/aboutPage.js
// Schema for the About page - singleton document (only one should exist)

export default {
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    // Page Title
    {
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      description: 'Main heading on the about page (e.g., "About")',
      initialValue: 'About',
    },

    // Intro Section
    {
      name: 'introParagraph1',
      title: 'Intro Paragraph 1',
      type: 'text',
      description: 'First intro paragraph (e.g., "For the past decade we\'ve partnered with...")',
      rows: 4,
    },
    {
      name: 'introParagraph2',
      title: 'Intro Paragraph 2',
      type: 'text',
      description: 'Second intro paragraph (e.g., "So we created aud studios...")',
      rows: 4,
    },

    // Intro Images (the 3 images next to intro text)
    {
      name: 'introImage1',
      title: 'Intro Image 1',
      type: 'cloudinary.asset',
      description: 'First image in intro section (e.g., AUD_About02.jpg)',
    },
    {
      name: 'introImage2',
      title: 'Intro Image 2',
      type: 'cloudinary.asset',
      description: 'Second image in intro section (e.g., AUD_About05.jpg)',
    },
    {
      name: 'introImage3',
      title: 'Intro Image 3',
      type: 'cloudinary.asset',
      description: 'Third image in intro section (e.g., AUD_About06.jpg)',
    },

    // Madeline Bio
    {
      name: 'madelineName',
      title: 'Madeline - Name',
      type: 'string',
      initialValue: 'Madeline Corley',
    },
    {
      name: 'madelineBio1',
      title: 'Madeline - Bio Paragraph 1',
      type: 'text',
      rows: 4,
    },
    {
      name: 'madelineBio2',
      title: 'Madeline - Bio Paragraph 2',
      type: 'text',
      rows: 4,
    },
    {
      name: 'madelineBio3',
      title: 'Madeline - Bio Paragraph 3',
      type: 'text',
      rows: 4,
    },
    {
      name: 'madelineImage',
      title: 'Madeline - Photo',
      type: 'cloudinary.asset',
      description: 'Portrait photo of Madeline',
    },

    // Syd Bio
    {
      name: 'sydName',
      title: 'Syd - Name',
      type: 'string',
      initialValue: 'Syd Ross',
    },
    {
      name: 'sydBio1',
      title: 'Syd - Bio Paragraph 1',
      type: 'text',
      rows: 4,
    },
    {
      name: 'sydBio2',
      title: 'Syd - Bio Paragraph 2',
      type: 'text',
      rows: 4,
    },
    {
      name: 'sydBio3',
      title: 'Syd - Bio Paragraph 3',
      type: 'text',
      rows: 4,
    },
    {
      name: 'sydImage',
      title: 'Syd - Photo',
      type: 'cloudinary.asset',
      description: 'Portrait photo of Syd',
    },

    // Bottom Gallery (3 images)
    {
      name: 'galleryImage1',
      title: 'Gallery Image 1',
      type: 'cloudinary.asset',
      description: 'First bottom gallery image (e.g., AUD_About03.jpg)',
    },
    {
      name: 'galleryImage2',
      title: 'Gallery Image 2',
      type: 'cloudinary.asset',
      description: 'Second bottom gallery image (e.g., AUD_About04.jpg)',
    },
    {
      name: 'galleryImage3',
      title: 'Gallery Image 3',
      type: 'cloudinary.asset',
      description: 'Third bottom gallery image (e.g., AUD_About07.jpg)',
    },
  ],

  preview: {
    prepare() {
      return {
        title: 'About Page',
        subtitle: 'Site content for the about page',
      };
    },
  },
};