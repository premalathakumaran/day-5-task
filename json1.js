//1.Create your own resume data in JSON format

let myResume={
    "basics": {
      "name": "Premalatha k",
      "email": "prema18@gamil.com",
      "phone": 9859384378,
      "degree": "B.E",
      "location": {
        "address": "xyz",
        "postalCode": 600030,
        "city": "Chennai",
        "state": "Tamilnadu",
        "country": "India"
      },
      "profiles": [
        {
          "website": "https://www.linkedin.com/in/premalathakumaran01/",
          "github":"https://github.com/premalathakumaran"
        }
      ]
    },
    "education": [
      {
        "institution": "MEC",
        "department": "ECE",
        "studyType": "fulltime",
        "batch start year": 2019,
        "batch end year": 2023,
        "gpa": 8.8,
      }
    ],
    "skills": [
      {
        "name": "javascript",
        "level": "beginer",
        "project": [
          "live code editor using javascript language"
        ]
      }
    ],
    "languages": [
      {
        "language": "Tamil,Enlish",
      }
    ],
    "interests": [
      {
        "name": "internet surfing",
      }
    ]
  }
  console.log(myResume);