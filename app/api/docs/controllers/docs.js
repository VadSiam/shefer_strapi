'use strict';

const fs = require('fs-extra');
const path = require('path');

module.exports = {
  index: async (ctx) => {
    try {
      const { major, minor, patch } = ctx.params;
      const version =
        major && minor && patch
          ? `${major}.${minor}.${patch}`
          : strapi.plugins.documentation.config.info.version;

      const openAPISpecsPath = path.join(
        strapi.config.appPath,
        'extensions',
        'documentation',
        'documentation',
        '1.0.0',
        'full_documentation.json',
      );
      console.log('AAAAAAA', openAPISpecsPath)
      const documentation = fs.readFileSync(openAPISpecsPath, 'utf8');
      const response = JSON.parse(documentation);

      ctx.send(response);
    } catch (e) {
      strapi.log.error(e);
      ctx.badRequest(null, e.message);
    }
  },
};
