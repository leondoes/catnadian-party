import React, { useState } from "react";
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledTextArea,
  StyledButton,
  StyledCheckboxContainer,
  StyledCheckbox,
  Overlay,
  CloseButton,
  ErrorMessage,
  SuccessMessage,
  FormTitle,
  ToggleButton
} from "./styled";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    joinMailingList: false,
  });

  const [errors, setErrors] = useState({});
  const [isFormVisible, setFormVisible] = useState(false);
  const [isFormSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log("Form Data:", formData);
      setErrors({});
      setFormSubmitted(true);
    }
  };

  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      toggleFormVisibility();
    }
  };

  return (
    <>
      <ToggleButton onClick={toggleFormVisibility}>Contact Us</ToggleButton>
      {isFormVisible && (
        <Overlay onClick={handleOverlayClick}>
          <CloseButton onClick={toggleFormVisibility}>X</CloseButton>
          <StyledForm onSubmit={handleSubmit}>
            <FormTitle>Contact Us</FormTitle>
            <StyledLabel>
              Name:
              <StyledInput
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
            </StyledLabel>
            <StyledLabel>
              Email:
              <StyledInput
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
            </StyledLabel>
            <StyledLabel>
              Message:
              <StyledTextArea
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
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
            {isFormSubmitted && <SuccessMessage>Form submitted successfully!</SuccessMessage>}
          </StyledForm>
        </Overlay>
      )}
    </>
  );
};

export default ContactForm;
