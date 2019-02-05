import { observable, action, computed } from "mobx";

import axios from "axios";

const STORIES_URL =
  "https://beta.stockzoom.com/api/v1/unistream/stories/?page_size=40";

class NewsStore {
  @observable stories = [];
  @observable isLoading = false;
  @observable next = null;

  @action setData(data) {
    this.stories = data.stories;
    this.next = data.next;
    this.isLoading = false;
  }

  @action fetch(url = STORIES_URL) {
    this.isLoading = true;

    const onSuccess = ({ data }) => {
      this.setData({
        stories: [...this.stories, ...data.results],
        next: data.next
      });
    };

    const onError = error => console.log(error);

    axios
      .get(url)
      .then(onSuccess)
      .catch(onError);
  }

  @action handleLoadMore() {
    this.fetch(this.next);
  }
}

const newsStore = new NewsStore();

export default newsStore;
