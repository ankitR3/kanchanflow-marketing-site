import {
  ChartColumn,
  FileText,
  LayoutDashboard,
  Layers,
  Package,
  SquareKanban,
  Users,
} from "lucide-react";
import { LogoMark } from "@/components/layout/LogoMark";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Home" },
  { icon: SquareKanban, label: "Pipeline", active: true },
  { icon: FileText, label: "Quotes" },
  { icon: Package, label: "Orders" },
  { icon: Layers, label: "BOMs" },
  { icon: Users, label: "Customers" },
  { icon: ChartColumn, label: "Reports" },
];

export function MockupSidebar() {
  return (
    <div className="hidden w-44 shrink-0 flex-col gap-1 border-r border-steel-200 bg-steel-50 p-3 md:flex">
      <div className="mb-3 flex items-center gap-2 px-2 py-1">
        <LogoMark className="h-5 w-5" />
        <span className="text-xs font-bold">Pune Precision</span>
      </div>
      {sidebarItems.map(({ icon: Icon, label, active }) => (
        <div
          key={label}
          className={
            active
              ? "flex items-center gap-2.5 rounded-sm bg-graphite-950 px-2 py-1.5 text-xs font-semibold text-steel-50"
              : "flex items-center gap-2.5 rounded-sm px-2 py-1.5 text-xs text-graphite-600"
          }
        >
          <Icon className="h-3.5 w-3.5" aria-hidden="true" />
          {label}
        </div>
      ))}
    </div>
  );
}
