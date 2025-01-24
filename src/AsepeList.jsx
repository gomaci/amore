import React from "react";

function Item({item}){
   if(item.id < 6 && item.type ==="asepe"){
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

function AsepeList({items}){
    return(
     <div style={{width:'100%', paddingLeft:'40px', display:'flex', justifyContent:'space-around'}}>
      {items.map(item=>(
        <Item item={item} key={item.id} />
      ))}
     </div>
    )
}
export default AsepeList;