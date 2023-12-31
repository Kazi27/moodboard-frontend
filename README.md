#  📸 Unsplash X Pexels MoodBoard 🎥

A website by the Lally Enthusiasts

## Project Description

This repository is the front end of a full-stack web application using the tools and techniques we've learned over the semester, including React, Redux, Router, PostgreSQL, Sequelize, Express, and Node.
This project aims to provide users with a seamless experience in searching for, storing, and organizing their favorite images. The application will utilize two external API calls, leveraging the Unsplash API for copyright-free photos and the Pexels API for royalty-free videos, allowing users to curate their mood boards with a diverse range of media content. The images will be stored in a database and users will be able to perform CRUD operations on the captions/favorites of the images. Routing will be managed via a router, states via Redux, and UI features will include utilizing multiple react components.

### Front End Requirements
- UI (React)
  - **Create a topbar or sidebar component that is present throughout the app** - A navbar is present throughout the website allowing users to traverse through the pages easily [TopBar Component](https://github.com/Kazi27/moodboard-frontend/blob/13df48b0946380e91e9b694f7dd5a6a26ccdfe01/src/navbar.js#L1-L17)
    
  - **Create 3 or more additional components** - Each page has at least 3 additional components (an input field for search queries, a button for triggering searches, and a container for displaying results (images for Unsplash and videos for Pexels) with other components across the favorites and homepage. [Pexels 3 Components](https://github.com/Kazi27/moodboard-frontend/blob/13df48b0946380e91e9b694f7dd5a6a26ccdfe01/src/pexels.js#L42-L68) [Unsplash 3 Components](https://github.com/Kazi27/moodboard-frontend/blob/13df48b0946380e91e9b694f7dd5a6a26ccdfe01/src/unsplash.js#L122-L168)

  - **1 or more components should take text-based user input**
- Our photos and videos pages leverage the Unsplash and Pexels API to fetch results based on text-based user input [Unsplash Photos text-based user input](https://github.com/Kazi27/moodboard-frontend/blob/13df48b0946380e91e9b694f7dd5a6a26ccdfe01/src/unsplash.js#L155-L161) [Pexels Video text-based user input](https://github.com/Kazi27/moodboard-frontend/blob/13df48b0946380e91e9b694f7dd5a6a26ccdfe01/src/pexels.js#L46-L51)
  


  - **1 or more components should display data representing a single instance from a model** - 

Our editFavorites page loads data from the backend as well as our favorites page [Edit Favorites Component](https://github.com/Kazi27/moodboard-frontend/blob/eafadc4c00e6ccdeebe3cb692f6810503c74d1c8/src/editFavorites.js#L6-L20)



- **Clicking on one of these components should show additional information related to that instance** - Our captions (additional information) display when we navigate to the (instance) favorites page
  - **1 or more components should display data based on store state** - The Unsplash and Pexels pages fulfill this requirement through their image/video cards as these cards display data directly accessed from the Redux store state, which is updated based on user searches and API responses
[Unsplash Component](https://github.com/Kazi27/moodboard-frontend/blob/eafadc4c00e6ccdeebe3cb692f6810503c74d1c8/src/unsplash.js#L122-L171)
[Pexels Component](https://github.com/Kazi27/moodboard-frontend/blob/13df48b0946380e91e9b694f7dd5a6a26ccdfe01/src/pexels.js#L42-L69)
    

  - **Components should enable to user to perform CRUD operations on the backend models** - Components on the Unsplash page allow the user to add a new favorite photo with a caption when with a click on the heart icon, typing a caption then clicking submit (create), we are reading data from our database when we navigate to our favorites page (read), we are updating either photo_url and/or caption_text when we navigate to edit favorites page and click on the pencil icon to modify an existing favorite photo (update), we are deleting when we navigate to the edit favorites page and click on the trash icon on a particular favorite photo (delete) [Unsplash Component to Handle CRUD operations on the backend models](https://github.com/Kazi27/moodboard-frontend/blob/eafadc4c00e6ccdeebe3cb692f6810503c74d1c8/src/unsplash.js#L89-L119)

- Client-Side Routing (React Router)
  - **Create 2 or more routes that display different components based on the URL, that are accessible from the navbar/topbar** - There are more than 2 routes that exist and are fully integrated into our navbar and the App.js file uses React Router to define these routes for different components based on the URL [NavBar Routes](https://github.com/Kazi27/moodboard-frontend/blob/eafadc4c00e6ccdeebe3cb692f6810503c74d1c8/src/navbar.js#L5-L15) [App.js implementation](https://github.com/Kazi27/moodboard-frontend/blob/eafadc4c00e6ccdeebe3cb692f6810503c74d1c8/src/App.js#L52-L69)
    
  - **Use dynamic segments to display appropriate info based on the segment info** - We have a team segment that shows a picture of us, our name, and our LinkedIn on the homepage as a dynamic segment with an added hover effect that changes text color
    team member.js and team.js [teamMemberDetail.js](https://github.com/Kazi27/moodboard-frontend/blob/eafadc4c00e6ccdeebe3cb692f6810503c74d1c8/src/TeamMemberDetail.js#L1-L33) [team.js](https://github.com/Kazi27/moodboard-frontend/blob/eafadc4c00e6ccdeebe3cb692f6810503c74d1c8/src/team.js#L1-L58)
    
    - **Ex: Appropriate task is displayed when the URL matches `/tasks/:taskId`** - Once our names are clicked, the URL changes to be that specific `/team/:memberName` and when our linkedIn is clicked, our specific linkedIn profiles show up [teamMemberDetail.js](https://github.com/Kazi27/moodboard-frontend/blob/eafadc4c00e6ccdeebe3cb692f6810503c74d1c8/src/TeamMemberDetail.js#L1-L33) [team.js](https://github.com/Kazi27/moodboard-frontend/blob/eafadc4c00e6ccdeebe3cb692f6810503c74d1c8/src/team.js#L1-L58)
    

- State Management (Redux)
  - **Create a store and a reducer to handle incoming actions** - We have a Redux store with separate slices for Unsplash and Pexels, each with its own reducer to handle state updates based on actions [Store](https://github.com/Kazi27/moodboard-frontend/blob/eafadc4c00e6ccdeebe3cb692f6810503c74d1c8/src/store/Store.js#L1-L15) [pexelsSlice.js](https://github.com/Kazi27/moodboard-frontend/blob/eafadc4c00e6ccdeebe3cb692f6810503c74d1c8/src/store/slices/pexelsSlice.js#L1-L24) [unsplashSlice.js](https://github.com/Kazi27/moodboard-frontend/blob/eafadc4c00e6ccdeebe3cb692f6810503c74d1c8/src/store/slices/unsplashSlice.js#L1-L25)
  
  - **Create 1 or more action creators to create actions based on inputs** - We have action creators for setSearchQuery and setImages in the Unsplash slice and setSearchQuery and setVideos in the Pexels slice which are triggered based on user input and API responses [pexelsSlice.js](https://github.com/Kazi27/moodboard-frontend/blob/eafadc4c00e6ccdeebe3cb692f6810503c74d1c8/src/store/slices/pexelsSlice.js#L1-L24) [unsplashSlice.js](https://github.com/Kazi27/moodboard-frontend/blob/eafadc4c00e6ccdeebe3cb692f6810503c74d1c8/src/store/slices/unsplashSlice.js#L1-L25)


  - **Update store state using dispatch and actions** - We dispatch actions using dispatch to update the state in both the Unsplash and Pexels slices [pexels.js](https://github.com/Kazi27/moodboard-frontend/blob/eafadc4c00e6ccdeebe3cb692f6810503c74d1c8/src/pexels.js#L5-L41) [unsplash.js](https://github.com/Kazi27/moodboard-frontend/blob/13df48b0946380e91e9b694f7dd5a6a26ccdfe01/src/unsplash.js#L8-L119)


  - **Reflect updates to the state in the frontend UI** - The components re-render based on state changes, reflecting the updated search query and images/videos in the UI [unsplash.js](https://github.com/Kazi27/moodboard-frontend/blob/13df48b0946380e91e9b694f7dd5a6a26ccdfe01/src/unsplash.js#L122-L170) [pexels.js](https://github.com/Kazi27/moodboard-frontend/blob/eafadc4c00e6ccdeebe3cb692f6810503c74d1c8/src/pexels.js#L42-L69)


- API Calls (External and to the Backend)
  - **Backend: Using the backend routes, should be able to perform CRUD operations on database models** - Using the backend routes, the user to add a new favorite photo with a caption when with a click on the heart icon, typing a caption then clicking submit (create), we are reading data from our database when we navigate to our favorites page (read), we are updating either photo_url and/or caption_text when we navigate to edit favorites page and click on the pencil icon to modify an existing favorite photo (update), we are deleting when we navigate to the edit favorites page and click on the trash icon on a particular favorite photo (delete) [editFavorites.js](https://github.com/Kazi27/moodboard-frontend/blob/eafadc4c00e6ccdeebe3cb692f6810503c74d1c8/src/editFavorites.js#L1-L177)

  - **External: Should make 2 or more External API calls** - We make external API calls to the Unsplash and Pexels API to obtain the images/videos [Unsplash](https://github.com/Kazi27/moodboard-frontend/blob/eafadc4c00e6ccdeebe3cb692f6810503c74d1c8/src/unsplash.js#L40-L65) [Pexels](https://github.com/Kazi27/moodboard-frontend/blob/eafadc4c00e6ccdeebe3cb692f6810503c74d1c8/src/pexels.js#L12-L35)
  

## APIs Used

### 1. Unsplash API
- **API Provider:** [unsplash.com](https://unsplash.com/developers)
- **Extra Documentation:** [unsplash documentation](https://unsplash.com/documentation)
- **Description:** The Unsplash API is a modern JSON API that we use to retrieve royalty-free images based on user search.

### 2. Pexels API
- **API Provider:** [pexels.com](https://www.pexels.com/api/)
- **Extra Documentation:** [pexels documentation](https://www.pexels.com/api/documentation/?language=javascript)
- **Description:** The Pexels API enables programmatic access to the full Pexels content library and we utilize this API to obtain copyright-free videos based on user queries.

### Trying out the website
- **Setup:** Clone the backend and frontend repository, install redux/node if needed, do npm start. To use the favorites feature follow the next two steps.
- **Database Connection:** Ensure that the credentials (username, password, database name) in your Sequelize connection (db.js) match those used when setting up your PostgreSQL database. The username 'georgesucuzhanay' and password 'test1' should be replaced with the actual credentials.
- **Database Initialization:** The SQL commands in the db.sql file are used to create the database and tables. Make sure to execute these commands in PostgreSQL to set up your database before running your application.

### With the front complete, we integrated it into our back end.
#### Back End Repository: https://github.com/George-Sucuzhanay/moodboard-backend.git
#### Front End Repository: https://github.com/Kazi27/moodboard-frontend.git
#### Deployment Link:
