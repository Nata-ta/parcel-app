import React, { Component } from "react";

export default class CreatRequestForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fromCity: '',
            toCity: '',
            typeParcel: '',
            dateDispach: '',
            parcelDiscr: ''
        };
        this.onInputchange = this.onInputchange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onInputchange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.state.fromCity, this.state.toCity, this.state.typeParcel, this.state.dateDispach, this.state.parcelDiscr);
        this.setState({
            fromCity: '',
            toCity: '',
            typeParcel: '',
            dateDispach: '',
            parcelDiscr: ''
        });

    }

    render() {
        return (
            <form
                id="postForm"
                className="mb-5"
                onSubmit={this.onSubmit}>
                <div className="row mb-3">
                    <div className="col">
                        <label
                            htmlFor="from-fild"
                            className="form-label">
                            From:</label>
                        <select
                            name="fromCity"
                            id="from-fild"
                            className="form-select"
                            onChange={this.onInputchange}
                            value={this.state.fromCity}>
                            <option defaultValue>Choose the option</option>
                            <option value="Kyiv">Kyiv</option>
                            <option value="Kharkiv">Kharkiv</option>
                            <option value="Lviv">Lviv</option>
                            <option value="Odessa">Odessa</option>
                            <option value="Dnipro">Dnipro</option>
                            <option value="Zaporizhzhia">Zaporizhzhia</option>
                            <option value="Kryvyi Rih">Kryvyi Rih</option>
                            <option value="Vinnytsia">Vinnytsia</option>
                            <option value="Chernihiv">Chernihiv</option>
                            <option value="Poltava">Poltava</option>
                            <option value="Cherkasy">Cherkasy</option>
                            <option value="Sumy">Sumy</option>
                            <option value="Rivne">Rivne</option>
                            <option value="Konotop">Konotop</option>
                            <option value="Uman">Uman</option>
                        </select>
                    </div>
                    <div className="col">
                        <label
                            htmlFor="destin-fild"
                            className="form-label">
                            To:</label>
                        <select
                            name="toCity"
                            id="destin-fild"
                            className="form-select"
                            onChange={this.onInputchange}
                            value={this.state.toCity}
                        >
                            <option defaultValue>Choose the option</option>
                            <option value="Kyiv">Kyiv</option>
                            <option value="Kharkiv">Kharkiv</option>
                            <option value="Lviv">Lviv</option>
                            <option value="Odessa">Odessa</option>
                            <option value="Dnipro">Dnipro</option>
                            <option value="Zaporizhzhia">Zaporizhzhia</option>
                            <option value="Kryvyi Rih">Kryvyi Rih</option>
                            <option value="Vinnytsia">Vinnytsia</option>
                            <option value="Chernihiv">Chernihiv</option>
                            <option value="Poltava">Poltava</option>
                            <option value="Cherkasy">Cherkasy</option>
                            <option value="Sumy">Sumy</option>
                            <option value="Rivne">Rivne</option>
                            <option value="Konotop">Konotop</option>
                            <option value="Uman">Uman</option>
                        </select>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <label
                            htmlFor="parcel-fild"
                            className="form-label">
                            Type of parcel:</label>
                        <select
                            name="typeParcel"
                            id="parcel-fild"
                            className="form-select"
                            onChange={this.onInputchange}
                            value={this.state.typeParcel}
                        >
                            <option defaultValue>Choose the option</option>
                            <option value="Gadgets">Gadgets</option>
                            <option value="Drinks">Drinks</option>
                            <option value="Clothes">Clothes</option>
                            <option value="Medicines">Medicines</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="col">
                        <label
                            htmlFor="date-fild"
                            className="form-label">
                            Date of dispatch</label>
                        <input
                            name="dateDispach"
                            type="date"
                            id="data-fild"
                            placeholder="Choose the date"
                            className="form-control"
                            onChange={this.onInputchange}
                            value={this.state.dateDispach}
                        />
                    </div>
                </div>
                <div className="form-floating mb-3">
                    <textarea
                        name="parcelDiscr"
                        placeholder="Enter the information"
                        className="form-control"
                        id="descr-fild"
                        onChange={this.onInputchange}
                        value={this.state.parcelDiscr}
                    />
                    <label
                        htmlFor="date-fild">
                        Parcel description</label>
                </div>
                <div className="d-grid gap-2">
                    <button
                        type="submit"
                        className="btn btn-primary">
                        Submit</button>
                </div>
            </form>
        )
    }
}