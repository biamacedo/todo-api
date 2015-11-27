
# Todo Notes API

A Node JS api to keep track of your todo's.

* * *

## API Requests

> #### Authentication
> Authentication is necessary for all requests. User needs to be in **/users** list and the authentication token from login must be passed on header of all requests.
>
> *Example Header:*
> ```
> Content-Type → application/json
> Auth → {token}
> ```

### GET /todos
Returns an array of todo items

*Return Example:*
```json
[
  {
    "id": 1,
    "description": "My First Todo",
    "completed": false,
    "createdAt": "2015-11-27T02:33:45.990Z",
    "updatedAt": "2015-11-27T02:33:45.990Z"
  },
  {
    "id": 2,
    "description": "My Second Todo",
    "completed": false,
    "createdAt": "2015-11-27T02:36:12.406Z",
    "updatedAt": "2015-11-27T02:36:12.406Z"
  },
  {
    "id": 3,
    "description": "My Third Todo",
    "completed": true,
    "createdAt": "2015-11-27T02:36:15.915Z",
    "updatedAt": "2015-11-27T02:36:15.915Z"
  }
]
```

### GET /todos?completed=true
Returns an array of todo items according to query.

*Return Example:*
```json
[
  {
    "id": 3,
    "description": "My Third Todo",
    "completed": true,
    "createdAt": "2015-11-27T02:36:15.915Z",
    "updatedAt": "2015-11-27T02:36:15.915Z"
  }
]
```

### GET /todos/:id
Returns todo item json

*Return Example:* /todos/2
```json
{
  "id": 2,
  "description": "My Second Todo",
  "completed": false,
  "createdAt": "2015-11-27T02:36:12.406Z",
  "updatedAt": "2015-11-27T02:36:12.406Z"
}
```

### POST /todos
Inserts a todo on todo's list

*Post Example:*
```json
{
    "description": "My First Todo",
    "completed": false
}
```
*Return:*
```json
{
  "id": 1,
  "description": "My First Todo",
  "completed": false,
  "updatedAt": "2015-11-27T02:30:27.246Z",
  "createdAt": "2015-11-27T02:30:27.246Z"
}
```

### DELETE /todos/:id
Deletes a todo by id.

*Example:* /todos/1

*Return:* 204 No Content = Delete successful

### PUT **/todos/:id**
Updates todo information.

*Example:* todos/1
```json
{
  "description": "Updated Todo"
}
```
*Return:*
```json
{
  "id": 1,
  "description": "Updated Todo",
  "completed": false,
  "createdAt": "2015-11-27T02:30:27.246Z",
  "updatedAt": "2015-11-27T02:30:48.460Z"
}
```

### POST /users
Inserts a new user to database.

*Example:*
```json
{
    "email": "admin@example.com",
    "password": "abc123456"
}
```
*Return:*
```json
{
  "id": 1,
  "email": "admin@example.com",
  "createdAt": "2015-11-27T02:29:13.478Z",
  "updatedAt": "2015-11-27T02:29:13.478Z"
}
```

### POST /users/login
Logins user by user's json information.

*Example:*
```json
{
    "email": "admin@example.com",
    "password": "abc123456"
}
```
*Return:*
```json
{
  "id": 1,
  "email": "admin@example.com",
  "createdAt": "2015-11-27T02:29:13.478Z",
  "updatedAt": "2015-11-27T02:29:13.478Z"
}
```
! **Returns the authentication token on header.**
*Return Header:*
```
Auth → {token}
Connection → keep-alive
Content-Length → 119
Content-Type → application/json; charset=utf-8
Date → Fri, 27 Nov 2015 03:33:31 GMT
```

## Errors:

No Todo on array position.

*Return:*
```json
{
  "error": "No todo found with that id."
}
```
