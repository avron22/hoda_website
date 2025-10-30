import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar"
export default function Home(){

  return (
    <>
      <div className="hero-bg h-[100vh] flex flex-col justify-between max-h-[100vh] overflow-hidden sm:px-[30px] sm:py-0 xl:px-[140px] xl:pt-[60px] xl:pb-[90px]"> 
        <section>
          <Navbar />
          <div>
            <h3 className="max-w-[420px] text-end text-2xl font-light">RUNWAY & FASHION MODEL</h3>
            <div className="absolute top-3/7 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-between w-full text-6xl font-medium tra slate-y-1/3 pl-[360px] pr-[440px]">
              <NavLink to="/models/runway-model" className="">RUNWAY</NavLink>
              <NavLink to="/models/fashion-model" className="">MODEL</NavLink>
            </div>
          </div>
        </section>
        <section>
          <div className="flex items-center justify-end gap-20 pr-10">
            <a href="/"><img src="/src/assets/ICONS/TIKTOK_ICON.svg" alt="TIKTOK" /></a>
            <a href="/"><img src="/src/assets/ICONS/FB_ICON.svg" alt="FACEBOOK" /></a>
            <a href="/"><img src="/src/assets/ICONS/IG_ICON.svg" alt="INSTAGRAM" /></a>
            <a href="/"><img src="/src/assets/ICONS/EMAIL_ICON.svg" alt="EMAIL" /></a>
          </div>
        </section>
      </div>
    </>
  );
}