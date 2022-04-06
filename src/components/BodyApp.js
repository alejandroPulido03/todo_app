import React from 'react';

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

function ToDoList(props) {
	let globalId = 0;
	const arrOfElements = props.list.map(e => (
		<li key={globalId++} className='list-element__container'>
			<TodoElement element={e}></TodoElement>
		</li>
	));
	return <ul className='todo-list__container'>{arrOfElements}</ul>;
}

function TodoElement(props) {
	return <p>{props.element}</p>;
}

export default BodyApp;
