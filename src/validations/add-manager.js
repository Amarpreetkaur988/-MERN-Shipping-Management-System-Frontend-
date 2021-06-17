import isEmpty from "is-empty";

export const validateAddManager = (
  firstName,
  lastName,
  email,
  phoneNumber,
  code
) => {
  if (isEmpty(firstName)) return "Please enter first name";
  if (firstName.length < 3) return "First name must be atleast 3 characters";
  if (firstName.length > 255) return "First name must be atmost 255 characters";

  if (isEmpty(lastName)) return "Please enter last name";
  if (lastName.length < 3) return "Last name must be atleast 3 characters";
  if (lastName.length > 255) return "Last name must be atmost 255 characters";

  if (isEmpty(email)) return "Please enter email";

  if (isEmpty(phoneNumber)) return "Please enter phone number";
  if (isNaN(phoneNumber)) return "Please enter a valid phone number";
  if (phoneNumber.length !== 10) return "Invalid phone number";
};

export const validateEditManager = (
  firstName,
  lastName,
  email,
  phoneNumber,

) => {
  if (isEmpty(firstName)) return "Please enter first name";
  if (firstName.length < 3) return "First name must be atleast 3 characters";
  if (firstName.length > 255) return "First name must be atmost 255 characters";

  if (isEmpty(lastName)) return "Please enter last name";
  if (lastName.length < 3) return "Last name must be atleast 3 characters";
  if (lastName.length > 255) return "Last name must be atmost 255 characters";

  if (isEmpty(email)) return "Please enter email";

  if (isEmpty(phoneNumber)) return "Please enter phone number";
  if (isNaN(phoneNumber)) return "Please enter a valid phone number";
  if (phoneNumber.length !== 10) return "Invalid phone number";

 
};
