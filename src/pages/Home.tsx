import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar"
export default function Home(){

  return (
    <>
      <div className="flex flex-col min-h-screen overflow-hidden">
        {/*Mobile Navber */}
        <div className="lg:hidden sm:px-9 md:px-20">
          <Navbar />
        </div>
        <div className="hero-bg flex-1 lg:h-[100vh] flex flex-col justify-between lg:max-h-[100vh] overflow-hidden 
                        sm:px-[20px] sm:py-0 md:max-lg:justify-center md:px-[60px] 
                        lg:px-[100px] lg:pb-[60px]
                        xl:px-[140px] lg:pt-[60px] xl:pb-[90px]"> 
          <section>
        {/*Desktop Navbar*/}
            <div className="sm:max-lg:hidden">
              <Navbar />
            </div>
        {/*Contents */}
            <div>
              <h3 className="max-w-[420px] text-end text-2xl font-light sm:max-lg:hidden">RUNWAY & FASHION MODEL</h3>
              <div className="sm:max-lg:text-[30px] sm:max-md:pt-3
                              lg:absolute lg:top-3/7 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 
                              flex justify-between lg:w-full lg:text-6xl font-medium 
                              lg:pl-[160px] lg:pr-[200px]
                              xl:pl-[360px] xl:pr-[440px]">
                <NavLink to="/models/runway-model" 
                         className="relative inline-block text-black after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[6px] after:bg-current after:transition-all after:duration-300 hover:after:w-full hover:after:-translate-x-1/2 after:translate-x-[-50%]
                                    hover:font-semibold">
                          RUNWAY
                </NavLink>
                <NavLink to="/models/fashion-model"  
                         className="relative inline-block text-black after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[6px] after:bg-current after:transition-all after:duration-300 hover:after:w-full hover:after:-translate-x-1/2 after:translate-x-[-50%]
                                    hover:font-semibold">
                          MODEL
                </NavLink>
              </div>
            </div>
          </section>
          <section className="sm:max-lg:hidden">
            <div className="flex items-center justify-end gap-20 pr-10">
              <a href="/"><img src="https://drive.developershideout.com:4431/hoda_img/ICONS/TIKTOK_ICON.svg" alt="TIKTOK" /></a>
              <a href="/"><img src="https://drive.developershideout.com:4431/hoda_img/ICONS/FB_ICON.svg" alt="FACEBOOK" /></a>
              <a href="/"><img src="https://drive.developershideout.com:4431/hoda_img/ICONS/IG_ICON.svg" alt="INSTAGRAM" /></a>
              <a href="/"><img src="https://drive.developershideout.com:4431/hoda_img/ICONS/EMAIL_ICON.svg" alt="EMAIL" /></a>
            </div>
          </section>
        </div>
        {/*Mobile Footer */}
        <div className="py-[10px] lg:hidden">
            <div className="flex items-center justify-center gap-[50px] px-[50px]">
              <a href="/"><img src="https://drive.developershideout.com:4431/hoda_img/ICONS/TIKTOK_FILL_ICON.svg" className="w-[25px]" alt="TIKTOK" /></a>
              <a href="/"><img src="https://drive.developershideout.com:4431/hoda_img/ICONS/FB_FILL_ICON.svg" className="w-[25px]" alt="FACEBOOK" /></a>
              <a href="/"><img src="https://drive.developershideout.com:4431/hoda_img/ICONS/IG_FILL_ICON.svg" className="w-[25px]" alt="INSTAGRAM" /></a>
              <a href="/"><img src="https://drive.developershideout.com:4431/hoda_img/ICONS/EMAIL_FILL_ICON.svg" className="w-[25px]" alt="EMAIL" /></a>
            </div>
        </div>
      </div>
    </>
  );
}