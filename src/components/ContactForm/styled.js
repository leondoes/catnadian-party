import styled from 'styled-components';

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 500px;
    width: 100%;
    margin: auto;
    padding: 30px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background-color: #fff;
    position: relative;
    z-index: 1001;
`;

export const StyledLabel = styled.label`
    margin-bottom: 15px;
    font-size: 14px;
    color: #444;
`;

export const StyledInput = styled.input`
    padding: 12px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    outline: none;
    &:focus {
        border-color: #007bff;
    }
`;

export const StyledTextArea = styled.textarea`
    padding: 12px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    outline: none;
    &:focus {
        border-color: #007bff;
    }
`;

export const StyledButton = styled.button`
    padding: 12px 25px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

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
    margin-top: -10px;
    margin-bottom: 10px;
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

export const ToggleButton = styled.button`
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
    }
`;
