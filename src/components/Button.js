import styled from 'styled-components'

const Button = styled.button`
    background: ${({ bgColor }) => bgColor === 'red' ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'};
    border: none;
    border-radius: 3px;
    box-shadow: ${({ bgColor }) => bgColor === 'red' ? '0 3px 5px 2px rgba(255, 105, 135, .3)' : '0 3px 5px 2px rgba(33, 203, 243, .3)'};
    color: white;
    padding: 8px 32px;
`

export default Button