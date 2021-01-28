import React, { useReducer } from 'react';
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
	todos: Todo[]
}

function Task(props: Props) {
	const [state, dispatch] = useReducer(todoReducer, {
		todos: props.todos,
		currentName: '',
	})

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
							createToDo(dispatch, state.currentName)
						}}
					>
						<HStack spacing={4} justify="left">
							<Input
								value={state.currentName}
								onChange={(e) => {
									dispatch({ type: 'set-current', payload: e.target.value })
								}}
								placeholder="Add todo"
								size="sm"
							/>
							<Button type="submit" colorScheme="teal" size="sm">Create Todo</Button>
						</HStack>
					</form>
					{state.todos.map((todo, index) => (
						<List spacing={3} my={0} key={index}>
							<ListItem>
								<HStack spacing={'24px'} justify="left">
									<Box>
										<ListIcon as={CheckCircleIcon} color="green.500" />
											{todo.name}
										{' '}
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
					))}
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