import Navbar from "../components/Navbar";

export default function Portfolio(){
  return (
    <>
      <div className="h-[100vh] flex flex-col overflow-x-hidden justify-between sm:px-[30px] sm:py-0 xl:px-[140px] xl:pt-[60px] xl:pb-[90px]"> 
        <section>
          <Navbar />
          <div className="pt-40 flex gap-4">
            <div className="w-[50%] flex flex-col gap-[30px]">
              <h1 className="text-[50px] font-bold">RUNWAY MODEL</h1>
              <img src="/src/assets/PORTFOLIO/RUNWAY_COVER.png" alt="RUNWAY MODEL" />
            </div>
            <div className="w-[50%] flex flex-col gap-[30px]">
              <h1 className="text-[50px] font-bold">FASHION MODEL</h1>
              <img src="/src/assets/PORTFOLIO/FASHION_COVER.png" alt="RUNWAY MODEL" />
            </div>
          </div>
        </section>
        <section className="pt-20 -mx-35">
          <div className="h-[360px] bg-[var(--text)]">
            <h1 className="text-[var(--accent)] text-[50px] py-[30px] font-bold text-center">LATEST VIDEO</h1>
            <div className="pb-[150px] mx-[200px] overflow-hidden!">
              <div className="animate-scroll flex w-full gap-5">
                <img src="/src/assets/PORTFOLIO/VID_1.png" className="h-[400px]" alt="VIDEO 1" />
                <img src="/src/assets/PORTFOLIO/VID_2.png" className="h-[400px]" alt="VIDEO 2" />
                <img src="/src/assets/PORTFOLIO/VID_3.png" className="h-[400px]" alt="VIDEO 3" />
                <img src="/src/assets/PORTFOLIO/VID_4.png" className="h-[400px]" alt="VIDEO 4" />
                <img src="/src/assets/PORTFOLIO/VID_5.png" className="h-[400px]" alt="VIDEO 5" />
                <img src="/src/assets/PORTFOLIO/VID_6.png" className="h-[400px]" alt="VIDEO 6" />
                <img src="/src/assets/PORTFOLIO/VID_7.png" className="h-[400px]" alt="VIDEO 7" />
                <img src="/src/assets/PORTFOLIO/VID_8.png" className="h-[400px]" alt="VIDEO 8" />
                <img src="/src/assets/PORTFOLIO/VID_9.png" className="h-[400px]" alt="VIDEO 9" />
                {/*DUPLICATES FOR LOOP */}
                <img src="/src/assets/PORTFOLIO/VID_1.png" className="h-[400px]" alt="VIDEO 1" />
                <img src="/src/assets/PORTFOLIO/VID_2.png" className="h-[400px]" alt="VIDEO 2" />
                <img src="/src/assets/PORTFOLIO/VID_3.png" className="h-[400px]" alt="VIDEO 3" />
                <img src="/src/assets/PORTFOLIO/VID_4.png" className="h-[400px]" alt="VIDEO 4" />
                <img src="/src/assets/PORTFOLIO/VID_5.png" className="h-[400px]" alt="VIDEO 5" />
                <img src="/src/assets/PORTFOLIO/VID_6.png" className="h-[400px]" alt="VIDEO 6" />
                <img src="/src/assets/PORTFOLIO/VID_7.png" className="h-[400px]" alt="VIDEO 7" />
                <img src="/src/assets/PORTFOLIO/VID_8.png" className="h-[400px]" alt="VIDEO 8" />
                <img src="/src/assets/PORTFOLIO/VID_9.png" className="h-[400px]" alt="VIDEO 9" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}