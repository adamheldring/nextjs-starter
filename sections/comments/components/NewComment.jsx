import React, { Component } from "react";
import apiHelper from "../../../shared/helpers/apiHelper";

class NewComment extends Component {
  state = { comment: "" };

  handleChangeComment = event => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = event => {
    const payload = {
      comment: this.state.comment
    };

    const onSuccess = ({ data }) => {};

    const onError = error => console.log(error);

    const url = `/api/v1/unistream/stories/${this.props.story.slug}/events/`;
    apiHelper
      .post(url, payload)
      .then(onSuccess)
      .catch(onError);
  };

  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <form className="form-group">
            <textarea
              className="form-control mb-2"
              rows="1"
              name="comment"
              onChange={this.handleChangeComment}
            />
            <button
              className="btn btn-primary"
              type="button"
              onClick={this.handleSubmit}
            >
              Save
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default NewComment;
