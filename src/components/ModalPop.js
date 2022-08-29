import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import { EditOutlined } from '@ant-design/icons';
import "antd/dist/antd.min.css";
import '../styles/Modal.scss';
import { Input, Form } from 'antd';


function ModalPop({ id, user, data, setData }) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [userData, setUserData] = useState(user);

    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleOk = (id) => {

        if(userData.name==="" || userData.email==="" || userData.phone==="" || userData.website==="") {
            alert('required field is empty');
            return;
        }

        setIsModalVisible(false);
        const tempData = data.map((item) => {
            if (item.id === id) {
                item = userData;
            }
            return item
        })
        setData(tempData);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleData = (e) => {
        const key = e.target.id;
        const obj = {...userData};
        obj[key] = e.target.value;
        setUserData(obj)
    }

    return (
        <>
            <Button type="primary" onClick={showModal} >
                <EditOutlined className='cursor-pointer' />
            </Button>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={() => { handleOk(id) }} onCancel={handleCancel}>
                <Form name="basic"
                    labelCol={{ span: 3 }}
                    wrapperCol={{ span: 20 }}
                    autoComplete="off"
                >
                    <Form.Item label="Name" name="name" value={userData.name} rules={[{ required: true, message: 'Please input your username!' }]}>
                        <Input id="name" type="name" placeholder={userData.name} onChange={handleData}  />
                    </Form.Item>

                    <Form.Item label="email" name="useremail" rules={[{ required: true, type: 'email', message: 'Please input your email!' }]}>
                        <Input id="email" type="email" placeholder={userData.email} onChange={handleData} value={userData.email} />
                    </Form.Item>

                    <Form.Item label="Phone" name="phone" rules={[{ required: true, message: 'Please input your phone!' }]}>
                        <Input id="phone" type="phone" placeholder={userData.phone} onChange={handleData} value={userData.phone} />
                    </Form.Item>

                    <Form.Item label="Web" name="website" rules={[{ required: true, message: 'Please input your website!' }]}>
                        <Input id="website" type="website" placeholder={userData.website} onChange={handleData} value={userData.website} />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};


export default ModalPop