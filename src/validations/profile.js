import isEmpty from "is-empty";

export const validateProfile = (...props) => {
  if (isEmpty(props[0].firstName)) return "Please enter your first name";
  if (props[0].firstName.length < 3)
    return "First name must be atleast 3 characters";
  if (props[0].firstName.length > 255)
    return "First name must be atmost 255 characters";

  if (isEmpty(props[0].lastName)) return "Please enter your last name";
  if (props[0].lastName.length < 3)
    return "Last name must be atleast 3 characters";
  if (props[0].lastName.length > 255)
    return "Last name must be atmost 255 characters";

  if (isEmpty(props[0].email)) return "Please enter your email";

  if (isEmpty(props[0].phoneNumber)) return "Please enter your phone number";
  if (props[0].phoneNumber.length !== 10) return "Invalid phone number";

 

  if (isEmpty(props[0].address)) return "Please select your address";
  if (props[0].address.length < 3)
    return "Address should be atleast 3 characters";
  if (props[0].address.length > 255)
    return "Address should be atmost 3 characters";
};
