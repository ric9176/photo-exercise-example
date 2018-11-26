# Project 1

## Start the API
`cd api && npm install && npm start`

## Exercise
- Create your app using create-react-app
- There should be a page that displays a list of photos in the following path /photos
- There should be a page that displays a single photo in the following path /photos/:id
- When the user clicks on a photo in /photos the app should take the user to /photos/:id

Notes:
- To fetch photos use [http://localhost:8888/photos](http://localhost:8888/photos). Don't forget to run the api by:
`
cd api && npm install && npm start
`
- To fetch a single photo use [http://localhost:8888/photo/PHOTO_ID](http://localhost:8888/photo/PHOTO_ID)
- User react-router v4 for the routing ```yarn add react-router-dom```
- This is not a master detail page. It's more simple than the Messenger app we've been working on.

## License

This material is available for private, non-commercial use under the [GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html).
