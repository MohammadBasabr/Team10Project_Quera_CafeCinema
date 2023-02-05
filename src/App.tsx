import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import { AboutPage } from "./pages/about";
import { ContactPage } from "./pages/contact";
import { Home } from "./pages/home";
import { MovieDetailPage } from "./pages/movieDetailPage";
import { MoviesPage } from "./pages/movies";
import { ShoppingPage } from "./pages/shopping";
import { SignInPage } from "./pages/signinpage";
import { SignUpPage } from "./pages/signuppage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/movies" element={<Layout />}>
          <Route index element={<MoviesPage />} />
        </Route>
        <Route path="/about" element={<Layout />}>
          <Route index element={<AboutPage />} />
        </Route>
        <Route path="/contact" element={<Layout />}>
          <Route index element={<ContactPage />} />
        </Route>
        <Route path="/shoppingbag" element={<Layout />}>
          <Route index element={<ShoppingPage />} />
        </Route>
        <Route path="/movie/:id" element={<Layout />}>
          <Route index element={<MovieDetailPage />} />
        </Route>
        <Route path="/signup" element={<Layout />}>
          <Route index element={<SignUpPage />} />
        </Route>
        <Route path="/signin" element={<Layout />}>
          <Route index element={<SignInPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
