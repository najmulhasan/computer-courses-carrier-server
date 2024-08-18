/*
Basic Context API setup:
----------------------------------
1. share auth state with other component(across the application)
2. create an userContext
3.Context.Provider with passed children
4.set the UserContext in the index.js file
5. To consume the context: export the AuthContext from UserContext
6. Now Header or any where elase : use useContext hook
================
1.use getAuth () by passing the app from firebase config file 
2. create a function name createUser
================
*/