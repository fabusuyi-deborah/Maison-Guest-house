import SunImage from "../assets/images/icon-sun.svg"

const WelcomeCard = () => {
  return (
    <div className="flex min-h-100 flex-col rounded-3xl bg-linear-to-tr from-terracotta-700 to-terracotta-400 p-6 shadow-xl md:h-104 md:p-8">
      <hr className="border-t border-dashed border-neutral-50/30" />

      <div className="mt-4 flex items-center justify-between">
        <h3 className="font-dm-mono text-xs uppercase tracking-widest text-neutral-50">
          Welcome Card
        </h3>

        <img src={SunImage} alt="" className="w-8" />
      </div>

      <div className="mt-6">
        <p className="font-fraunces text-lg italic text-sun-200">
          A note from your host,
        </p>

        <h3 className="mt-1 font-fraunces text-4xl italic text-neutral-50">
          Margaux.
        </h3>

        <p className="mt-3 font-dm-sans text-sm text-sun-50">
          We're so glad you're coming. The shutters will be open, the lemonade
          cold, and the cat - Poivre - pretending not to notice you.
        </p>
      </div>

      <div className="mt-auto">
        <h3 className="font-dm-mono text-sm uppercase tracking-widest text-neutral-50/70">
          Room
        </h3>

        <p className="mt-1 font-fraunces text-lg text-neutral-50">
          La Garrigue
        </p>
      </div>
    </div>
  )
}

export default WelcomeCard