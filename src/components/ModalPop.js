import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import { EditOutlined, SecurityScanTwoTone } from '@ant-design/icons';
import "antd/dist/antd.min.css";
import '../styles/Modal.scss';
import { Input } from 'antd';


function ModalPop({ id, data, setData }) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [userData, setUserData] = useState({});
    let tempUserData = {};

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = (id) => {
        setIsModalVisible(false);
        const tempData = data.map((item) => {
            if (item.id === id) {
                item = tempUserData;
            }
            return item
        })
        console.log(tempUserData);
        setData(tempData);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleData = (e)=>{
        if(e.target.id === 'name') {
            tempUserData = {...tempUserData,name:e.target.value} 
        }
        else if(e.target.id === 'email') {
            tempUserData = {...tempUserData,email:e.target.value} 
        }
        else if(e.target.id === 'phone') {
            tempUserData = {...tempUserData,phone:e.target.value} 
        }
        else if(e.target.id === 'website'){
            tempUserData = {...tempUserData,website:e.target.value} 
        }else{
            console.log('Error: Unknown data');
        }
    }

    return (
        <>
            <Button type="primary" onClick={showModal}>
                <EditOutlined className='cursor-pointer' />
            </Button>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={() => { handleOk(id) }} onCancel={handleCancel}>
                <div className='py-2'>
                    <label htmlFor="name" className='my-5' >Name:</label>
                    <Input id="name" type="name" placeholder='Ervin Howell' onChange={handleData} />
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <Input id="email" type="email" placeholder='Shanna@melissa.tv' onChange={handleData} />
                </div>

                <div>
                    <label htmlFor="phone">Phone:</label>
                    <Input id="phone" type="phone" placeholder='010-692-6593 x09125' onChange={handleData} />
                </div>

                <div>
                    <label htmlFor="website">Website:</label>
                    <Input id="website" type="website" placeholder='anastasia.net' onChange={handleData} />
                </div>
            </Modal>
        </>
    );
};


export default ModalPop