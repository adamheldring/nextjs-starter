import React from "react";

import TimeAgo from "react-timeago";

const NewsListItem = props => {
  const { story } = props;
  return (
    <div className="row">
      <div className="col-12">
        <div className="card mb-2">
          {story.image && (
            <img className="img-fluid" src={story.image} alt={story.heading} />
          )}
          <div className="card-body p-3">
            <p className="card-text mb-1">{story.heading}</p>
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
};

export default NewsListItem;
