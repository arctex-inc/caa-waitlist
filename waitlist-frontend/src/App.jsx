import './App.css'
import './index.css'
import Logo from '/src/assets/logowhite.png';

function App() {

  return (
    <>
      <nav className="border-gray-200 bg-sky-500 w-full top-0 absolute z-50">
        <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-3">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Logo} className="h-10" alt="CollegeAppAssist Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">CollegeAppAssist</span>
          </a>

        </div>
      </nav>

      <div className="w-full h-screen flex justify-center items-center pt-20 pb-24 md:pb-4">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc0UNOwbnQwDB3QdQSPKA2ZDipzrNxfFVRulv-mg6-pC_1WHg/viewform?embedded=true" width="100%" height="100%" frameborder="0" marginwidth="0">Loading…</iframe>
      </div>
      {/* <div className="w-full h-screen"></div> */}
    </>
  )
}

export default App
