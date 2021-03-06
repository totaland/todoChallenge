import {nanoid} from 'nanoid';
import {Dispatch} from 'react';
import {Action} from '../components/todoReducer';


const createToDo = async (dispatch: Dispatch<Action>, currentToDo: string, point=1) => {
	const todo = {
		id: nanoid(),
		name: currentToDo,
		point
	}
	// @ts-ignore
	dispatch({ type: 'add-todo', payload: todo })
	dispatch({ type: 'reset-current' })
}

export default createToDo;