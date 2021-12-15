import React, { Component } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { useState } from 'react';
import "../styles/Header.css"
import logo from "../image/logo_Test.png"



function ToggleButtonExample() {
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');

    
    return (

        <div className="nav_Bar">
            <div className="logo">
            {/* src/image/logo_Test.png */}
                <img src={logo} alt="logo" />
            </div>

            {/* <div className="main_bar">

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
            </div> */}

        </div>


    );
}

//   render(<ToggleButtonExample />);
export default ToggleButtonExample