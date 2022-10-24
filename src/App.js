import Footer from "./components/Footer";
import Links from "./components/Links";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="w-[90%] flex flex-col m-auto font-body">
      <Profile />
      <Links />
      <Footer />
    </div>
  );
}

export default App;
