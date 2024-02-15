import landingImage from '../assets/landing.png'
import appDownload from '../assets/appDownload.png'

function HomePage() {
  return (
    <div className="w-full flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-orange-500">
        Tuck into a takeway today</h1>
            <span className="text-xl">Food is just a click away</span>
      </div>
      <div className='grid md:grid-cols-2 gap-5'>
        <img src={landingImage} />
        <div className='flex items-center flex-col justify-center gap-4 text-center'>
         <span className='font-bold text-3xl tracking-tight'> Order takeaway even faster!</span>
         <p>Download the MernEats App for faster ordering and personalised
            recommendations</p>
        <img src={appDownload} />
        </div>
      </div>
    </div>
  )
}

export default HomePage