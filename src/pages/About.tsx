import Navbar from "../components/Navbar"

export default function About(){
  return (
    <>
    <div>
      <div className="sm:px-[40px] lg:pt-[60px] lg:px-[100px] xl:px-[140px]">
        <Navbar />
      </div>
      <section className="flex sm:flex-col sm:px-[40px] lg:flex-row lg:pl-[140px] lg:pr-[140px] xl:pl-[260px] sm:pt-[20px] lg:pt-[100px] justify-between">
        <div className="lg:w-[40%] lg:max-w-[536px] lg:sticky top-[100px] self-start">
          <h1 className="sm:text-[30px] sm:max-lg:text-center xl:text-[50px] font-bold">THIS IS</h1>
          <h1 className="sm:text-[30px] sm:max-lg:text-center xl:text-[50px]">HODA RISK</h1>
          <p className="sm:text-[16px] lg:text-xl sm:pt-[20px] lg:pt-[40px] xl:pt-[60px]">I fell in love with Fashion and Runway modeling when...</p>
          <p className="sm:text-[16px] lg:text-xl sm:pt-[20px] lg:pt-[40px] xl:pt-[35px] sm:pb-[20px] lg:pb-[100px]">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, 
            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et 
            dolore magna aliquyam erat
          </p>
          {/*DESKTOP ICONS */}
          <div className="sm:max-lg:hidden lg:py-5 flex flex-col items-center">
            <a href="https://hodarizk.com/contact"><button className="font-medium italic border-[1px] border-[#707070] py-[16px] px-[50px] rounded-full cursor-pointer">Follow Me</button></a>
            <div className="flex gap-[75px] pt-10">
                <a href="/"><img src="https://drive.developershideout.com:4431/hoda_img/ICONS/TIKTOK_FILL_ICON.svg" alt="TIKTOK" /></a>
                <a href="/"><img src="https://drive.developershideout.com:4431/hoda_img/ICONS/FB_FILL_ICON.svg" alt="FACEBOOK" /></a>
                <a href="/"><img src="https://drive.developershideout.com:4431/hoda_img/ICONS/IG_FILL_ICON.svg" alt="INSTAGRAM" /></a>
            </div>
          </div>
          
        </div>
        <div className="lg:w-[50%]">
          <img src="https://drive.developershideout.com:4431/hoda_img/ABOUT/Image_1.png" alt="" />
        </div>
        {/*MOBILE ICONS */}
        <div className="sm:max-lg:py-[20px] lg:hidden flex flex-col items-center">
            <a href="https://hodarizk.com/contact"><button className="font-medium italic border-[1px] border-[#707070] py-[16px] px-[50px] rounded-full cursor-pointer">Follow Me</button></a>
            <div className="flex gap-[75px] pt-10">
                <a href="/"><img src="https://drive.developershideout.com:4431/hoda_img/ICONS/TIKTOK_FILL_ICON.svg" alt="TIKTOK" /></a>
                <a href="/"><img src="https://drive.developershideout.com:4431/hoda_img/ICONS/FB_FILL_ICON.svg" alt="FACEBOOK" /></a>
                <a href="/"><img src="https://drive.developershideout.com:4431/hoda_img/ICONS/IG_FILL_ICON.svg" alt="INSTAGRAM" /></a>
            </div>
        </div>
      </section>
    </div>

    </>
  );
}