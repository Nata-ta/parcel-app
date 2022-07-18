import React, { Component } from "react";

import './app.scss';

import AppHeader from "../app-header";
import CreatRequestForm from "../creat-request-form"
import RequestList from "../request-list";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        this.setState(({ data }) => {
            let localString = localStorage.getItem('data');

            let localData = localString ? JSON.parse(localString) : [];

            const newArr = [...localData];

            return {
                data: newArr
            }
        })
    }

    addItem(fromCity, toCity, typeParcel, dateDispach, parcelDiscr) {
        const newItem = {
            from: fromCity,
            destin: toCity,
            type: typeParcel,
            date: dateDispach,
            descr: parcelDiscr,
            id: new Date().getTime(),
            todayDate: new Date().toLocaleString()
        }
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            localStorage.setItem('data', JSON.stringify(newArr));
            return {
                data: newArr
            }
        })
    }

    deleteItem(id) {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);

            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

            localStorage.setItem('data', JSON.stringify(newArr));

            return {
                data: newArr
            }
        })
    }

    render() {
        return (
            <div className="app">
                <AppHeader />
                <CreatRequestForm
                    onAdd={this.addItem} />
                <RequestList
                    requests={this.state.data}
                    onDelete={this.deleteItem}
                />
            </div>
        )
    }
}
