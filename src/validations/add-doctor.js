import isEmpty from "is-empty";

export const validateAddDoctor = (
  title,
  firstName,
  lastName,
  email,
  phoneNumber,
  code
) => {
  if (title && isEmpty(title)) return "Please enter title";

  if (isEmpty(firstName)) return "Please enter first name";
  if (firstName.length < 3) return "First name must be atleast 3 characters";
  if (firstName.length > 255) return "First name must be atmost 255 characters";

  if (isEmpty(lastName)) return "Please enter last name";
  if (lastName.length < 3) return "Last name must be atleast 3 characters";
  if (lastName.length > 255) return "Last name must be atmost 255 characters";

  if (isEmpty(email)) return "Please enter email";

  if (isEmpty(code)) return "Please enter country code";
  if (isNaN(code)) return "Please enter a valid country code";
  if (code.substr(0, 1) === "+")
    return "Please don't include + in country code";
  if (code.substr(0, 1) === "-") return "Please enter a valid country code";
  if (code.length > 6) return "Invalid country code";

  if (isEmpty(phoneNumber)) return "Please enter phone number";
  if (isNaN(phoneNumber)) return "Please enter a valid phone number";
  if (phoneNumber.length !== 10) return "Invalid phone number";
};

export const validateEditDoctor = (
  firstName,
  lastName,
  dob,
  email,
  phoneNumber,
  bio,
  address,
  country,
  state,
  city,
  pin,
  title
) => {
  if (title && isEmpty(title)) return "Please enter Title";
  if (title && title.length > 50) return "Title must be atmost 50 characters";

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

  if (isEmpty(dob)) return "Please select dob";

  if (isEmpty(bio)) return "Please enter bio";
  if (bio < 10) return "Bio should be greather than 10 characters";

  if (isEmpty(address)) return "Please enter address";

  if (isEmpty(country)) return "Please enter country";

  if (isEmpty(state)) return "Please enter state";

  if (isEmpty(city)) return "Please enter city";

  if (isEmpty(pin)) return "Please enter pin";
  if (isNaN(pin)) return "Please enter a valid pin";
  if (pin.length !== 6) return "Invalid pin";
};
