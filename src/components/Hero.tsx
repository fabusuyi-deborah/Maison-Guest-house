import ReceiptCard from "./ReceiptCard";
import WelcomeCard from "./WelcomeCard";
import SunIcon from "../assets/images/illustration-sun.svg";

const Hero = () => {
  return (
    <section className="overflow-visible px-2 py-10 md:py-16">
      <div className="mx-auto w-full max-w-4xl">
        <div className="group relative flex flex-col gap-6 lg:h-136">

          {/* Receipt Card */}
          <div
            className="
              relative z-10 w-full
              transition-all duration-300
              lg:absolute lg:left-0 lg:top-10 lg:w-md
              lg:-rotate-3
              lg:group-hover:-left-16
              lg:group-hover:rotate-0
            "
          >
            <ReceiptCard />
          </div>

          {/* Sun Illustration (Desktop Only) */}
          <div
            className="
              pointer-events-none
              absolute left-1/2 top-1/2 z-0
              hidden w-26
              -translate-x-1/2 -translate-y-1/2
              opacity-0
              transition-opacity duration-300
              lg:block
              lg:group-hover:opacity-100
            "
          >
            <img src={SunIcon} alt="" className="w-full" />
          </div>

          {/* Welcome Card */}
          <div
            className="
              relative z-20 w-full
              transition-all duration-300

              lg:absolute lg:right-0 lg:top-10 lg:w-md
              lg:rotate-3
              lg:group-hover:-right-16
              lg:group-hover:rotate-0
            "
          >
            <WelcomeCard />
          </div>

        </div>

        {/* Desktop Hint */}
        <p className="hidden lg:block text-center font-dm-mono text-[10px] uppercase tracking-[0.3em] text-terracotta-600">
          ✦ Hover to fan ✦
        </p>
      </div>
    </section>
  );
};

export default Hero;