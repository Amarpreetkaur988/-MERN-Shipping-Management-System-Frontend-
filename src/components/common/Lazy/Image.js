import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const LazyLoad = ({ src, caption, alt }) => (
  <div>
    <LazyLoadImage alt={alt} src={src} effect="blur" />
    <span>{caption}</span>
  </div>
);

export default LazyLoad;
