import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { authUserActions } from 'store/reducers/auth.slice';
import { messagesActions } from 'store/reducers/messages.slice';

const allActions = {
    ...authUserActions,
    ...messagesActions,
};

export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(allActions, dispatch);
};
