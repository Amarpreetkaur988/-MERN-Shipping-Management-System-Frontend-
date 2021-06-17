import isEmpty from "is-empty";

export const validateAddSubscription = (rest) => {
  if (isEmpty(rest.planName)) return "Please enter plan name";

  if (isEmpty(rest.amount)) return "Please enter plan amount";
  if (rest.amount < 0) return "Amount should be greater than 0";
  if (rest.amount > 20000) return "Amount should not be greater than 20000";

  if (rest.planForFamily && isEmpty(rest.familyMembers))
    return "Please enter total family members";
  if (rest.planForFamily && rest.familyMembers < 0)
    return "Total family members should be greater than 0";
  if (rest.planForFamily > 100)
    return "Plan for family should not be greater than 100";

  if (isEmpty(rest.duration)) return "Please enter plan duration";
  if (rest.duration < 0) return "Duration should be greater than 0";
  if (rest.duration > 12) return "Duration should not be greater than 12";

  if (isEmpty(rest.text)) return "Please enter plan details";

  if (isEmpty(rest.conWithGenPrac))
    return "Please enter consultations with gen. practitioner";
  if (rest.conWithGenPrac < 0)
    return "Consultations with practitioner should be greater than 0";
  if (rest.conWithGenPrac > 100)
    return "Consultations with practitioner should not be greater than 100";

  if (isEmpty(rest.conWithSpec))
    return "Please enter consultations with specialist";
  if (rest.conWithSpec < 0)
    return "Consultations with specialist should be greater than 0";
  if (rest.conWithSpec > 100)
    return "Consultations with specialist should not be greater than 100";

  if (isEmpty(rest.followUpAppoin))
    return "Please enter follow up appointments";
  if (rest.followUpAppoin < 0)
    return "Follow-up appointments should be greater than 0";
  if (rest.followUpAppoin > 100)
    return "Follow-up appointments should not be greater than 100";
};

export const validateEditSubscription = (rest) => {
  if (isEmpty(rest.planName)) return "Please enter plan name";

  if (isEmpty(rest.amount)) return "Please enter plan amount";
  if (rest.amount < 0) return "Amount should be greater than 0";
  if (rest.amount > 20000) return "Amount should not be greater than 20000";

  if (isEmpty(rest.duration)) return "Please enter plan duration";
  if (rest.duration < 0) return "Duration should be greater than 0";
  if (rest.duration > 12) return "Duration should not be greater than 12";
  if (rest.duration != 1 && rest.duration != 6 && rest.duration != 12)
    return "Duration should be of 1, 6 or 12 month(s)";

  if (isEmpty(rest.text)) return "Please enter plan details";

  if (isEmpty(rest.conWithGenPrac))
    return "Please enter consultations with gen. practitioner";
  if (rest.conWithGenPrac < 0)
    return "Consultations with practitioner should be greater than 0";
  if (rest.conWithGenPrac > 100)
    return "Consultations with practitioner should not be greater than 100";

  if (isEmpty(rest.conWithSpec) && rest.conWithSpec != 0)
    return "Please enter consultations with specialist";
  if (rest.conWithSpec < 0)
    return "Consultations with specialist should be greater than 0";
  if (rest.conWithSpec > 100)
    return "Consultations with specialist should not be greater than 100";

  if (isEmpty(rest.followUpAppoin))
    return "Please enter follow up appointments";
  if (rest.followUpAppoin < 0)
    return "Follow-up appointments should be greater than 0";
  if (rest.followUpAppoin > 100)
    return "Follow-up appointments should not be greater than 100";
};
