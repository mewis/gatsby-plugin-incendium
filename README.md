## Description

Easily add incendium ai to your Gatsby site

## How to install

`npm install gatsby-plugin-incendium`

## Available options

### `url` (required)

this is the url that points to your private incendium api

### `nonInteractive`

this is to switch on non Interactive mode (default false)

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
        url:
          "https://mydomain-rest.incendium.ai/firefly/{my_project_key}/incendium.js",
        nonInteractive: true || false,
      },
    },
  ],
};
```
