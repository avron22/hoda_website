import Navbar from "../components/Navbar"
export default function Home(){

  return (
    <>
    <section className="hero-bg h-[100vh] max-h-[100vh] overflow-hidden sm:px-[30px] sm:py-0 xl:px-[140px] xl:py-[60px]">
      <Navbar />
      <h3 className="max-w-[420px] text-end text-2xl font-light">RUNWAY & FASHION MODEL</h3>
      <div className="flex justify-between w-full text-6xl font-medium translate-y-1/3 pl-55 pr-75 h-[100%]">
        <h1>RUNWAY</h1>
        <h1>MODEL</h1>
      </div>
    </section>
    </>
  );
}