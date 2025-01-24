import React from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import HomeArea from "./home";
import LiveArea from "./component/live";
import BestArea from "./component/best";
import AsepeArea from "./component/asepe";
import WikidArea from "./component/wikide";
import GiftArea from "./component/gift";
import BrandArea from "./component/brand";
import SaleArea from "./component/sale";
import NewproductArea from "./component/Newproduct";
import EventArea from "./component/event";
import { ProProvider } from "./context";

//yarn add react-router-dom@5
//yarn add react-bootstrap bootstrap
//yarn add styled-components
// yarn add react-slick

function App() {
  return (
    <>
      <ProProvider>
        <header className="header">
          <div className="h_top">
            <h1 className="logo">
              <Link to="/">
                <img src="/images/logo.png" alt="" />
              </Link>
            </h1>
            <ul className="infoMn">
              <li>검색</li>
              <li>장바구니</li>
              <li>로그인</li>
            </ul>
          </div>
          <nav className="nav">
            <ul>
              <li>
                <Link to="/component/live">LIVE</Link>
              </li>
              <li>
                <Link to="/">홈</Link>
              </li>
              <li>
                <Link to="/component/best">BEST</Link>
              </li>
              <li>
                <Link to="/component/asepe">아세떼</Link>
              </li>
              <li>
                <Link to="/component/wikide">위키드쿳즈</Link>
              </li>
              <li>
                <Link to="/component/gift">선물하기</Link>
              </li>
              <li>
                <Link to="/component/brand">브랜드</Link>
              </li>
              <li>
                <Link to="/component/sale">세일</Link>
              </li>
              <li>
                <Link to="/component/Newproduct">신상</Link>
              </li>
              <li>
                <Link to="/component/event">이벤트</Link>
              </li>
            </ul>
          </nav>
        </header>
        <div className="contents">
          <Route path="/" exact={true} component={HomeArea} />
          <Route path="/component/live" component={LiveArea} />
          <Route path="/component/best" component={BestArea} />
          <Route path="/component/asepe" component={AsepeArea} />
          <Route path="/component/wikid" component={WikidArea} />
          <Route path="/component/gift" component={GiftArea} />
          <Route path="/component/brand" component={BrandArea} />
          <Route path="/component/sale" component={SaleArea} />
          <Route path="/component/Newproduct" component={NewproductArea} />
          <Route path="/component/event" component={EventArea} />
        </div>
      </ProProvider>
    </>
  );
}

export default App;
