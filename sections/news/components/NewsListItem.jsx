import React, { Component } from "react";

import { Collapse } from "reactstrap";
import TimeAgo from "react-timeago";

class NewsListItem extends Component {
  state = { collapse: false };

  toggleCollapse = () => {
    this.setState({ collapse: !this.state.collapse });
  };

  render() {
    const { story } = this.props;
    return (
      <div className="row" onClick={this.toggleCollapse}>
        <div className="col-12">
          <div className="card mb-2">
            {story.image && (
              <img
                className="img-fluid"
                src={story.image}
                alt={story.heading}
              />
            )}
            <div className="card-body p-3">
              <h6 className="card-text mb-1">{story.heading}</h6>
              <Collapse isOpen={this.state.collapse}>
                <p className="mb-2">{story.summary || story.body}</p>
              </Collapse>
              <p className="text-muted">
                <small>
                  {story.provider.name} <strong>&middot;</strong>{" "}
                  <TimeAgo date={story.published_at} />
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsListItem;
