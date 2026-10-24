import { CircleCheck } from "lucide-react";
import { chatContact, chatMessages } from "@/data/mockups/chat";
import { AppWindow } from "./AppWindow";
import { ChatBubble } from "./ChatBubble";

export function WhatsAppMockup() {
  return (
    <AppWindow
      title="app.kanchanflow.com/quotes/Q-2417/messages"
      label="A WhatsApp conversation inside KanchanFlow where the customer approves quote Q-2417 by replying APPROVE, and the approval is logged against the quote automatically."
    >
      <div className="flex items-center gap-3 border-b border-steel-200 px-4 py-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-graphite-950 text-[11px] font-semibold text-gold-300">
          AD
        </span>
        <div>
          <p className="text-[13px] font-bold">{chatContact.name}</p>
          <p className="text-[11px] text-graphite-500">
            {chatContact.company} · via WhatsApp
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 bg-steel-100 p-4">
        {chatMessages.map((message) => (
          <ChatBubble key={message.time} message={message} />
        ))}
        <p className="mt-1 flex items-center gap-1.5 self-center rounded-full bg-graphite-950 px-3 py-1 text-[11px] text-steel-50">
          <CircleCheck aria-hidden="true" className="h-3.5 w-3.5 text-gold-400" />
          Approval logged on Q-2417 · Work order released
        </p>
      </div>
    </AppWindow>
  );
}
