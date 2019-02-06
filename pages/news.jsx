import React, { Component } from "react";

import axios from "axios";

import NewsList from "../sections/news/components/NewsList";
import NewsListCounter from "../sections/news/components/NewsListCounter";

const News = props => (
  <div className="container pt-2">
    <NewsListCounter />
    <NewsList />
  </div>
);

export default News;
