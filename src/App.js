import Home from './Home/Home';
import Destination from './Destination/Destination'
import Crew from './Crew/Crew'
import Technology from "./Technology/Technology"

function App() {
  console.log(window.location)
  let component
  switch (window.location.pathname) {
    case "/space-tourism-website-react/":
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
