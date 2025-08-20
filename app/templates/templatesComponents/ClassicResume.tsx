// ClassicResume.js
import { resumeData } from "./data/classicData"

export default function ClassicResume({ data = resumeData }) {
  return (
    <div className="bg-white text-gray-900 font-sans px-4 sm:px-6 md:px-12 py-10 text-sm leading-relaxed">
      <div className="w-full space-y-5">

        {/* Header */}
        <header className="text-center mb-6">
          <h1 className="text-[6vw] sm:text-3xl md:text-4xl font-bold text-purple-800 tracking-wide uppercase whitespace-nowrap overflow-hidden text-ellipsis mb-4">
            {data.header.name}
          </h1>
          <p className="text-sm">{data.header.contact}</p>
          <p className="text-xs sm:text-sm">{data.header.website}</p>
        </header>

        <div className="border-b border-purple-800"></div>

        {/* Summary */}
        <section>
          <h2 className="uppercase text-purple-700 font-bold text-lg pb-1 mb-2">Summary</h2>
          <p>{data.summary}</p>
        </section>

        <div className="border-b border-purple-800"></div>

        {/* Work Experience */}
        <section>
          <h2 className="uppercase text-purple-700 font-bold text-lg pb-1 mb-2">Work Experience</h2>
          {data.workExperience.map((job, i) => (
            <div key={i} className="mb-4">
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <h3 className="font-bold">{job.title}</h3>
                <span className="font-bold">{job.date}</span>
              </div>
              <ul className="list-disc pl-6 md:pl-8 space-y-1">
                {job.bullets.map((point, j) => <li key={j}>{point}</li>)}
              </ul>
            </div>
          ))}
        </section>

        <div className="border-b border-purple-800"></div>

        {/* Education */}
        <section>
          <h2 className="uppercase text-purple-700 font-bold text-lg pb-1 mb-2">Education</h2>
          {data.education.map((edu, i) => (
            <div key={i} className="mb-4">
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <h3 className="font-bold">{edu.title}</h3>
                <span className="font-bold">{edu.date}</span>
              </div>
              <p className="text-sm">{edu.school}</p>
              <ul className="list-disc pl-6 md:pl-8 space-y-1">
                {edu.bullets.map((point, j) => <li key={j}>{point}</li>)}
              </ul>
            </div>
          ))}
        </section>

        <div className="border-b border-purple-800"></div>

        {/* Additional Information */}
        <section>
          <h2 className="uppercase text-purple-700 font-bold text-lg pb-1 mb-2">Additional Information</h2>
          <ul className="list-disc pl-6 md:pl-8 space-y-1">
            {data.additionalInfo.map((info, i) => (
              <li key={i}>
                <strong>{info.label}:</strong> {info.value}
              </li>
            ))}
          </ul>
        </section>

      </div>
    </div>
  )
}
