import Navbar from "../components/Navbar"

export default function About(){
  return (
    <>
    <div>
      <div className="pt-[60px] px-[140px]">
        <Navbar />
      </div>
      <section className="flex flex-row pl-[260px] pr-[140px] pt-[100px] justify-between">
        <div className="w-[40%] max-w-[536px] sticky top-[100px] self-start">
          <h1 className="text-[50px] font-bold">THIS IS</h1>
          <h1 className="text-[50px]">HODA RISK</h1>
          <p className="text-xl pt-[60px]">I fell in love with Fashion and Runway modeling when...</p>
          <p className="text-xl pt-[35px] pb-[100px]">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, 
            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et 
            dolore magna aliquyam erat
          </p>
          <div className="flex flex-col items-center">
            <a><button className="font-medium italic border-[1px] border-[#707070] py-[16px] px-[50px] rounded-full">Follow Me</button></a>
            <div className="flex gap-[75px] pt-10">
                <a href="/"><img src="/src/assets/ICONS/TIKTOK_FILL_ICON.svg" alt="TIKTOK" /></a>
                <a href="/"><img src="/src/assets/ICONS/FB_FILL_ICON.svg" alt="FACEBOOK" /></a>
                <a href="/"><img src="/src/assets/ICONS/IG_FILL_ICON.svg" alt="INSTAGRAM" /></a>
            </div>
          </div>
          
        </div>
        <div className="w-[50%]">
          <img src="/src/assets/ABOUT/Image_1.png" alt="" />
        </div>
      </section>
    </div>

    </>
  );
}