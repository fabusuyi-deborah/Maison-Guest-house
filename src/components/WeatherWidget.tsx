import WeatherImage from "../assets/images/icon-weather.svg"
  
const WeatherWidget = () => {
  return (
    <div className="bg-linear-to-tr from-sun-300 to-sun-200 p-3 shadow-sm rounded-2xl relative overflow-hidden md:w-70">
      <div className="flex justify-between">
        <h2 className="font-dm-mono uppercase tracking-widest text-neutral-900 text-xs">Today in Cassis</h2>
        <img src={WeatherImage} alt="Sun Image" className="absolute -top-6 -right-6 w-24 pointer-events-none" />
      </div>
      <p className="font-fraunces text-neutral-950 text-6xl mt-2"> 27°</p>
      <p className="font-dm-mono tracking-widest text-neutral-900 text-sm mt-2"> Sunny · light breeze</p>
    </div>
  )
}

export default WeatherWidget;
