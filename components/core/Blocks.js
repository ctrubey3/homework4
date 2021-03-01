
import style from "../../style/style";
import React, {useState, useEffect} from 'react';
function Blocks(props) {

    const count=React.useState(false)
    const Count =useState(count);
    const [color, setColor] =React.useState("red");
    const color1=React.useState("red");

    const [backColor, setbColor]=React.useState("brown");


    const buttonStyle ={
        height: "100px",
        backgroundColor: "none",


    };

    function handleColorChange() {
        const nextColor = color ==='red'? "blue" : "green"
        setColor(nextColor)
        const nbackColor = backColor ==='red'? "blue" : "green"
        setbColor(nbackColor)


    }



    const blockStyle={
        height:"100px",
        width:"100xp",
        backgroundColor: color,
        boarderColor: backColor
    };






    return(

           <div style={style.block1}>
                <div style={blockStyle}>
                    {<button style={buttonStyle} onClick={handleColorChange}>{props.backgroundColor}</button>}

        </div>
        </div>


    )
}



// way to export box function to other files
export default Blocks;