// sanity.config.js
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { cloudinarySchemaPlugin } from 'sanity-plugin-cloudinary';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'default',
  title: 'Aud Studios',

  projectId: 'q2bmmaei',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    cloudinarySchemaPlugin(),
  ],

  schema: {
    types: schemaTypes,
  },
});