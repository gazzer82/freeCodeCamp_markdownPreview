import React, { Component } from 'react';
import MarkdownEnter from './markdown-enter';
import MarkdownDisplay from './markdown-display';
import DefaultMarkdown from './demo_string';
import Nav from './nav';

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
      <div>
        <Nav />
        <div className='row page-data'>
          <div className='col s12 l6'>
            {/*Enter markdown*/}
            <MarkdownEnter
              markDown={this.state.markDown}
              processmarkDown={this.processmarkDown}
              />
          </div>
          <div className='col s12 l6'>
            {/*Display markdown*/}
            <MarkdownDisplay markDown={this.state.markDown}/>
          </div>
        </div>
        <div className='row'>
          <div className='col s12'>
            <p className='center'>View this pages source code on <a href='https://github.com/gazzer82/freeCodeCamp_markdownPreview'>Github</a></p>
          </div>
        </div>
      </div>
    );
  }
}
