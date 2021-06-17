import isEmpty from "is-empty";

export const validateAddHospital = (
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

  if (isEmpty(code)) return "Please enter country code";
  if (isNaN(code)) return "Please enter a valid country code";
  if (code.length > 6) return "Country code should not exceed 6 characters";

  if (isEmpty(phoneNumber)) return "Please enter phone number";
  if (isNaN(phoneNumber)) return "Please enter a valid phone number";
  if (phoneNumber.length !== 10) return "Invalid phone number";
};

export const validateEditHospital = (
  firstName,
  lastName,
  dob,
  email,
  phoneNumber,
  address,
  country,
  state,
  city,
  pin
) => {
  if (isEmpty(firstName)) return "Please enter first name";
  if (firstName.length < 3) return "First name must be atleast 3 characters";
  if (firstName.length > 255) return "First name must be atmost 255 characters";

  if (isEmpty(lastName)) return "Please enter last name";
  if (lastName.length < 3) return "Last name must be atleast 3 characters";
  if (lastName.length > 255) return "Last name must be atmost 255 characters";

  if (isEmpty(dob)) return "Please select dob";

  if (isEmpty(email)) return "Please enter email";

  if (isEmpty(phoneNumber)) return "Please enter phone number";
  if (isNaN(phoneNumber)) return "Please enter a valid phone number";
  if (phoneNumber.length !== 10) return "Invalid phone number";

  if (isEmpty(address)) return "Please enter address";

  if (isEmpty(country)) return "Please enter country";

  if (isEmpty(state)) return "Please enter state";

  if (isEmpty(city)) return "Please enter city";

  if (isEmpty(pin)) return "Please enter pin";
  if (isNaN(pin)) return "Please enter a valid pin";
  if (pin.length !== 6) return "Invalid pin";
};
