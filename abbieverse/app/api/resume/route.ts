import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "resume.pdf");
  console.log("Resolved file path:", filePath);
  console.log("cwd:", process.cwd());

  const file = fs.readFileSync(filePath);
  console.log("File size read:", file.length, "bytes");

  return new Response(new Uint8Array(file), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="Abigail_Gathoni_Murigi_CV.pdf"',
      "Cache-Control": "no-store",
    },
  });
}