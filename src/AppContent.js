import React, { useContext } from "react";
import "./App.css";
import "../node_modules/swiper/swiper.min.css"; // Import Swiper styles
import "../node_modules/swiper/swiper-bundle.min.css";
import MyNavbar from "./components/Navbar/MyNavbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Services from "./components/Pages/Services";
import ServicesIndustries from "./components/Services/ServicesIndustries";
import { register } from "swiper/element/bundle";
import { PaginationProvider } from "./components/store/paginationStore";
import professionalServicesData from "./components/DummyData/ProfessionalServicesData";
import emergingbooksServicesData from "./components/DummyData/EmergingBooksServicesData";
import interpretationServicesData from "./components/DummyData/InterpretationServicesData";
import voiceServicesData from "./components/DummyData/VoiceServicesData";
import ChatBox from "./components/Services/ChatBox";
import { ChatBoxContext } from "./components/store/chatBoxStore";

register();

function AppContent() {
  const ctx = useContext(ChatBoxContext);
  console.log(ctx.showChatBox);
  return (
    <Router>
      <div className="app-content">
        <PaginationProvider>
          <MyNavbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/services" element={<Services />}>
              {/* Add other nested routes here */}
            </Route>
            <Route
              path="/services/voice"
              element={<ServicesIndustries pageData={voiceServicesData} />}
            />
            <Route
              path="/services/professional"
              element={
                <ServicesIndustries pageData={professionalServicesData} />
              }
            />
            <Route
              path="/services/interpretation"
              element={
                <ServicesIndustries pageData={interpretationServicesData} />
              }
            />
            <Route
              path="/services/emergingbooks"
              element={
                <ServicesIndustries pageData={emergingbooksServicesData} />
              }
            />
          </Routes>
          {ctx.showChatBox && <ChatBox />}
        </PaginationProvider>
      </div>
    </Router>
  );
}

export default AppContent;
