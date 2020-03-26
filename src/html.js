import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        
        <script
        dangerouslySetInnerHTML={{
          __html: `
          window.customerlySettings = {
            app_id: "9328dcdb"
        };
        !function(){function e(){var e=t.createElement("script");
        e.type="text/javascript",e.async=!0,
        e.src="https://widget.customerly.io/widget/9328dcdb";
        var r=t.getElementsByTagName("script")[0];r.parentNode.insertBefore(e,r)}
        var r=window,t=document,n=function(){n.c(arguments)};
        r.customerly_queue=[],n.c=function(e){r.customerly_queue.push(e)},
        r.customerly=n,r.attachEvent?r.attachEvent("onload",e):r.addEventListener("load",e,!1)}();
          `,
        }}
      />

      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
