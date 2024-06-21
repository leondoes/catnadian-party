import styled from 'styled-components';

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 500px;
    margin: auto;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    background-color: #fff;
`;

export const StyledLabel = styled.label`
    margin-bottom: 10px;
    font-size: 16px;
    color: #333;
`;

export const StyledInput = styled.input`
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
`;

export const StyledTextArea = styled.textarea`
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
`;

export const StyledButton = styled.button`
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #0056b3;
    }
`;

export const StyledCheckboxContainer = styled.div`
    margin-bottom: 20px;
`;

export const StyledCheckbox = styled.input`
    margin-right: 10px;
`;

export const FormContainer = styled.div`
    transition: all 0.3s ease-in-out;
`;

export const ToggleButton = styled.button`
    display: block;
    margin: 20px auto;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #0056b3;
    }
`;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
`;

export const ErrorMessage = styled.span`
    color: #dc3545;
    font-size: 14px;
    margin-top: -15px;
    margin-bottom: 20px;
    display: block;
`;

export const SuccessMessage = styled.div`
    padding: 20px;
    background-color: #28a745;
    color: white;
    text-align: center;
    border-radius: 8px;
    margin-top: 20px;
`;

export const FormTitle = styled.h1`
    font-size: 24px;
    color: #333;
    text-align: center;
    margin-bottom: 30px;
`;
