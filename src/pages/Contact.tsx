import Navbar from "../components/Navbar"

export default function Contact(){
  return (
    <>
    <div>
      <div className="sm:px-[40px] lg:pt-[60px] lg:px-[100px] xl:px-[140px]">
        <Navbar />
      </div>
      <section className="flex flex-col justify-between  min-h-[100vh]">
          <h1 className="sm:text-[20px] md:text-[32px] xl:text-[50px] font-bold text-center sm:pt-[20px] md:pt-[60px] lg:pt-[100px] pb-[30px]">CONTACT</h1>
          <div className="flex sm:max-lg:flex-col lg:min-h-[80vh]">
            {/*LEFT COLUMN */}
            <div className="lg:w-[50%] sm:max-lg:px-[40px] lg:max-xl:pl-[100px] lg:max-xl:pr-[20px] 
                            xl:pl-[278px] lg:pt-[30px] xl:pr-[90px]"
              >
              <h1 className="sm:text-[16px] lg:text-[24px] xl:text-[30px]">Make an appointment with me.</h1>
              <div className="flex flex-col sm:gap-[30px] lg:gap-[65px] pt-10">
                <div className="flex gap-6 items-center sm:max-lg:justify-center">
                  <img src="/src/assets/ICONS/EMAIL_FILL_ICON.svg" 
                       className="sm:max-md:w-[24px]"
                      alt="" />
                  <p className="sm:text-[16px] lg:text-[20px]">hello@hodarizk.com</p>
                </div>
                <div className="flex gap-6 items-center sm:max-lg:justify-center">
                  <img src="/src/assets/ICONS/PHONE_FILL_ICON.svg" 
                       className="sm:max-md:w-[24px]"
                      alt="" />
                  <p className="sm:text-[16px] lg:text-[20px]">(+63) 912-345-6789</p>
                </div>
              </div>
              <div className="flex flex-col justify-center sm:pt-[40px] sm:max-lg:pb-[50px] lg:pt-[100px] gap-[50px]">
              <p className="sm:text-[16px] sm:max-lg:text-center lg:text-[30px] font-medium">Follow me.</p>
                <div className="sm:max-lg:justify-center flex gap-[75px]">
                    <a href="/"><img src="/src/assets/ICONS/TIKTOK_FILL_ICON.svg" alt="TIKTOK" /></a>
                    <a href="/"><img src="/src/assets/ICONS/FB_FILL_ICON.svg" alt="FACEBOOK" /></a>
                    <a href="/"><img src="/src/assets/ICONS/IG_FILL_ICON.svg" alt="INSTAGRAM" /></a>
                </div>
              </div>
            </div>
            {/*RIGHT COLUMN */}
            <div className="lg:w-[50%] sm:max-md:px-[20px] md:max-lg:px-[40px] 
                            lg:max-xl:pl-[20px] lg:max-xl:pr-[100px] xl:pr-[278px] 
                            pt-[30px] xl:pl-[90px] sm:pb-[30px] lg:pb-[115px] text-[var(--accent)] bg-[var(--text)]"
            >
              <h1 className="lg:text-[24px] xl:text-[30px] pb-[30px]">Send us a message.</h1>
              <form action="submit" className="sm:text-[16px] md:text-[20px] flex flex-col gap-[15px]">
                <p className="pb-[10px]">name</p>
                <input type="text" name="name" id="name" required
                       autoComplete="name"
                       className="sm:w-[100%] md:w-[50%] sm:text-[16px] md:text-[20px] px-4 py-2 border border-[var(--accent)] rounded-full bg-transparent focus:outline-none focus:border-amber-300"
                />
                <p className="pb-[10px]">email</p>
                <input type="text" name="email" id="email" required
                       autoComplete="email"
                       className="sm:w-[100%] md:w-[70%] sm:text-[16px] md:text-[20px] px-4 py-2 border border-[var(--accent)] rounded-full bg-transparent focus:outline-none focus:border-amber-300"
                />
                <p className="pb-[10px]">message</p>
                <textarea rows={5} name="message" id="message" required
                          autoComplete="message"
                          className="w-full sm:text-[16px] md:text-[20px] px-4 py-2 border border-[var(--accent)] rounded-3xl bg-transparent focus:outline-none focus:border-amber-300"
                />

                <button type="submit"
                        className="w-[30%] sm:max-lg:self-center mt-[30px] px-6 py-3 bg-[var(--bg)] text-[var(--text)] font-medium italic rounded-full hover:bg-amber-200 transition">
                        SEND
                </button>
              </form>
            </div>
          </div>
      </section>
    </div>
    </>
  );
}