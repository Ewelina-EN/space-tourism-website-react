import Home from './src/Home/Home';
import Destination from './src/Destination/Destination'
import Crew from './src/Crew/Crew'
import Technology from "./src/Technology/Technology"

function App() {
  console.log(window.location)
  let component
  switch (window.location.pathname) {
    case "/space-tourism-website-react":
      component = <Home />
      break
    case "/home":
      component = <Home />
      break
    case "/destination":
      component = <Destination />
      break
    case "/crew":
      component = <Crew />
      break
    case "/technology":
      component = <Technology />
      break
  }
  return (
    <>
      <div>{component}</div>
    </>
  );
}

export default App;
