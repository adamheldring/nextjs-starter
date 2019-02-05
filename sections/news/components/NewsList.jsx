import React, { Component } from "react";

import NewsListItem from "./NewsListItem";

import newsStore from "../stores/newsStore";

import { observer } from "mobx-react";

import LoadingOverlay from "react-loading-overlay";

@observer
class NewsList extends Component {
  store = newsStore;

  componentDidMount() {
    this.store.fetch();
  }

  render() {
    return (
      <LoadingOverlay
        active={this.store.isLoading}
        spinner
        text="Loading stuff..."
      >
        <div>
          {this.store.stories.map(story => (
            <NewsListItem story={story} key={story.slug} />
          ))}
          {this.store.next && (
            <button
              className="btn btn-block btn-primary mb-2"
              onClick={event => this.store.handleLoadMore()}
            >
              LOAD MORE
            </button>
          )}
        </div>
      </LoadingOverlay>
    );
  }
}

export default NewsList;
