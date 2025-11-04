import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


export default function RunwayModel(){
  return (
    <>
    <div className="h-[100vh] flex flex-col overflow-x-hidden justify-between">
      <div className="sm:px-[40px] lg:px-[100px]
                      lg:pt-[60px] xl:px-[140px]">
        <Navbar />
      </div>
      <div className="sm:px-[40px] sm:gap-[10px] lg:px-[100px] xl:px-[140px] flex flex-col lg:gap-5">
        <h1 className="sm:text-[16px] sm:pt-[20px] md:text-[32px] xl:text-[50px] font-bold text-center lg:pt-[100px]">RUNWAY MODEL</h1>
        {/*1st grid */}
        <div className="sm:flex sm:flex-col sm:gap-[10px] md:grid md:grid-cols-3 lg:gap-5">
          <div>
            <img src="../src/assets/RUNWAY/1.png" 
                 className="h-full"
                 alt="Image 1" />
          </div>
          <div className="grid grid-rows-2 sm:gap-[10px] overflow-hidden lg:gap-5">
            <img src="../src/assets/RUNWAY/2.png" 
                 className="h-full"
                 alt="Image 2" />
            <img src="../src/assets/RUNWAY/3.png" 
                 className="h-full"
                 alt="Image 3" />
          </div>
          <div className="grid grid-rows-2 sm:gap-[10px] lg:gap-5">
            <img src="../src/assets/RUNWAY/4.png" 
                 className="h-full"
                 alt="Image 4" />
            <img src="../src/assets/RUNWAY/5.png" 
                 className="h-full"
                 alt="Image 5" />
          </div>
        </div>
        {/*2nd grid */}
        <div className="grid sm:gap-[10px] md:grid-cols-3 lg:gap-5 sm:pb-[20px] lg:pb-[65px]">
          {/*MOBILE LONG IMAGE */}
          <div className="md:hidden">
            <img src="../src/assets/RUNWAY/10.png" 
                 alt="Image 10" />
          </div>
          <div className="grid grid-rows-2 sm:gap-[10px] lg:gap-5">
            <img src="../src/assets/RUNWAY/6.png" 
                 alt="Image 6" />
            <img src="../src/assets/RUNWAY/7.png" 
                 alt="Image 7" />
          </div>
          <div className="grid grid-rows-2 sm:gap-[10px] lg:gap-5">
            <img src="../src/assets/RUNWAY/8.png" 
                 alt="Image 8" />
            <img src="../src/assets/RUNWAY/9.png" 
                 alt="Image 9" />
          </div>
          {/*DESKTOP LONG IMAGE */}
          <div className="sm:max-md:hidden">
            <img src="../src/assets/RUNWAY/10.png" 
                 alt="Image 10" />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
    </>
  );
}