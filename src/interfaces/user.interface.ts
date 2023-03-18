type subscription = 'no'|'standard'|'premium';

interface IUser {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    subscription : subscription,
}

export type{
    IUser
}