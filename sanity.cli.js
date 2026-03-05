// sanity.cli.js
import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: 'q2bmmaei', // Replace with your Sanity project ID
    dataset: 'production',
  },
});
