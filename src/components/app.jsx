import React, { Component } from 'react';
import MarkdownEnter from './markdown-enter';
import MarkdownDisplay from './markdown-display';
import DefaultMarkdown from './demo_string';

export default class App extends Component {
  constructor(props){
    super(props);
    //Set default state with default defaul content
    this.state = {
      markDown: DefaultMarkdown
    }
    //Bind our methods this to the components scope
    this.processmarkDown = this.processmarkDown.bind(this);
  }
  //Recieve markdown from child components
  processmarkDown(markDown){
    this.setState({markDown})
  }
  render(){
    return (
      <div className='row'>
        <div className='small-6 columns'>
          {/*Enter markdown*/}
          <MarkdownEnter
            markDown={this.state.markDown}
            processmarkDown={this.processmarkDown}
            />
        </div>
        <div className='small-6 columns'>
          {/*Display markdown*/}
          <MarkdownDisplay markDown={this.state.markDown}/>
        </div>
      </div>
    );
  }
}
