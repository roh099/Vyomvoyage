import React from "react"
import { Statistic } from "antd";
const { Countdown } = Statistic ;
// import logo from "../src/images/logo.png";




const Research = () =>{
  return (
    <>
    
    <header id="header" class="d-flex align-items-center">
     <div class="container d-flex flex-column align-items-center">
     <h1>ComingSoon</h1>
      <h2>We're working  to Publsh our Research Paper and ready to launch  BallonSat</h2>
      {/* <div class="countdown d-flex justify-content-center" data-count="2023/12/5">
        <div>
          <h3>29</h3>
          <h4>Days</h4>
        </div>
        <div>
          <h3>10</h3>
          <h4>Hours</h4>
        </div>
        <div>
          <h3>30</h3>
          <h4>Minutes</h4>
        </div>
        <div>
          <h3>50</h3>
          <h4>Seconds</h4>
        </div>
      </div> */}


      {/* <div className="App">
        <header className="App-header">
          <Countdown title={<h1 style={{color:"Red"}}>
            Detail info about BallonSat</h1>}
           
           value={new Date().setDate(29) }
           valueStyle={{ color:"red" ,alignItems:"center",paddingLeft:250 }}>
            {/* new Date().setMinutes(new Date().getMinutes()+10) */}
           {/* </Countdown>
        </header>

      </div> */} 


     </div>
     </header>
     
    </>
  );
};
export default Research;












