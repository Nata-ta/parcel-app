import React, { Component } from "react";

import './edit-delete-action.scss';

export default class Modal extends Component {
    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };
    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <div className="app__modal">
                <div className="app__modal-content">
                    <p className="app__modal-text">{this.props.children}</p>
                    <div className="app__modal-footer btn-group">
                        <button className="btn btn-secondary btn-lg" type="button" onClick={this.onClose}>Close</button>
                        <button className="btn btn-primary btn-lg" type="button" onClick={this.props.onDelete}>Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}