import React, {useState} from 'react';
import {useForm} from 'react-hook-form';

import './modal.style.scss';
import {IUser} from "../../interfaces";
import {postUser} from "../../services/user.axios";

function Modal() {
    const [open, setOpen] = useState(false);
    const {register, handleSubmit, formState} = useForm<IUser>();

    const onSubmit = (newUser: IUser) => {
        try {
            newUser.id = Math.random();
            postUser(newUser).then(r => console.log(r.data));
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            <button className={"button_add"} onClick={() => setOpen(true)}>
                Add User
            </button>
            <div className={`modal ${open ? 'show' : ''}`}>
                <div className={'modal__content'}>
                    <form className={'modal__inputs'} onSubmit={handleSubmit(onSubmit)}>
                        <input type={"text"}
                               placeholder={'Firstname :'}
                               {...register("firstName", {required: true})}/>
                        <input type={"text"}
                               placeholder={'Lastname :'}
                               {...register("lastName", {required: true})}/>
                        <input type={"email"}
                               placeholder={'Gmail :'}
                               {...register("email", {required: true})}/>
                        <input type={"text"}
                               placeholder={'Phone number :'}
                               {...register("phone", {required: true})}/>
                        <input type={"text"}
                               placeholder={'Subscription: no, standard, premium'}
                               {...register("subscription", {required: true})}/>
                        <button className={"modal__buttons"}
                                type="submit" disabled={formState.isSubmitting}>
                            Save
                        </button>
                    </form>
                    <button className={'modal__buttons'}
                            onClick={() => setOpen(false)}>
                        Close Modal
                    </button>
                </div>
            </div>
        </>
    );
}

export {Modal};