'use strict';

/**
 * truck service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::truck.truck');
