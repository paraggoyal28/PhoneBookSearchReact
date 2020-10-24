import styled from 'styled-components';
import { Button, Row } from 'antd';

const RemoveButton = styled(Button)`
    color: #FFFFFF;
    background: #EC0101;
    border-radius: 4px;
    :hover, :active, :focus {
        color: #FFFFFF;
        border: none;
        background: #F05454;
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

const StyledRow = styled(Row)`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const NameRow = styled(Row)`
    font-family: sans-serif;
    font-size: 18px;
`;

const NumberRow = styled(Row)`
    font-family: sans-serif;
    font-size: 18px;
`;

const CompanyRow = styled(Row)`
    font-family: sans-serif;
    font-size: 18px;
`;

const EmailRow = styled(Row)`
    font-family: sans-serif;
    font-size: 18px;
`;

const StyledSpan = styled.span`
    font-weight: 600;
`

export { RemoveButton, StyledRow, CancelButton, NameRow, NumberRow, EmailRow, CompanyRow, StyledSpan };