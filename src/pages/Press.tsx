import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Press() {
  return (
    <>
      <div>
        <div className="sm:px-[40px] lg:pt-[60px] lg:px-[100px] xl:px-[140px]">
          <Navbar />
        </div>
        <section className="sm:px-[40px] lg:px-[100px] xl:px-[278px]">
          <h1 className="sm:text-[20px] sm:py-[20px] md:text-[32px] md:py-[60px] xl:text-[50px] font-bold text-center lg:py-[100px]">PRESS AND MEDIA</h1>
          <div className="grid xl:grid-cols-2 sm:gap-y-[20px] sm:pb-[20px] md:gap-y-[60px] md:pb-[60px] lg:gap-y-[100px] lg:pb-[100px]">
            <div className="flex sm:max-md:flex-col items-center gap-4">
              <img src="/src/assets/PRESS/1.png" 
                   className="max-w-[230px]"
                   alt="Image 1" 
              />
              <p className="sm:text-[16px] lg:text-xl">Hoda of Manila Runway Republic <br/>March 17 Photoshoot</p>
            </div>
            <div className="flex sm:max-md:flex-col items-center gap-4">
              <img src="/src/assets/PRESS/2.png" 
                   className="max-w-[230px]"
                   alt="Image 2" 
              />
              <p className="sm:text-[16px] lg:text-xl">Embark on a captivating voyage alongside Hoda into the heart of Corps d'Elite Manila's 'Isla'. The enchantment of uncharted territories, where hidden wonders await your discovery. <br/><br/> 
                                     HODA | Corps d'Elite Manila | Isla <br/>
                                     © 2024 Corps d’Elite Manila</p>
            </div>
            <div className="flex sm:max-md:flex-col items-center gap-4">
              <img src="/src/assets/PRESS/3.png" 
                   className="max-w-[230px]"
                   alt="Image 3" 
              />
              <p className="sm:text-[16px] lg:text-xl">The stunning Hoda, dressed in red as she embodies the spirit of fire and passion for Corps d'Elite Manila's Asoka. <br/><br/> 
                                     HODA | Corps d'Elite Manila | Asoka <br/>
                                     © 2024 Corps d’Elite Manila</p>
            </div>

          </div>
        </section>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}