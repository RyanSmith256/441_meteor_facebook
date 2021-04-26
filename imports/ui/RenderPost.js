import React from 'react';
import PropTypes from 'prop-types';
import {Posts_Collection} from "./../api/posts.js";

export default class RenderPost extends React.Component {
  render() {
        return (
          <>
            <div key={this.props.post_prop_obj._id} className="single-block-item-style">
              <div className="post">
              <div>
                <h3 className="post__topic">{this.props.post_prop_obj.topic}</h3>
                <p className="post__stats">
                  {this.props.post_prop_obj.likes} like(s) {''}</p>
              </div>
                <div className="post__actions">
                  <button className="button button--square button--like" onClick={() => {
                    Posts_Collection.update({_id: this.props.post_prop_obj._id}, {$inc: {likes: 1}})
                  }}>+1</button>
                  <button className="button button--square button--dislike" onClick={() => {
                    Posts_Collection.update({_id: this.props.post_prop_obj._id}, {$inc: {likes: -1}})
                  }}>-1</button>
                  <button className="button button--square button--delete" onClick={() => {
                    Posts_Collection.remove({_id: this.props.post_prop_obj._id})
                  }}>X</button>
                </div>
              </div>
            </div>
          </>
        );
  }
};
RenderPost.propTypes = {
  post_prop_obj: PropTypes.object.isRequired,
};
/*TitleBar.defaultProps {
  title: "Default title",
};*/
