# Contacts - A Mongo-Express-NodeJS REST API

## Prerequisites
We are assuming you are already familiar with MongoDB, NodeJS and that these are already installed on your system.

## API Setup
```
git clone https://github.com/gregartemides/contact-list-api.git
cd contact-list-api
npm install
```

## MongoDB Setup
Open a terminal window and start the mongo CLI to create the database and add some data.
```
mongo
```

In the CLI type the following to create the database contacts and add a couple of documents to collection contacts:
```
use contacts
db.contacts.insert({Name: 'John Doe', Phone: '123-456-7890'})
db.contacts.insert({Name: 'Jane Doe', Phone: '123-456-7891'})
```

## Run
```
npm start
```
Open your browser to http://localhost:3000/api/contacts

## License

[MIT](LICENSE)