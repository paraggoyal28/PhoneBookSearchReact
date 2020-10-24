import { Input, Button, Avatar, Row } from 'antd';
import styled from 'styled-components';
const { Search } = Input;


const StyledSearch = styled(Search)`
    flex-grow: 1;
`;

const StyledInput = styled(Input)`
    flex-grow: 1;
`;

const StyledButton = styled(Button)`
    margin-left: 10px;
`;

const StyledPhone = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledAvatar = styled(Avatar)`
    background-color: ${props => props.backgroundcolor}
`;

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
`;

const StyledRow = styled(Row)`
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 5px;
    background-color: #FFF5EA;
`;

const StyledSpan = styled.span`
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export { StyledSearch, StyledDiv, StyledButton, StyledInput, StyledRow, StyledAvatar, StyledSpan, StyledPhone }; 