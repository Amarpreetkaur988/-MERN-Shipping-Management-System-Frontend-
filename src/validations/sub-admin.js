import isEmpty from "is-empty";

export const validateSubAdmin = (...props) => {
  if (isEmpty(props[0].firstName)) return "Please enter first name";
  if (props[0].firstName.length < 3)
    return "First name must be atleast 3 characters";
  if (props[0].firstName.length > 255)
    return "First name must be atmost 255 characters";

  if (isEmpty(props[0].lastName)) return "Please enter last name";
  if (props[0].lastName.length < 3)
    return "Last name must be atleast 3 characters";
  if (props[0].lastName.length > 255)
    return "Last name must be atmost 255 characters";

  if (isEmpty(props[0].email)) return "Please enter email";

  if (isEmpty(props[0].phoneNumber)) return "Please enter phone number";
  if (isNaN(props[0].phoneNumber)) return "Please enter a valid phone number";
  if (props[0].phoneNumber.length !== 10) return "Invalid phone number";

  if (isEmpty(props[0].gender)) return "Please select gender";

  if (isEmpty(props[0].address)) return "Please select address";
  if (props[0].address.length < 3)
    return "Address should be atleast 3 characters";
  if (props[0].address.length > 255)
    return "Address should be atmost 3 characters";

  if (isEmpty(props[0].city)) return "Please select city";
  if (props[0].city.length < 3) return "City should be atleast 3 characters";
  if (props[0].city.length > 255) return "City should be atmost 3 characters";

  if (isEmpty(props[0].state)) return "Please select state";
  if (props[0].state.length < 3) return "State should be atleast 3 characters";
  if (props[0].state.length > 255) return "State should be atmost 3 characters";

  if (isEmpty(props[0].country)) return "Please select country";
  if (props[0].country.length < 3)
    return "Country should be atleast 3 characters";
  if (props[0].country.length > 255)
    return "Country should be atmost 3 characters";

  if (isEmpty(props[0].pin)) return "Please select pin";
  if (isNaN(props[0].pin)) return "Please enter a valid pin";
  if (props[0].pin.length !== 6) return "Pin should be of 6 characters";

  if (isEmpty(props[0].password)) return "Please enter password";

  if (props[0].password.length < 6)
    return "Password must be atleast 6 characters";

  if (isEmpty(props[0].confirmPassword)) return "Please enter confirm password";

  if (props[0].confirmPassword.length < 6)
    return "Password must be atleast 6 characters";

  if (
    props[0].password &&
    props[0].password !== props[0].confirmPassword &&
    props[0].confirmPassword
  )
    return "Both passwords must be same";
};

export const validateAssignModules = (...props) => {
  let patient = checkCrudFalse(props[0].patient);
  let speciality = checkCrudFalse(props[0].categories.specialty);
  let healthInsights = checkCrudFalse(props[0].categories.healthInsights);
  let symptoms = checkCrudFalse(props[0].categories.symptoms);
  let doctor = checkCrudFalse(props[0].doctor);
  let psychologist = checkCrudFalse(props[0].psychologist);
  let fitnessCoach = checkCrudFalse(props[0].fitnessCoach);
  let liveChat = checkAccessFalse(props[0].liveChat);
  let subscriptions = checkCrudFalse(props[0].subscriptions);
  let pregnancyTracker = checkCrudFalse(props[0].pregnancyTracker);
  let nutritionDiary = checkCrudFalse(props[0].nutritionDiary);
  let coupons = checkCrudFalse(props[0].coupons);
  let templates = checkCrudFalse(props[0].templates);
  let faq = checkCrudFalse(props[0].faq);
  let ratings = checkRudFalse(props[0].ratings);
  let appointments = checkRudFalse(props[0].appointments);
  let cms = checkRuFalse(props[0].cms);

  if (
    !patient &&
    !speciality &&
    !healthInsights &&
    !symptoms &&
    !doctor &&
    !psychologist &&
    !fitnessCoach &&
    !liveChat &&
    !subscriptions &&
    !pregnancyTracker &&
    !nutritionDiary &&
    !coupons &&
    !templates &&
    !faq &&
    !ratings &&
    !appointments &&
    !cms
  ) {
    return "Please assign a module";
  }
};

const checkCrudFalse = (module) => {
  if (!module.create && !module.view && !module.update && !module.delete) {
    return false;
  }
  return true;
};

const checkRudFalse = (module) => {
  if (!module.view && !module.update && !module.delete) {
    return false;
  }
  return true;
};

const checkRuFalse = (module) => {
  if (!module.view && !module.update) {
    return false;
  }
  return true;
};

const checkAccessFalse = (module) => {
  if (!module.access) {
    return false;
  }
  return true;
};
