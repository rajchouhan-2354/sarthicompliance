import { motion, AnimatePresence } from "framer-motion";
import { Cpu, X, ChevronRight } from "lucide-react";

const ChatWidget = ({ chatOpen, setChatOpen }) => {
  return (
    <AnimatePresence>
      {chatOpen && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className="fixed bottom-28 right-10 w-80 bg-white dark:bg-slate-900 rounded-[30px] shadow-2xl border border-red-800/20 overflow-hidden z-[130]"
        >
          <div className="bg-red-800 p-6 text-white flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Cpu size={20} />
              <span className="text-sm font-bold">Sarthi AI Auditor</span>
            </div>
            <X
              size={18}
              className="cursor-pointer"
              onClick={() => setChatOpen(false)}
            />
          </div>

          <div className="p-6 h-[300px] overflow-y-auto space-y-4 bg-slate-50 dark:bg-slate-950/50">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl text-xs">
              Hello! I'm your AI compliance assistant.
            </div>
          </div>

          <div className="p-4 border-t dark:border-slate-800 flex items-center space-x-2">
            <input
              className="flex-grow text-xs bg-slate-100 dark:bg-slate-800 rounded-xl px-4 py-3 outline-none"
              placeholder="Type here..."
            />
            <button className="p-3 bg-red-800 text-white rounded-xl">
              <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChatWidget;
