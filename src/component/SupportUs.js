import React, { useEffect, useRef } from 'react';
import { Modal } from 'react-bootstrap';

export default function SupportUs(props) {
    const paypal = useRef();

    useEffect(() => {
        window.paypal.Buttons({
            style: {
                shape: 'pill',
                color: 'blue',
                layout: 'vertical',
                label: 'paypal',

            },
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",

                    purchase_units: [
                        {
                            description: "Cool Donation",
                            amount: {
                                currency_code: "CAD",
                                value: 5.00
                            }
                        }
                    ]
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                console.log(order);
            },
            onError: (err) => {
                console.log(err);
            }
        }).render(paypal.current)
    })

    return (
        <Modal show={props.show} onHide={() => props.handleClose(false)}>
            <Modal.Header closeButton>
                <Modal.Title> Donate to Support Us  </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='messagePart'>
                    <p>
                        We are a non-profit organization that is dedicated to providing the best possible experience to our users.
                        We are a community of developers who are passionate about building the best possible experience for our users.
                    </p>
                </div>
                <div className='supportUsDiv'>


                    {/* <div className='inputPart'>
                        <span>  </span>
                        <input type="number" id="valueOfDonate" placeholder='0 $' />
                    </div> */}
                    <div ref={paypal}>

                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>

                Genius CV Creator
            </Modal.Footer>
        </Modal>
    );
}

