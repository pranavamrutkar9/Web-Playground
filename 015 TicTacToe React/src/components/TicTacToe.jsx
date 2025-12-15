import React, { useRef, useState } from 'react'
import circle_icon from '../assets/circle.png'
import cross_icon from '../assets/cross.png'
let data = ["","","","","","","","",""];
const TicTacToe = () => {


    const [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);
    let titleRef = useRef(null);
    let box1 = useRef(null)
    let box2 = useRef(null)
    let box3 = useRef(null)
    let box4 = useRef(null)
    let box5 = useRef(null)
    let box6 = useRef(null)
    let box7 = useRef(null)
    let box8 = useRef(null)
    let box9 = useRef(null)
    let box_array=[box1,box2,box3,box4,box5,box6,box7,box8,box9]


    const toggle=(e,num)=>{
        if(lock){
            return;
        };
        if(count%2===0){
            e.target.innerHTML=`<img src='${cross_icon}'>`;
            data[num]='x';
            setCount(count+1);
        }else{
            e.target.innerHTML=`<img src='${circle_icon}'>`;
            data[num]='o';
            setCount(count+1);
        }
        checkWin()
    }

    const checkWin= ()=>{
        if(data[0]===data[1] && data[1]===data[2] && data[2]!==""){
            won(data[2])
        }
        else if(data[3]===data[4] && data[4]===data[5] && data[5]!==""){
            won(data[5])
        }
        else if(data[6]===data[7] && data[7]===data[8] && data[8]!==""){
            won(data[8])
        }
        else if(data[0]===data[3] && data[3]===data[6] && data[6]!==""){
            won(data[6])
        }
        else if(data[1]===data[4] && data[4]===data[7] && data[7]!==""){
            won(data[7])
        }
        else if(data[2]===data[5] && data[5]===data[8] && data[8]!==""){
            won(data[8])
        }
        else if(data[0]===data[4] && data[4]===data[8] && data[8]!==""){
            won(data[8])
        }
        else if(data[2]===data[4] && data[4]===data[6] && data[6]!==""){
            won(data[6])
        }
    }

    const won = (winner)=>{
        setLock(true);
        if(winner==="x"){
            titleRef.current.innerHTML = `Congratulations! <img src='${cross_icon}'> Wins`
        } else{
            titleRef.current.innerHTML = `Congratulations! <img src='${circle_icon}'> Wins`
        }
    }

    const reset = ()=>{
        setLock(false);
        data = ["","","","","","","","",""];
        titleRef.current.innerHTML = 'Tic Tac Toe'
        box_array.map((e)=>{
            e.current.innerHTML="";
        })
    }

  return (
    <div className='flex flex-col items-center justify-center gap-5 text-white'>
        <h1 className='font-extrabold flex flex-col items-center justify-center text-5xl' ref={titleRef}>Tic Tac Toe</h1>
        <div className="board flex flex-col gap-4">
            <div className="row1 flex gap-4">
                <div onClick={(e)=>{toggle(e,0)}} ref={box1} className="boxes bg-teal-600 w-25 h-25 rounded-xl flex items-center justify-center p-2" ></div>
                <div onClick={(e)=>{toggle(e,1)}} ref={box2} className="boxes bg-teal-600 w-25 h-25 rounded-xl flex items-center justify-center p-2" ></div>
                <div onClick={(e)=>{toggle(e,2)}} ref={box3} className="boxes bg-teal-600 w-25 h-25 rounded-xl flex items-center justify-center p-2" ></div>
            </div>
            <div className="row2 flex gap-4">
                <div onClick={(e)=>{toggle(e,3)}} ref={box4} className="boxes bg-teal-600 w-25 h-25 rounded-xl flex items-center justify-center p-2" ></div>
                <div onClick={(e)=>{toggle(e,4)}} ref={box5} className="boxes bg-teal-600 w-25 h-25 rounded-xl flex items-center justify-center p-2" ></div>
                <div onClick={(e)=>{toggle(e,5)}} ref={box6} className="boxes bg-teal-600 w-25 h-25 rounded-xl flex items-center justify-center p-2" ></div>
            </div>
            <div className="row3 flex gap-4">
                <div onClick={(e)=>{toggle(e,6)}} ref={box7} className="boxes bg-teal-600 w-25 h-25 rounded-xl flex items-center justify-center p-2" ></div>
                <div onClick={(e)=>{toggle(e,7)}} ref={box8} className="boxes bg-teal-600 w-25 h-25 rounded-xl flex items-center justify-center p-2" ></div>
                <div onClick={(e)=>{toggle(e,8)}} ref={box9} className="boxes bg-teal-600 w-25 h-25 rounded-xl flex items-center justify-center p-2" ></div>
            </div>
        </div>
        <button onClick={()=>{reset()}} className='bg-teal-800 text-2xl font-light flex items-center justify-center rounded-full py-3 px-10'>Reset</button>
    </div>
  )
}

export default TicTacToe