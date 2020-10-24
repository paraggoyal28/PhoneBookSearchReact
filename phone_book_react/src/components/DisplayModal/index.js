import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import { RemoveButton, StyledSpan, NameRow, NumberRow, StyledRow, CancelButton, CompanyRow, EmailRow } from './styles';

const DisplayModal = ({ title, firstName, lastName, phoneNumber, email, company, displayModalVisible, closeDisplayModal, removeRecord }) => {
    const fullName = `${firstName} ${lastName}`;
    return (
        <Modal title={title} footer={null} visible={displayModalVisible} onCancel={closeDisplayModal}>
            <NameRow>
                <StyledSpan>FullName</StyledSpan>: {fullName}
            </NameRow>
            <NumberRow>
                <StyledSpan>PhoneNumber</StyledSpan>: {phoneNumber}
            </NumberRow>
            <EmailRow>
                <StyledSpan>Email</StyledSpan>: {email}
            </EmailRow>
            <CompanyRow>
                <StyledSpan>Company</StyledSpan>: {company}
            </CompanyRow>
            <StyledRow>
                <RemoveButton onClick={() => removeRecord(fullName)}>
                    Remove
                </RemoveButton>
                <CancelButton onClick={closeDisplayModal}>
                    Cancel
                </CancelButton>
            </StyledRow>
        </Modal>
    )
}

DisplayModal.propTypes = {
    title: PropTypes.string,
    lastName: PropTypes.string,
    firstName: PropTypes.string,
    phoneNumber: PropTypes.string,
    email: PropTypes.string,
    company: PropTypes.string,
    closeDisplayModal: PropTypes.func,
    removeRecord: PropTypes.func,
    displayModalVisible: PropTypes.bool,
}

DisplayModal.defaultProps = {
    title: "User Details",
    lastName: "",
    firstName: "",
    phoneNumber: "",
    email: "",
    company: "",
    displayModalVisible: false,
    removeRecord: () => { },
    closeDisplayModal: () => { },
}

export default DisplayModal;