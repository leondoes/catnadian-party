import React, { useState } from "react";
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledTextArea,
  StyledButton,
  StyledCheckboxContainer,
  StyledCheckbox,
  FormContainer,
  ToggleButton
} from "./styled";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    joinMailingList: false,
  });

  const [isFormVisible, setFormVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Here you can add logic to send data to your backend or email service
  };

  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
  };

  return (
    <>
      <ToggleButton onClick={toggleFormVisibility}>Contact Us</ToggleButton>
      {isFormVisible && (
        <FormContainer>
          <StyledForm onSubmit={handleSubmit}>
            <StyledLabel>
              Name:
              <StyledInput
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </StyledLabel>
            <StyledLabel>
              Email:
              <StyledInput
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </StyledLabel>
            <StyledLabel>
              Message:
              <StyledTextArea
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </StyledLabel>
            <StyledCheckboxContainer>
              <StyledCheckbox
                type="checkbox"
                name="joinMailingList"
                checked={formData.joinMailingList}
                onChange={handleChange}
              />
              Join Mailing List
            </StyledCheckboxContainer>
            <StyledButton type="submit">Send</StyledButton>
          </StyledForm>
        </FormContainer>
      )}
    </>
  );
};

export default ContactForm;
