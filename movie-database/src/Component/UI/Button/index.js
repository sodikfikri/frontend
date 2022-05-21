import styled from 'styled-components'
import { css } from 'styled-components';


const Button = styled.button`
    padding: 1rem;
    border-radius: 10px;
    cursor: pointer;
    color: #fff;
    border:  none;

    // access props variant
    background-color: ${({ variant, theme }) => theme.colors[variant] || theme.colors.primary};

    // access props full
    ${(props) => props.full && css`
        display: block;
        width: 100%;
    `}

    // set btn size
    ${({ size, theme }) => theme.btn[size] || theme.btn.md }

`

export default Button