import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import "./Appshell.css";

export const AppShell = ({ children }) => (
  <div className="container">
    <Navbar />
    {children}
    <Footer className="footer" />
  </div>
);
