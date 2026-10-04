"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Download } from "lucide-react";

const RESUME_PATH = "/resume.pdf";

export default function ResumeView() {
  return (
    <div className="flex min-h-screen flex-col bg-abbie-bg font-sans">
      <div className="mx-auto w-full max-w-4xl shrink-0 px-4 pt-10 md:pt-16">
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-center justify-between gap-4"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-abbie-text/60 transition-colors hover:text-abbie-pink"
          >
            <ArrowLeft size={16} />
            Back to portfolio
          </Link>

          <a
            href={RESUME_PATH}
            download
            className="flex items-center gap-2 rounded-full bg-abbie-pink px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-105"
          >
            <Download size={16} />
            Download PDF
          </a>
        </motion.div>
      </div>

      <div className="mx-auto flex w-full max-w-4xl flex-1 items-start justify-center px-2 pb-16 md:px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="aspect-[210/297] w-full overflow-hidden rounded-2xl bg-white shadow-xl"
        >
          <iframe
            src={`${RESUME_PATH}#toolbar=0&navpanes=0&view=FitH`}
            title="Abigail Gathoni Murigi — Résumé"
            className="h-full w-full"
          />
        </motion.div>
      </div>
    </div>
  );
}