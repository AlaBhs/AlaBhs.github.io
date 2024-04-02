import legalCover from "../../images/legal_professional_services.png";
import technicalCover from "../../images/technical_professional_services.png";
import certifDocCover from "../../images/certifDoc_professional_services.png";
import  { dummyCards_Certified,dummyCards_Legal, dummyCards_Technical } from "./DummyTranslators";


const professionalServicesData = [
  {
    backgroundImage: legalCover,
    titleEmphasis: "Legal Translation",
    title: "services for your",
    span: "Business",
    description: "Ensure your legal business speaks a universal language with our professional legal translation services. Fast delivery, acuurate results, includes contracts and confidentiality agreements, litigation papers, witness reports and other officail documents...",
    translatorsCards: dummyCards_Legal,
    allTranslatorsLink: "#",
  },
  {
    backgroundImage: technicalCover,
    titleEmphasis: "Technical",
    title: "Translation services for your",
    span: "Business",
    description: " Empower your technical business to communicate effectively across borders with our expert technical translation services. We guarantee fast delivery and precise results, covering a wide range of documents including patents, scientific reports, economic documents, safety procedure manuals, and more.",
    translatorsCards: dummyCards_Technical,
    allTranslatorsLink: "#",
  },
  {
    backgroundImage: certifDocCover,
    titleEmphasis: "Certified",
    title: "documents",
    span: "Translation",
    description: "Ensure your documents speaks a universal language with our professional certified translation services. Our professional translators ensure all types of documents are translated accurately and precisely within a quick turnaround and backed with quality assurance measures, so you can make the transition to global markets easily, irrespective of the industry you belong to.",
    translatorsCards: dummyCards_Certified,
    allTranslatorsLink: "#",
  },
];

export default professionalServicesData;
