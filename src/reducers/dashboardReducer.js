import {
  IS_LOADING,
  GET_PATIENTS,
  GET_PATIENT,
  ADMIN_PROFILE_DATA,
  SUBADMIN_PROFILE_DATA,
  GET_SPECIALITY,
  GET_SYMPTOMS,
  GET_ARTICLES,
  GET_APPOINTMENTS,
  FAQ,
  ABOUT,
  HELP,
  TERM,
  GET_NUTRITION_DIARY,
  GET_NUTRITION_DIARY_SINGLE,
  ALL_SUBSCRIPTIONS,
  GET_SUBSCRIPTION,
  ALL_HEALTH_COACH_SUBSCRIPTIONS,
  GET_HEALTH_COACH_SUBSCRIPTION,
  ALL_COUPONS,
  GET_COUPON,
  SINGLE_FAQ,
  ALL_TEMPLATES,
  GET_TEMPLATE,
  GET_DOCTORS,
  GET_DOCTOR,
  DASHBOARD_STATS,
  DISCOUNT,
  ALL_QUALIFICATION,
  ALL_ARTICLES_CATEGORY,
  VERIFY_SUCCESS,
  VERIFY_ERROR,
  ALL_FITNESS_PLAN_CATEGORY,
  GET_HOSPITAL,
  GET_HOSPITALS,
  ALL_COLLEGE,
  TWILIO_ACCESS_TOKEN,
  ALL_COUNCIL,
  QUESTIONAIRE,
  GET_QUESTION,
  GET_MANAGERS,
  GET_MANAGER,
  GET_STAFF,
  GET_STAFFS,
  GET_CMS,
  SINGLE_BLOG,
  singleBlog,
  Blog,
  BLOG,
} from "../actions/types";

const initialState = {
  loading: false,
  allPatients: [],
  singlePatientInfo: {},
  patientAppointments: [],
  patientReviews: [],
  adminProfileData: {},
  subadminProfileData: [],
  specialities: [],
  symptoms: [],
  articles: [],
  fitnessPlan: [],
  appointments: [],
  faq: [],
  about: [],
  help: [],
  term: {},
  nutritionDiary: [],
  nutrition: {},
  Subscriptions: [],
  singleSubscription: {},
  healthCoachSubscriptions: [],
  singleHealthCoachSubscription: {},
  allCoupons: [],
  singleCoupon: {},
  singleFAQ: {},
  allTemplates: [],
  singleTemplate: {},
  allDoctors: [],
  singleDoctorInfo: {},
  doctorAppointments: [],
  doctorArticles: [],
  doctorReviews: [],
  dashboardStats: {},
  reviews: [],
  qualifications: [],
  articleCategory: [],
  verifyError: "",
  verifySuccess: "",
  allHospitals: [],
  singleHospitalInfo: {},
  colleges: [],
  twilioAccessToken: "",
  council: [],
  questionaire: [],
  singleQuestion: {},
  userAddedArticles: [],
  allWalkers: [],
  singleWalkerInfo: {},
  walkerBookings: [],
  walkerReviews: [],
  allManagers: [],
  singleManagerInfo: {},
  allStaffs: [],
  singleCaptain: {},
  staffs: [],
  cms: [],
  vessels: [],
  blog: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_PATIENTS:
      return {
        ...state,
        allPatients: [...action.payload],
      };
    case GET_PATIENT:
      return {
        ...state,
        singlePatientInfo: action.patientInfo,
        patientAppointments: [...action.appointments],
        patientReviews: action.reviews,
        userAddedArticles: action.userAddedArticles,
      };
    case ADMIN_PROFILE_DATA:
      return {
        ...state,
        adminProfileData: action.payload,
      };
    case SUBADMIN_PROFILE_DATA:
      return {
        ...state,
        subadminProfileData: action.payload,
      };
    case GET_SPECIALITY:
      return {
        ...state,
        specialities: action.payload,
      };
    case GET_ARTICLES:
      return {
        ...state,
        articles: action.payload,
      };
    case GET_SYMPTOMS:
      return {
        ...state,
        symptoms: action.payload,
      };
    case GET_APPOINTMENTS:
      return {
        ...state,
        appointments: action.payload,
      };
    case FAQ:
      return {
        ...state,
        faq: action.payload,
      };
    case SINGLE_FAQ:
      return {
        ...state,
        singleFAQ: action.payload,
      };
    case ABOUT:
      return {
        ...state,
        about: action.payload,
      };
    case HELP:
      return {
        ...state,
        help: action.payload,
      };
    case TERM:
      return {
        ...state,
        term: action.payload,
      };
    case GET_NUTRITION_DIARY:
      return {
        ...state,
        nutritionDiary: action.payload,
      };
    case GET_NUTRITION_DIARY_SINGLE:
      return {
        ...state,
        nutrition: action.payload,
      };
    case ALL_SUBSCRIPTIONS:
      return {
        ...state,
        Subscriptions: action.payload,
      };
    case GET_SUBSCRIPTION:
      return {
        ...state,
        singleSubscription: action.payload,
      };
    case ALL_HEALTH_COACH_SUBSCRIPTIONS:
      return {
        ...state,
        healthCoachSubscriptions: action.payload,
      };
    case GET_HEALTH_COACH_SUBSCRIPTION:
      return {
        ...state,
        singleHealthCoachSubscription: action.payload,
      };
    case ALL_COUPONS:
      return {
        ...state,
        allCoupons: action.payload,
      };
    case GET_COUPON:
      return {
        ...state,
        singleCoupon: action.payload,
      };
    case ALL_TEMPLATES:
      return {
        ...state,
        allTemplates: action.payload,
      };
    case GET_TEMPLATE:
      return {
        ...state,
        singleTemplate: action.payload,
      };
    case GET_DOCTORS:
      return {
        ...state,
        allDoctors: [...action.payload],
      };
    case GET_DOCTOR:
      return {
        ...state,
        singleDoctorInfo: action.doctorInfo,
        doctorAppointments: action.doctorAppointments,
        doctorArticles: action.doctorArticles,
        doctorReviews: action.doctorReviews,
      };
    case DASHBOARD_STATS:
      return {
        ...state,
        dashboardStats: {
          patients: action.patients,
          doctors: action.doctors,
          psychologist: action.psychologist,
          fitnessCoach: action.fitnessCoach,
          appointments: action.appointments,
        },
      };
  
    case DISCOUNT:
      return {
        ...state,
        discount: action.payload,
      };
    case ALL_QUALIFICATION:
      return {
        ...state,
        qualifications: action.payload,
      };
    case ALL_ARTICLES_CATEGORY:
      return {
        ...state,
        articleCategory: action.payload,
      };
    case VERIFY_SUCCESS:
      return {
        ...state,
        verifySuccess: action.payload,
      };
    case VERIFY_ERROR:
      return {
        ...state,
        verifyError: action.payload,
      };
   
    case ALL_FITNESS_PLAN_CATEGORY:
      return {
        ...state,
        fitnessPlan: action.payload,
      };
    case GET_HOSPITALS:
      return {
        ...state,
        allHospitals: [...action.payload],
      };
    case GET_HOSPITAL:
      return {
        ...state,
        singleHospitalInfo: action.payload,
      };
    case ALL_COLLEGE:
      return {
        ...state,
        colleges: action.payload,
      };
    case TWILIO_ACCESS_TOKEN:
      return {
        ...state,
        twilioAccessToken: action.payload,
      };
    case ALL_COUNCIL:
      return {
        ...state,
        council: action.payload,
      };
    case QUESTIONAIRE:
      return {
        ...state,
        questionaire: action.payload,
      };
    case GET_QUESTION:
      return {
        ...state,
        singleQuestion: action.payload,
      };
   
    case GET_MANAGERS:
        return {
          ...state,
          allManagers: [...action.payload],
        };
    case GET_MANAGER:
      return {
        ...state,
        singleManagerInfo: action.managerInfo,
        staffs: action.staffs,
        vessels:action.vessels,
      };

      case GET_STAFFS:
        return {
          ...state,
          allStaffs: [...action.payload],
        };
    case GET_STAFF:
      return {
        ...state,
        singleCaptain: action.captainInfo,
      };
    case GET_CMS:
      return {
        ...state,
        cms: action.payload,
      };
      case BLOG:
      return {
        ...state,
        blog: action.payload,
      };
    case SINGLE_BLOG:
      return {
        ...state,
        singleBlog: action.payload,
      };
    default:
      return state;
  }
}
