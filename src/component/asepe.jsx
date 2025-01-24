import React from "react";
import { ProState } from "../context";
import styled from "./asepse.module.css";

function Asepe({item}){
  if(item.type ==="asepe"){
  return(
    <div>
      <img src={item.path} alt={item.name} className={styled.Box}/>
      <h4>{item.name}</h4>
      <p>{item.account}</p>
      <p>{item.price}</p>
    </div>
  )
  }
}


function AsepeArea(){
  const asepes = ProState();
  
  return(
    <div className={styled.Inbox}>
     {/* <h3>AsepeArea</h3>
     <img src={Asepes[0].path}/>
     <h4>{Asepes[0].name}</h4>
     <p>{Asepes[0].account}</p>
     <p>{Asepes[0].price}</p>

     <Asepe item={Asepes[0]} /> */}

     {asepes.map(asepe=>(
      <Asepe item={asepe} key={asepe.id} />
     ))}
    </div>
  )
}

export default  AsepeArea;