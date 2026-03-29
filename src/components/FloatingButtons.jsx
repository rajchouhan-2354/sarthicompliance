import { Phone, MessageSquare } from "lucide-react";

const FloatingButtons = ({ setChatOpen }) => {
  return (
    <div className="fixed bottom-10 right-10 flex flex-col gap-4">
      <button className="bg-green-500 p-4 rounded-full text-white">
        <Phone />
      </button>

      <button
        onClick={() => setChatOpen(true)}
        className="bg-red-800 p-4 rounded-full text-white"
      >
        <MessageSquare />
      </button>
    </div>
  );
};

export default FloatingButtons;
