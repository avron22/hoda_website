import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


export default function RunwayModel(){
  return (
    <>
    <div className="h-[100vh] flex flex-col overflow-x-hidden justify-between">
      <div className="pt-[60px] px-[140px]">
        <Navbar />
      </div>
      <div className="px-[140px] flex flex-col gap-5">
        <h1 className="text-[50px] font-bold text-center pt-[100px]">RUNWAY MODEL</h1>
        {/*1st grid */}
        <div className="grid grid-cols-3 gap-5">
          <div>
            <img src="../src/assets/RUNWAY/1.png" 
                 alt="Image 1" />
          </div>
          <div className="grid grid-rows-2 gap-5">
            <img src="../src/assets/RUNWAY/2.png" 
                 className="min-h-[545px]"
                 alt="Image 2" />
            <img src="../src/assets/RUNWAY/3.png" 
                 className="min-h-[545px]"
                 alt="Image 3" />
          </div>
          <div className="grid grid-rows-2 gap-5">
            <img src="../src/assets/RUNWAY/4.png" 
                 className="min-h-[545px]"
                 alt="Image 4" />
            <img src="../src/assets/RUNWAY/5.png" 
                 className="min-h-[545px]"
                 alt="Image 5" />
          </div>
        </div>
        {/*2nd grid */}
        <div className="grid grid-cols-3 gap-5 pb-[65px]">
          <div className="grid grid-rows-2 gap-5">
            <img src="../src/assets/RUNWAY/6.png" 
                 alt="Image 6" />
            <img src="../src/assets/RUNWAY/7.png" 
                 alt="Image 7" />
          </div>
          <div className="grid grid-rows-2 gap-5">
            <img src="../src/assets/RUNWAY/8.png" 
                 alt="Image 8" />
            <img src="../src/assets/RUNWAY/9.png" 
                 alt="Image 9" />
          </div>
          <div>
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