import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import * as pdfjsLib from "pdfjs-dist";
import mammoth from "mammoth";

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.mjs",
  import.meta.url
).toString();

export default function ResumeUploader({ onTextExtracted }) {
  const extractPDF = async (file) => {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

    let text = "";

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      text +=
        content.items.map((item) => item.str).join(" ") + "\n";
    }

    onTextExtracted(text);
  };

  const extractDOCX = async (file) => {
    const arrayBuffer = await file.arrayBuffer();

    const result = await mammoth.extractRawText({
      arrayBuffer,
    });

    onTextExtracted(result.value);
  };

  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];

    if (!file) return;

    if (file.type === "application/pdf") {
      await extractPDF(file);
    } else if (
      file.name.endsWith(".docx")
    ) {
      await extractDOCX(file);
    } else {
      alert("Only PDF and DOCX files are supported.");
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } =
    useDropzone({
      onDrop,
      multiple: false,
    });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-xl p-8 mb-5 cursor-pointer text-center transition ${
        isDragActive
          ? "border-blue-600 bg-blue-50"
          : "border-gray-300"
      }`}
    >
      <input {...getInputProps()} />

      <h3 className="text-lg font-semibold">
        📄 Drag & Drop Resume Here
      </h3>

      <p className="text-gray-500 mt-2">
        or click to upload a PDF or DOCX resume
      </p>
    </div>
  );
}