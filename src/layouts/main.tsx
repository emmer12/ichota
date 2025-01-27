import Footer from "@/components/Footer";
import Navigation from "@/components/header/Nav";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div>
      <Navigation />
      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
