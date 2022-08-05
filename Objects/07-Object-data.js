// intente extender esta estructura de datos, formada por un objeto formado por muchos otros objetos.

// Una vez que haya ampliado esta estructura de datos, quizás con más objetos similares, intente crear un ejemplo de manipulación de datos utilizando los métodos de los objetos vistos hasta ahora.

// Logra un objetivo específico si puedes.

// Ejemplo (buscar trabajos cuyos requisitos de trabajo necesiten un grado o diploma, yo te creo una ocupación que requiere una calificación informática)


const data = [
    {
        "noc_number": "00010",
        "occupation": "Legislators",
        "details": [
          {
            "section": "Illustrative example(s)",
            "details": [
              "cabinet minister",
              "city councillor",
              "First Nations band chief",
              "governor general",
              "lieutenant-governor",
              "mayor",
              "Member of Legislative Assembly (MLA)",
              "Member of Parliament (MP)",
              "Member of the National Assembly (MNA)",
              "Member of the Provincial Parliament (MPP)"
            ]
          },
          {
            "section": "Exclusion(s)",
            "details": [
              "Chief executive officer (CEO) - health, education, social and community services and membership organizations (See 00013 Senior managers - health, education, social and community services and membership organizations)",
              "Commissioner - government services (See 00011 Senior government managers and officials)"
            ]
          },
          {
            "section": "Main duties",
            "details": [
              "Enact, amend or repeal laws and regulations",
              "Participate in developing or amending government policies, programs or procedures",
              "Represent their government at local, national and international meetings and conferences",
              "Respond to matters of concern to constituents or the general public",
              "May serve as minister responsible for a government department or agency and direct senior government managers and officials in the implementation of government policy and the management of that department or agency."
            ]
          },
          {
            "section": "Employment requirements",
            "details": [
              "Election to a legislative body, or appointment to positions such as senator, lieutenant-governor or governor general, is required."
            ]
          }
        ]
    }, 
    {
      "noc_number": "00011",
      "occupation": "Sofware Developer",
      "details": [
        {
          "section": "Illustrative example(s)",
          "details": [
            "UI designer",
            "product owner",
            "CEO information technology",
            "senior developer back-end",
            "senior front-end developer",
            "Full-stack engineer software",
          ]
        },
        {
          "section": "Exclusion(s)",
          "details": [
            "A Software Developer is a professional who is charged with designing and coding software for businesses and consumers alike",
            "They work closely with clients to determine what they need, then use programming languages like Java or C++ to create programs. They must have critical thinking skills, as well as strong problem-solving abilities."
          ]
        },
        {
          "section": "Main duties",
          "details": [
            "Work with developers to design algorithms and flowcharts",
            "Produce clean, efficient code based on specifications",
            "Integrate software components and third-party programs",
            "Verify and deploy programs and systems",
            "Troubleshoot, debug and upgrade existing software"
          ]
        },
        {
          "section": "Employment requirements",
          "details": [
            "Bachelor's degree in computer science or related degree", 
            "Knowledge of the software development life-cycle", 
            "The desire to work in a fast-paced environment",
            "Ability to develop unit testing of code components or complete applications"
          ]
        }
      ]
    }, 
    {
      "noc_number": "00012",
      "occupation": "IT Engineer",
      "details": [
        {
          "section": "Illustrative example(s)",
          "details": [
            "IT Service Desk Agent",
            "IT Support/Helpdesk",
            "IT Support Specialist",
            "IT Engineer Agile Operations", 
            "IT Service expert"
          ]
        },
        {
          "section": "Exclusion(s)",
          "details": [
            "A Software Developer is a professional who is charged with designing and coding software for businesses and consumers alike",
            "They work closely with clients to determine what they need, then use programming languages like Java or C++ to create programs. They must have critical thinking skills, as well as strong problem-solving abilities."
          ]
        },
        {
          "section": "Main duties",
          "details": [
            "Work with developers to design algorithms and flowcharts",
            "Produce clean, efficient code based on specifications",
            "Integrate software components and third-party programs",
            "Verify and deploy programs and systems",
            "Troubleshoot, debug and upgrade existing software"
          ]
        },
        {
          "section": "Employment requirements",
          "details": [
            "Proven work experience as a Software Engineer or Software Developer", 
            "Experience designing interactive applications", 
            "Ability to develop software in Java, Ruby on Rails, C++ or other programming languages",
            "BSc degree in Computer Science, Engineering or relevant field"
          ]
        }
      ]
    }, 
    {
      "noc_number": "00013",
      "occupation": "Farmer",
      "details": [
        {
          "section": "Illustrative example(s)",
          "details": [
            "Forestry Technician",
            "Environmental Specialist",
          ]
        },
        {
          "section": "Exclusion(s)",
          "details": [
            "A Farmer manages farms, ranches, greenhouses, nurseries, and other agricultural production organizations. Farmers are involved in planting, cultivating, performing post-harvest duties, overseeing livestock, and supervising farm labor depending on the type of farm."
          ]
        },
        {
          "section": "Main duties",
          "details": [
            "Performing manual labor",
            "Performing maintenance on the farm.",
            "Handling heavy machinery",
            "Repairing faulty vehicles and machinery",
            "Managing farming activities"
          ]
        },
        {
          "section": "Employment requirements",
          "details": [
            "Previous experience in the farming industry.", 
            "Knowledge of farming best practices.", 
            "Able to work long hours on location",
            "Good communication skills."
          ]
        }
      ]
    }, 
    {
      "noc_number": "00014",
      "occupation": "Accountant",
      "details": [
        {
          "section": "Illustrative example(s)",
          "details": [
            "Coorporate accountant",
            "Financial accountant",
            "Senior accountant",
          ]
        },
        {
          "section": "Exclusion(s)",
          "details": [
            "An Accountant helps businesses make critical financial decisions by collecting, tracking, and correcting the company's finances",
            "This Accountant job description template is optimized for posting on online job boards or careers pages. You can easily customize this template to add any accountant duties and responsibilities that are relevant to your company"
          ]
        },
        {
          "section": "Main duties",
          "details": [
            "Manage all accounting transactions",
            "Prepare budget forecasts",
            "Publish financial statements in time",
            "Handle monthly, quarterly and annual closings",
            "Reconcile accounts payable and receivable"
          ]
        },
        {
          "section": "Employment requirements",
          "details": [
            "Excellent knowledge of accounting regulations and procedures, including the Generally Accepted Accounting Principles (GAAP)", 
            "BSc in Accounting, Finance or relevant degree", 
            "Advanced MS Excel skills including Vlookups and pivot tables",
            "Strong attention to detail and good analytical skills"
          ]
        }
      ]
    }, 
    {
      "noc_number": "00015",
      "occupation": "IT leader",
      "details": [
        {
          "section": "Illustrative example(s)",
          "details": [
            "IT Project Manager Infrastructure / Service Desk",
            "Manager, Corporate IT Helpdesk",
            "CEO information technology",
            "Manager, Corporate IT Helpdesk", 
            "IT Administrator"
          ]
        },
        {
          "section": "Exclusion(s)",
          "details": [
            "A Software Developer is a professional who is charged with designing and coding software for businesses and consumers alike",
            "They work closely with clients to determine what they need, then use programming languages like Java or C++ to create programs. They must have critical thinking skills, as well as strong problem-solving abilities."
          ]
        },
        {
          "section": "Main duties",
          "details": [
            "Work with developers to design algorithms and flowcharts",
            "Produce clean, efficient code based on specifications",
            "Integrate software components and third-party programs",
            "Verify and deploy programs and systems",
            "Troubleshoot, debug and upgrade existing software"
          ]
        },
        {
          "section": "Employment requirements",
          "details": [
            "Experience developing web applications using at least one popular web framework (JSF, Wicket, GWT, Spring MVC)", 
            "Experience designing interactive applications", 
            "Ability to document requirements and specifications",
            "BSc degree in Computer Science, Engineering or relevant field"
          ]
        }
      ]
    }, 
    {
      "noc_number": "00011",
      "occupation": "Developer",
      "details": [
        {
          "section": "Illustrative example(s)",
          "details": [
            "Dev Firware",
            "Developer for Artificial Intelligence and Machine Learning",
            "Developer Machine-Vision/Optical Metrology for AR Glasses", 
            "Developer for Data Delivery", 
            "B2B Communication Developer (EDI)", 
            "Lead Test Developer", 
            "Computer Vision Algorithm Developer (Deep Learning)"
          ]
        },
        {
          "section": "Exclusion(s)",
          "details": [
            "A Software Developer is a professional who is charged with designing and coding software for businesses and consumers alike",
            "They work closely with clients to determine what they need, then use programming languages like Java or C++ to create programs. They must have critical thinking skills, as well as strong problem-solving abilities."
          ]
        },
        {
          "section": "Main duties",
          "details": [
            "Work with developers to design algorithms and flowcharts",
            "Produce clean, efficient code based on specifications",
            "Integrate software components and third-party programs",
            "Verify and deploy programs and systems",
            "Troubleshoot, debug and upgrade existing software"
          ]
        },
        {
          "section": "Employment requirements",
          "details": [
            "Bachelor's degree in computer science or related degree", 
            "Knowledge of the software development life-cycle", 
            "The desire to work in a fast-paced environment",
            "Ability to develop unit testing of code components or complete applications"
          ]
        }
      ]
    }, 
    {
      "noc_number": "00011",
      "occupation": "Sofware Developer",
      "details": [
        {
          "section": "Illustrative example(s)",
          "details": [
            "UI designer",
            "product owner",
            "CEO information technology",
            "senior developer back-end",
            "senior front-end developer",
            "Full-stack engineer software",
          ]
        },
        {
          "section": "Exclusion(s)",
          "details": [
            "A Software Developer is a professional who is charged with designing and coding software for businesses and consumers alike",
            "They work closely with clients to determine what they need, then use programming languages like Java or C++ to create programs. They must have critical thinking skills, as well as strong problem-solving abilities."
          ]
        },
        {
          "section": "Main duties",
          "details": [
            "Work with developers to design algorithms and flowcharts",
            "Produce clean, efficient code based on specifications",
            "Integrate software components and third-party programs",
            "Verify and deploy programs and systems",
            "Troubleshoot, debug and upgrade existing software"
          ]
        },
        {
          "section": "Employment requirements",
          "details": [
            "Bachelor's degree in computer science or related degree", 
            "Knowledge of the software development life-cycle", 
            "The desire to work in a fast-paced environment",
            "Ability to develop unit testing of code components or complete applications"
          ]
        }
      ]
    }, 
    {
      "noc_number": "00011",
      "occupation": "Sofware Developer",
      "details": [
        {
          "section": "Illustrative example(s)",
          "details": [
            "Senior Software Developer - Focus E-Commerce",
            "Software Developer Situation Analysis for assisted and automated driving",
            "Function / Software Developer C++/Python - Driving Assistance Systems",
            "Senior Software Developer and Scrum Master for Continuous Integration",
          ]
        },
        {
          "section": "Exclusion(s)",
          "details": [
            "A Software Developer is a professional who is charged with designing and coding software for businesses and consumers alike",
            "They work closely with clients to determine what they need, then use programming languages like Java or C++ to create programs. They must have critical thinking skills, as well as strong problem-solving abilities."
          ]
        },
        {
          "section": "Main duties",
          "details": [
            "Work with developers to design algorithms and flowcharts",
            "Produce clean, efficient code based on specifications",
            "Integrate software components and third-party programs",
            "Verify and deploy programs and systems",
            "Troubleshoot, debug and upgrade existing software"
          ]
        },
        {
          "section": "Employment requirements",
          "details": [
            "Bachelor's degree in computer science or related degree", 
            "Knowledge of the software development life-cycle", 
            "The desire to work in a fast-paced environment",
            "Ability to develop unit testing of code components or complete applications"
          ]
        }
      ]
    }, 
    {
      "noc_number": "00011",
      "occupation": "Sofware",
      "details": [
        {
          "section": "Illustrative example(s)",
          "details": [
            "UI designer",
            "product owner",
            "CEO information technology",
            "senior developer back-end",
            "senior front-end developer",
            "Full-stack engineer software",
          ]
        },
        {
          "section": "Exclusion(s)",
          "details": [
            "A Software Developer is a professional who is charged with designing and coding software for businesses and consumers alike",
            "They work closely with clients to determine what they need, then use programming languages like Java or C++ to create programs. They must have critical thinking skills, as well as strong problem-solving abilities."
          ]
        },
        {
          "section": "Main duties",
          "details": [
            "Work with developers to design algorithms and flowcharts",
            "Produce clean, efficient code based on specifications",
            "Integrate software components and third-party programs",
            "Verify and deploy programs and systems",
            "Troubleshoot, debug and upgrade existing software"
          ]
        },
        {
          "section": "Employment requirements",
          "details": [
            "Knowledge of the software development life-cycle", 
            "The desire to work in a fast-paced environment",
            "Ability to develop unit testing of code components or complete applications"
          ]
        }
      ]
    }
]

// with forEach logic

// function getJobSearchedByKeyWord() {
//   // 1. store a place to jobPosting founded 
//   const jobPosting = [];
//   data.forEach((occupation) => {
//     const employmentRequirementsSection = occupation.details.find((detail) => {
//       return detail.section == 'Employment requirements';
//     })
//     const matchedDetails = employmentRequirementsSection.details.filter((requirement) => {
//       return requirement.match(new RegExp('degree', 'gi'));
//     });
//     if (matchedDetails.length > 0) {
//       jobPosting.push(occupation);
//     }
//   });
//   return jobPosting;
// }


// with filter logic

// function getJobSearchedByKeyWord() {
//   return data.filter((occupation) => {
//     const employmentRequirementsSection = occupation.details.find((detail) => {
//       return detail.section == 'Employment requirements';
//     })
//     const matchedDetails = employmentRequirementsSection.details.filter((requirement) => {
//       return requirement.match(new RegExp('degree', 'gi'));
//     });
//     return matchedDetails.length > 0
//   });
// }

// return only illustrative example if match with jobPosting 

function getJobSearchedByKeyWord(match) {
  return data.reduce((allPositions, occupation) => {
    const employmentRequirementsSection = occupation.details.find((detail) => {
      return detail.section === 'Employment requirements';
    })
    const matchedDetails = employmentRequirementsSection.details.filter((requirement) => {
      return requirement.match(new RegExp(match, 'gi'));
    });
    if (matchedDetails.length > 0) {
      const jobPositions = occupation.details.find((examples) => {
        return examples.section === 'Illustrative example(s)';
      })
      jobPositions.details.forEach((example) => {
        allPositions.add(example);
      })
    }
    return allPositions;
  }, new Set());
}

const search = getJobSearchedByKeyWord('degree');
console.log(search);

