import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'


const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 411px;
    background: #000;
    box-shadow: 0 0 8px rgba(250, 250, 250, 0.6);
    opacity: 0.9;

    ._buttons {
        display: flex;
        justify-content: center;
    }

    .close-btn {
        margin-left: 10px;

        &:hover {
            box-shadow: none;
            color: rgba(242, 55, 22, 0.8) !important;
            border: 1px solid;
            border-color: rgba(245, 30, 15, 0.7);
            transition: all 0.4s ease-in;
        }
    }

    @media all and (max-width: 576px) {
        width: 360px;

        input::placeholder, textarea::placeholder {
            font-size: 17px;
        }

        button {
            padding: 0;
            font-size: 17px;
        }
    }

    @media all and (max-width: 360px) {
        width: 300px;
    }
`
const Form = styled.form`
    width: 100%;
    text-align: center;
    padding: 25px 20px;

    h1 {
        padding: 10px 0;
    }

    .id {
        position: relative;

        i {
            position: absolute;
            font-size: 20px;
            top: 50%;
            right: 20px;
            transform: translateY(-50%);
        }
    }

    input {
        width: 100%;
        height: 50px;
        margin: 7px 0;
        border: 1px solid #5c5c5c;
        border-radius: 3px;
        background: #181717;
        padding: 0 15px;
        padding-right: 45px;
        font-size: 20px;

        &:focus {
            border: 1px solid #00fff0;
            color: #00fff0;
            transition: all 0.3s ease;
        }

        &:focus::placeholder {
            padding-left: 4px;
            color: #00fff0;
            transition: all 0.3s ease
        }
    }

    textarea {
        padding: 5px 15px;
        border: 1px solid #5c5c5c;
        border-radius: 3px;
        background: #181717;
        font-size: 20px;
        width: 100%;
        margin: 4px 0;

        &:focus {
            border: 1px solid #00fff0;
            color: #00fff0;
            transition: all 0.3s ease;
        }

        &:focus::placeholder {
            padding-left: 4px;
            color: #00fff0;
            transition: all 0.3s ease;
        }
    }
`
const Button = styled.button`
    margin-top: 20px;
    border: none;
    color: #fff;
    padding: 4px 0;
    width: 100%;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 2px;
    cursor: pointer;
    border-radius: 3px;
    height: auto;

    &:hover {
        border-color: #00fff0;
        transition: all 0.3s ease;
    }
`

function FormComponent(props) {
    const handleSubmit = (e) => {
        e.preventDefault()
        props.showToast()
        props.onHide()
    }
    return (
        // If you want to add any new components or text fields first checkout the scss file in assets/scss/components since that file sometimes collides with reactbootstrap css. Hope this helps
        <>
            {props.show ? 
                (
                <div>
                <Fade left>
                        <Container>
                            <Form onSubmit={handleSubmit}>
                                <h2>Please Fill out the Inquiry form below</h2>
                                <div class="id">
                                    <input required type="text" placeholder="Your Full name" />
                                    <i class="far fa-user"></i>
                                </div>
                                <div class="id">
                                    <input required type="email" placeholder="Email address" />
                                    <i class="far fa-envelope"></i>
                                </div>
                                <textarea required cols="15" rows="5" placeholder="Kindly type in your Message"></textarea>
                                <div className="_buttons">
                                    <Button>Send</Button>
                                    <Button onClick={props.onHide} className="close-btn">Close</Button>
                                </div>
                            </Form>
                        </Container>
                    </Fade>
                </div>
                )
                : null
            }
          </>
    )
}

export default FormComponent