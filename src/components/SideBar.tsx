import NavBar from "./NavBar";
import WeatherWidget from "./WeatherWidget";
import LogoImage from "../assets/images/logo.svg";
import CloseIcon from "../assets/images/icon-close.svg";

interface SideBarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideBar = ({ isOpen, onClose }: SideBarProps) => {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/10 backdrop-blur-[2px] lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar Drawer */}
      <aside
        className={`
          fixed top-0 right-0 bottom-0 z-50
          w-80
          bg-neutral-200
          border-l border-neutral-500
          p-6
          flex flex-col justify-between

          transform transition-transform duration-300 ease-in-out

          lg:relative
          lg:left-0
          lg:right-auto
          lg:top-auto
          lg:bottom-auto
          lg:h-screen
          lg:translate-x-0
          lg:border-r
          lg:border-l-0
          lg:bg-transparent

          ${isOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Top */}
        <div className="flex flex-col gap-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={LogoImage} alt="Logo" className="w-6 h-6" />

              <div className="flex flex-col font-fraunces uppercase tracking-wider text-neutral-900 leading-none font-bold text-sm">
                <span>Maison</span>
                <span>Soleil</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 lg:hidden"
              aria-label="Close menu"
            >
              <img src={CloseIcon} alt="" />
            </button>
          </div>

          <nav>
            <NavBar />
          </nav>
        </div>

        {/* Bottom */}
        <div className="mt-auto flex flex-col gap-6">
          <WeatherWidget />

          <div className="space-y-1 font-dm-mono text-[10px] uppercase tracking-widest text-neutral-400">
            <p>Est. 1987</p>
            <p>Maison Soleil · 12 Rue Des Oliviers</p>
            <p>Cassis</p>
            <p className="pt-2 text-neutral-300">
              © 2026 Maison Soleil
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideBar;