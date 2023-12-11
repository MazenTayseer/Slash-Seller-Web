import React from "react";
import { FaMessage } from "react-icons/fa6";

type ChatBotIconProps = {
  openChatBox: () => void;
};

const ChatbotIcon = ({ openChatBox }: ChatBotIconProps) => {
  return (
    <aside className='fixed bottom-8 right-0 lg:px-24 md:px-16 px-6'>
      <button
        className='bg-customDark text-customLime text-xl p-6 rounded-full cursor-pointer z-50 black_btn_hover'
        onClick={openChatBox}
      >
        <FaMessage />
      </button>
    </aside>
  );
};

export default ChatbotIcon;
