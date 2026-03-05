// schemas/clientLogo.js
export default {
  name: 'clientLogo',
  title: 'Client Logo',
  type: 'document',
  fields: [
    {
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'cloudinary.asset',
    },
    {
      name: 'logoUrl',
      title: 'Logo URL (Legacy)',
      type: 'string',
      description: 'Old field - use Logo instead',
    },
    {
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
    },
    {
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
    },
  ],
};