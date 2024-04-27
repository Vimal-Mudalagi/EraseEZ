import Header from "./Components/Header"
import Footer from "./Components/Footer"
import RemoveBackground from "./Components/Removebg"
import "./App.css";

const App = () => {
  return (
    <div>
      <div className="">
        <Header />
      </div>
      <div className="text-centre h-screen">
        <RemoveBackground />
      </div>
      <Footer />
    </div>
  )
}

export default App

