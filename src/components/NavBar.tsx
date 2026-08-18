import { navItems } from "../types"
  
const NavBar = () => {
  return (
    <div>
      <div >
        {navItems.map((item) => (
          <div key={item.label} className={`flex justify-between items-start rounded-xl p-2 my-2   hover:bg-neutral-50 hover:border-2 hover:border-terracotta-600 ${item.isActive ? "bg-neutral-50 shadow-sm rounded-md " : ""}`}>
            <div className="flex items-center gap-2">
              <img src={item.icon} alt="" />
              <p className="font-dm-sans text-neutral-800 text-md">{item.label}</p>
            </div>
              {item.badgeCount && <p className="rounded-full bg-terracotta-600 text-neutral-400 text-xs w-6 h-6  flex items-center justify-center">{item.badgeCount}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default NavBar
