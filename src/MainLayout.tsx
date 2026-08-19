import { useState } from "react";
import SideBar from "./components/SideBar";
import OpenIcon from "../src/assets/images/icon-menu.svg";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-neutral-100">
      {/* Desktop Sidebar */}
      <SideBar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Content */}
      <div className="flex flex-1 flex-col min-w-0 min-h-0">
        {/* Mobile Header */}
        <header className="flex items-center justify-between p-4 border-b border-neutral-500 bg-neutral-50 xl:hidden">
          <div className="flex flex-col font-fraunces uppercase tracking-wider text-neutral-900 leading-none font-bold text-xs">
            <span>Maison</span>
            <span>Soleil</span>
          </div>
          
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2"
            aria-label="Open menu"
          >
            <img src={OpenIcon} alt="" />
          </button>
        </header>

        <main className="flex-1 overflow-y-auto p-6 md:p-10">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;