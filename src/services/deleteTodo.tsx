import {Dispatch} from 'react';
import {Action} from '../todoReducer/todoReducer';

const deleteToDo = async (dispatch: Dispatch<Action>, id: string) => {
	dispatch({ type: 'delete-todo', payload: id })
}

export default deleteToDo