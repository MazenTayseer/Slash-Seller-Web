"use client";

import { useState } from "react";

import ChatbotIcon from "./ChatbotIcon";
import ChatbotMenu from "./ChatbotMenu";

const Chatbot = () => {
  const [showChatBox, setShowChatBox] = useState(false);

  const openChatBox = () => {
    setShowChatBox(true);
  };

  return (
    <section>
      <ChatbotIcon openChatBox={openChatBox} />

      <ChatbotMenu setShowChatBox={setShowChatBox} showChatBox={showChatBox} />
    </section>
  );
};

export default Chatbot;
