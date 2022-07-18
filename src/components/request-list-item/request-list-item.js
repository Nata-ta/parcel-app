import React, { Component } from "react";

import Modal from '../edit-delete-action/edit-delete-action';

export default class RequestListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };

        this.showModal = this.showModal.bind(this);
    }

    showModal = e => {
        this.setState({
            show: !this.state.show
        });
    };

    render() {
        const { from, destin, type, date, descr, todayDate, onDelete } = this.props;
        return (
            <div className="request-list-item d-flex justify-content-between p-4">
                <div>
                    <p>The request was made {todayDate}</p>
                    <p>
                        <span className="fw-bold">From: </span>
                        <span>
                            {from}
                        </span>
                    </p>
                    <p>
                        <span className="fw-bold">To: </span>
                        <span>
                            {destin}
                        </span>
                    </p>
                    <p>
                        <span className="fw-bold">Type of parcel: </span>
                        <span>
                            {type}
                        </span>
                    </p>
                    <p>
                        <span className="fw-bold">Date of dispatch: </span>
                        <span>
                            {date}
                        </span>
                    </p>
                    <p>
                        <span className="fw-bold">Parcel description: </span>
                        <span>
                            {descr}
                        </span>
                    </p>
                </div>
                <div>
                    <button
                        className="btn btn-outline-secondary btn-sm"
                        type="button"
                        onClick={this.showModal}
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop">
                        <i className="fa fa-solid fa-pen"></i>
                    </button>
                </div>
                <Modal onClose={this.showModal} show={this.state.show} onDelete={onDelete}>
                    Do you want to delete the request?
                </Modal>
            </div>
        )
    }
}