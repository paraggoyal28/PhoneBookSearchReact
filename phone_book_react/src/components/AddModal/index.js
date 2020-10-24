import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input, Select, Modal, Col, Form } from 'antd';
import { AddButton, StyledRow, ResetButton, CancelButton, StyledForm } from './styles';

const { Option } = Select;
const AddModal = ({ addModalVisible, title, closeModal, onFinish }) => {
    const prefixSelector = (
        <StyledForm.Item name="prefix" noStyle>
            <Select style={{ width: 70 }}>
                <Option value="91">+91</Option>
            </Select>
        </StyledForm.Item>
    );
    const layout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 16 },
    };
    const [formValues, setFormValues] = useState({});

    const handleChange = (form) => {
        setFormValues(form.getFieldsValue());
    }

    const [form] = Form.useForm();
    return (
        <Modal title={title} visible={addModalVisible} footer={null} onCancel={closeModal}>
            <StyledForm form={form} {...layout} name="registerModal" scrollToFirstError onFinish={onFinish}>
                <StyledForm.Item name="firstName" label="First Name" rules={[{
                    required: true,
                    message: 'Please enter your first name'
                }]}>
                    <Input onChange={() => handleChange(form)} />
                </StyledForm.Item>

                <StyledForm.Item name="lastName" label="Last Name">
                    <Input onChange={() => handleChange(form)} />
                </StyledForm.Item>

                <StyledForm.Item name="phone" label="Phone Number" rules={[{ required: true, message: 'Please input your phone number!' }]}>
                    <Input addonBefore={prefixSelector} style={{ width: '100%' }} onChange={() => handleChange(form)} />
                </StyledForm.Item>
                <StyledForm.Item name="email" label="Email Id" rules={[{
                    type: 'email',
                    message: 'The input is not a valid E-mail!',
                }]}>
                    <Input onChange={() => handleChange(form)} />
                </StyledForm.Item>
                <StyledForm.Item name="company" label="Company">
                    <Input onChange={() => handleChange(form)} />
                </StyledForm.Item>
                <StyledForm.Item>
                    <StyledRow>
                        <Col>
                            <AddButton disabled={!formValues['firstName'] || !formValues['phone']} htmlType="submit">
                                Add
                            </AddButton>
                            <ResetButton onClick={() => form.resetFields()}>
                                Reset
                            </ResetButton>
                            <CancelButton onClick={closeModal}>
                                Cancel
                            </CancelButton>
                        </Col>
                    </StyledRow>
                </StyledForm.Item>
            </StyledForm>
        </Modal>
    )
}


AddModal.propTypes = {
    addModalVisible: PropTypes.bool,
    closeModal: PropTypes.func,
    title: PropTypes.string,
    onFinish: PropTypes.func,
};

AddModal.defaultProps = {
    addModalVisible: false,
    closeModal: () => { },
    onFinish: () => { },
    title: 'Add a phone number'
};

export default AddModal;