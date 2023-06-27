'use strict';

/**
 * user-type service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-type.user-type');
