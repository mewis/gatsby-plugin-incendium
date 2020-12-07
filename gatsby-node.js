exports.pluginOptionsSchema = ({ Joi }) => {
  console.log("pluginOptionsSchema")
  return Joi.object({
    url: Joi.string()
      .required()
      .description(`Url with project key for incendium.ai.`),
    nonInteractive: Joi.boolean().default(false),
  })
}