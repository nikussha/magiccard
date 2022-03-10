import React from 'react';
import './singlecard.css'

function Singlecard({card,handlebutton,flipped,disabled}) {
  

 let handleclick = ()=>{
if(!disabled){
handlebutton(card)
}
 }


 return (
  <div className='card'>
              <div className={flipped?"flipped": ""}>
                <img className='front' src={card.src} alt='card front'/>
                <img className='back' src="img/cover.png" onClick={handleclick}></img>
              </div>
            </div>
 )
}


export default Singlecard