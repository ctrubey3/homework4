import './App.css';
import Block from "./components/core/Block";
import Blocks from "./components/core/Blocks";
import Block2 from "./components/core/Block2";
import Block3 from "./components/core/Block3";
import Rectangle from "./components/core/Rectangle";
import style from "./style/style";
import React from "react";


function App() {
  return (

          <div className="App">
            <Rectangle clk={""}/>
            <Rectangle clk={""}/>
            <Rectangle clk={""}/>
            <Block style={style.block}/>
            <Blocks props={"color"}/>
              <Block2 style={style.blocks}/>
            <Blocks props={"color"}/>
              <Block3 style={style.blockers}/>
            <Blocks props={"color"}/>
          </div>
  );
}

export default App;
