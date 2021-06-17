import isEmpty from "is-empty";

export const validateLogin = (id, password) => {
  if (isEmpty(id)) return "Please enter your email or phone number";

  if (isEmpty(password)) return "Please enter your password";
};

export const validateResetPassword = (otp, password, confirmPassword) => {
  if (isEmpty(otp)) return "Please enter otp";

  if (isEmpty(password)) return "Please enter your new password";

  if (isEmpty(confirmPassword)) return "Please confirm your new password";

  if (password !== confirmPassword) return "Both password fileds must be same";
};
