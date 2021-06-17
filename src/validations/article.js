import isEmpty from "is-empty";

export const validateArticle = (title, category, description) => {
  if (isEmpty(title)) return "Please enter title";

  if (isEmpty(category)) return "Please enter category";

  if (isEmpty(description)) return "Please enter description";
};
