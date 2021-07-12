# Putting it All Together: React Fetch CRUD Lab

## Learning Goals

- Use the `useEffect` hook to fetch data from an API
- Use event handlers with `fetch` to send data to an API
- Update state after receiving data from an API

## Introduction

We're building a grocery list!

## Setup

As usual, make sure to run `npm install` to install the necessary dependencies.

For this lab, we'll be using `json-server` to create a RESTful API with our quiz
data. You can run `json-server` by running `npm run server` (the command for
this is in the `package.json` file). Once your server is running, go to
`http://localhost:4000/groceries` in your browser and have a look at the data.

Then, in a new terminal tab, run `npm start` to run the React application.

## Deliverables

### GET /groceries

When the application loads, get all the groceries from
`http://localhost:4000/groceries` and display them.

You'll need to add `useState` and `useEffect` for this deliverable, but it's up
to you to decide where it belongs!

### POST /groceries

Add the ability to add a new grocery

For the API to work, you'll need to format your POST request like this:

```txt
POST /groceries

Required Headers:
{ "Content-Type": "application/json" }

Body:
{
  "name": string,
  "isBought": boolean
}
```

In addition to updating the form, you should display the new grocery.

**NOTE**: because `json-server` doesn't have any validations, if you make any
mistakes and send the body of your request in the wrong format, you'll need to
manually delete the entry from the `db.json` file.

### DELETE /groceries/:id

Add a delete button to remove a grocery of a given id

### PATCH /groceries/:id

Toggling a grocery will mark it as bought and should show a line through the grocery name

## Resources

- [Using `fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [React `fetch` with `useEffect` Example][react ajax]
- [React State and Arrays](https://github.com/learn-co-curriculum/react-hooks-state-arrays)

[react ajax]: https://reactjs.org/docs/faq-ajax.html#example-using-ajax-results-to-set-local-state
