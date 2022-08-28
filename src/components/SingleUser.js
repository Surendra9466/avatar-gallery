import React, { useState } from 'react'
import '../styles/User.scss';
import { HeartOutlined, HeartFilled, DeleteFilled, MailOutlined, PhoneOutlined, GoogleOutlined } from '@ant-design/icons';
import ModalPop from './ModalPop';

function SingleUser({ user, deleteElement, data, setData}) {
  const [like, setLike] = useState(false);
  const url = `https://avatars.dicebear.com/v2/avataaars/${user.name}.svg?options[mood][]=happy`;
  return (
    <div className="card w-72 rounded shadow-lg mr-0 mb-12 break-all">
      <img className="w-full bg-card pt-2" src={url} alt="avatar_name" />
      <div className="px-6 py-4 break-words	">
        <div className="font-bold text-xl py-1">{user.name}</div>
        <div className='flex items-center mb-1'>
          <MailOutlined />
          <p className="text-gray-700 text-base pb-1 ml-3 mb-0">{user.email}</p>
        </div>
        <div className='flex items-center mb-1'>
          <PhoneOutlined />
          <p className="text-gray-700 text-base pb-1 ml-3 mb-0">{user.phone}</p>
        </div>
        <div className='flex items-center mb-1'>
          <GoogleOutlined />
          <p className="text-gray-700 text-base pb-1 ml-3 mb-0">{user.website}</p>
        </div>
      </div>
      <div className='flex justify-between items-center px-10 py-3 bg-card'>
        <div className='cursor-pointer flex items-center liked' onClick={() => { setLike(!like) }}>
          {like ? <HeartFilled /> : <HeartOutlined />}
        </div>
        <ModalPop id={user.id} data={data} setData={setData}/>
        <DeleteFilled className='delete cursor-pointer' onClick={() => deleteElement(user.id)} />
      </div>
    </div>
  )
}

export default SingleUser