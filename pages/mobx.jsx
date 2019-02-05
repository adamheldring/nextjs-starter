import { action, observable, computed, decorate } from "mobx";
import { Provider, inject, observer } from "mobx-react";
import React, { Component } from "react";

class Store {
  @observable show = true;
  @observable isLoading = false;
  @observable videos = [];

  @action toggleShow = () => {
    this.show = !this.show;
  };

  @computed get getShow() {
    return this.show;
  }

  @action fetch() {
    this.isLoading = true;

    const onSuccess = response => {
      this.setData(response);
    };
    axios.get("http://...").then(onSuccess);
  }

  @action setData(response) {
    this.videos = response.videos;
    this.isLoading = false;
  }
}

// decorate(Store, {
//   show: observable
// });

@inject("store")
@observer
class TestMobX extends Component {
  constructor() {
    super();
    this.onclick = this.onclick.bind(this);
  }

  onclick() {
    console.log("onclick");
    this.props.store.toggleShow();
  }

  render() {
    return (
      <div className="container py-4">
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.onclick}
        >
          Click Me!
        </button>
        <p>
          {this.props.store.getShow &&
            "Hello Next.js@7 with MobX. Yay it works!"}
        </p>
      </div>
    );
  }
}

const Index = () => (
  <Provider store={store}>
    <TestMobX />
  </Provider>
);

export default Index;
