# Intelligent Interview Question Recommendation Engine

An AI-powered web application that analyzes a candidate's resume against a job description and generates a structured interview plan.

## Features

- AI Resume Analysis
- Job Description Analysis
- Match Score
- Candidate Strengths
- Missing Skills Detection
- AI Interview Question Generation
- Easy / Medium / Hard Questions
- Expected Answer Points
- Question Reasoning
- Edit / Approve / Reject Questions

## Tech Stack

Frontend
- React
- Vite
- Tailwind CSS
- Axios

Backend
- Node.js
- Express.js

AI
- Groq API
- Llama 3.3 70B

Deployment

Frontend
- Vercel

Backend
- Render

## Setup

### Backend

cd backend

npm install

npm run dev

### Frontend

cd frontend

npm install

npm run dev

## AI Prompt

The application compares the resume against the job description and generates:

- Match Score
- Candidate Strengths
- Missing Skills
- Structured Interview Questions
- Expected Answer Points
- Reasons for each question

## Assumptions

- Resume and JD are pasted as plain text.
- AI generates JSON output.
- Questions are editable before approval.

## Trade-offs

- AI responses depend on the LLM output.
- Free hosting may introduce cold-start delays.
Testing

The application was manually tested for:

✔ Resume Parsing
✔ JD Parsing
✔ AI Response Generation
✔ JSON Rendering
✔ Error Handling
✔ Responsive UI
