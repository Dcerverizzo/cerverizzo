import React from 'react'
import Link from 'next/link'

const DRIVE_PDF_URL = process.env.NEXT_PUBLIC_RESUME_URL ?? 'https://drive.google.com/file/d/1CNJNoILKdnWzMjIb6hsmstEqM7CzYHQR/view?usp=sharing'

export default function ResumePage () {
  return (
    <main className="min-h-screen p-6">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-2">Resume</h1>
        <p className="text-neutral-600 dark:text-neutral-400 mb-4">Here is the link to open my resume in PDF (it will open in a new tab).</p>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={DRIVE_PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-neutral-100 dark:bg-neutral-800 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700"
          >
            Open Resume (Google Drive)
          </a>

          <Link href="/" className="inline-block px-4 py-2 text-sm ml-0 sm:ml-2">Back</Link>
        </div>
      </div>
    </main>
  )
}
