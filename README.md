# TODO

Todo is a simple little app. It's based on create-react-app and material-ui.

## Setup

To run this project you must have [Node.js](https://nodejs.org/en/download/) and [Yarn](https://yarnpkg.com/lang/en/docs/install) installed.

To get started, run these commands:

```
yarn
yarn test
```

You should see three failing tests. Your first job is to get these three tests passing!

Remember, we'd much rather see an incomplete response than nothing at all. Wherever you get to in the time limit, commit and push it.

## Feature One

Each task has a point value associated with it. This represents how important it is to us. The task list should always be shown with the most important tasks at the top of the list.

## Feature Two

We want to make it obvious at a glance which tasks are the really crucial ones. Any task that has a point value 10 or above should have a class 'critical' on it. Any other task should have the class 'normal'.

## Feature Three

Our users are keen to be able to add point values to tasks with a natural language style input. When a user inputs a task name they should be able to say, for example, 'do stuff 10pts' and have a task added of the form `{name: 'do stuff', points: 10}`.

## Feature Four

If you've got some extra time left, it would be great for our users to be able to update the point value of an existing task. Implement the UI however you think best.
