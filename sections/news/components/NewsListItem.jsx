import React, { Component, Suspense } from "react";

import { Collapse } from "reactstrap";
import TimeAgo from "react-timeago";

import NewComment from "../../comments/components/NewComment";

// import CommentList from "../../comments/components/CommentList";

const CommentListLazy = React.lazy(() =>
  import("../../comments/components/CommentList")
);

class NewsListItem extends Component {
  state = { collapse: false, collapseComment: false };

  toggleCollapse = () => {
    this.setState({ collapse: !this.state.collapse });
  };

  handleCollapseComment = event => {
    event.stopPropagation();
    this.setState({ collapseComment: !this.state.collapseComment });
  };

  render() {
    const { story } = this.props;
    return (
      <div className="row">
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
              <h6 className="card-text mb-1" onClick={this.toggleCollapse}>
                {story.heading}
              </h6>
              <Collapse isOpen={this.state.collapse}>
                <p className="mb-2">{story.summary || story.body}</p>
              </Collapse>
              <p className="text-muted mb-1">
                <small>
                  {story.provider.name} <strong>&middot;</strong>{" "}
                  <TimeAgo date={story.published_at} />{" "}
                  <strong>&middot;</strong>{" "}
                  <a onClick={this.handleCollapseComment}>Comment</a>
                </small>
              </p>
              <Collapse isOpen={this.state.collapseComment}>
                <hr className="my-4" />
                {this.state.collapseComment && (
                  <Suspense fallback={<div>Loading...</div>}>
                    <CommentListLazy story={story} />
                  </Suspense>
                )}

                <hr className="my-4" />
                <NewComment story={story} />
              </Collapse>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsListItem;
