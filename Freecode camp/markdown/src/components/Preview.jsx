import React from 'react';
import sanitizeHtml from 'sanitize-html';

const Preview =(props)=>{
  const clean = sanitizeHtml(props.value,{allowedTags: false,
allowedAttributes: false});
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
