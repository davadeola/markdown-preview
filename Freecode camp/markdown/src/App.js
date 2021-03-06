import React, {Component} from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }
  

  handleChange = (e) => {
    this.setState({content: e.target.value});
    // var markedConst = marked(this.state.content);
    // this.setState({marked: markedConst});
    this.props.markedUpContent(this.state.content);
  }

  handleClear = () => {

    this.setState({
      content: '',
    });
    this.props.clearMarkUp();
  }

  render() {
    return (<div className="container-fluid">
      <div className="row">
        <Editor className="col-md-6" handleChange={this.handleChange} value={this.state.content} handleClear={this.handleClear}/>
        <Preview className="col-md-6" value={this.props.marked}/>
      </div>
    </div>);
  }
}

export default App;
