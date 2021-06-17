import isEmpty from "is-empty";

export const validateFAQ = (question, answer) => {
  if (isEmpty(question)) return "Please enter question";

  if (isEmpty(answer)) return "Please enter answer";
};

export const validateAbout = (text) => {
  if (isEmpty(text)) return "Please enter text";
};

export const validatePolicy = (text) => {
  if (isEmpty(text)) return "Please enter text";
};
export const validateTerms = (text) => {
  if (isEmpty(text)) return "Please enter text";
};
