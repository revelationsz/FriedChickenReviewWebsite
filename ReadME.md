

To use this website, please redownload the node_modules folder with in the server folder as they are needed for the axios calls to the server to work.

Current I am using a mongodb server from the web with open access for the data base, so you should not have to do anythting special.
But if it is not working please use a local mongodb server with the commented out line 15 in server.js,
When using the local mongodb database, inside of your connection, you can make a database called fkreview, and then inside of that create a collection call reviews.
You can populate it with the listing that is in lisstings.json in the main folder in this project. After that you can add and delete review.json
