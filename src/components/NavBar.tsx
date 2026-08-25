import { navItems } from "../types"
import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <div>
      <div >
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              `flex justify-between items-start rounded-xl p-2 my-2   hover:bg-neutral-50 hover:border-2 hover:border-terracotta-600
               ${isActive ? "bg-neutral-50 shadow-sm rounded-md " : ""}
               `}>
            <div className="flex items-center gap-2">
              <img src={item.icon} alt="" />
              <p className="font-dm-sans text-neutral-800 text-md">{item.label}</p>
            </div>
              {item.badgeCount !== undefined && <p className="rounded-full bg-terracotta-600 text-neutral-400 text-xs w-6 h-6  flex items-center justify-center">{item.badgeCount}</p>}
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default NavBar
