import React from 'react'
import ListComponent from './ListComponent';

export default function UserList(){

    return (
        <div>
            <ListComponent listName={'Minha Lista'} />
            <ListComponent listName={'Minha Lista 2'} />
        </div>
    );
}