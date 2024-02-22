import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";

function Layout() {
  return (
    <div className="w-full h-[100vh] bg-primary">
        <Header/>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;