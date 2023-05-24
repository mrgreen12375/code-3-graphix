import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { validateEmail } from "../../utils/helpers";
import TextField from '@mui/material/TextField';
import * as React from 'react';
import Box from '@mui/material/Box';

export default function Contact() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { firstName, lastName, email, message } = formState;
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // Need to change keys from emailjs to line up with appropriate email
    emailjs.sendForm('service_c0kytx6', 'template_tuk574e', form.current, 'Q6MtIbz_bMsCdyhX1')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  function handleEmail(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Email is invalid");
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required`);
        } else {
          setErrorMessage("");
        }
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleEmpty(e) {
    if (e.target.name === "firstName" || e.target.name === "message") {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required`);
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  return (
  <div>
    <h1 className="center">Contact</h1>
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <Box

        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <form 
          style={{ display: 'flex', flexDirection: 'column' }}
          ref={form} onSubmit={sendEmail}
        >
          <TextField
            id="outlined-textarea"
            label="First Name"
            name="firstName"
            defaultValue={firstName}
            multiline
          />
          <TextField
            id="outlined-textarea"
            label="Last Name"
            name="lastName"
            defaultValue={lastName}
            multiline
          />
          <TextField
            id="outlined-textarea"
            label="Email*"
            name="email"
            type="email"
            defaultValue={email}
            onBlur={handleEmail}
            multiline
          />
          <TextField
            id="outlined-multiline-static"
            label="Message*"
            name="message"
            defaultValue={message}
            onBlur={handleEmpty}
            multiline
            rows={10}
          />
          {errorMessage && (
						<div style={{display: 'flex', justifyContent: 'center'}}>
							<p style={{ color: '#ba1200'}}>{errorMessage}</p>
						</div>
					)}
          <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
            <button className="buttons">Send Email</button>
          </div>
        </form>
      </Box>
    </div>
  </div>
  );
}