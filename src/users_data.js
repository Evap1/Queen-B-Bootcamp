const users = [
  
    {
      "id": 1,
      "name": "Edwin Conley",
      "email": "haledevin@example.org",
      "skill": "JavaScript",
      "description": {
        "education": {
          "field": "computer science",
          "graduation": "2017"
        },
        "work": {
          "job": "Engineer, building services",
          "company": "Robinson-Scott"
        },
        "hobby": [
          "dance",
          "play sports"
        ]
      },
      "isActive": false,
      "image": "person5"
    },
    {
      "id": 2,
      "name": "Michael Franklin",
      "email": "cheryllopez@example.net",
      "skill": "nodeJS",
      "description": {
        "education": {
          "field": "computer science",
          "graduation": "2023"
        },
        "work": {
          "job": "Investment banker, corporate",
          "company": "Morrison, Martinez and Fernandez"
        },
        "hobby": [
          "cook",
          "play sports"
        ]
      },
      "isActive": false,
      "image": "person4"
    },
    {
      "id": 3,
      "name": "Diana Becker",
      "email": "kwilcox@example.net",
      "skill": "JavaScript",
      "description": {
        "education": {
          "field": "computer science",
          "graduation": "2020"
        },
        "work": {
          "job": "Air cabin crew",
          "company": "Hays, Bryant and Nguyen"
        },
        "hobby": [
          "dance",
          "play sports"
        ]
      },
      "isActive": false,
      "image": "person3"
    },
    {
      "id": 4,
      "name": "Joanna Brown",
      "email": "cookrobert@example.com",
      "skill": "HTML",
      "description": {
        "education": {
          "field": "computer science",
          "graduation": "2022"
        },
        "work": {
          "job": "Producer, television/film/video",
          "company": "Robinson-Garcia"
        },
        "hobby": [
          "cook",
          "dance"
        ]
      },
      "isActive": false,
      "image": "person4"
    },
    {
      "id": 5,
      "name": "Zachary Deleon",
      "email": "tmurray@example.org",
      "skill": "CSS",
      "description": {
        "education": {
          "field": "computer science",
          "graduation": "2020"
        },
        "work": {
          "job": "Animal technologist",
          "company": "Taylor, Smith and Fowler"
        },
        "hobby": [
          "dance",
          "cook"
        ]
      },
      "isActive": false,
      "image": "person7"
    },
    {
      "id": 6,
      "name": "Sandra Wells",
      "email": "jacobmoyer@example.com",
      "skill": "JavaScript",
      "description": {
        "education": {
          "field": "computer science",
          "graduation": "2017"
        },
        "work": {
          "job": "Podiatrist",
          "company": "Wolf, Gordon and Irwin"
        },
        "hobby": [
          "paint",
          "dance"
        ]
      },
      "isActive": false,
      "image": "person7"
    },
    {
      "id": 7,
      "name": "Donna Richards",
      "email": "uwilson@example.net",
      "skill": "JavaScript",
      "description": {
        "education": {
          "field": "computer science",
          "graduation": "2018"
        },
        "work": {
          "job": "Chiropodist",
          "company": "Young Group"
        },
        "hobby": [
          "dance",
          "sing"
        ]
      },
      "isActive": false,
      "image": "person5"
    },
    {
      "id": 8,
      "name": "Dustin Nicholson",
      "email": "ibarradebra@example.org",
      "skill": "nodeJS",
      "description": {
        "education": {
          "field": "computer science",
          "graduation": "2018"
        },
        "work": {
          "job": "Energy engineer",
          "company": "Robinson-Jordan"
        },
        "hobby": [
          "paint",
          "cook"
        ]
      },
      "isActive": false,
      "image": "person3"
    },
    {
      "id": 9,
      "name": "Nathan Waters",
      "email": "lorettaclements@example.net",
      "skill": "nodeJS",
      "description": {
        "education": {
          "field": "computer science",
          "graduation": "2016"
        },
        "work": {
          "job": "Scientist, physiological",
          "company": "Murray-Cohen"
        },
        "hobby": [
          "cook",
          "sing"
        ]
      },
      "isActive": false,
      "image": "person3"
    },
    {
      "id": 10,
      "name": "Diana Williams",
      "email": "caseyvelazquez@example.com",
      "skill": "nodeJS",
      "description": {
        "education": {
          "field": "computer science",
          "graduation": "2016"
        },
        "work": {
          "job": "Wellsite geologist",
          "company": "Lewis-Barber"
        },
        "hobby": [
          "dance",
          "dance"
        ]
      },
      "isActive": false,
      "image": "person6"
    },
    {
      "id": 11,
      "name": "Amy Barrett",
      "email": "sfreeman@example.net",
      "skill": "CSS",
      "description": {
        "education": {
          "field": "computer science",
          "graduation": "2020"
        },
        "work": {
          "job": "Dispensing optician",
          "company": "Gray-Johnston"
        },
        "hobby": [
          "dance",
          "paint"
        ]
      },
      "isActive": false,
      "image": "person2"
    },
    {
      "id": 12,
      "name": "Thomas Morris",
      "email": "iedwards@example.com",
      "skill": "React",
      "description": {
        "education": {
          "field": "computer science",
          "graduation": "2016"
        },
        "work": {
          "job": "Therapist, art",
          "company": "Miller-Sanchez"
        },
        "hobby": [
          "play sports",
          "sing"
        ]
      },
      "isActive": false,
      "image": "person6"
    },
    {
      "id": 13,
      "name": "Ryan Smith",
      "email": "bconley@example.net",
      "skill": "CSS",
      "description": {
        "education": {
          "field": "computer science",
          "graduation": "2020"
        },
        "work": {
          "job": "Exercise physiologist",
          "company": "Page Ltd"
        },
        "hobby": [
          "dance",
          "cook"
        ]
      },
      "isActive": false,
      "image": "person1"
    },
    {
      "id": 14,
      "name": "Kathy Thomas",
      "email": "travissmith@example.com",
      "skill": "CSS",
      "description": {
        "education": {
          "field": "computer science",
          "graduation": "2017"
        },
        "work": {
          "job": "Amenity horticulturist",
          "company": "Peters Group"
        },
        "hobby": [
          "cook",
          "sing"
        ]
      },
      "isActive": false,
      "image": "person2"
    },
    {
      "id": 15,
      "name": "Kenneth Gray",
      "email": "ncoleman@example.org",
      "skill": "CSS",
      "description": {
        "education": {
          "field": "computer science",
          "graduation": "2017"
        },
        "work": {
          "job": "Paramedic",
          "company": "Arnold PLC"
        },
        "hobby": [
          "paint",
          "sing"
        ]
      },
      "isActive": false,
      "image": "person1"
    },
    {
      "id": 16,
      "name": "Walter Oconnor",
      "email": "danajenkins@example.org",
      "skill": "React",
      "description": {
        "education": {
          "field": "computer science",
          "graduation": "2022"
        },
        "work": {
          "job": "Production assistant, radio",
          "company": "Bonilla, Copeland and Bowman"
        },
        "hobby": [
          "dance",
          "paint"
        ]
      },
      "isActive": false,
      "image": "person3"
    },
    {
      "id": 17,
      "name": "Kathryn Clark",
      "email": "harrisdustin@example.net",
      "skill": "JavaScript",
      "description": {
        "education": {
          "field": "computer science",
          "graduation": "2020"
        },
        "work": {
          "job": "Hospital doctor",
          "company": "Johnston-Fischer"
        },
        "hobby": [
          "sing",
          "sing"
        ]
      },
      "isActive": false,
      "image": "person3"
    },
    {
      "id": 18,
      "name": "Terri Daniel",
      "email": "khanbrittany@example.org",
      "skill": "React",
      "description": {
        "education": {
          "field": "computer science",
          "graduation": "2022"
        },
        "work": {
          "job": "Learning mentor",
          "company": "Williams LLC"
        },
        "hobby": [
          "dance",
          "paint"
        ]
      },
      "isActive": false,
      "image": "person6"
    },
    {
      "id": 19,
      "name": "Heather Wilson",
      "email": "carrie67@example.org",
      "skill": "JavaScript",
      "description": {
        "education": {
          "field": "computer science",
          "graduation": "2017"
        },
        "work": {
          "job": "Information officer",
          "company": "Huynh, Alexander and Little"
        },
        "hobby": [
          "paint",
          "dance"
        ]
      },
      "isActive": false,
      "image": "person2"
    },
    {
      "id": 20,
      "name": "Deborah Washington",
      "email": "medinadonna@example.com",
      "skill": "HTML",
      "description": {
        "education": {
          "field": "computer science",
          "graduation": "2018"
        },
        "work": {
          "job": "Bookseller",
          "company": "Hopkins-Lowe"
        },
        "hobby": [
          "paint",
          "paint"
        ]
      },
      "isActive": false,
      "image": "person3"
    }
  ]

module.exports=users ;

