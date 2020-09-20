import React, { Component } from 'react';

export default class TodoItem extends Component {
    render() {
        const { title, handleDelete, handleEdit } = this.props
        return (
            <li className="list-item">
                <h4 className="item-title">{title}</h4>
                <div className="todo-icon">
                    <span className="item-edit" onClick={handleEdit}>
                        <i className="fas fa-pen"></i>
                    </span>
                    <span className="item-delete" onClick={handleDelete}>
                        <i className="fas fa-trash"></i>
                    </span>
                </div>
            </li>
        )
    }
}