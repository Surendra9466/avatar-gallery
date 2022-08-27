import React, { useState } from 'react'
import '../styles/User.scss';
import { HeartOutlined, HeartFilled, EditOutlined, DeleteOutlined, MailOutlined, PhoneOutlined, GoogleOutlined} from '@ant-design/icons';

function SingleUser({user,deleteElement}) {
  const [like, setLike] = useState(false);
  const url = `https://avatars.dicebear.com/v2/avataaars/${user.name}.svg?options[mood][]=happy`;
  return (
    <div className="w-72 rounded shadow-lg mr-8 mb-12">
                <img className="w-full bg-card pt-2" src={url} alt="avatar_name" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl py-1">{user.name}</div>
                    <div className='flex items-center'>
                        <MailOutlined />
                        <p className="text-gray-700 text-base pb-1 ml-3">{user.email}</p>
                    </div>
                    <div className='flex items-center'>
                        <PhoneOutlined />
                        <p className="text-gray-700 text-base pb-1 ml-3">{user.phone}</p>
                    </div>
                    <div className='flex items-center'>
                        <GoogleOutlined />
                        <p className="text-gray-700 text-base pb-1 ml-3">{user.website}</p>
                    </div>
                </div>
                <div className='flex justify-between items-center px-10 py-3 bg-card'>
                    <div className={`cursor-pointer flex items-center ${like ? 'liked' : ''}`} onClick={()=>{setLike(!like)}}>
                      {like ? <HeartFilled /> : <HeartOutlined />}
                    </div>
                    
                    <EditOutlined className='cursor-pointer' />
                    <DeleteOutlined className='cursor-pointer' onClick={()=>deleteElement(user.id)}/>
                </div>
            </div>
  )
}

export default SingleUser