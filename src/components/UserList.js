import React from 'react';
import SingleUser from './SingleUser';
import useApi from '../customHook/useApi'
import Spinner from './Spinner';

function UserList() {
    const { loading, data } = useApi('https://jsonplaceholder.typicode.com/users');
    if(loading) {
        return <Spinner /> 
    }

    const deleteElement = (id)=>{
        const tempData = data.filter((userData)=>{
            return userData.id !== id;
        })
        console.log(tempData);
    }

    return (
        <div className='user-wrapper flex flex-wrap flex-1 px-6 my-6' >
            {data.map((user, idx) => {
                return <SingleUser user={user} key={user.id} deleteElement={deleteElement}/>
            })}
        </div>
    )
}

export default UserList