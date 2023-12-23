 //single accordian
 //multi accordian 

import { useState } from "react";
import data from "./data";

 
 export default function Accordian(){
    const [selected,setselected]=useState(null);
    const [enableMutipleSelection,setEnableMutiSelection]=useState(false);
    const [Multiple,setMultiple]=useState([]);
    
    function handleSingleSelection(getCurrentId){
     setselected(getCurrentId === selected ? null : getCurrentId)
    }

    function handleMultiSelection(getCurrentId){
        let cpyMultiple =[...Multiple];
        const findIndexOfCurrentId=cpyMultiple.indexOf(getCurrentId);
        console.log(findIndexOfCurrentId);
        if(findIndexOfCurrentId === -1)cpyMultiple.push(getCurrentId)
        else cpyMultiple.splice(findIndexOfCurrentId,1)
         setMultiple(cpyMultiple)
    }
   return <div className="wrapper">
    <button onClick={()=>setEnableMutiSelection(!enableMutipleSelection)}>Multiple selection</button>
 
        <div className="accordian">
            {
                data && data.length>0?
                data.map(dataItem=><div className="item">
                    <div 
                    onClick={()=>
                        enableMutipleSelection
                         ? ()=> handleMultiSelection(dataItem)
                         : ()=> handleSingleSelection(dataItem)   
                    }
                        className="title">
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                    </div>
                    {
                        enableMutipleSelection?
                        Multiple.indexOf(dataItem) !== -1 &&
                        <div className="content">{dataItem.answer}</div>:
                        selected ===dataItem.id && <div className="content">{dataItem.answer}</div>
                        
                    }
                </div>)
                : <div>No dat found</div>
            }
        </div>
    </div>;
 }