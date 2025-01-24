import React from "react";
import { ProState } from '../context';

function Item({item}){
  if(item.type2 == 'new'){
  return(
    <div>
      <img src={item.path} alt={item.name} style={{width:'150px'}}/>
      <h4>{item.name}</h4>
      <p>{item.account}</p>
      <p>{item.price}</p>
    </div>
  )
  }
}

function NewproductArea(){
  const items = ProState();
  return(
    <>
     <h3>NewproductArea</h3>
     {items.map(item=>(
      <Item item={item} key={item.id} />
     ))}
    </>
  )
}

export default NewproductArea;