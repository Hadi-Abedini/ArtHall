import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";

function Layout() {
  const location = useLocation();
  return (
    <div className="w-full h-[100vh] bg-primary">
      <Header />
      <main className="w-full h-[80%]">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-3/5 flex flex-col gap-14">
            <h1 className="text-3xl text-white">
              {location.pathname === "/task" ? "افزودن" : "لیست"}
            </h1>
            <div className="w-full justify-center items-center flex">
              <Outlet />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Layout;
