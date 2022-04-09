import React from 'react';
import ToDoList from './ToDoList';

class BodyApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			allTasks: [],
		};
	}

	getTextTodo(textArea) {
		if (textArea.key === 'Enter' && textArea.target.value) {
			const task = {
				value: textArea.target.value,
				isCompleted: false,
			};
			this.setState({
				allTasks: this.state.allTasks.concat(task),
			});
			textArea.target.value = '';
		}
	}

	completedTaskState(element) {
		const taskUpdated = [...this.state.allTasks];
		taskUpdated[element].isCompleted = !taskUpdated[element].isCompleted;
		this.setState({
			allTasks: taskUpdated,
		});
	}

	deleteTask(elem) {
		const taskUpdated = [...this.state.allTasks];
		taskUpdated.splice(elem, 1);
		this.setState({
			allTasks: taskUpdated,
		});
	}

	handlerCleanList() {
		this.setState({ allTasks: [] });
	}

	render() {
		return (
			<div className='app-body__container'>
				<TextAreaToDo onKeyUp={e => this.getTextTodo(e)}></TextAreaToDo>
				<ToDoList
					list={this.state.allTasks}
					handlerCleanList={() => this.handlerCleanList()}
					completedTsk={e => this.completedTaskState(e)}
					deleteTask={e => this.deleteTask(e)}
				></ToDoList>
			</div>
		);
	}
}

function TextAreaToDo(props) {
	return (
		<div className='new-task-input__container'>
			<span className='new-task-input__btn element-completeTask__btn'></span>
			<input
				className='new-task__input'
				onKeyUp={e => props.onKeyUp(e)}
				placeholder='Create a new todo...'
			></input>
		</div>
	);
}

export default BodyApp;
