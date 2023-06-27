'use strict';

/**
 * truck-maintenance service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::truck-maintenance.truck-maintenance');
