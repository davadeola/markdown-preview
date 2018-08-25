import React from 'react';
import sanitizeHtml from 'sanitize-html';
import marked from 'marked';

const Preview = (props) => {
  let clean;

  if (props.value) {
    clean = sanitizeHtml(props.value, {
      allowedTags: false,
      allowedAttributes: false
    });
  } else {
    clean = sanitizeHtml(marked("### Hello! Let's type some markdown"), {
      allowedTags: false,
      allowedAttributes: false
    });
  }

  return (<div className="preview view">
    <h2>Your markdown preview</h2>
    <div id="content" dangerouslySetInnerHTML={{
        __html: clean
      }} className="border border-info"/>
  </div>);
}

export default Preview;
