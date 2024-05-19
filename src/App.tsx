import { Route, Routes } from "react-router-dom";
import Footer from "./footer";
import Nav from "./nav";
import Home from "./pages/home/Home";
import Info from "./pages/info/Info";
import StartOfPage from "./location";
import GameRegistration from "./pages/registration/GameRegistration";
import Games from "./pages/games/Games";
import TicTacToe from "./Tic-Tac-Toe/TicTacToe";
import Hangman from "./hangman/Hangman";
import GuessMyNumber from "./guessmynumber/GuessMyNumber";
import RockPaperScissors from "./rockpaperscissors/RockPaperScissors";

function App() {
  return (
    <>
      <StartOfPage />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/registration" element={<GameRegistration />} />
        <Route path="/games" element={<Games />} />
        <Route path="/Tic-Tac-Toe" element={<TicTacToe />} />
        <Route path="/HangMan" element={<Hangman />} />
        <Route path="/GuessMyNumber" element={<GuessMyNumber />} />
        <Route path="/RockPaperScissors" element={<RockPaperScissors />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
