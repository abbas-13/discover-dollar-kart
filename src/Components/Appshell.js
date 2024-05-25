import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const AppShell = ({ children }) => (
  <div className="flex flex-col h-full">
    <Navbar />
    {children}
    <Footer className=" inline-block align-baseline" />
  </div>
);
