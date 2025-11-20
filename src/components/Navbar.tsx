import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../styles.css";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);


  //close both menu and dropdown
  const handleClose = () => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      setIsMobileOpen(false);
      setIsAnimatingOut(false);
    }, 500);
  };


  return (
    <header className="flex justify-between">
      {/* Logo */}
      <div className="sm:w-[215px] lg:w-[375px]">
        <a href="/">
          <img src="https://drive.developershideout.com:4431/hoda_img/ICONS/SITE_LOGO.png" 
               className="sm:w-[180px] lg:w-[300px] xl:w-[375px]"
               alt="Site Logo" 
          />
        </a>
        <h3 className="text-end text-xs font-light lg:hidden">RUNWAY & FASHION MODEL</h3>
      </div>

      

      {/* HAMBURGER */}
      <button
        className="lg:hidden flex flex-col gap-1 p-2 justify-center"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        aria-label="Toggle navigation"
      >
        <span className="w-7 h-[4px] bg-black block"></span>
        <span className="w-7 h-[4px] bg-black block"></span>
        <span className="w-7 h-[4px] bg-black block"></span>
      </button>

{/* DESKTOP NAV */}
      <nav className="desktopNav hidden! lg:flex! sm:max-xl:gap-6 xl:gap-[55px] items-end \">
        <NavLink to="/portfolio" className="text-[16px] xl:text-[24px] hover:text-black hover:font-medium" end>PORTFOLIO</NavLink>
        <NavLink to="/about" className="text-[16px] xl:text-[24px] hover:text-black hover:font-medium">ABOUT</NavLink>

        <NavLink to="/press" className="text-[16px] xl:text-[24px] hover:text-black hover:font-medium">PRESS</NavLink>
        <NavLink to="/contact" className="text-[16px] xl:text-[24px] hover:text-black hover:font-medium">CONTACT</NavLink>
      </nav>

{/* MOBILE NAV */}
      {isMobileOpen && (
        <div className="lg:hidden fixed top-0 right-0 h-full w-full flex z-[9999]">
          {/* Left silhouette section */}
          <div className="relative w-[100%] bg-cover bg-center bg-black filter opacity-50" 
               onClick={handleClose}
          ></div>
          {/* Right menu panel */}
          <div className={`flex flex-col fixed top-0 right-0 h-full w-[70%] bg-[var(--bg)]  sm:pt-10 md:pt-20 md:p-16 shadow-lg
          ${isAnimatingOut ? "animate-slide-out" : "animate-slide-in"}`}
          >
            {/* Close button */}
            <button className="absolute top-2 right-6 text-4xl" 
                    onClick={handleClose}>×
            </button>
                <NavLink to="/portfolio" className="text-[16px] xl:text-[24px] p-5 text-center border-b-1 hover:text-black hover:font-medium" end onClick={handleClose}>PORTFOLIO</NavLink>
                <NavLink to="/about" className="text-[16px] xl:text-[24px] p-5 text-center border-b-1 hover:text-black hover:font-medium" onClick={handleClose}>ABOUT</NavLink>
         
                <NavLink to="/press" className="text-[16px] xl:text-[24px] p-5 text-center border-b-1 hover:text-black hover:font-medium" onClick={handleClose}>PRESS</NavLink>
                <NavLink to="/contact" className="text-[16px] xl:text-[24px] p-5 text-center border-b-1 hover:text-black hover:font-medium" onClick={handleClose}>CONTACT</NavLink>
            
            {/*site logo mobile */}
            <a className="p-0 self-center px-5 pt-25" href="/">
              <img src="https://drive.developershideout.com:4431/hoda_img/ICONS/SITE_LOGO.png" alt="Site Logo" />
            </a>
            
          </div>
        </div>
      )}
    </header>
  );
}
