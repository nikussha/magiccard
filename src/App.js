import './App.css'
import {useEffect, useState} from 'react'
import Singlecard from './singlecard'

const cardImages = [
  {"src":"/img/helmet-1.png",matched:false},
  {"src":"/img/potion-1.png",matched:false},
  {"src":"/img/ring-1.png",matched:false},
  {"src":"/img/scroll-1.png",matched:false},
  {"src":"/img/shield-1.png",matched:false},
  {"src":"/img/sword-1.png",matched:false}
]

function App() {

  let [cards,setCards] = useState([])
  let [turns,setTurns]= useState(0)
  let [choiceone,setChoiceone]=useState(null)
  let [choicetwo,setChoicetwo]=useState(null)
  let [disabled,setDisabled]=useState(false)

 let shufflecards = ()=>{
   let shuffle=[...cardImages,...cardImages].sort(()=>Math.random()-0.5).map((card)=> ({...card,id:Math.random()}))
   setChoiceone(null)
   setChoicetwo(null)
   setCards(shuffle)
   setTurns(0)
 }

 let handlebutton = (card)=>{
  {choiceone? setChoicetwo(card):setChoiceone(card)}
}

useEffect(()=>{

  if(choiceone && choicetwo){
    setDisabled(true)
    if(choiceone.src===choicetwo.src){
     setCards((prev)=>{
       return prev.map((card)=>{
if(card.src === choiceone.src){
  return {...card,matched:true}
}else{
  return card
}
       })
     })
      reset()
    }else {
      setTimeout(()=>reset(),1000)
    }
  }
},[choiceone,choicetwo])
console.log(cards);
let reset = ()=>{
  setChoiceone(null)
  setChoicetwo(null)
  setTurns((prev)=>prev + 1)
  setDisabled(false)
}

useEffect(()=>{
  shufflecards()
},[])

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shufflecards}>New Game</button>
      <div className='card-grid'>
        {cards.map((card)=>{
          return (
            <>
           <Singlecard key={card.id} card={card} handlebutton={handlebutton} flipped={card === choiceone ||card=== choicetwo || card.matched} disabled={disabled} />
            </>
          )
        })}
      </div>
      <p>Turns:{turns}</p>
    </div>
  );
}



export default App