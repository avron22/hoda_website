import Navbar from "../components/Navbar"

export default function Contact(){
  return (
    <>
    <div>
      <div className="pt-[60px] px-[140px]">
        <Navbar />
      </div>
      <section className="flex flex-col justify-between">
          <h1 className="text-[50px] font-bold text-center pt-[100px] pb-[30px]">CONTACT</h1>
          <div className="flex min-h-[60vh]">
            {/*LEFT COLUMN */}
            <div className="w-[50%] pl-[278px] pt-[30px] pr-[90px]">
              <h1 className="text-[30px]">Make an appointment with me.</h1>
              <div className="flex flex-col gap-[65px] pt-10">
                <div className="flex gap-6 items-center">
                  <img src="/src/assets/ICONS/EMAIL_FILL_ICON.svg" alt="" />
                  <p className="text-[20px]">hello@hodarizk.com</p>
                </div>
                <div className="flex gap-6 items-center">
                  <img src="/src/assets/ICONS/PHONE_FILL_ICON.svg" alt="" />
                  <p className="text-[20px]">(+63) 912-345-6789</p>
                </div>
              </div>
              <div className="flex flex-col justify-center pt-[100px] gap-[50px]">
              <p className="text-[30px] font-medium">Follow me.</p>
                <div className="flex gap-[75px]">
                    <a href="/"><img src="/src/assets/ICONS/TIKTOK_FILL_ICON.svg" alt="TIKTOK" /></a>
                    <a href="/"><img src="/src/assets/ICONS/FB_FILL_ICON.svg" alt="FACEBOOK" /></a>
                    <a href="/"><img src="/src/assets/ICONS/IG_FILL_ICON.svg" alt="INSTAGRAM" /></a>
                </div>
              </div>
            </div>
            {/*RIGHT COLUMN */}
            <div className="w-[50%] pr-[278px] pt-[30px] pl-[90px] pb-[115px] text-[var(--accent)] bg-[var(--text)]">
              <h1 className="text-[30px] pb-[30px]">Send us a message.</h1>
              <form action="submit" className="text-[20px] flex flex-col gap-[15px]">
                <p className="pb-[10px]">name</p>
                <input type="text" name="name" id="name" required
                       autoComplete="name"
                       className="w-[50%] text-[20px] px-4 py-2 border border-[var(--accent)] rounded-full bg-transparent focus:outline-none focus:border-amber-300"
                />
                <p className="pb-[10px]">email</p>
                <input type="text" name="email" id="email" required
                       autoComplete="email"
                       className="w-[70%] text-[20px] px-4 py-2 border border-[var(--accent)] rounded-full bg-transparent focus:outline-none focus:border-amber-300"
                />
                <p className="pb-[10px]">message</p>
                <textarea rows={5} name="message" id="message" required
                          autoComplete="message"
                          className="w-full text-[20px] px-4 py-2 border border-[var(--accent)] rounded-3xl bg-transparent focus:outline-none focus:border-amber-300"
                />

                <button type="submit"
                        className="w-[30%] mt-[30px] px-6 py-3 bg-[var(--bg)] text-[var(--text)] font-medium italic rounded-full hover:bg-amber-200 transition">
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