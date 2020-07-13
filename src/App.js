import React, { useState } from 'react';
import AnswerStatus from './AnswerStatus';
import CounterCorrectComponent from './CounterCorrectComponent';
import useSound from 'use-sound';
import ReactAudioPlayer from 'react-audio-player';
import styles from './App.css';


function App() {
  
  let DoFile = new Audio('https://eartraining.github.io/Solfege/soundFiles/Do.mp3')
  let DiFile = new Audio('https://eartraining.github.io/Solfege/soundFiles/Di:Ra.mp3')
  let ReFile = new Audio('https://eartraining.github.io/Solfege/soundFiles/Re.mp3')
  let RiFile = new Audio('https://eartraining.github.io/Solfege/soundFiles/Ri:Me.mp3')
  let MiFile = new Audio('https://eartraining.github.io/Solfege/soundFiles/Mi.mp3')
  let FaFile = new Audio('https://eartraining.github.io/Solfege/soundFiles/Fa.mp3')
  let FiFile = new Audio('https://eartraining.github.io/Solfege/soundFiles/Fi:Se.mp3')
  let SolFile= new Audio('https://eartraining.github.io/Solfege/soundFiles/Sol.mp3')
  let SiFile = new Audio('https://eartraining.github.io/Solfege/soundFiles/Si:Le.mp3')
  let LaFile = new Audio('https://eartraining.github.io/Solfege/soundFiles/La.mp3')
  let LiFile = new Audio('https://eartraining.github.io/Solfege/soundFiles/Li:Te.mp3')
  let TiFile = new Audio('https://eartraining.github.io/Solfege/soundFiles/Ti.mp3')
  
  var midiList = {
    "Do":  DoFile,
    "Di/Ra": DiFile,
    "Re": ReFile,
    "Ri/Me": RiFile,
    "Mi": MiFile,
    "Fa": FaFile,
    "Fi/Se": FiFile,
    "Sol": SolFile,
    "Si/Le": SiFile,
    "La": LaFile,
    "Li/Te": LiFile,
    "Ti": TiFile
  }


  const [currentMidi, setCurrentMidi] = useState("")
  const [answerStatus, setAnswerStatus] = useState("")
  const [counterCorrectStateHook, setCounterCorrect] = useState(0)
  const [counterTotalStateHook, setCounterTotal] = useState(0)
  const [firstTryStateHook, setFirstTry] = useState(true)

  function randomizeMIDI () {

    var mp3Array = Object.keys(midiList);
    var randomNumber = Math.floor(Math.random() * mp3Array.length)
    var select = mp3Array[randomNumber];
    setCurrentMidi(select);
    return midiList[select];

  }

  function checkMIDI (e) {
    
    var passedText = e;

    if (currentMidi == passedText){
      //console.log(currentMidi)
      //console.log(passedText)
      setAnswerStatus("CORRECT!")
      
      if(firstTryStateHook == true){
        setCounterCorrect(counterCorrectStateHook + 1)
      }
      
    }
    else{
      setAnswerStatus("WRONG!")
      setFirstTry(false);
      console.log(false)
    }
  }

  function playMIDI () {
    setAnswerStatus(null);
    setCounterTotal(counterTotalStateHook + 1);
    var midiFile = randomizeMIDI();
    midiFile.play().then((value)=>{
      console.log(value)
    }).catch((error)=>{
       console.log(error)
    });
    setFirstTry(true);
  }

  function replayMIDI () {

    midiList[currentMidi].play()

  }

  return (
    <>
      <div><p>SOLFEGE EAR TRAINING</p></div> 
      <p><button onClick={playMIDI}> PLAY </button>
      <button onClick={replayMIDI}> REPLAY </button></p>
      <p><AnswerStatus answerStatus={answerStatus}/></p>
      <button onClick={()=>checkMIDI("Do")}> Do </button>
      <button onClick={()=>checkMIDI("Di/Ra")}> Di/Ra </button>
      <button onClick={()=>checkMIDI("Re")}> Re </button>
      <button onClick={()=>checkMIDI("Ri/Me")}> Ri/Me </button>
      <button onClick={()=>checkMIDI("Mi")}> Mi </button>
      <button onClick={()=>checkMIDI("Fa")}> Fa </button>
      <button onClick={()=>checkMIDI("Fi/Se")}> Fi/Se </button>
      <button onClick={()=>checkMIDI("Sol")}> Sol </button>
      <button onClick={()=>checkMIDI("Si/Le")}> Si/Le </button>
      <button onClick={()=>checkMIDI("La")}> La </button>
      <button onClick={()=>checkMIDI("Li/Te")}> Li/Te </button>
      <button onClick={()=>checkMIDI("Ti")}> Ti </button>
      <p>
      <CounterCorrectComponent counterCorrectProp={counterCorrectStateHook} counterTotalProp={counterTotalStateHook}/>
      </p>


    </>
  );
}

export default App;
