import React from 'react';
import {Posts_Collection} from "./../api/posts.js";

export default class AddTopics extends React.Component {

  processFormData(event) {
    event.preventDefault();
    let newTopic = event.target.formInputNameAttribute.value;
    if (newTopic) {
      event.target.formInputNameAttribute.value = "";

      Posts_Collection.insert({
        topic: newTopic,
        likes: 0,
        dateAdded: new Date()
      });
    }
  }
  render() {
    return (
      <div className="single-block-item-style">
        <form className="form" onSubmit={this.processFormData.bind(this)}>
          <input className="form__input" type="text" name="formInputNameAttribute" placeholder="Topic" />
          <button className="button">Post</button>
        </form>
      </div>
    );
  }
};
