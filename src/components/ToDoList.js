import React from 'react';

class ToDoList extends React.Component {
	constructor(props) {
		super(props);
		this.globalId = 0;
	}

	render() {
		const arrOfElements = this.props.list.map((e, i) => (
			<li key={this.globalId++} className='list-element__container'>
				<TodoElement
					element={e}
					completedTsk={() => this.props.completedTsk(i)}
					deleteTask={() => this.props.deleteTask(i)}
				></TodoElement>
			</li>
		));
		return (
			<ul className='todo-list__container'>
				{arrOfElements}
				{this.props.list.length > 0 && (
					<AllListHandler
						numItems={this.props.list.length}
						handlerCleanList={this.props.handlerCleanList}
					></AllListHandler>
				)}
			</ul>
		);
	}
}

function TodoElement(props) {
	const completed = props.element.isCompleted ? 'isCompleted' : '';
	return (
		<div className='task-elements__container'>
			<div
				className={`element-completeTask__btn ${completed}`}
				onClick={() => props.completedTsk()}
			></div>
			<p className={completed && completed + 'btn'}>
				{props.element.value}
			</p>
			<button
				className='element-hidden-delete__btn'
				onClick={() => props.deleteTask()}
			></button>
		</div>
	);
}

function AllListHandler(props) {
	return (
		<li className='list-element__container list-handler__container '>
			<span>{`${props.numItems} item${
				props.numItems > 1 ? 's' : ''
			} left`}</span>
			<button
				className='listHandler-clear__btn'
				onClick={() => props.handlerCleanList()}
			>
				Clear Completed
			</button>
		</li>
	);
}

export default ToDoList;
