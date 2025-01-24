import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function Beauty({ item }) {
  if (item.type === "all") {
    return (
      <>
        <img src={item.path} />
        <p>{item.date}</p>
        <h4>{item.txt}</h4>
        <span>{item.state}</span>
      </>
    );
  }
}
function Beauty2({ item }) {
  if (item.type === "progress") {
    return (
      <div style={{ width: "390px" }}>
        <img src={item.path} />
        <p>{item.date}</p>
        <h4>{item.txt}</h4>
        <span>{item.state}</span>
      </div>
    );
  }
}

function EventTabs() {
  const beautys = [
    {
      id: 1,
      path: process.env.PUBLIC_URL + "/images/beauty01.jpg",
      date: "END 2024.12.10 까지",
      txt: "[라리베라] 자연주의 베블 바디밀크 체험단",
      state: "모집 20명 / 지원 1,466명",
      type: "all",
    },
    {
      id: 2,
      path: process.env.PUBLIC_URL + "/images/beauty02.jpg",
      date: "END 2024.12.10 까지",
      txt: "[라리베라] 마더니아 약산성 Y존 임산부 여성청결제 체험단",
      state: "모집 20명 / 지원 1,466명",
      type: "progress",
    },
    {
      id: 3,
      path: process.env.PUBLIC_URL + "/images/beauty01.jpg",
      date: "END 2024.12.08 까지",
      txt: "[홀리추얼] 리디파이닝 앰플 체험단",
      state: "모집 20명 / 지원 1,466명",
      type: "progress",
    },
  ];

  const [key, setKey] = useState("recruit");

  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="전체">
        <div>
          {beautys.map((beauty) => (
            <Beauty item={beauty} id={beauty.id} />
          ))}
        </div>
      </Tab>

      <Tab eventKey="recruit" title="모집중">
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {beautys.map((beauty) => (
            <Beauty2 item={beauty} id={beauty.id} />
          ))}
        </div>
      </Tab>

      <Tab eventKey="collection" title="모집완료">
        {beautys.map((beauty) => (
          <Beauty item={beauty} id={beauty.id} />
        ))}
      </Tab>

      <Tab eventKey="release" title="당첨발표">
        {beautys.map((beauty) => (
          <Beauty item={beauty} id={beauty.id} />
        ))}
      </Tab>

      <Tab eventKey="review" title="리뷰작성">
        {beautys.map((beauty) => (
          <Beauty item={beauty} id={beauty.id} />
        ))}
      </Tab>
    </Tabs>
  );
}

export default EventTabs;
