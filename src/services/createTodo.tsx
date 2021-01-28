import {nanoid} from 'nanoid';
import {Dispatch} from 'react';
import {Action} from '../components/todoReducer';

const MY_ID = nanoid()

const createToDo = async (dispatch: Dispatch<Action>, currentToDo: string) => {
	const todo = {
		id: nanoid(),
		name: currentToDo,
		createdAt: `${Date.now()}`,
		completed: false,
		todoTodoListId: 'global',
		userId: MY_ID,
	}
	// @ts-ignore
	dispatch({ type: 'add-todo', payload: todo })
	dispatch({ type: 'reset-current' })
}

export default createToDo;