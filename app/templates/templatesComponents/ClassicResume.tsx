import { ResumeData } from "@/app/types/resume";

type ClassicResumeProps = {
  data: ResumeData;
  editMode?: boolean;
  setResumeData?: React.Dispatch<React.SetStateAction<ResumeData>>;
};

export default function ClassicResume({
  data,
  editMode = false,
  setResumeData,
}: ClassicResumeProps) {
  const handleChange = (path: string, value: string) => {
    if (!setResumeData) return;
    setResumeData((prev: ResumeData) => {
      const newData: ResumeData = structuredClone(prev); // deep copy
      const keys = path.split(".");
      let obj: any = newData;
      for (let i = 0; i < keys.length - 1; i++) obj = obj[keys[i]];
      obj[keys[keys.length - 1]] = value;
      return newData;
    });
  };

  // Add & Remove helpers
  const addWork = () => {
    setResumeData?.((prev) => ({
      ...prev,
      workExperience: [
        ...prev.workExperience,
        { title: "New Role", date: "2025", bullets: ["New responsibility"] },
      ],
    }));
  };
  const removeWork = (index: number) => {
    setResumeData?.((prev) => ({
      ...prev,
      workExperience: prev.workExperience.filter((_, i) => i !== index),
    }));
  };

  const addEducation = () => {
    setResumeData?.((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          title: "New Degree",
          date: "2025",
          school: "New School",
          bullets: ["Graduated"],
        },
      ],
    }));
  };
  const removeEducation = (index: number) => {
    setResumeData?.((prev) => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index),
    }));
  };

  const addInfo = () => {
    setResumeData?.((prev) => ({
      ...prev,
      additionalInfo: [...prev.additionalInfo, { label: "New Info", value: "Value" }],
    }));
  };
  const removeInfo = (index: number) => {
    setResumeData?.((prev) => ({
      ...prev,
      additionalInfo: prev.additionalInfo.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="bg-white text-gray-900 font-sans px-6 py-10 text-sm leading-relaxed">
      <div className="w-full space-y-5">

        {/* Header */}
        <header className="text-center mb-6">
          {editMode ? (
            <>
              <input
                className="text-3xl font-bold text-purple-800 text-center w-full"
                value={data.header.name}
                onChange={(e) => handleChange("header.name", e.target.value)}
              />
              <input
                className="text-sm text-center w-full"
                value={data.header.contact}
                onChange={(e) => handleChange("header.contact", e.target.value)}
              />
              <input
                className="text-sm text-center w-full"
                value={data.header.website}
                onChange={(e) => handleChange("header.website", e.target.value)}
              />
            </>
          ) : (
            <>
              <h1 className="text-3xl font-bold text-purple-800">{data.header.name}</h1>
              <p>{data.header.contact}</p>
              <p>{data.header.website}</p>
            </>
          )}
        </header>

        <div className="border-b border-purple-800"></div>

        {/* Summary */}
        <section>
          <h2 className="uppercase text-purple-700 font-bold text-lg pb-1 mb-2">Summary</h2>
          {editMode ? (
            <textarea
              className="w-full border p-2"
              value={data.summary}
              onChange={(e) => handleChange("summary", e.target.value)}
            />
          ) : (
            <p>{data.summary}</p>
          )}
        </section>

        <div className="border-b border-purple-800"></div>

        {/* Work Experience */}
        <section>
          <h2 className="uppercase text-purple-700 font-bold text-lg pb-1 mb-2">
            Work Experience
          </h2>
          {data.workExperience.map((job, i) => (
            <div key={i} className="mb-4">
              {editMode ? (
                <>
                  <input
                    className="font-bold w-full"
                    value={job.title}
                    onChange={(e) => handleChange(`workExperience.${i}.title`, e.target.value)}
                  />
                  <input
                    className="w-full"
                    value={job.date}
                    onChange={(e) => handleChange(`workExperience.${i}.date`, e.target.value)}
                  />
                  {job.bullets.map((point, j) => (
                    <input
                      key={j}
                      className="w-full ml-4"
                      value={point}
                      onChange={(e) =>
                        handleChange(`workExperience.${i}.bullets.${j}`, e.target.value)
                      }
                    />
                  ))}
                  <button
                    onClick={() => removeWork(i)}
                    className="text-red-500 text-xs mt-1"
                  >
                    Remove Job
                  </button>
                </>
              ) : (
                <>
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <h3 className="font-bold">{job.title}</h3>
                    <span className="font-bold">{job.date}</span>
                  </div>
                  <ul className="list-disc pl-6 space-y-1">
                    {job.bullets.map((point, j) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
          {editMode && (
            <button onClick={addWork} className="text-blue-600 text-sm">
              + Add Work
            </button>
          )}
        </section>

        <div className="border-b border-purple-800"></div>

        {/* Education */}
        <section>
          <h2 className="uppercase text-purple-700 font-bold text-lg pb-1 mb-2">Education</h2>
          {data.education.map((edu, i) => (
            <div key={i} className="mb-4">
              {editMode ? (
                <>
                  <input
                    className="font-bold w-full"
                    value={edu.title}
                    onChange={(e) => handleChange(`education.${i}.title`, e.target.value)}
                  />
                  <input
                    className="w-full"
                    value={edu.date}
                    onChange={(e) => handleChange(`education.${i}.date`, e.target.value)}
                  />
                  <input
                    className="w-full"
                    value={edu.school}
                    onChange={(e) => handleChange(`education.${i}.school`, e.target.value)}
                  />
                  {edu.bullets.map((point, j) => (
                    <input
                      key={j}
                      className="w-full ml-4"
                      value={point}
                      onChange={(e) =>
                        handleChange(`education.${i}.bullets.${j}`, e.target.value)
                      }
                    />
                  ))}
                  <button
                    onClick={() => removeEducation(i)}
                    className="text-red-500 text-xs mt-1"
                  >
                    Remove Education
                  </button>
                </>
              ) : (
                <>
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <h3 className="font-bold">{edu.title}</h3>
                    <span className="font-bold">{edu.date}</span>
                  </div>
                  <p className="text-sm">{edu.school}</p>
                  <ul className="list-disc pl-6 space-y-1">
                    {edu.bullets.map((point, j) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
          {editMode && (
            <button onClick={addEducation} className="text-blue-600 text-sm">
              + Add Education
            </button>
          )}
        </section>

        <div className="border-b border-purple-800"></div>

        {/* Additional Information */}
        <section>
          <h2 className="uppercase text-purple-700 font-bold text-lg pb-1 mb-2">
            Additional Information
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            {data.additionalInfo.map((info, i) => (
              <li key={i}>
                {editMode ? (
                  <>
                    <input
                      className="font-bold mr-2"
                      value={info.label}
                      onChange={(e) => handleChange(`additionalInfo.${i}.label`, e.target.value)}
                    />
                    <input
                      className="ml-2"
                      value={info.value}
                      onChange={(e) => handleChange(`additionalInfo.${i}.value`, e.target.value)}
                    />
                    <button
                      onClick={() => removeInfo(i)}
                      className="text-red-500 text-xs ml-2"
                    >
                      Remove
                    </button>
                  </>
                ) : (
                  <span>
                    <strong>{info.label}:</strong> {info.value}
                  </span>
                )}
              </li>
            ))}
          </ul>
          {editMode && (
            <button onClick={addInfo} className="text-blue-600 text-sm">
              + Add Info
            </button>
          )}
        </section>
      </div>
    </div>
  );
}
