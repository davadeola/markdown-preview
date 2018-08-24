import React, { Component } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import './App.css';
import marked from 'marked';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      content: '',
      marked:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClear= this.handleClear.bind(this);
  }

  handleChange=(e)=>{
    this.setState({content: e.target.value});
    var markedConst = marked(this.state.content);
    this.setState({marked: markedConst});
  }


  handleClear=()=>{

    this.setState({
      content:'',
      marked:''
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
        <Editor className="col-md-6" handleChange={this.handleChange} value={this.state.content} handleClear={this.handleClear}/>
        <Preview className="col-md-6" value={this.state.marked}/>
        </div>
      </div>
    );
  }
}

export default App;
