
// class Hehe extends React.Component {
//     render() {


//         return (
//             <div className="nav_Bar">
//                 <div className="logo"></div>

//                 <div className="main_bar">
//                     <a className="nav_btn"> Blue CV </a>
//                     <a className="nav_btn"> Black CV </a>
//                     <a className="nav_btn"> Rose CV </a>
//                 </div>
//             </div>
//         )
//     }
// }

// export default Hehe
import React, { Component } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { useState } from 'react';
import "../styles/Header.css"



function ToggleButtonExample() {
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');

    const radios = [
        { name: 'Blue CV', value: '1', variant: "outline-primary" },
        { name: 'Black CV', value: '2', variant: "outline-primary" },
        { name: 'Rose CV', value: '3', variant: "outline-primary" },
    ];

    return (

        <div className="nav_Bar">
            <div className="logo"></div>

            <div className="main_bar">

                {radios.map((radio, idx) => (
                    <ButtonGroup className="nav_btn">
                        <ToggleButton
                            key={idx}
                            
                            id={`radio-${idx}`}
                            type="radio"
                            variant={radio.variant}
                            name="radio"
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={(e) => setRadioValue(e.currentTarget.value)}
                        >
                            {radio.name}
                        </ToggleButton>
                    </ButtonGroup>

                ))}
            </div>

        </div>


    );
}

//   render(<ToggleButtonExample />);
export default ToggleButtonExample