import React from "react";
//import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"
import Carousel from "react-bootstrap/Carousel";
//import styled from "styled-components";
import AsepeList from "./AsepeList";
import { ProState } from "./context";
import styled from "./home.module.css";

//import BannerImg from './bannerSlide'
/*
const CatagoryBtn = styled.button`
  width:64px;
  height:64px;
  border-radius:3px;
  background-color:#ccc;
`
*/
function CatagoryBtn({ txt }) {
  return (
    <div style={{ width: "64px", height: "90px" }}>
      <img
        style={{
          width: "64px",
          height: "64px",
          background: "#000",
          borderRadius: "10px",
        }}
      />
      <p style={{ marginTop: "10px", fontSize: "10px", textAlign: "center" }}>
        {txt}
      </p>
    </div>
  );
}

function EditBox({ path, editTtl, editTxt, s_path1, s_path2, s_txt1, s_txt2 }) {
  if (!s_path2) {
    return (
      <div className={styled.editItem}>
        <img src={path} alt={editTtl} />
        <div className={styled.group}>
          <h4>{editTtl}</h4>
          <p>{editTxt}</p>
          <ul>
            <li>
              <img src={s_path1} alt={editTtl} />
              <div>
                <span>{s_txt1}</span>
                <span>{s_txt2}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  if (s_path2) {
    return (
      <div className={styled.editItem}>
        <img src={path} alt={editTtl} />
        <div className={styled.group}>
          <h4>{editTtl}</h4>
          <p>{editTxt}</p>
          <ul>
            <li>
              <img src={s_path1} alt={editTtl} />
              <div>
                <span>{s_txt1}</span>
                <span>{s_txt2}</span>
              </div>
            </li>
            <li>
              <img src={s_path2} alt={editTtl} />
              <div>
                <span>{s_txt1}</span>
                <span>{s_txt2}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

function Item({ item }) {
  if (item.type === "best") {
    return (
      <div>
        <img src={item.path} alt={item.name} />
        <h4>{item.name}</h4>
        <p>{item.account}</p>
        <span>{item.price}</span>
      </div>
    );
  }
}

function HomeArea() {
  const img01 = {
    with: "100%",
    height: "365px",
    background: "red",
  };
  const img02 = {
    with: "100%",
    height: "365px",
    background: "blue",
  };
  const img03 = {
    with: "100%",
    height: "365px",
    background: "green",
  };

  const data = ProState();

  return (
    <>
      <section className={styled.mainimg}>
        <Carousel>
          <Carousel.Item>
            <div className={styled.img01} style={img01}></div>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div lassName={styled.img02} style={img02}></div>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div lassName={styled.img03} style={img03}></div>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

      <article className={styled.catagory}>
        <CatagoryBtn txt="한정수량" src={""} />
        <CatagoryBtn txt="오늘만특가" />
        <CatagoryBtn txt="위키드굿즈" />
        <CatagoryBtn txt="이니빅세일" />
        <CatagoryBtn txt="겨울붓기케어" />
        <CatagoryBtn txt="한정수량" />
        <CatagoryBtn txt="한정수량" />
        <CatagoryBtn txt="한정수량" />
        <CatagoryBtn txt="이니빅세일" />
        <CatagoryBtn txt="겨울붓기케어" />
        <CatagoryBtn txt="한정수량" />
        <CatagoryBtn txt="한정수량" />
        <CatagoryBtn txt="한정수량" />
      </article>

      <article className={styled.asepe_area}>
        <header>
          <h3>오직 아세페에서만</h3>
        </header>
        <section className={styled.asepe_list}>
          <AsepeList items={data} />
        </section>
        <footer>
          <button>단독세트 더보기</button>
        </footer>
      </article>

      <article>
        <header>
          <h3>에디터의 시선</h3>
        </header>
        <section>
          <EditBox
            path="/images/edit_l01.jpg"
            editTtl="01출시 전부터 뜨거운 반응!"
            editTxt="오직 아세페 한정 2024 어드벤트 캘린더. 깔끔한 디자인에 그린컬러의 포인트가 매력적인 스타벅스 미니 파우치백은 크로스로도 좋고, 가방에 걸어 미니 파우치로도 활용할 수 있어요."
            s_path1="/images/edit_s01.png"
            s_txt1="아모레몰 2024 어드벤트캘린더 40,000원"
          />
          <EditBox
            path="/images/edit_l02.jpg"
            editTtl="02출시 전부터 뜨거운 반응!"
            editTxt="오직 아세페 한정 2024 어드벤트 캘린더. 깔끔한 디자인에 그린컬러의 포인트가 매력적인 스타벅스 미니 파우치백은 크로스로도 좋고, 가방에 걸어 미니 파우치로도 활용할 수 있어요."
            s_path1="/images/edit_s02-1.png"
            s_path2="/images/edit_s02-2.png"
            s_txt1="아모레몰 2024 어드벤트캘린더 40,000원"
            s_txt2="★4.7(1,716)"
          />
          <EditBox
            path="/images/edit_l03.jpg"
            editTtl="03출시 전부터 뜨거운 반응!"
            editTxt="오직 아세페 한정 2024 어드벤트 캘린더. 깔끔한 디자인에 그린컬러의 포인트가 매력적인 스타벅스 미니 파우치백은 크로스로도 좋고, 가방에 걸어 미니 파우치로도 활용할 수 있어요."
            s_path1="/images/edit_s03-1.png"
            s_path2="/images/edit_s03-2.png"
            s_txt1="아모레몰 2024 어드벤트캘린더 40,000원"
            s_txt2="★4.7(1,716)"
          />
          <EditBox
            path="/images/edit_l04.jpg"
            editTtl="04출시 전부터 뜨거운 반응!"
            editTxt="오직 아세페 한정 2024 어드벤트 캘린더. 깔끔한 디자인에 그린컬러의 포인트가 매력적인 스타벅스 미니 파우치백은 크로스로도 좋고, 가방에 걸어 미니 파우치로도 활용할 수 있어요."
            s_path1="/images/edit_s04-1.png"
            s_path2="/images/edit_s04-2.png"
            s_txt1="아모레몰 2024 어드벤트캘린더 40,000원"
            s_txt2="★4.7(1,716)"
          />
        </section>
      </article>

      <article className={styled.bestPro}>
        <header>
          <h3>지금 많이 찾는 상품</h3>
        </header>
        <section>
          {data.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </section>
        <footer>
          <button>10초후 업데이트</button>
        </footer>
      </article>

      <article>{/* <BannerImg/> */}</article>
    </>
  );
}

export default HomeArea;
