import React from "react";
import Layout from "./components/Layout";
import Root from "./components/Root/Root";
import { Route, Routes } from "react-router-dom";
import Artists from "./components/Artists/Artists";
import Album from './components/Artists/Album/Album'
import Footer from "./components/Header_Footer/Footer";

const App = () => {
  const route = [
    {
      id: 1,
      path: "/",
      com: <Root />,
    },
    {
      id: 2,
      path: "/label",
      com: <Artists />,
    },{
      id: 3,
      path: "/album",
      com: <Album />,
    },
  ];
  return (
    <Layout>
      <div className="flex flex-col overflow-y-scroll scrollbar-none gap-10">
        <Routes>
          {route.map((el) => {
            return <Route key={el.id} path={`${el.path}`} element={el.com} />;
          })}
        </Routes>
        <Footer/>
      </div>
    </Layout>
  );
};

export default App;
