import React from 'react';
import PropTypes from 'prop-types';
import TitleBar from './TitleBar.js';
import AddTopics from './AddTopics.js';
import TopicList from './TopicList.js';

export default class App extends React.Component {
  render() {
    return (
      <>
          <TitleBar title={this.props.title} author={this.props.author}/>
          <div className="wrapper">
            <AddTopics />
            <TopicList passed_posts={this.props.allPosts}/>
          </div>
      </>
    )
  }
};
App.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  allPosts: PropTypes.array.isRequired,
};
