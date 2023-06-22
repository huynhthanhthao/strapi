'use strict';

/**
 * maintenance-type service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::maintenance-type.maintenance-type');
