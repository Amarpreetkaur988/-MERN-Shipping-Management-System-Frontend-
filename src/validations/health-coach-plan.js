import isEmpty from "is-empty";

export const validateAddHealthCoachPlans = (
  images,
  details,
  amount,
  videoConsultation
) => {
  if (images.length === 0) return "Please upload image";

  if (isEmpty(details)) return "Please enter plan details";

  if (isEmpty(amount)) return "Please enter plan amount";
  if (amount < 0) return "Amount should be greater than 0";
  if (amount > 20000) return "Amount should not be greater than 20000";

  if (isEmpty(videoConsultation))
    return "Please enter total no. of video consultations";

  if (videoConsultation < 0)
    return "Video consultations should be greater than 0";
  if (videoConsultation > 100)
    return "Video Consultation should not be greater than 100";
};

export const validateEditHealthCoachPlans = (
  amount,
  duration,
  details,
  videoConsultation
) => {
  if (isEmpty(amount)) return "Please enter plan amount";
  if (amount < 0) return "Amount should be greater than 0";
  if (amount > 20000) return "Amount should not be greater than 20000";

  if (isEmpty(duration)) return "Please enter plan duration";
  if (duration < 0) return "Duration should be greater than 0";
  if (duration > 12) return "Duration should not be greater than 12";
  if (duration != 3 && duration != 6 && duration != 12)
    return "Duration should be of 3, 6 or 12 months";

  if (isEmpty(details)) return "Please enter plan details";

  if (isEmpty(videoConsultation))
    return "Please enter total no. of video consultations";

  if (videoConsultation < 0)
    return "Video consultations should be greater than 0";
  if (videoConsultation > 100)
    return "Video Consultation should not be greater than 100";
};
