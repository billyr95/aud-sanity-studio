// src/sanity/schemaTypes/index.js

import project from './project';
import clientLogo from './clientLogo';
import siteSettings from './siteSettings';
import homeSlider from './homeSlider';

export const schema = {
  types: [
    project,
    clientLogo,
    siteSettings,
    homeSlider,
  ],
};