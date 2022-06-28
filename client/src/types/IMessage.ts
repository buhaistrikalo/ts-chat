import { Moment } from 'moment';
import { IUser } from './IUser';

export type IMessage = {
    id: number | string;
    author: IUser;
    text: string;
    date: Moment;
};
