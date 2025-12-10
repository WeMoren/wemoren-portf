import React from "react";
import "./BlogCard.css";
const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      <h2>{blog.title}</h2>
      <p>{blog.summary}</p>
      <a href={`/blog/${blog.slug}`} target="_blank">
        {" "}
        Read More →
      </a>
    </div>
  );
};

export default BlogCard;
