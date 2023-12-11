import { FaMinus, FaXmark } from "react-icons/fa6";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ChatbotMenuProps = {
  showChatBox: boolean;
  setShowChatBox: (value: boolean) => void;
};

type Option = {
  label: string;
  response: string;
};

type ChatMessage = {
  type: "bot" | "user";
  seenStatus: boolean;
  text: string;
  options?: Option[];
};

const ChatbotMenu = ({ setShowChatBox, showChatBox }: ChatbotMenuProps) => {
  const closeChatBox = () => {
    setShowChatBox(false);
  };

  const endChatBox = () => {
    setShowChatBox(false);

    setChatMessages([
      {
        type: "bot",
        text: "Hi there! How can I assist you today?",
        seenStatus: false,
        options: [
          { label: "How to Join", response: "You can join us by..." },
          {
            label: "FAQ",
            response: "Here are the frequently asked questions...",
          },
          {
            label: "Slash Information",
            response: "The store information is...",
          },
        ],
      },
    ]);
  };

  const updateMessageStatus = (index: number) => {
    setTimeout(() => {
      setChatMessages((prevMessages) => {
        const updatedMessages = [...prevMessages];
        if (updatedMessages[index]) {
          updatedMessages[index] = {
            ...updatedMessages[index],
            seenStatus: true,
          };
        }
        return updatedMessages;
      });
    }, 1000);
  };

  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      type: "bot",
      text: "Hi there! How can I assist you today?",
      seenStatus: false,
      options: [
        { label: "How to Join", response: "You can join us by..." },
        {
          label: "FAQ",
          response: "Here are the frequently asked questions...",
        },
        { label: "Slash Information", response: "The store information is..." },
      ],
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatMessages]);

  useEffect(() => {
    if (showChatBox && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showChatBox]);

  const handleButtonClick = (label: string, response: string) => {
    const newMessage: ChatMessage = {
      type: "user",
      text: label,
      seenStatus: false,
    };

    setChatMessages((prevMessages) => [...prevMessages, newMessage]);

    const botResponse: ChatMessage = {
      type: "bot",
      text: response,
      seenStatus: false,
    };

    setChatMessages((prevMessages) => [...prevMessages, botResponse]);
  };

  useEffect(() => {
    if (showChatBox) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showChatBox]);

  return (
    <AnimatePresence>
      {showChatBox && (
        <aside className='fixed md:bottom-8 md:right-0 md:px-16 lg:px-24 md:inset-auto inset-0 px-6 flex justify-center items-center'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='bg-customDark text-customWhite md:h-[30rem] md:w-[22rem] h-[95%] w-full rounded-lg shadow-lg'
          >
            <div className='pt-4 pb-2 mx-5 border-b-2 border-customGray flex justify-between items-center'>
              <h4 className='font-bold text-lg'>Slash Assistant</h4>

              <div className='flex items-center gap-2 text-lg text-customWhite'>
                <span
                  className='cursor-pointer hover:text-customGray'
                  onClick={closeChatBox}
                >
                  <FaMinus />
                </span>
                <span
                  className='cursor-pointer hover:text-customGray'
                  onClick={endChatBox}
                >
                  <FaXmark />
                </span>
              </div>
            </div>

            <div className='py-4 overflow-y-auto md:max-h-[25rem] max-h-[90%]'>
              <div className='px-5'>
                <article>
                  <div className='flex flex-col gap-2 justify-start mb-4'>
                    {chatMessages.map((message, index) => (
                      <>
                        {message.type === "bot" && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                              delay: message.seenStatus
                                ? 0
                                : index === 0
                                ? 0.7
                                : 1.0,
                            }}
                            className='bg-customLime text-customDark p-3 rounded-lg max-w-[75%]'
                          >
                            <p>{message.text}</p>
                          </motion.div>
                        )}

                        {message.type === "user" && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className='flex justify-end'
                          >
                            <div className='bg-customGray text-customWhite p-3 rounded-lg max-w-[75%]'>
                              <p>{message.text}</p>
                            </div>
                          </motion.div>
                        )}

                        <div className='flex flex-wrap items-center gap-2'>
                          {message.options?.map((option, optionIndex) => (
                            <motion.button
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{
                                delay: message.seenStatus ? 0 : 0.7,
                              }}
                              key={optionIndex}
                              className='bg-black py-2 px-4 rounded-full black_btn_hover'
                              onClick={() =>
                                handleButtonClick(option.label, option.response)
                              }
                            >
                              {option.label}
                            </motion.button>
                          ))}
                        </div>

                        {message.type === "bot" &&
                          !message.seenStatus &&
                          updateMessageStatus(index)}
                      </>
                    ))}
                    <div ref={messagesEndRef} />
                  </div>
                </article>
              </div>
            </div>
          </motion.div>
        </aside>
      )}
    </AnimatePresence>
  );
};

export default ChatbotMenu;
