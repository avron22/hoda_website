import "../styles.css"
export default function Footer() {
    return (
        <footer className="px-[160px] py-[140px] flex w-full justify-between bg-[var(--text)]">
            <section className="flex flex-col justify-end gap-10">
                <div className="flex gap-5">
                    <img src="/src/assets/ICONS/EMAIL_ICON.svg" className="w-[35px]" alt="Email Icon" />
                    <p className="text-[14px] xl:text-[20px] 2xl:text-[24px] text-[var(--accent)]">hello@hodarizk.com</p>
                </div>
                <div className="flex gap-5">
                    <img src="/src/assets/ICONS/PHONE_ICON.svg" className="w-[35px]" alt="Phone Icon" />
                    <p className="text-[14px] xl:text-[20px] 2xl:text-[24px] text-[var(--accent)]">(+63) 912-345-6789</p>
                </div>
            </section>
            <section className="flex flex-col gap-[50px]">
                <h1 className="text-[40px] text-[var(--accent)] font-medium text-center">Collab With me</h1>
                <a href="/"><button className="text-[40px] font-medium bg-[var(--accent)] px-[60px] py-[30px] rounded-4xl">CONTACT US</button></a>
            </section>
            <section className="flex flex-col justify-center gap-[30px]">
                <p className="text-[30px] text-[var(--accent)] font-medium">Follow me.</p>
                <div className="flex gap-[75px]">
                    <a href="/"><img src="/src/assets/ICONS/TIKTOK_ICON.svg" alt="TIKTOK" /></a>
                    <a href="/"><img src="/src/assets/ICONS/FB_ICON.svg" alt="FACEBOOK" /></a>
                    <a href="/"><img src="/src/assets/ICONS/IG_ICON.svg" alt="INSTAGRAM" /></a>
                </div>
            </section>
            
        </footer>
    )
}