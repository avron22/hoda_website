import "../styles.css"
export default function Footer() {
    return (
        <footer className="sm:px-[40px] sm:py-[20px] lg:px-[100px] lg:py-[100px] xl:px-[160px] xl:py-[140px] flex sm:max-lg:flex-col w-full justify-between bg-[var(--text)]">
            {/*MOBILE CONTACT BUTTON */}
            <section className="lg:hidden flex flex-col items-center sm:max-lg:pb-[30px] sm:gap-[15px] lg:gap-[50px]">
                <h1 className="sm:text-[32px] lg:text-[40px] text-[var(--accent)] font-medium text-center">Collab With me</h1>
                <a href="/"><button className="sm:text-[16px] sm:px-[24px] sm:py-[12px]
                                               lg:text-[40px] font-medium bg-[var(--accent)] lg:px-[60px] lg:py-[30px] rounded-4xl">CONTACT US</button></a>
            </section>
            <section className="flex flex-col justify-end sm:gap-[30px] 
                                sm:max-lg:pb-[50px] lg:gap-10">
                <h1 className="lg:hidden text-[20px] font-medium text-[var(--accent)]">Contact me.</h1>
                <div className="flex gap-5 sm:max-lg:px-[30px]">
                    <img src="/src/assets/ICONS/EMAIL_ICON.svg" className="sm:w-[24px] lg:w-[35px]" alt="Email Icon" />
                    <p className="text-[14px] xl:text-[20px] 2xl:text-[24px] text-[var(--accent)]">hello@hodarizk.com</p>
                </div>
                <div className="flex gap-5 sm:max-lg:px-[30px]">
                    <img src="/src/assets/ICONS/PHONE_ICON.svg" className="sm:w-[24px] lg:w-[35px]" alt="Phone Icon" />
                    <p className="text-[14px] xl:text-[20px] 2xl:text-[24px] text-[var(--accent)]">(+63) 912-345-6789</p>
                </div>
            </section>
            {/*DESKTOP CONTACT BUTTON */}
            <section className="sm:max-lg:hidden flex flex-col items-center sm:gap-[15px] lg:gap-[50px]">
                <h1 className="sm:text-[32px] xl:text-[40px] text-[var(--accent)] font-medium text-center">Collab With me</h1>
                <a href="http://localhost:5173/contact">
                    <button className="sm:text-[16px] sm:px-[24px] sm:py-[12px] lg:text-[24px] lg:px-[30px] lg:py-[20px]
                                       xl:text-[40px] font-medium bg-[var(--accent)] xl:px-[60px] xl:py-[30px] rounded-4xl
                                       cursor-pointer hover:font-bold transition">
                                CONTACT US
                    </button>
                </a>
            </section>
            <section className="flex flex-col justify-center gap-[30px]">
                <p className="sm:text-[20px] lg:text-[30px] text-[var(--accent)] font-medium">Follow me.</p>
                <div className="flex gap-[75px] sm:max-lg:justify-center">
                    <a href="/"><img src="/src/assets/ICONS/TIKTOK_ICON.svg" alt="TIKTOK" /></a>
                    <a href="/"><img src="/src/assets/ICONS/FB_ICON.svg" alt="FACEBOOK" /></a>
                    <a href="/"><img src="/src/assets/ICONS/IG_ICON.svg" alt="INSTAGRAM" /></a>
                </div>
            </section>
            
        </footer>
    )
}