import isEmpty from "is-empty";

export const validateAddCoupon = (coupon, discount, planId) => {
  if (isEmpty(coupon)) return "Please enter coupon code";

  if (isEmpty(discount)) return "Please enter discount percent";
  if (discount < 0) return "Discount should be greater than 0";
  if (discount > 100) return "Discount should be greater than 100";

  if (isEmpty(planId)) return "Please select a plan";
};

export const validateEditCoupon = (coupon, discount) => {
  if (isEmpty(coupon)) return "Please enter coupon code";

  if (isEmpty(discount)) return "Please enter discount percent";
  if (discount < 0) return "Discount should be greater than 0";
  if (discount > 100) return "Discount should be greater than 100";
};
