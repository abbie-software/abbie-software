"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Download, FileText, ExternalLink } from "lucide-react";

const RESUME_PATH = "/api/resume";

export default function ResumeView() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-abbie-bg px-6 font-sans">
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute left-6 top-8 md:left-16 md:top-12"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-abbie-text/60 transition-colors hover:text-abbie-pink"
        >
          <ArrowLeft size={16} />
          Back to portfolio
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex w-full max-w-md flex-col items-center gap-6 rounded-2xl border border-abbie-purple/20 bg-abbie-purple/5 p-10 text-center"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-abbie-pink/10 text-abbie-pink">
          <FileText size={28} />
        </div>

        <div>
          <h1 className="text-xl font-semibold text-abbie-text">
            Abigail Gathoni Murigi — Résumé
          </h1>
          <p className="mt-2 text-sm text-abbie-text/60">
            View it in a new tab, or download a copy directly.
          </p>
        </div>

        <div className="flex w-full flex-col gap-3 sm:flex-row">
          <a
            href={RESUME_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-full border border-abbie-purple/40 px-5 py-3 text-sm font-medium text-abbie-text transition-colors hover:bg-abbie-purple/10"
          >
            <ExternalLink size={16} /> View Résumé
          </a>
          <a
            href={RESUME_PATH}
            download="Abigail_Gathoni_Murigi_CV.pdf"
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-abbie-pink px-5 py-3 text-sm font-medium text-white transition-transform hover:scale-105"
          >
            <Download size={16} /> Download
          </a>
        </div>
      </motion.div>
    </div>
  );
}