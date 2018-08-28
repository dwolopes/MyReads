# MyReads Project

Myreads app is a virtual bookshelf and it helps you to manage and control what you are reading, want to read, and read. It is based in fact in 3 main shelves, and they are divided based on the books' status reading. For intance, if you are reading the book, it goes to the "currently reading" shelf. There are more two shelves besides "currently reading": "Wanto to read" and "Read". And you are able to change de books' shelf if the status of the book changes.

Besides control the books already in the shelf, you can search and add books to one of the main shelves. 

## Getting Started

In order to run de app locally, consider the following steps:

1. Clone project:

    ```
    $ [sudo] git clone git@github.com: https://github.com/dwolopes/MyReads.git
    ```

### Prerequisites

Consider to install:

```
Node.js and npm
```

> [Dowload Node.Js and NPM](https://nodejs.org/en/download/).

### Installing

After download and install Node.js and NPM, run the follow comands in your prompt: 

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Running the application

After running `npm start` it will open a new tab on your default browser with the follow adress bar: `http://localhost:3000`. To test the application, you can change the books from shelves, using the select button above each book. You must observe the books changing shelves based on your choice. 

You may click on an `add` button, it allows you to search for books and add them to your shelves. Check it out the `Terms` to search books in [SEARCH_TERMS.md](SEARCH_TERMS.md). You will notice that the books already in one of your shelves will appear in the results of the search with their current status and shelf. It might happen if you search for terms and it return as result some of the books already in one of your current shelves.

## Important

### Backend Server

To simplify the development process, it was provided a backend server. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

#### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

#### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

#### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

### Built With

* [React](https://reactjs.org/) - JavaScript is the main programming language used
* HTML
* CSS

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE.md) file for details

## Authors

* **Douglas Lopes** - *Initial work* - [Douglas Lopes](https://github.com/dwolopes)

See also the list of [contributors](https://github.com/dwolopes/MyReads/graphs/contributors) who participated in this project.
