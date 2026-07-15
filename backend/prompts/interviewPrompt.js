export const buildPrompt = (resume, jobDescription) => `
You are an expert technical interviewer.

Analyze the following resume and job description.

Resume:
${resume}

Job Description:
${jobDescription}

Generate ONLY valid JSON.

Use this exact structure:

{
  "matchScore": 85,
  "recommendation": "Strong Match",
  "summary": "Two concise sentences.",
  "strengths": [
    "Python",
    "Django"
  ],
  "missingSkills": [
    "Docker",
    "Redis"
  ],
  "questions": [
    {
      "difficulty": "Easy",
      "question": "Question text",
      "expectedAnswer": [
        "Point 1",
        "Point 2"
      ],
      "reason": "Reason for selecting the question"
    }
  ]
}

Rules:

- matchScore must be between 0 and 100.
- recommendation must be one of:
  - Strong Match
  - Potential Match
  - Weak Match
- Generate 6-8 interview questions.
- Include Easy, Medium and Hard questions.
- Do not repeat questions.
- Questions should cover:
  - Technical skills
  - Projects
  - Missing skills
  - Problem solving
- expectedAnswer must contain 3-6 concise bullet points.
- Respond with JSON only.
`;