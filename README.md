# Subscriptionn Based Video Platform

![](UI/UI1.png)
![](UI/UI2.png)
![](UI/UI3.png)
![](UI/UI4.png)
![](UI/UI5.png)
![](UI/UI6.png)
![](UI/UI7.png)

Subscriptionn Based Video Platform - Using React.
[Live Demo](https://codingcourses.vercel.app)

## Tech Stack

**React, React-Router-Dom, JavaScript, Tailwind, React-Icons, Axios, Nodejs, ExpressJs, Redux, SCSS, CSS, Nodemailer, Cloudinary**

## Features

- **Architected an innovative online platform featuring a subscription model, facilitating inclusive access to over 500+
  diverse video content**
- **Assembled cloudinary api using axios call to store any format of images and videos in less than 4 seconds**
- **Integrated Razorpay for seamless online payment, led to substantial 60 percent rise in successful transactions.**

## Credentials

For User ---

- _Email: user@gmail.com_
- _Password: User@123_

For Admin ---

- _Email: admin@gmail.com_
- _Password: Admin@123_

## Getting Started

First you need clone this project.

```bash
git clone https://github.com/se-surabhianand/Subscription-Based-Video-Platform/
```

Now You have to add .env file in client root folder and config.env in config folder of server.
And Now Fill This Given Variable

** Client **

```bash
REACT_APP_SERVER_URI = http://localhost:4000/api/v1
```

** Server **

```bash
PORT=4000
MONGO_URI=
FRONTEND_URL=http://localhost:3000
JWT_SECRET=


SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=

CLOUDINARY_CLIENT_NAME=
CLOUDINARY_CLIENT_API=
CLOUDINARY_CLIENT_SECRET=

PLAN_ID=

RAZORPAY_API_KEY=
RAZORPAY_API_SECRET=

REFUND_DAYS=7

MY_MAIL = gashish49500@gmail.com

NODE_ENV=Developemnt
```

Now run the project..

** Client **

```bash
cd Subscription-Based-Video-Platform/client
npm install
npm start
```

** Server **

```bash
cd Subscription-Based-Video-Platform/server
npm install
nodemon server.js
```
