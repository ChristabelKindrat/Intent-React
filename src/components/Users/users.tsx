import React, {useEffect, useState} from 'react';

import './users.style.scss';
import {User} from '../index';
import {IUser} from "../../interfaces";
import {getUsers} from "../../services/user.axios";

function Users() {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        try {
            getUsers().then(({data}) => setUsers([...data]));
        } catch (e) {
            console.log(e);
        }
    }, [users]);

    return (
        <div className={'users_wrap'}>
            {
                users.map((user) =>
                    <User
                        id={user.id}
                        firstName={user.firstName}
                        lastName={user.lastName}
                        email={user.email}
                        phone={user.phone}
                        subscription={user.subscription}
                        key={user.id}
                    />
                )
            }
        </div>
    );
}

export {Users};