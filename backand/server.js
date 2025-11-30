import express from "express";
import cors from "cors";
import { v4 as uuid } from "uuid";

const app = express();
app.use(cors());
app.use(express.json());

let versions = []; // in-memory data store

// ------- DIFF LOGIC -------- //
function diffWords(oldText, newText) {
  const oldArr = oldText.trim().split(/\s+/).filter(Boolean);
  const newArr = newText.trim().split(/\s+/).filter(Boolean);

  const oldSet = new Set(oldArr);
  const newSet = new Set(newArr);

  return {
    addedWords: [...newSet].filter(w => !oldSet.has(w)),
    removedWords: [...oldSet].filter(w => !newSet.has(w)),
    oldLength: oldArr.length,
    newLength: newArr.length
  };
}

// ------- ROUTES -------- //

// GET all versions
app.get("/versions", (req, res) => {
  res.json(versions);
});

// SAVE new version
app.post("/save-version", (req, res) => {
  const { previousText, newText } = req.body;

  const diff = diffWords(previousText || "", newText || "");

  const version = {
    id: uuid(),
    timestamp: new Date().toISOString(),
    ...diff
  };

  versions.push(version);
  res.json(version);
});

// Start server
app.listen(4000, () => console.log("Backend running on port 4000"));
