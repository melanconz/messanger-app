# To start the app

Change to the messanger-app-server directory and run `npm install` and `npm start`
In a different terminal cd to messanger-app-ui and run `npm install` and `npm start` 

## Caveats

Initially, I attempted to complete this task without sacrificing some of the practices that I see as necessary for development.  For example, I began using TDD and I tried to create the application in a way that would be a nice user experience for any one who was attempting to use it.  However, I found that using best practices and having pride in what I created would take longer than an hour.  So I abandonded TDD and focused on creating a good UX.  Still though, I found this taking me loger than 3 hours.  I do not have much free time available so I decided to stop at this point and make it known that the next stage in my development would have been adding listeners using socket.io so that any update to `messages` would propagate tto UI.  In that case, I could build out Message components that would sit on either side of my chat view so that users would experience chatting with each other in a way that they were familiar with.

