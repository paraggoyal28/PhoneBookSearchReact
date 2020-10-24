import styled from 'styled-components';
import { Button, Form, Row } from 'antd';

const StyledRow = styled(Row)`
    display: flex;

`;

const StyledForm = styled(Form)`
`

const AddButton = styled(Button)`
    color: #FFFFFF;
    background: #81B214;
    border-radius: 4px;
    :hover, :active, :focus {
        color: #FFFFFF;
        border: none;
        background: #7EA04D;
    }
`;

const ResetButton = styled(Button)`
    background: #FFE05D;
    margin-left: 10px;
    color: #FFFFFF;
    border-radius: 4px;
    :hover, :active, :focus {
        color: #FFFFFF;
        background: #F0A500;
        border: none;
    }
`;

const CancelButton = styled(Button)`
    color: #FFFFFF;
    margin-left: 10px;
    background: #C87941;
    border-radius: 4px;

    :hover, :active, :focus {
        color: #FFFFFF;
        background: #87431D;
        border: none;
    }
`;

export { AddButton, StyledRow, ResetButton, CancelButton, StyledForm };