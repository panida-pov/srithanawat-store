import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Root from "./components/Root/Root";
import HomePage from "./pages/HomePage/HomePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Navigate to="/home" />} />
      <Route path="/home" element={<HomePage />}></Route>
      <Route path="/contact" element={<ContactPage />}></Route>
      <Route path="/services" element={<ServicesPage />}></Route>
      <Route path="/products" element={<ProductsPage />}></Route>
      <Route path="/products/:id" element={<ProductDetailsPage />}></Route>
      <Route path="*" element={<Navigate to="/home" />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
