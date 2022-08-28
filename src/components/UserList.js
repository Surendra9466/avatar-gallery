import React, { useEffect, useState } from 'react';
import SingleUser from './SingleUser';
import Spinner from './Spinner';

function UserList() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const url = 'https://jsonplaceholder.typicode.com/users';

    const fetchApi = () => {
        fetch(url)
            .then((response) => {
                return response.json()
            })
            .then(json => {
                setLoading(false)
                setData(json)
            })
    }

    useEffect(() => {
        setTimeout(()=>{
            fetchApi();
        },1000)
    }, []);

    const deleteElement = (id) => {
        const tempData = data.filter((userData) => {
            return userData.id !== id;
        })
        setData(tempData);
    }

    if (loading) {
        return <Spinner />
    }
    if(data.length === 0) {
        return <div className='empty-msg'>Avatar List is empty...</div>
    }
    return (
        <div className='user-wrapper flex flex-wrap justify-evenly lg:justify-between flex-1 px-6 my-6' >
            {data.map((user) => {
                return <SingleUser user={user} data={data} setData={setData} key={user.id} deleteElement={deleteElement} />
            })}
        </div>
    )
}

export default UserList