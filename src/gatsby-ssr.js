import React from "react";

export const onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  if (
    pluginOptions.namespaced &&
    Object.keys(pluginOptions.namespaced).length > 0
  ) {
    setPostBodyComponents(
      Object.keys(pluginOptions.namespaced).map((namespace) => {
        const option = pluginOptions.namespaced[namespace];
        return (
          <script
            dangerouslySetInnerHTML={{
              __html: [
                'var head = document.head || document.getElementsByTagName("head")[0];',
                'var script = document.createElement("script");',
                `script.setAttribute("src", "${option.url}?no_initial=true${
                  option.nonInteractive ? "&non_interactive" : ""
                }${option.cookieless ? "&cookieless" : ""}${
                  option.debug ? "&debug" : ""
                }${namespace !== "" ? `&namespace=${namespace}` : ""}");`,
                "head.appendChild(script);",
              ].join(process.env.NODE_ENV === "production" ? "" : "\n"),
            }}
          />
        );
      })
    );
  } else {
    setPostBodyComponents([
      <script
        dangerouslySetInnerHTML={{
          __html: [
            'var head = document.head || document.getElementsByTagName("head")[0];',
            'var script = document.createElement("script");',
            `script.setAttribute("src", "${pluginOptions.url}?no_initial=true${
              pluginOptions.nonInteractive ? "&non_interactive" : ""
            }${pluginOptions.cookieless ? "&cookieless" : ""}${
              pluginOptions.debug ? "&debug" : ""
            }${
              pluginOptions.namespace
                ? `&namespace=${pluginOptions.namespace}`
                : ""
            }");`,
            "head.appendChild(script);",
          ].join(process.env.NODE_ENV === "production" ? "" : "\n"),
        }}
      />,
    ]);
  }
};
