"use client";
import PreviewBox from "./eComponents/previewBox";
export default function ResumeEditor() {
  
  return (
    <>
     <div className="w-full border-l border-gray-200 bg-[#F0F1F5]">
      <PreviewBox />
    </div>
      
    </>
  );
}

// import { useState } from "react";
// import Accordion from "./eComponents/Accordions/Accord";
// import { Loader } from "@/app/components/ui/loader";
// const [sending, setSending] = useState(false);

  // const [resume, setResume] = useState({
  //   persondetails: {
  //     name: "name",
  //     address: "address",
  //     phone: "01234567890",
  //     email: "example@gmail.com",
  //     portfoliolink: "www.example.com",
  //   },
  //   summary: { summeryText: "something about you" },
  //   workExperience: {
  //     rolewithCompanyNmae: "ex: software Engineer at SunTechnologies",
  //     yeartoyear: "Mar 2021 - Dec 2022",
  //     jd: "Implemented cost-effective solutions...",
  //     jdlineOne: "Streamlined workflows...",
  //     jdLineTwo: "Delivered projects on time",
  //   },
  //   Education: {
  //     Department: "computer science",
  //     yeartoyear: "Mar 2021 - Dec 2022",
  //     University: "svpp",
  //     aboutLineOne: "Specialization in AI",
  //     aboutLineTwo: "Thesis on ML",
  //   },
  //   additionalinfor: {
  //     technicalskils: "python and java",
  //     Languages: "english",
  //     certifications: "certified developer",
  //     awardsoractivities: "swimming",
  //   },
  // });

  // Helper for updating nested fields
  // const updateField = (section: string, field: string, value: string) => {
  //   setResume((prev) => ({
  //     ...prev,
  //     [section]: {
  //       ...prev[section as keyof typeof prev],
  //       [field]: value,
  //     },
  //   }));
  // };

  // Handle update button click
  // const handleUpdate = () => {
  //   setSending(true);
  //   console.log("Updated Resume Data:", resume);

  //   // simulate API or save action
  //   setTimeout(() => {
  //     setSending(false);
  //   }, 2000);
  // };

{/* <div className="p-2 h-full overflow-y-auto"> */}
        {/* <Accordion
          items={[
            {
              title: "Personal Details",
              content: (
                <div>
                  <input
                    type="text"
                    value={resume.persondetails.name}
                    onChange={(e) =>
                      updateField("persondetails", "name", e.target.value)
                    }
                    className="border rounded-2xl p-2 px-4 w-full mb-2 h-12"
                  />
                  <input
                    type="text"
                    value={resume.persondetails.address}
                    onChange={(e) =>
                      updateField("persondetails", "address", e.target.value)
                    }
                    className="border rounded-2xl p-2 px-4 w-full mb-2 h-12"
                  />
                  <input
                    type="text"
                    value={resume.persondetails.phone}
                    onChange={(e) =>
                      updateField("persondetails", "phone", e.target.value)
                    }
                    className="border rounded-2xl p-2 px-4 w-full mb-2 h-12"
                  />
                  <input
                    type="email"
                    value={resume.persondetails.email}
                    onChange={(e) =>
                      updateField("persondetails", "email", e.target.value)
                    }
                    className="border rounded-2xl p-2 px-4 w-full mb-2 h-12"
                  />
                  <input
                    type="text"
                    value={resume.persondetails.portfoliolink}
                    onChange={(e) =>
                      updateField(
                        "persondetails",
                        "portfoliolink",
                        e.target.value
                      )
                    }
                    className="border rounded-2xl p-2 px-4  w-full mb-2 h-12"
                  />
                </div>
              ),
            },
            {
              title: "Summary",
              content: (
                <textarea
                  value={resume.summary.summeryText}
                  onChange={(e) =>
                    updateField("summary", "summeryText", e.target.value)
                  }
                  className="border rounded-2xl p-2 w-full"
                />
              ),
            },
            {
              title: "Work Experience",
              content: (
                <div>
                  <input
                    type="text"
                    value={resume.workExperience.rolewithCompanyNmae}
                    onChange={(e) =>
                      updateField(
                        "workExperience",
                        "rolewithCompanyNmae",
                        e.target.value
                      )
                    }
                    className="border rounded-2xl p-2 px-4 w-full mb-2 h-12"
                  />
                  <input
                    type="text"
                    value={resume.workExperience.yeartoyear}
                    onChange={(e) =>
                      updateField("workExperience", "yeartoyear", e.target.value)
                    }
                    className="border rounded-2xl p-2 px-4 w-full mb-2 h-12"
                  />
                  <textarea
                    value={resume.workExperience.jd}
                    onChange={(e) =>
                      updateField("workExperience", "jd", e.target.value)
                    }
                    className="border rounded-2xl p-2 px-4 w-full mb-2 "
                  />
                </div>
              ),
            },
          ]}
        /> */}
      {/* </div> */}

      {/* <div className="pl-4">
        <button
          disabled={sending}
          onClick={handleUpdate}
          className="bg-black font-medium text-white px-8 py-3 rounded-full cursor-pointer disabled:opacity-50"
        >
          {sending ? (
            <Loader>
              <span>Updating...</span>
            </Loader>
          ) : (
            "Update"
          )}
        </button>
      </div> */}