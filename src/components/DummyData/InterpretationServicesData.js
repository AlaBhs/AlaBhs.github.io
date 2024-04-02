import attendanceCover from "../../images/attendance_interpretation_services.png";
import onlineCover from "../../images/online_interpretation_services.png";
import {dummyCards_Interpretor} from "./DummyTranslators";

const interpretationServicesData = [
  {
    backgroundImage: attendanceCover,
    titleEmphasis: "Attendance ",
    title: "Interpretation ",
    span: "Services ",
    description:
      "Involve providing real-time language interpretation for meetings, conferences, and events where participants speak different languages. This service ensures effective communication and understanding among attendees who may not share a common language.Both simultaneous and consecutive interpretation services are offered.",
    translatorsCards: dummyCards_Interpretor,
    allTranslatorsLink: "#",
  },
  {
    backgroundImage: onlineCover,
    titleEmphasis: "Online ",
    title: "Interpretation ",
    span: "Services ",
    description:
      "Provide real-time language interpretation for meetings, conferences, interviews, and other events conducted remotely over the internet. These services bridge language barriers by connecting clients with professional interpreters who facilitate seamless communication in different languages. Both simultaneous and consecutive interpretation services are offered online.",
    translatorsCards: dummyCards_Interpretor,
    allTranslatorsLink: "#",
  },
];

export default interpretationServicesData;
