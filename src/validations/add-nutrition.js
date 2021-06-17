import isEmpty from "is-empty";

export const validateAddNutrition = (...rest) => {
  if (isEmpty(rest[0].image)) return "Please upload diet image";

  if (isEmpty(rest[0].name)) return "Please enter diet name";

  if (isEmpty(rest[0].qty)) return "Please enter quantity";
  if (rest[0].qty < 0) return "Quantity should be greater than 0";
  if (rest[0].qty > 500) return "Quantity should be greater than 500";

  if (isEmpty(rest[0].age)) return "Please enter age";
  if (rest[0].age < 0) return "Age should be greater than 0";
  if (rest[0].age > 100) return "Age should be greater than 100";

  if (isEmpty(rest[0].calories)) return "Please enter calories";
  if (rest[0].calories < 0) return "Calories should be greater than 0";
  if (rest[0].calories > 2000) return "Calories should be greater than 2000";

  if (isEmpty(rest[0].carbs)) return "Please enter carbs";
  if (rest[0].carbs < 0) return "Carbs should be greater than 0";
  if (rest[0].carbs > 500) return "Carbs should be greater than 500";

  if (isEmpty(rest[0].protein)) return "Please enter protein";
  if (rest[0].protein < 0) return "Protein should be greater than 0";
  if (rest[0].protein > 100) return "Protein should be greater than 100";

  if (isEmpty(rest[0].fat)) return "Please enter fat";
  if (rest[0].fat < 0) return "Fat should be greater than 0";
  if (rest[0].fat > 50) return "Fat should be greater than 50";

  if (isEmpty(rest[0].calcium)) return "Please enter calcium";
  if (rest[0].calcium < 0) return "Calcium should be greater than 0";
  if (rest[0].calcium > 100) return "Calcium should be greater than 100";

  if (isEmpty(rest[0].description)) return "Please enter description";
};
