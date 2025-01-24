import React from "react";
import styled from './event.module.css'
import EventTabs from './event_tabs'
import {ProState} from '../context'

function Limg({src, txt, date}){
  return(
    <div className={styled.box}>
      <img src={src} className={styled.Img} />
      <p className={styled.Txt}>{txt}</p>
      <p className={styled.Date}>{date}</p>
    </div>
  )
}

function Item({item}){
  if(item.type==='progress' || item.type==='event'){
  return(
    <div className={styled.Item}>
      <img src={item.path} alt={item.name} />
      <h4>{item.name}</h4>
      <p>{item.date}</p>
    </div>
  )
}
}

function MagazineItem({path,text,stxt}){
  return(
    <div className={styled.magazineItem}>
      <img src={path} alt={text}/>
      <div>
       <h4>{text}</h4>
       <p>{stxt}</p>
      </div>
    </div>
  )
}

function Inprogress({item}){
  if(item.type==='progress'){
    return(
      <div className={styled.progressItem}>
        <img src={item.path} alt={item.name} />
        <h4>{item.name}</h4>
        <p>{item.date}</p>
      </div>
    )
  }
}

function EventArea(){
  /*
  const list = [
   {
    id:1,
    path:'/images/eve_img01.jpg',
    name:'[아세페] 스타벅스 파우치백이 담긴 2024어드벤트캘린더 출시!',
    date:'2024.12.09 ~ 2024.12.22',
    type:'event'
   },
   {
    id:2,
    path:'/images/eve_img01.jpg',
    name:'[아세페] 스타벅스 파우치백이 담긴 2024어드벤트캘린더 출시!',
    date:'2024.12.09 ~ 2024.12.22',
    type:'event'
   },
   {
    id:3,
    path:'/images/eve_img01.jpg',
    name:'[아세페] 스타벅스 파우치백이 담긴 2024어드벤트캘린더 출시!',
    date:'2024.12.09 ~ 2024.12.22',
    type:'event'
   },
   {
    id:4,
    path:'/images/eve_img01.jpg',
    name:'[아세페] 스타벅스 파우치백이 담긴 2024어드벤트캘린더 출시!',
    date:'2024.12.09 ~ 2024.12.22',
    type:'event'
   },
   {
    id:5,
    path:'/images/eve_img01.jpg',
    name:'[아세페] 스타벅스 파우치백이 담긴 2024어드벤트캘린더 출시!',
    date:'2024.12.09 ~ 2024.12.22',
    type:'progress'
   },
   {
    id:6,
    path:'/images/eve_img01.jpg',
    name:'[아세페] 스타벅스 파우치백이 담긴 2024어드벤트캘린더 출시!',
    date:'2024.12.09 ~ 2024.12.22',
    type:'progress'
   },
   {
    id:7,
    path:'/images/eve_img01.jpg',
    name:'[아세페] 스타벅스 파우치백이 담긴 2024어드벤트캘린더 출시!',
    date:'2024.12.09 ~ 2024.12.22',
    type:'event'
   },
   {
    id:8,
    path:'/images/eve_img01.jpg',
    name:'[아세페] 스타벅스 파우치백이 담긴 2024어드벤트캘린더 출시!',
    date:'2024.12.09 ~ 2024.12.22',
    type:'event'
   }

  ]
  */
   const list = ProState();

  const view = () => {}

  return(
    <>
     <article className={styled.Larege_img}>
      <Limg src='/images/event01.jpg' txt='[아세페] 2024 아모레 세일 페스타! 끝없이 펼쳐지는 기적' 
      date='2024.12.09 ~ 2024.12.22'/>
      <Limg  src='/images/event02.jpg' txt='[아세페] 스타벅스 파우치백이 담긴 2024어드벤트캘린더 출시!' 
      date='2024.12.09 ~ 2024.12.22'/>
     </article>

     <article className={styled.Event_li}>
      {list.map(item =>(
        <Item item={item} key={item.id} />
      ))}
     </article>
     <div className={styled.Event_li_btn}>
       <button onClick={view}>이벤트 더보기</button>
     </div>

     <article className={styled.Beauty_exe}> 
        <header>
          <h3>뷰티체험단</h3>
          <span>제품을 미리 체험해보고 싶으신가요?</span>
        </header>
        <section>
          <EventTabs/>
        </section>
     </article>

     <article className={styled.magazine}>
        <header>
          <h3>매거진</h3>
          <span>더 나은 뷰티 라이프 스타일을 위한 콘텐츠</span>
        </header>
        <section>
          <MagazineItem path="/images/magazine01.jpg" text="아모레몰 선물하기 서비스 이용 가이드1"
          stxt="1전하는 마음 잘 닿을 수 있도록! 믿고 선물하는 아모레몰 선물하기"/>
          <MagazineItem path="/images/magazine02.jpg" text="아모레몰 선물하기 서비스 이용 가이드2"
          stxt="2전하는 마음 잘 닿을 수 있도록! 믿고 선물하는 아모레몰 선물하기"/>
          <MagazineItem path="/images/magazine03.jpg" text="아모레몰 선물하기 서비스 이용 가이드3"
          stxt="3전하는 마음 잘 닿을 수 있도록! 믿고 선물하는 아모레몰 선물하기"/>
          <MagazineItem path="/images/magazine04.jpg" text="아모레몰 선물하기 서비스 이용 가이드4"
          stxt="4전하는 마음 잘 닿을 수 있도록! 믿고 선물하는 아모레몰 선물하기"/>
        </section>
     </article>
     <div className={styled.magazine_btn}>
       <button onClick={view}>매거진 더보기</button>
     </div>

     <article className={styled.progress}>
       <header>
          <h3>진행중인 이벤트</h3>
          <span>늦지 않았어요. 아직 진행중인 이벤트가 있어요!</span>
        </header>
        <section>
          {list.map(item =>(
            <Inprogress item={item} key={item.id} />
          ))}
        </section>
     </article>
    </>
  )
}

export default  EventArea;