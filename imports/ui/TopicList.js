import React from 'react';
import RenderPost from './RenderPost.js';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';

export default class TopicList extends React.Component {
  renderAllPosts() {
    if (this.props.passed_posts.length === 0) {
      return (<>
        <div className="single-block-item-style">
          <p className="single-block-item-style__message">Nothing to see here. Add a new topic to get started!</p>
        </div>
      </>);
    } else {
      return this.props.passed_posts.map((post) => {
        return <RenderPost key={post._id} post_prop_obj={post} />
      });
    }
  }

  render() {
    return (
      <>
      <FlipMove
      maintainContainerHeight={true}
      leaveAnimation={{
        from: {
          transform: 'scale(1, 1)',
        },
        to: {
          transform: 'scale(1, 0)',
          opacity: 0.1,
        },
      }}
      enterAnimation={{
        from: {
          transform: 'scale(1, 0)',
          opacity: 0.1,
        },
        to: {
          transform: 'scale(1, 1)',
        },
      }}
      easing={"cubic-bezier(1, 0, 0, 1)"}>
        {this.renderAllPosts()}
      </FlipMove>
      </>
    )
  }
};

TopicList.propTypes = {
  passed_posts: PropTypes.array.isRequired,
};
