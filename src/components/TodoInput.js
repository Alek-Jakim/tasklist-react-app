import React, { Component } from 'react';

export default class TodoInput extends Component {
    render() {
        const { item, handleChange, handleSubmit, editItem } = this.props
        return (
            <div className="card">
                <div className="input-content">
                    <form className="form form-control" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <i className="fas fa-book icon"></i>
                            <input
                                type="text"
                                className="input-field"
                                placeholder="Add a new item..."
                                value={item}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" className={editItem ? 'edit' : 'btn'}>{editItem ? "Edit Item" : "Add Item"}</button>
                    </form>
                </div>
            </div>
        )
    }
}