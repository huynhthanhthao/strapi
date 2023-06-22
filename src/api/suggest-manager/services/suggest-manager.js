'use strict';

/**
 * suggest-manager service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::suggest-manager.suggest-manager');
