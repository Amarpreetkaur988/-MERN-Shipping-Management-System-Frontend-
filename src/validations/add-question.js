import isEmpty from "is-empty";

export const validateAddQuestion = (question) => {
  if (isEmpty(question.question)) return "Please enter question";

  if (isEmpty(question.option1)) return "Please enter option 1";
  if (isEmpty(question.option2)) return "Please enter option 1";
  if (isEmpty(question.option3)) return "Please enter option 1";
  if (isEmpty(question.option4)) return "Please enter option 1";

};

export const validateEditQuestion = (coupon, discount) => {
  if (isEmpty(coupon)) return "Please enter coupon code";

  if (isEmpty(discount)) return "Please enter discount percent";
  if (discount < 0) return "Discount should be greater than 0";
  if (discount > 100) return "Discount should be greater than 100";
};
