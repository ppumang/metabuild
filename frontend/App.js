import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelfIntro from "./components/SelfIntro/SelfIntro";
import Greeting from "./components/Greeting/Greeting";
import SelfIntro from "./components/SelfIntro/SelfIntro";

export default function App({ isSignedIn, helloNEAR, wallet }) {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Greeting
              isSignedIn={isSignedIn}
              helloNEAR={helloNEAR}
              wallet={wallet}
            />
          }
        ></Route>
        <Route
          path="/SelfIntro"
          element={
            <SelfIntro
              isSignedIn={isSignedIn}
              helloNEAR={helloNEAR}
              wallet={wallet}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}
