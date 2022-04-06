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

export default ToDoList;
