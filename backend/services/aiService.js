import dotenv from "dotenv";
import Groq from "groq-sdk";
import { buildPrompt } from "../prompts/interviewPrompt.js";

dotenv.config();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export const generateInterviewPlan = async (
  resume,
  jobDescription
) => {

  const prompt = buildPrompt(
    resume,
    jobDescription
  );

  const response = await groq.chat.completions.create({

    model: "llama-3.3-70b-versatile",

    messages: [
      {
        role: "user",
        content: prompt,
      }
    ],

    temperature: 0.2,

  });

  return response.choices[0].message.content;
};