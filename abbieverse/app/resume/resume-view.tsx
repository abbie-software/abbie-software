"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";

const RESUME_PATH = "/resume.pdf";

export default function ResumeView() {
  return (
    <main className="flex h-dvh flex-col bg-abbie-bg font-sans">
      <motion.header
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex shrink-0 flex-wrap items-center justify-between gap-4 border-b border-abbie-purple/20 px-5 py-4 sm:px-8"
      >
        <div className="flex min-w-0 flex-wrap items-center gap-x-6 gap-y-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-abbie-text/60 transition-colors hover:text-abbie-pink"
          >
            <ArrowLeft size={16} />
            Back to portfolio
          </Link>
          <h1 className="text-base font-semibold text-abbie-text sm:text-lg">
            Abigail Gathoni Murigi — Résumé
          </h1>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <a
            href={RESUME_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-abbie-purple/40 px-4 py-2 text-sm font-medium text-abbie-text transition-colors hover:bg-abbie-purple/10"
          >
            <ExternalLink size={16} /> View Résumé
          </a>
          <a
            href={RESUME_PATH}
            download="Abigail_Gathoni_Murigi_CV.pdf"
            className="inline-flex items-center gap-2 rounded-full bg-abbie-pink px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-105"
          >
            <Download size={16} /> Download
          </a>
        </div>
      </motion.header>
      <iframe
        src={RESUME_PATH}
        title="Abigail Gathoni Murigi résumé PDF"
        className="min-h-0 w-full flex-1 border-0 bg-white"
      />
    </main>
  );
}