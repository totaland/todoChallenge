import produce from 'immer';
import {nanoid} from 'nanoid';
import {Reducer} from 'react';

export interface Todo {
	name: string,
	id: string,
}

type State = {
	todos: Todo[]
	currentName: string,
}

export type Action =
	| { type: 'add-todo'; payload: Todo }
	| { type: 'delete-todo'; payload: string }
	| { type: 'reset-current' }
	| { type: 'set-current'; payload: string }

const todoReducer: Reducer<State, Action> = (state, action) => {
	switch (action.type) {
		case 'add-todo': {
			return produce(state, (draft) => {
				draft.todos.push(action.payload)
			})
		}
		case 'delete-todo': {
			const index = state.todos.findIndex(({ id }) => action.payload === id)
			if (index === -1) return state
			return produce(state, (draft) => {
				draft.todos.splice(index, 1)
			})
		}
		case 'reset-current': {
			return produce(state, (draft) => {
				draft.currentName = ''
			})
		}
		case 'set-current': {
			return produce(state, (draft) => {
				draft.currentName = action.payload
			})
		}
		default: {
			return state
		}
	}
}

export default todoReducer;