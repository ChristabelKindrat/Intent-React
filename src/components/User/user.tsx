import React, { FC } from 'react';

import './user.style.scss';
import {IUser} from "../../interfaces";

const User: FC<IUser> = (user) =>{
const {firstName,lastName,email,phone,subscription} = user;

    return (
        <div>
            <h2>{firstName}</h2>
            <h2>{lastName}</h2>
            <div>email : {email}</div>
            <div>phone : {phone}</div>
            <div>subscription : {subscription}</div>
        </div>
    );
}
export {User};