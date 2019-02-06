import React, { Component } from "react";
import apiHelper from "../../../shared/helpers/apiHelper";

export default class CommentList extends Component {
  state = { comments: [] };

  componentDidMount() {
    const url = `/api/v1/unistream/stories/${this.props.story.slug}/events/`;
    apiHelper
      .get(url)
      .then(({ data }) => {
        console.log();
        this.setState({ comments: data });
      })
      .catch();
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.comments.map(item => (
            <li key={item.id}>{item.comment}</li>
          ))}
        </ul>
      </div>
    );
  }
}
