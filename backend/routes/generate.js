import express from "express";
import { generateInterviewPlan } from "../services/aiService.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { resume, jobDescription } = req.body;

    if (!resume || !jobDescription) {
      return res.status(400).json({
        error: "Resume and Job Description are required.",
      });
    }

    const result = await generateInterviewPlan(
      resume,
      jobDescription
    );

    const cleaned = result
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    res.json(JSON.parse(cleaned));

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to generate interview plan.",
    });
  }
});

export default router;