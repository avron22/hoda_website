import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Press() {
  return (
    <>
      <div>
        <div className="pt-[60px] px-[140px]">
          <Navbar />
        </div>
        <section className="px-[278px]">
          <h1 className="text-[50px] font-bold text-center py-[100px]">PRESS AND MEDIA</h1>
          <div className="grid grid-cols-2 gap-y-[100px] pb-[100px]">
            <div className="flex items-center gap-4">
              <img src="/src/assets/PRESS/1.png" 
                   className="max-w-[230px]"
                   alt="Image 1" 
              />
              <p className="text-xl">Hoda of Manila Runway Republic <br/>March 17 Photoshoot</p>
            </div>
            <div className="flex items-center gap-4">
              <img src="/src/assets/PRESS/2.png" 
                   className="max-w-[230px]"
                   alt="Image 2" 
              />
              <p className="text-xl">Embark on a captivating voyage alongside Hoda into the heart of Corps d'Elite Manila's 'Isla'. The enchantment of uncharted territories, where hidden wonders await your discovery. <br/><br/> 
                                     HODA | Corps d'Elite Manila | Isla <br/>
                                     © 2024 Corps d’Elite Manila</p>
            </div>
            <div className="flex items-center gap-4">
              <img src="/src/assets/PRESS/3.png" 
                   className="max-w-[230px]"
                   alt="Image 3" 
              />
              <p className="text-xl">The stunning Hoda, dressed in red as she embodies the spirit of fire and passion for Corps d'Elite Manila's Asoka. <br/><br/> 
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