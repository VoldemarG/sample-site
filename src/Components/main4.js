import React, { Component } from 'react';
import './main4.scss';

const Main4 = () => {
    return (

        <>
        <div className="wedo1" id="wedo1">

            <h2 className="onHeader">What do <span>we do?</span></h2>
            
            <div className="container">

                <div className="left">
                    <h3>Landing Pages</h3>
                    <p>
                        The main thing in the experiment is to refer
                        to scientists and clearly follow their instructions.
                        Then you can put any experiments you want. On anyone.
                        And, worst of all, with the help of anyone;
                        most of the participants in Milgram's
                        experiment followed the orders of a scientist or
                        just someone who
                    </p>
                    <a href="" className="btn">More details</a>
                </div>

                <div className="right">
                    <img src="img/we_do_1.png" alt="" />
                </div>
            </div>


            <div className="botHeader">
                <a href="#wedo2">&darr;</a>
            </div>

</div>


<div className="wedo2" id="wedo2">



<div className="container">

    <div className="left">
        <h3>advertising</h3>
        <p>
            The main thing in the experiment is to refer
            to scientists and clearly follow their instructions.
            Then you can put any experiments you want. On anyone.
            And, worst of all, with the help of anyone;
            most of the participants in Milgram's
            experiment followed the orders of a scientist or
            just someone who
        </p>
        
        <a href="" className="btn" >More details</a>
        

    </div>

    <div className="right">
        <img src="img/we_do_2.png" alt="" />
    </div>
</div>


<div className="botHeader">
    <a href="#wedo3">&darr;</a>
</div>

</div>




<div className="wedo3" id="wedo3">



<div className="container">

    <div className="left">
        <h3>marketing kit</h3>
        <p>
            The main thing in the experiment is to refer
            to scientists and clearly follow their instructions.
            Then you can put any experiments you want. On anyone.
            And, worst of all, with the help of anyone;
            most of the participants in Milgram's
            experiment followed the orders of a scientist or
            just someone who
        </p>
        <a href="" className="btn">More details</a>
    </div>

    <div className="right">
        <img src="img/we_do_3.png" alt="" />
    </div>
</div>


<div className="botHeader">
    <a href="#ourTeam">&darr;</a>
</div>

</div>


            
</>

    );
}

export default Main4;
