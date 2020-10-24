import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';
import { StyledSearch, StyledRow, StyledDiv, StyledAvatar, StyledSpan, StyledButton, StyledPhone } from './styles';
import 'antd/dist/antd.css';

class PhoneBookPage extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const users = this.props.value ? this.props.searchedUsers : this.props.userNames;
        return (
            <>
                <StyledDiv>
                    <StyledSearch onChange={(e) => this.props.handleChange(e.target.value)} value={this.props.value} placeholder={this.props.placeholder} enterButton />
                    <StyledButton type="primary" onClick={this.props.addPhone}>Add a phone number</StyledButton>
                </StyledDiv>
                <StyledPhone>
                    {users.map(name =>
                        <StyledRow key={name} onClick={(e) => this.props.displayModal(name)}>
                            <Tooltip title={name}>
                                <StyledAvatar backgroundcolor={this.props.userDetails[name]['color']}>
                                    {name.split(' ').map(n => n[0].toUpperCase()).join('')}
                                </StyledAvatar>
                            </Tooltip>
                            <StyledSpan>
                                {this.props.userDetails[name]['phone']}
                            </StyledSpan>
                        </StyledRow>
                    )}
                </StyledPhone>
            </>
        )
    }


}

PhoneBookPage.propTypes = {
    placeholder: PropTypes.string,
    onSearch: PropTypes.func,
    addPhone: PropTypes.func,
    userNames: PropTypes.arrayOf(PropTypes.string),
    userDetails: PropTypes.shape({}),
    displayModal: PropTypes.func,
    handleChange: PropTypes.func,
    value: PropTypes.string,
    searchedUsers: PropTypes.arrayOf(PropTypes.string),
};

PhoneBookPage.defaultProps = {
    placeholder: 'Type phone number',
    onSearch: () => { },
    addPhone: () => { },
    userNames: [],
    userDetails: {},
    displayModal: () => { },
    handleChange: () => { },
    value: '',
    searchedUsers: [],
};

export default PhoneBookPage;