import React from 'react';
import ToDoList from './ToDoList';

class BodyApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todoQueue: [],
		};
	}
	render() {
		return (
			<div className='app-body__container'>
				<TextAreaToDo onKeyUp={e => this.getTextTodo(e)}></TextAreaToDo>
				<ToDoList list={this.state.todoQueue}></ToDoList>
			</div>
		);
	}

	getTextTodo(textArea) {
		if (textArea.key === 'Enter' && textArea.target.value) {
			this.setState({
				todoQueue: this.state.todoQueue.concat(textArea.target.value),
			});
			textArea.target.value = '';
		}
	}
}

function TextAreaToDo(props) {
	return (
		<div className='new-task-input__container'>
			<span className='new-task-input__btn'></span>
			<input
				className='new-task__input'
				onKeyUp={e => props.onKeyUp(e)}
				placeholder='Create a new todo...'
			></input>
		</div>
	);
}

export default BodyApp;
