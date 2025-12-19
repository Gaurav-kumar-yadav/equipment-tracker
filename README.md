Equipment Tracking System (Pharma Use Case)

A simple full-stack web application to manage pharmaceutical equipment tracking, inspired by real-world workflows used in cleaning validation and regulatory compliance systems like CLEEN.

This project demonstrates how enterprise software can track equipment details such as equipment name, type, status, and last cleaned date using a modern web stack.

🚀 Features

View all equipment in a table

Add new pharmaceutical equipment

Edit existing equipment details

Delete equipment records

Search equipment by name

Filter equipment by type

Sort equipment by last cleaned date

Responsive and modern UI

RESTful API integration

🏭 Domain Context (Pharmaceutical Manufacturing)

In pharmaceutical plants, every piece of equipment must be:

Clearly identifiable

Properly cleaned and documented

Traceable for audits and compliance

This application focuses on equipment tracking, which is a core part of:

Cleaning validation

Manufacturing compliance

Regulatory audits

🧰 Tech Stack

Frontend

React

JavaScript (ES6+)

Tailwind CSS

Vite

Backend

Node.js

Express.js

MongoDB

Mongoose

Tools

Git & GitHub

Postman (API testing)

VS Code

                      📁 Project Structure
                      
                        equipment-tracker/
                        │
                        ├── backend/
                        │   ├── controllers/
                        │   ├── models/
                        │   ├── routes/
                        │   ├── server.js
                        │   └── app.js
                        │
                        ├── frontend/
                        │   ├── src/
                        │   │   ├── components/
                        │   │   ├── api/
                        │   │   ├── App.jsx
                        │   │   └── main.jsx
                        │   └── index.html
                        │
                        └── README.md





🔗 API Endpoints

Base URL:

http://localhost:5000/api/equipment

Method	Endpoint	Description

GET	/api/equipment	Fetch all equipment

POST	/api/equipment	Add new equipment

PUT	/api/equipment/:id	Update equipment

DELETE	/api/equipment/:id	Delete equipment

▶️ How to Run the Project Locally

1️⃣ Clone the Repository

git clone https://github.com/Gaurav-kumar-yadav/equipment-tracker

cd equipment-tracker

2️⃣ Run Backend

cd backend

npm install

npm run dev

Server runs on:

http://localhost:5000

3️⃣ Run Frontend

cd frontend

npm install

npm run dev


Open in browser:

http://localhost:5173

Project UI look:

## 🎥 Video Demo

▶️ Watch the project demo here: 

https://www.loom.com/share/afc78e24b995413a965282a7310ccc7a


<img width="1027" height="473" alt="image" src="https://github.com/user-attachments/assets/0ce97309-4529-4245-a917-96e7d679cba0" />

