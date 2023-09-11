import { Footer, NavBar } from "@/components";
import "./globals.css";
export const metadata = {
  title: "Car Hub",
  description: "Discover the best cars in the world",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
