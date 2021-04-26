import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component {
  renderAuthor() {
    if (this.props.author) {
      return <p className="title-bar__author">Author: {this.props.author}</p>
    } else {
      return <p className="title-bar__author">Author: unknown</p>
    }
  }
  render() {
    return (

        <div className="title-bar">
          <h1>{this.props.title}</h1>
          {this.renderAuthor()}
        </div>

    );
  }
};
TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
};
/*TitleBar.defaultProps {
  title: "Default title",
};*/
