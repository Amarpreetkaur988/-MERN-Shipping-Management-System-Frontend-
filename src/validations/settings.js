import isEmpty from "is-empty";

export const validatePassChange = (oldPass, newPass, confirmPass) => {
  if (isEmpty(oldPass)) return "Please enter your old password";

  if (isEmpty(newPass)) return "Please enter your new password";

  if (isEmpty(confirmPass)) return "Please confirm your password";

  if (newPass !== confirmPass) return "Both password fields should be same";
};
