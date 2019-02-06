import React, { Component } from "react";

import { observer } from "mobx-react";

import newsStore from "../stores/newsStore";

class NewsListCounter extends Component {
  store = newsStore;
  render() {
    return (
      <div className="text-center">
        <p className="m-2">Showing {this.store.count} articles...</p>
      </div>
    );
  }
}

export default observer(NewsListCounter);
