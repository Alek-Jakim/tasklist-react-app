import React, { Component } from 'react';
import TodoItem from './TodoItem'

export default class TaskList extends Component {
    render() {
        const { items, clearList, handleDelete, handleEdit } = this.props
        return (
            <div>
                <ul className="list-group">
                    <h3 className="task-title">Task List</h3>
                    {
                        items.map(item => {
                            return (

                                <TodoItem
                                    key={item.id}
                                    title={item.title}
                                    handleDelete={() => handleDelete(item.id)}
                                    handleEdit={() => handleEdit(item.id)}
                                />
                            )
                        })
                    }

                    <button
                        type="button"
                        className="btn btn-clear"
                        onClick={clearList}>Clear List</button>
                </ul>
            </div>
        )
    }
}