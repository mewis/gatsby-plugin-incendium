## Description

Easily add incendium ai to your Gatsby site

## How to install

`npm install gatsby-plugin-incendium`

## Available options

### `url` (required)

this is the url that points to your private incendium api

### `nonInteractive`

this is to switch on non Interactive mode (default false)

### `namespaced`

this is a list of items as above setting the key as namespace, this is usefull if you have more than 1 target, note all functions will fire across each target, note offline conversions will not be supported

## When do I use this plugin?

Include stories about when this plugin is helpful and/or necessary.

## Examples of usage

```javascript
// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        url: "https://mydomain-rest.incendium.ai/firefly/{my_project_key}/incendium.js",
        nonInteractive: true || false,
      },
    },
  ],
};
```

## Examples of usage with namespaced

```javascript
// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        namespaced: {
          namespace_one: {
            url: "https://mydomain-rest.incendium.ai/firefly/{my_project_key}/incendium.js",
            nonInteractive: true || false,
          },
          namespace_: {
            url: "https://myotherdomain-rest.incendium.ai/firefly/{my_project_key}/incendium.js",
            nonInteractive: true || false,
          },
        },
      },
    },
  ],
};
```
