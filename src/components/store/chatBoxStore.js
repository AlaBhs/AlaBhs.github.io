import React, { useState } from "react";
import $ from "jquery";

export const ChatBoxContext = React.createContext({
  showChatBox: false,
  onChatNowClickHandler: () => {},
});

export const ChatBoxProvider = (props) => {
  const [showChatBox, setShowChatBox] = useState(false);

  const onChatNowClickHandler = () => {
    setShowChatBox(true);
    $("#live-chat").fadeIn(300);
    $(".chat").slideToggle(300, "swing");
    $(".chat-message-counter").fadeToggle(300, "swing");
  };

  const value = {
    showChatBox,
    onChatNowClickHandler,
  };
  return (
    <ChatBoxContext.Provider value={value}>
      {props.children}
    </ChatBoxContext.Provider>
  );
};
