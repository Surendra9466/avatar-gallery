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
    console.log(userData)
    const handleOk = (id) => {
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
        console.log(key)
        
        // setUserData((prev) => {
        //     return {
        //         ...prev,
        //         key: e.target.value
        //     }
        // })

        if (e.target.id === 'name') {
            setUserData((prev) => {
                return {
                    ...prev,
                    name: e.target.value
                }
            })
        }
        else if (e.target.id === 'email') {
            setUserData((prev) => {
                return {
                    ...prev,
                    email: e.target.value
                }
            })
        }
        else if (e.target.id === 'phone') {
            setUserData((prev) => {
                return {
                    ...prev,
                    phone: e.target.value
                }
            })
        }
        else if (e.target.id === 'website') {
            setUserData((prev) => {
                return {
                    ...prev,
                    website: e.target.value
                }
            })
        } else {
            console.log('Error: Unknown data');
        }
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
                    initialValues={{ remember: true }}
                    autoComplete="off"
                >
                    <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input your username!' }]}>
                        <Input id="name" type="name" placeholder='Ervin Howell' onChange={handleData} value={userData.name} />
                    </Form.Item>

                    <Form.Item label="email" name="useremail" rules={[{ required: true, type: 'email', message: 'Please input your email!' }]}>
                        <Input id="email" type="email" placeholder='Shanna@melissa.tv' onChange={handleData} value={userData.email} />
                    </Form.Item>

                    <Form.Item label="Phone" name="phone" rules={[{ required: true, message: 'Please input your phone!' }]}>
                        <Input id="phone" type="phone" placeholder='010-692-6593 x09125' onChange={handleData} value={userData.phone} />
                    </Form.Item>

                    <Form.Item label="Web" name="website" rules={[{ required: true, message: 'Please input your website!' }]}>
                        <Input id="website" type="website" placeholder='anastasia.net' onChange={handleData} value={userData.website} />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};


export default ModalPop