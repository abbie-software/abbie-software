import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "resume.pdf");
  const file = fs.readFileSync(filePath);

  return new Response(new Uint8Array(file), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="Abigail_Gathoni_Murigi_CV.pdf"',
      "Cache-Control": "no-store",
    },
  });
}