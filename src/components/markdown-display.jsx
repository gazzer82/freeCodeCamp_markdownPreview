import React, { Component } from 'react';
import Marked from 'marked';

//Render a div that shows the rendered markdown
export default class MarkDownDisplay extends Component {
  renderMarkDown(){
    //Return as HTML so it can be rendered using dangerouslySetInnerHTML=
    return {__html: Marked(this.props.markDown)};
  }
  render(){
    return (
    <div>
      <div className="row">
        <div className="large-12 columns preview-col z-depth-1">
          {/*Render as HTML not as a string*/}
          <div dangerouslySetInnerHTML={this.renderMarkDown()} />
          <div id='divider' className="divider preview-bottom"></div>
          <label className='divider-label' for='divider'>Preview</label>
        </div>
      </div>
    </div>
    );
  }
}
