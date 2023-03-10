import React from 'react'
import ListComponent from './ListComponent';

export default class UserList extends React.Component{
    state = {
        list: null,
        loading: false
    }

    async componentDidMount(){
        const config = {

            headers:{
                'Content-type': 'application/json'
            }
        }
        config.headers['Authorization'] = "Token df19b57fdfffc473417b2b638fe9c41401a59a97"
        var url = 'http://localhost:8000/list/';

        const response = await fetch(url, config);
        const data = await response.json();
        console.log(data);
        this.setState({list: data , loading: false});

    }
    render() {
        return (
            <div>
            <ListComponent listName={'Minha Lista'} />
            <ListComponent listName={'Minha Lista 2'} />
        </div>
        )
        
    };
}