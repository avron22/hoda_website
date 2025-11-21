import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Portfolio(){
  return (
    <>
      <div
        className="h-[100vh] flex flex-col overflow-x-hidden justify-between 
                      lg:pt-[60px] 
                      sm:px-[40px] lg:px-[100px] xl:px-[140px]"
      >
        <section>
          <Navbar />
          <div className="sm:pt-1 lg:pt-20 xl:pt-40 flex sm:max-lg:flex-col sm:gap-5 lg:gap-4">
            <div className="lg:w-[50%] flex lg:flex-col gap-[30px]">
              <a href="/models/runway-model">
                <h1 className="sm:text-[16px] sm:max-lg:pb-[10px] lg:text-[32px] xl:text-[50px] font-bold">
                  RUNWAY MODEL
                </h1>
                <img
                  src="https://drive.developershideout.com:4431/hoda_img/PORTFOLIO/RUNWAY_COVER.png"
                  alt="RUNWAY MODEL"
                />
              </a>
            </div>

            <div className="lg:w-[50%] flex lg:flex-col gap-[30px]">
              <a href="/models/fashion-model">
                <h1 className="sm:text-[16px] sm:max-lg:pb-[10px] lg:text-[32px] xl:text-[50px] font-bold">
                  FASHION MODEL
                </h1>
                <img
                  src="https://drive.developershideout.com:4431/hoda_img/PORTFOLIO/FASHION_COVER.png"
                  alt="RUNWAY MODEL"
                />
              </a>
            </div>
          </div>
        </section>
        <section className="sm:pt-5 lg:pt-20 sm:-mx-10 lg:-mx-25 xl:-mx-35">
          <div className="sm:h-[130px] sm:mb-[160px] lg:h-[250px] xl:h-[360px] bg-[var(--text)] lg:mb-[250px]">
            <h1 className="text-[var(--accent)] sm:text-[16px] lg:text-[32px] xl:text-[50px] py-[30px] font-bold text-center">
              LATEST VIDEO
            </h1>
            <div className="sm:pb-[30px] xl:pb-[150px] lg:mx-[100px] xl:mx-[200px] overflow-hidden!">
              <div className="animate-scroll flex w-full sm:gap-2 lg:gap-5">
                <img
                  src="https://drive.developershideout.com:4431/hoda_img/PORTFOLIO/VID_1.png"
                  className="sm:max-md:rounded-xl sm:h-[170px] sm:max-md:w-[105px] lg:h-[250px] xl:h-[400px] object-cover"
                  alt="VIDEO 1"
                />
                <img
                  src="https://drive.developershideout.com:4431/hoda_img/PORTFOLIO/VID_2.png"
                  className="sm:max-md:rounded-xl sm:h-[170px] sm:max-md:w-[105px] lg:h-[250px] xl:h-[400px] object-cover"
                  alt="VIDEO 2"
                />
                <img
                  src="https://drive.developershideout.com:4431/hoda_img/PORTFOLIO/VID_3.png"
                  className="sm:max-md:rounded-xl sm:h-[170px] sm:max-md:w-[105px] lg:h-[250px] xl:h-[400px] object-cover"
                  alt="VIDEO 3"
                />
                <img
                  src="https://drive.developershideout.com:4431/hoda_img/PORTFOLIO/VID_4.png"
                  className="sm:max-md:rounded-xl sm:h-[170px] sm:max-md:w-[105px] lg:h-[250px] xl:h-[400px] object-cover"
                  alt="VIDEO 4"
                />
                <img
                  src="https://drive.developershideout.com:4431/hoda_img/PORTFOLIO/VID_5.png"
                  className="sm:max-md:rounded-xl sm:h-[170px] sm:max-md:w-[105px] lg:h-[250px] xl:h-[400px] object-cover"
                  alt="VIDEO 5"
                />
                <img
                  src="https://drive.developershideout.com:4431/hoda_img/PORTFOLIO/VID_6.png"
                  className="sm:max-md:rounded-xl sm:h-[170px] sm:max-md:w-[105px] lg:h-[250px] xl:h-[400px] object-cover"
                  alt="VIDEO 6"
                />
                <img
                  src="https://drive.developershideout.com:4431/hoda_img/PORTFOLIO/VID_7.png"
                  className="sm:max-md:rounded-xl sm:h-[170px] sm:max-md:w-[105px] lg:h-[250px] xl:h-[400px] object-cover"
                  alt="VIDEO 7"
                />
                <img
                  src="https://drive.developershideout.com:4431/hoda_img/PORTFOLIO/VID_8.png"
                  className="sm:max-md:rounded-xl sm:h-[170px] sm:max-md:w-[105px] lg:h-[250px] xl:h-[400px] object-cover"
                  alt="VIDEO 8"
                />
                <img
                  src="https://drive.developershideout.com:4431/hoda_img/PORTFOLIO/VID_9.png"
                  className="sm:max-md:rounded-xl sm:h-[170px] sm:max-md:w-[105px] lg:h-[250px] xl:h-[400px] object-cover"
                  alt="VIDEO 9"
                />
                {/*DUPLICATES FOR LOOP */}
                <img
                  src="https://drive.developershideout.com:4431/hoda_img/PORTFOLIO/VID_1.png"
                  className="sm:max-md:rounded-xl sm:h-[170px] sm:max-md:w-[105px] lg:h-[250px] xl:h-[400px] object-cover"
                  alt="VIDEO 1"
                />
                <img
                  src="https://drive.developershideout.com:4431/hoda_img/PORTFOLIO/VID_2.png"
                  className="sm:max-md:rounded-xl sm:h-[170px] sm:max-md:w-[105px] lg:h-[250px] xl:h-[400px] object-cover"
                  alt="VIDEO 2"
                />
                <img
                  src="https://drive.developershideout.com:4431/hoda_img/PORTFOLIO/VID_3.png"
                  className="sm:max-md:rounded-xl sm:h-[170px] sm:max-md:w-[105px] lg:h-[250px] xl:h-[400px] object-cover"
                  alt="VIDEO 3"
                />
                <img
                  src="https://drive.developershideout.com:4431/hoda_img/PORTFOLIO/VID_4.png"
                  className="sm:max-md:rounded-xl sm:h-[170px] sm:max-md:w-[105px] lg:h-[250px] xl:h-[400px] object-cover"
                  alt="VIDEO 4"
                />
                <img
                  src="https://drive.developershideout.com:4431/hoda_img/PORTFOLIO/VID_5.png"
                  className="sm:max-md:rounded-xl sm:h-[170px] sm:max-md:w-[105px] lg:h-[250px] xl:h-[400px] object-cover"
                  alt="VIDEO 5"
                />
                <img
                  src="https://drive.developershideout.com:4431/hoda_img/PORTFOLIO/VID_6.png"
                  className="sm:max-md:rounded-xl sm:h-[170px] sm:max-md:w-[105px] lg:h-[250px] xl:h-[400px] object-cover"
                  alt="VIDEO 6"
                />
                <img
                  src="https://drive.developershideout.com:4431/hoda_img/PORTFOLIO/VID_7.png"
                  className="sm:max-md:rounded-xl sm:h-[170px] sm:max-md:w-[105px] lg:h-[250px] xl:h-[400px] object-cover"
                  alt="VIDEO 7"
                />
                <img
                  src="https://drive.developershideout.com:4431/hoda_img/PORTFOLIO/VID_8.png"
                  className="sm:max-md:rounded-xl sm:h-[170px] sm:max-md:w-[105px] lg:h-[250px] xl:h-[400px] object-cover"
                  alt="VIDEO 8"
                />
                <img
                  src="https://drive.developershideout.com:4431/hoda_img/PORTFOLIO/VID_9.png"
                  className="sm:max-md:rounded-xl sm:h-[170px] sm:max-md:w-[105px] lg:h-[250px] xl:h-[400px] object-cover"
                  alt="VIDEO 9"
                />
              </div>
            </div>
          </div>
          <Footer />
        </section>
      </div>
    </>
  );
}