import isEmpty from "is-empty";

export const validateFAQ = (question, answer, tags) => {
  if (isEmpty(question)) return "Please write a question";

  if (tags && tags.length === 0) {
    return "Please provide some tags";
  }

  if (isEmpty(answer)) return "Please write instructions for this question";
};
