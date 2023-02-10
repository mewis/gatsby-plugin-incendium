"use strict";

exports.pluginOptionsSchema = function (_ref) {
  var Joi = _ref.Joi;
  return Joi.object({
    url: Joi.string().allow("").required().description("Url with project key for incendium.ai."),
    nonInteractive: Joi.boolean().default(false),
    namespace: Joi.string().optional(),
    namespaced: Joi.object({
      a: Joi.string()
    }).pattern(Joi.string().allow(""), Joi.object({
      url: Joi.string().required().description("Url with project key for incendium.ai."),
      nonInteractive: Joi.boolean().default(false)
    }))
  });
};