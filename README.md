# 🧩 Quiz API

A **RESTful API** for managing quizzes, questions, and answers using MongoDB, Express.js, and Node.js.

## ✨ Features
- **CRUD Operations**: Create, read, update, and delete quizzes.
- **Multiple-Choice Questions**: Store and manage MCQs.
- **Categorization**: Quizzes categorized by topic and difficulty level.
- **Time Duration**: Set time limits for quizzes.
- **JSON API**: Retrieve structured quiz data.

## 🚀 Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Package Manager:** npm / yarn

## 📦 Installation & Setup
### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Steps
1. **Clone the Repository**
   ```sh
   git clone https://github.com/your-username/quiz-api.git
   cd quiz-api
   ```
2. **Install Dependencies**
   ```sh
   npm install
   ```
   or
   ```sh
   yarn install
   ```
3. **Configure Environment Variables**
   Create a `.env` file in the root directory and add:
   ```env
   MONGO_URI=mongodb://localhost:27017/quizdb
   PORT=5000
   ```
4. **Start the Server**
   ```sh
   npm start
   ```
   or
   ```sh
   yarn start
   ```

## 🔗 API Endpoints
### Quizzes
#### Get All Quizzes
```http
GET /api/quizzes
```
#### Get Quiz by ID
```http
GET /api/quizzes/:id
```
#### Create a Quiz
```http
POST /api/quizzes
```
**Request Body:**
```json
{
  "title": "Genetics and Evolution",
  "description": "",
  "difficulty_level": "Medium",
  "duration": 10,
  "questions": [
    {
      "description": "What is the basic unit of heredity?",
      "options": [
        { "description": "Gene", "is_correct": true },
        { "description": "Cell", "is_correct": false }
      ]
    }
  ]
}
```
#### Update a Quiz
```http
PUT /api/quizzes/:id
```
#### Delete a Quiz
```http
DELETE /api/quizzes/:id
```

## 📂 Project Structure
| Path                         | Description |
|------------------------------|-------------|
| `/backend`                   | Backend directory |
| ├── `/models`                | Mongoose models |
| ├── `/routes`                | Express routes |
| ├── `/controllers`           | Business logic |
| ├── `/config`                | Database connection |
| ├── `server.js`              | Entry point |
| `/frontend` (Optional)       | Frontend directory if applicable |
| `.env`                       | Environment variables |
| `README.md`                  | Documentation |
| `package.json`               | Dependencies |

## 🤝 Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit changes (`git commit -m 'Add new feature'`)
4. Push to your branch (`git push origin feature-branch`)
5. Open a Pull Request

## 📜 License
This project is licensed under the MIT License.

