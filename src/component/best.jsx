import React from "react";
import { ProState } from '../context';

function Item({item}){
  if(item.type == 'best'){
  return(
    <div>
      <img src={item.path} alt={item.name} style={{width:'150px'}}/>
      <h4>{item.name}</h4>
      <p>{item.account}</p>
      <p>{item.price}</p>
      <p>{item.gift && (<b>사은품</b>)}</p>
    </div>
  )
  }
}

function BestArea(){
  const items = ProState();//state

  return(
    <>
     <h3>BestArea</h3>
     {items.map(item=>(
      <Item item={item} key={item.id} />
     ))}
    </>
  )
}

export default  BestArea;