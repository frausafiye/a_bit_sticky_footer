import "./App.css";
import { Footer } from "./Footer";
import { LargerContent } from "./LargerContent";
import { Navbar } from "./Navbar";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h3>This is the page with smaller content</h3>
                <p>And it may take only a small place like this one.</p>
                <Link to="large">
                  <button className="btn">Check it with larger content</button>
                </Link>
              </>
            }
          />
          <Route
            path="large"
            element={
              <>
                <LargerContent />
                <Link to="/">
                  <button className="btn">
                    Check again with smaller content
                  </button>
                </Link>
              </>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
