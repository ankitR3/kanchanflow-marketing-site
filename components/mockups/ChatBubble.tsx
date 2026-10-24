import { FileText } from "lucide-react";
import { cn } from "@/lib/cn";
import type { ChatMessage } from "@/data/mockups/chat";

type ChatBubbleProps = {
  message: ChatMessage;
};

export function ChatBubble({ message }: ChatBubbleProps) {
  const fromTeam = message.from === "team";

  return (
    <div
      className={cn(
        "max-w-[85%] rounded-md px-3 py-2 text-[12px] leading-snug shadow-[0_1px_1px_rgb(17_19_22/0.08)]",
        fromTeam
          ? "self-end rounded-tr-none bg-gold-200 text-graphite-900"
          : "self-start rounded-tl-none bg-white text-graphite-900",
      )}
    >
      {message.attachment && (
        <span className="mb-1.5 flex items-center gap-2 rounded-sm bg-white/70 px-2 py-1.5 font-mono text-[10px]">
          <FileText aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />
          <span className="truncate">{message.attachment}</span>
        </span>
      )}
      {message.text}
      <span className="mt-1 block text-right font-mono text-[10px] text-graphite-500">
        {message.time}
      </span>
    </div>
  );
}
