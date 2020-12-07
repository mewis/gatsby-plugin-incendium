import React from 'react'

export const onRenderBody = (
  { setPostBodyComponents },
  pluginOptions
) => {
  setPostBodyComponents([
    <script
      dangerouslySetInnerHTML={{
        __html: [
          'var head = document.head || document.getElementsByTagName("head")[0];',
          'var script = document.createElement("script");',
          `script.setAttribute("src", "${pluginOptions.url}${pluginOptions.nonInteractive ? '?non_interactive' : ''}")`,
          'head.appendChild(script);',
        ].join(process.env.NODE_ENV === 'production' ? '' : '\n'),
      }}
    />,
  ])
}