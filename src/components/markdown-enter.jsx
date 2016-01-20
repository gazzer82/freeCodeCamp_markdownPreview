import React, { Component } from 'react';

//Display a text box for the user to enter markdown in
export default class MarkdownEnter extends Component {
  constructor(props){
    super(props);
    //Bind the onChangeHandler function to the Components state
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }
  //Call passed down function to update the text state in app.jsx
  onChangeHandler(event){
    this.props.processmarkDown(event.target.value);
  }
  render(){
    return (
        <div className="row">
          <div className="large-12 columns">
            <label>
              <textarea rows='20' value={this.props.markDown} onChange={this.onChangeHandler} placeholder="enter markdown to preview"></textarea>
            </label>
          </div>
        </div>
    );
  }
}
