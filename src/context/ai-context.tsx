"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface Message {
  from: "user" | "AI";
  text: string;
  timestamp: Date;
}

interface AIChatContextType {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  isTyping: boolean;
  sendMessageOnly: (inputText: string) => Promise<void>;
  handleClearMessages: () => void;
}

const AIChatContext = createContext<AIChatContextType | undefined>(undefined);

export function AIChatProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const sendMessageOnly = async (inputText: string) => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      from: "user",
      text: inputText,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    try {
      const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" +
          process.env.NEXT_PUBLIC_GEMINI_KEY,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `
Bạn là chuyên gia về Lịch sử Đảng Cộng sản Việt Nam,
đặc biệt là giai đoạn "Đêm trước Đổi mới: Khủng hoảng và thử nghiệm (1975 - 1986)".
Hãy trả lời bằng tiếng Việt, thân thiện, rõ ràng, và dựa trên kiến thức lịch sử chính thống.
Nếu người dùng chỉ chào hỏi, hãy đáp lại thân mật và tự giới thiệu vai trò của bạn.
Nếu câu hỏi không liên quan, hãy trả lời ngắn gọn và nhẹ nhàng nhắc họ rằng
chủ đề chính của cuộc trò chuyện là về giai đoạn 1975–1986.
Câu hỏi hoặc lời nhắn từ người dùng: ${inputText}.
`,
                  },
                ],
              },
            ],
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `API Error: ${response.status} - ${JSON.stringify(errorData)}`
        );
      }

      const data = await response.json();
      const reply = data.candidates[0].content.parts[0].text;
      setMessages((prev) => [
        ...prev,
        { from: "AI", text: reply, timestamp: new Date() },
      ]);
    } catch (error) {
      console.log("API Key exists:", !!process.env.REACT_APP_GEMINI_KEY);
      console.log("Error details:", error);

      let errorMessage = "Xin hãy thử lại sau";

      if (error instanceof Error) {
        if (error.message.includes("503")) {
          errorMessage =
            "Dịch vụ tạm thời không khả dụng. Vui lòng thử lại sau ít phút.";
        } else if (error.message.includes("401")) {
          errorMessage = "Lỗi xác thực API. Vui lòng kiểm tra cấu hình.";
        } else if (error.message.includes("429")) {
          errorMessage = "Đã vượt quá giới hạn sử dụng. Vui lòng thử lại sau.";
        }
      }

      setMessages((prev) => [
        ...prev,
        { from: "AI", text: errorMessage, timestamp: new Date() },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleClearMessages = () => {
    setMessages([]);
  };

  return (
    <AIChatContext.Provider
      value={{
        messages,
        setMessages,
        isTyping,
        sendMessageOnly,
        handleClearMessages,
      }}
    >
      {children}
    </AIChatContext.Provider>
  );
}

export const useAIChat = () => {
  const context = useContext(AIChatContext);
  if (!context) throw new Error("useAIChat must be used within AIChatProvider");
  return context;
};
