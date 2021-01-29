import React, {useEffect, useReducer} from 'react';
import createToDo from '../services/createTodo';
import todoReducer, {Todo} from '../components/todoReducer';
import deleteToDo from '../services/deleteTodo';
import {Container} from './Container';
import {Hero} from './Hero';
import {Main} from './Main';
import {
	Text,
	Code,
	List,
	ListIcon,
	ListItem,
	Button,
	Input,
	HStack,
	Box
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'
import { DarkModeSwitch } from './DarkModeSwitch'
import { CTA } from './CTA'
import { Footer } from './Footer'

type Props = {
	initialState: Todo[],
	onState: any
}

function Task({initialState, onState}: Props) {
	const [state, dispatch] = useReducer(todoReducer, {
		todos: initialState,
		currentName: '',
		currentPoint: 1
	})

	useEffect(() => {
		return onState
	}, [])

	return (
		<div>
			<Container height="100vh">
				<Hero />
				<Main>
					<Text>
						Example repository of <Code>Next.js</Code> + <Code>chakra-ui</Code> +{' '}
						<Code>typescript</Code>.
					</Text>
					<form
						onSubmit={(ev) => {
							ev.preventDefault()
							createToDo(dispatch, state.currentName, state.currentPoint)
						}}
					>
						<HStack spacing={4} justify="left">
							<Input
								onChange={(e) => {
									const lastValue = /\s(\w+)$/gm.exec(e.target.value);
									if(lastValue !== null) {
										const lastWord = lastValue[1]
										const point = /\d+/g.exec(lastWord)
										const currentP = Number(point)
										dispatch({ type: 'set-currentPoint', payload: currentP })
									}
									const sentence = e.target.value
									let newStr=sentence.replace(/\S+$/,'')
									dispatch({ type: 'set-current', payload: newStr })
								}}
								placeholder="Add todo"
								size="sm"
							/>
							<Button type="submit" colorScheme="teal" size="sm">Create Todo</Button>
						</HStack>
					</form>
					{state.todos.length > 0 ? state.todos.map((todo, index) => (
						<List spacing={3} my={0} key={index}>
							<ListItem>
								<HStack spacing={'24px'} justify="left">
									<Box>
										<ListIcon as={CheckCircleIcon} color="green.500" />
											{todo.name}
											{' '}
											{todo.point}
										<LinkIcon />
									</Box>
									<Button
										colorScheme="teal" size="sm"
										onClick={() => {
											deleteToDo(dispatch, todo.id)
										}}
									>
										delete
									</Button>
								</HStack>
							</ListItem>
						</List>
					))
					: null}
				</Main>

				<DarkModeSwitch />
				<Footer>
					<Text>React ❤️ Next</Text>
				</Footer>
				<CTA />
			</Container>
		</div>
	);
}

export default Task;