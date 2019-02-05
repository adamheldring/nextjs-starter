import React, { Component } from "react";

import axios from "axios";

import NewsList from "../sections/news/components/NewsList";

const News = props => (
  <div className="container">
    <NewsList />
  </div>
);

export default News;
