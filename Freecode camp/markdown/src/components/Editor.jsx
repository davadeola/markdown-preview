import React from 'react';

const Editor=(props)=>{

    return(
      <div>
        <div className="editor view">
          <h1>Markdown code here</h1>
          <textarea className="form-control" rows="20" cols="80" onChange={props.handleChange} value={props.value}/>

          <button onClick={props.handleClear} className="btn btn-danger">CLEAR</button>
        </div>
      </div>
    );
  }


export default Editor;
