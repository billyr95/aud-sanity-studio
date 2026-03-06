// schemas/contactSection.js
// Schema for the Contact section CTA block
// Singleton document - only one should exist

export default {
  name: 'contactSection',
  title: 'Contact Section',
  type: 'document',
  fields: [
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Small text above the main heading (e.g., "Contact Us")',
      initialValue: 'Contact Us',
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'text',
      description: 'Main heading text (e.g., "Whether you\'re at an agency, in-house, or a fellow creative, we\'d love to connect.")',
      rows: 3,
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      description: 'Text on the CTA button (e.g., "Let\'s chat")',
      initialValue: "Let's chat",
    },
  ],

  preview: {
    prepare() {
      return {
        title: 'Contact Section',
        subtitle: 'Homepage & contact page CTA block',
      };
    },
  },
};