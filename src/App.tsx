import { Calendar } from "./components/Calendar";
import BackgroundImage from "./assets/background-image.png";

function App() {
  return (
    <div
      className="bg-[#F4F3FF] w-[100vw] h-[100vh] flex justify-center items-center font-montserrat bg-cover"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <Calendar />
    </div>
  );
}

export default App;
