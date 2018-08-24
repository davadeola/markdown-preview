import React from 'react';
import sanitizeHtml from 'sanitize-html';
import marked from 'marked';
const Preview =(props)=>{
  let clean;

  if (props.value) {
  clean = sanitizeHtml(props.value,{allowedTags: false,
  allowedAttributes: false});
  } else {
     clean = sanitizeHtml(marked("# Marked in the browser Rendered by **marked**."),{allowedTags: false,
  allowedAttributes: false});
  }

    return(
      <div className="preview view">
        <h1>Your markdown preview</h1>
        <div
          id="content"
          dangerouslySetInnerHTML={{__html: clean}}
          className="border border-info"
    />
      </div>
    );
}

export default Preview;
