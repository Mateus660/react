import { useState } from "react";
function Titulo({cor}) {
    const [texto, setTexto] = useState("Um titulo do estado inicial")
    const [inputText, setInputText] = useState("");
    let dono = "Mateus Emanuel"
    const urlimg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyS33NlKYnbILZdDXExKOxjFFwJD8i1Ln3zA&s"
    return (
       <div id="caixa"> 
        <h1 style={{color:cor}}>{texto}</h1>
        
       <img src={urlimg}/>
       
       <input type="text" id="texto"/>
       <input onClick={() =>{setTexto("Mudei via botão")}} type="submit" value="Mudar" id="nome"/>
       </div>  
    
    )
}
export default Titulo;