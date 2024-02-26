import React from "react";
import { oneLine, stripIndent } from "common-tags";

const generateIncendiumScript = (pluginOptions, namespace) => stripIndent`
(function(w,d,s){
  var f=d.getElementsByTagName(s)[0];
  j=d.createElement(s);
  j.async=true;
  j.src='${pluginOptions.url}?no_initial=true${
  pluginOptions.cookieless ? "&cookieless" : ""
}${pluginOptions.debug ? "&debug" : ""}${
  namespace ? `&namespace=${namespace}` : ""
}';
  f.parentNode.insertBefore(j,f);
})(window,document,'script');`;

export const onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  const inlineScripts = [];

  if (
    pluginOptions.namespaced &&
    Object.keys(pluginOptions.namespaced).length > 0
  ) {
    Object.keys(pluginOptions.namespaced).forEach((namespace) => {
      let key = `incendium=${namespace}`;
      const option = pluginOptions.namespaced[namespace];
      inlineScripts.push(
        <script
          key={key}
          dangerouslySetInnerHTML={{
            __html: oneLine`
              ${generateIncendiumScript(option, namespace)}`,
          }}
        />
      );
    });
  } else {
    inlineScripts.push(
      <script
        key="incendium"
        dangerouslySetInnerHTML={{
          __html: oneLine`
          ${generateIncendiumScript(pluginOptions, pluginOptions.namespace)}`,
        }}
      />
    );
  }
  setHeadComponents(inlineScripts);
};
