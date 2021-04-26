import React from "react";
import ReactDOM from "react-dom";
import {Meteor} from "meteor/meteor";
import {Posts_Collection} from "./../imports/api/posts.js";
import App from './../imports/ui/App.js';

Meteor.startup(() => {

  Tracker.autorun(() => {

    ReactDOM.render(<App
      title={"facebook"}
      author={'Ryan Smith'}
      allPosts={Posts_Collection.find({}, {sort: {dateAdded: -1}}).fetch()}/>,
      document.getElementById("content"));
  });

});
