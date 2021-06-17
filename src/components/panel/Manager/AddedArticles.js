import React from "react";
import { Link } from "react-router-dom";
import LazyLoadImage from "../../common/Lazy/Image";

import { api_url } from "../../../utils/api";

const AddedArticles = (props) => {
  return (
    <React.Fragment>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Title</th>
            <th>Category</th>
            <th>Content</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.articles &&
            props.articles.length > 0 &&
            props.articles.map((a, index) => (
              <tr key={a._id}>
                <td>{index + 1}</td>
                <td>
                  <LazyLoadImage
                    src={a.image || api_url + "/default.png"}
                    alt="img"
                  />
                </td>
                <td>
                  {a.title.length > 30
                    ? a.title.substring(0, 30) + "..."
                    : a.title}
                </td>
                <td>{a.category}</td>
                <td>
                  {a.description.length >= 50
                    ? a.description.substring(0, 50) + "..."
                    : a.description}
                </td>
                <td>
                  <span className={a.status}>{a.status}</span>
                </td>
                <td>
                  <Link to="/admin/manage-health-articles">
                    <i className="fa fa-long-arrow-right"></i>
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default AddedArticles;
