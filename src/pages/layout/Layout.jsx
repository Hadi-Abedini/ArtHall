import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 100,
    },
  },
});

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
              <QueryClientProvider client={queryClient}>
                <ReactQueryDevtools />
                <Outlet />
              </QueryClientProvider>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Layout;
