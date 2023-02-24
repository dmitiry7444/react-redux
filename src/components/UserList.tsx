import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchUsers} from "../store/action-creators/user";
import {useAction} from "../hooks/useActions";

const UserList: FC = () => {
    const {users, loading, error} = useTypedSelector(state => state.user)

  const {fetchUsers} = useAction()

    useEffect(() => {
        fetchUsers();
    }, [])

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {users.map(user => <div key={user.id}>{user.name}</div>)}
        </div>
    );
};

export default UserList;