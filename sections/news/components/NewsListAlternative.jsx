import React, { Component } from "react";

import { observable, runInAction } from "mobx";
import axios from "axios";
// import newsStore from "../stores/newsStore";

import { observer } from "mobx-react";

import LoadingOverlay from "react-loading-overlay";

import NewsListItem from "./NewsListItem";

@observer
class NewsListAlternative extends Component {
  @observable stories = [];

  componentDidMount() {
    const url = "https://beta.stockzoom.com/api/v1/unistream/stories/";

    const onSuccess = ({ data }) => {
      runInAction(() => {
        this.stories = data.results;
      });
    };
    const onError = error => console.log(error);

    axios
      .get(url)
      .then(onSuccess)
      .catch(onError);
  }

  render() {
    return (
      <div>
        {this.stories.map(story => (
          <NewsListItem story={story} key={story.slug} />
        ))}
      </div>
    );
  }
}

export default NewsListAlternative;
