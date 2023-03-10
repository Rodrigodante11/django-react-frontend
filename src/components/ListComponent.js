import React from 'react'
import ItemComponent from './ItemComponent';


export default function ListComponent(props){

    return (
        <div>
            <h2> {props.listName }</h2><ul>
                <ItemComponent  name={'Item 1'}></ItemComponent>
                <ItemComponent  name={'Item 2'}></ItemComponent>
            </ul>
        </div>
    );
}