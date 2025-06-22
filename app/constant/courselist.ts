export const courseList = {
  "courses": [
    {
  "courseTitle": "Intro to Python",
  "description": "Learn Intro to Python with real examples, clear explanations, and practical tasks.",
  "banner_image": "/banner5.png",
  "category": "Tech & Coding",
  "chapters": [
    {
      "chapterName": "Intro to Python Basics",
      "content": [
        {
          "topic": "Variables",
          "explain": "Variables in Python are used to store information that can be referenced and manipulated in a program. They provide a way of labeling data with a descriptive name so our programs can be understood more clearly by the reader and ourselves.",
          "code": "x = 5\ny = 'Hello'\nprint(x)\nprint(y)",
          "example": "For example, to store a number and a string: `x = 10`, `name = 'Alice'`"
        },
        {
          "topic": "Data Types",
          "explain": "Data types classify the type of data a variable can hold, such as numbers, strings, lists, and more. Understanding them is crucial for handling variables properly.",
          "code": "a = 10           # int\nb = 3.14         # float\nc = 'Python'     # str\nd = True         # bool",
          "example": "Try printing each type and using type() to inspect them."
        },
        {
          "topic": "Lists",
          "explain": "Lists in Python are ordered collections that can hold a variety of object types. They are mutable, meaning you can change their contents after creation.",
          "code": "fruits = ['apple', 'banana', 'cherry']\nprint(fruits[1])",
          "example": "Create a list of your favorite colors and print the second item."
        },
        {
          "topic": "Functions",
          "explain": "Functions are blocks of reusable code that perform a specific task. They help make programs more modular and manageable.",
          "code": "def greet(name):\n    return f'Hello, {name}'\n\nprint(greet('Alice'))",
          "example": "Write a function that returns the square of a number."
        },
        {
          "topic": "Loops",
          "explain": "Loops are used for iterating over sequences (like lists, dictionaries, etc.). Python has `for` and `while` loops.",
          "code": "for i in range(5):\n    print(i)",
          "example": "Print all numbers from 1 to 10 using a loop."
        },
        {
          "topic": "Conditionals",
          "explain": "Conditionals allow execution of certain code blocks based on logical conditions using if, elif, and else statements.",
          "code": "age = 18\nif age >= 18:\n    print('Adult')\nelse:\n    print('Minor')",
          "example": "Write a program to check if a number is even or odd."
        }
      ]
    },
     {
      "chapterName": "Intro to Python Intermediate",
      "content": [
        {
          "topic": "Variables",
          "explain": "Variables in Python are used to store information that can be referenced and manipulated in a program. They provide a way of labeling data with a descriptive name so our programs can be understood more clearly by the reader and ourselves.",
          "code": "x = 5\ny = 'Hello'\nprint(x)\nprint(y)",
          "example": "For example, to store a number and a string: `x = 10`, `name = 'Alice'`"
        },
        {
          "topic": "Data Types",
          "explain": "Data types classify the type of data a variable can hold, such as numbers, strings, lists, and more. Understanding them is crucial for handling variables properly.",
          "code": "a = 10           # int\nb = 3.14         # float\nc = 'Python'     # str\nd = True         # bool",
          "example": "Try printing each type and using type() to inspect them."
        },
        {
          "topic": "Lists",
          "explain": "Lists in Python are ordered collections that can hold a variety of object types. They are mutable, meaning you can change their contents after creation.",
          "code": "fruits = ['apple', 'banana', 'cherry']\nprint(fruits[1])",
          "example": "Create a list of your favorite colors and print the second item."
        },
        {
          "topic": "Functions",
          "explain": "Functions are blocks of reusable code that perform a specific task. They help make programs more modular and manageable.",
          "code": "def greet(name):\n    return f'Hello, {name}'\n\nprint(greet('Alice'))",
          "example": "Write a function that returns the square of a number."
        },
        {
          "topic": "Loops",
          "explain": "Loops are used for iterating over sequences (like lists, dictionaries, etc.). Python has `for` and `while` loops.",
          "code": "for i in range(5):\n    print(i)",
          "example": "Print all numbers from 1 to 10 using a loop."
        },
        {
          "topic": "Conditionals",
          "explain": "Conditionals allow execution of certain code blocks based on logical conditions using if, elif, and else statements.",
          "code": "age = 18\nif age >= 18:\n    print('Adult')\nelse:\n    print('Minor')",
          "example": "Write a program to check if a number is even or odd."
        }
      ]
    }
  ],
  "quiz": [
    {
      "question": "What is the main use of Variables?",
      "options": [
        "To store data",
        "To define loops",
        "To display output",
        "To declare conditions"
      ],
      "correctAns": "To store data"
    },
    {
      "question": "What is the main use of Data Types?",
      "options": [
        "To specify the kind of data a variable holds",
        "To run programs faster",
        "To create user interfaces",
        "To define loops"
      ],
      "correctAns": "To specify the kind of data a variable holds"
    },
    {
      "question": "What is the main use of Lists?",
      "options": [
        "To store multiple values in a single variable",
        "To perform arithmetic operations",
        "To define conditional logic",
        "To manage memory"
      ],
      "correctAns": "To store multiple values in a single variable"
    },
    {
      "question": "What is the main use of Functions?",
      "options": [
        "To reuse blocks of code",
        "To define variables",
        "To execute loops",
        "To comment code"
      ],
      "correctAns": "To reuse blocks of code"
    },
    {
      "question": "What is the main use of Loops?",
      "options": [
        "To repeat a block of code",
        "To declare variables",
        "To stop program execution",
        "To handle exceptions"
      ],
      "correctAns": "To repeat a block of code"
    },
    {
      "question": "What is the main use of Conditionals?",
      "options": [
        "To execute code based on certain conditions",
        "To perform database operations",
        "To format strings",
        "To import modules"
      ],
      "correctAns": "To execute code based on certain conditions"
    }
  ],
  "flashcards": [
    {
      "front": "Variables",
      "back": "Used to store data in a program."
    },
    {
      "front": "Data Types",
      "back": "Used to define the type of data stored in variables."
    },
    {
      "front": "Lists",
      "back": "Used to store multiple items in a single variable."
    },
    {
      "front": "Functions",
      "back": "Reusable blocks of code."
    },
    {
      "front": "Loops",
      "back": "Used to repeat a block of code multiple times."
    },
    {
      "front": "Conditionals",
      "back": "Used to make decisions in code based on conditions."
    }
  ],
  "qa": [
    {
      "question": "What are Variables?",
      "answer": "Variables are names used to store data values in a program."
    },
    {
      "question": "What are Data Types?",
      "answer": "Data types define the kind of value a variable holds, like int, str, float, etc."
    },
    {
      "question": "What are Lists?",
      "answer": "Lists are used to store multiple items in a single variable."
    },
    {
      "question": "What are Functions?",
      "answer": "Functions are reusable blocks of code that perform a task."
    },
    {
      "question": "What are Loops?",
      "answer": "Loops allow you to run a block of code repeatedly."
    },
    {
      "question": "What are Conditionals?",
      "answer": "Conditionals execute code only if certain conditions are true."
    }
  ]
},
    {
      "courseTitle": "Web Development Basics",
      "description": "Learn Web Development Basics with real examples, clear explanations, and practical tasks.",
      "banner_image": "/banner4.png",
      "category": "Tech & Coding",
     "chapters": [
    {
      "chapterName": "Web Development Basics",
      "content": [
        {
          "topic": "Variables",
          "explain": "Variables in Python are used to store information that can be referenced and manipulated in a program. They provide a way of labeling data with a descriptive name so our programs can be understood more clearly by the reader and ourselves.",
          "code": "x = 5\ny = 'Hello'\nprint(x)\nprint(y)",
          "example": "For example, to store a number and a string: `x = 10`, `name = 'Alice'`"
        },
        {
          "topic": "Data Types",
          "explain": "Data types classify the type of data a variable can hold, such as numbers, strings, lists, and more. Understanding them is crucial for handling variables properly.",
          "code": "a = 10           # int\nb = 3.14         # float\nc = 'Python'     # str\nd = True         # bool",
          "example": "Try printing each type and using type() to inspect them."
        },
        {
          "topic": "Lists",
          "explain": "Lists in Python are ordered collections that can hold a variety of object types. They are mutable, meaning you can change their contents after creation.",
          "code": "fruits = ['apple', 'banana', 'cherry']\nprint(fruits[1])",
          "example": "Create a list of your favorite colors and print the second item."
        },
        {
          "topic": "Functions",
          "explain": "Functions are blocks of reusable code that perform a specific task. They help make programs more modular and manageable.",
          "code": "def greet(name):\n    return f'Hello, {name}'\n\nprint(greet('Alice'))",
          "example": "Write a function that returns the square of a number."
        },
        {
          "topic": "Loops",
          "explain": "Loops are used for iterating over sequences (like lists, dictionaries, etc.). Python has `for` and `while` loops.",
          "code": "for i in range(5):\n    print(i)",
          "example": "Print all numbers from 1 to 10 using a loop."
        },
        {
          "topic": "Conditionals",
          "explain": "Conditionals allow execution of certain code blocks based on logical conditions using if, elif, and else statements.",
          "code": "age = 18\nif age >= 18:\n    print('Adult')\nelse:\n    print('Minor')",
          "example": "Write a program to check if a number is even or odd."
        }
      ]
    },
     {
      "chapterName": "Web Development Intermediate",
      "content": [
        {
          "topic": "Variables",
          "explain": "Variables in Python are used to store information that can be referenced and manipulated in a program. They provide a way of labeling data with a descriptive name so our programs can be understood more clearly by the reader and ourselves.",
          "code": "x = 5\ny = 'Hello'\nprint(x)\nprint(y)",
          "example": "For example, to store a number and a string: `x = 10`, `name = 'Alice'`"
        },
        {
          "topic": "Data Types",
          "explain": "Data types classify the type of data a variable can hold, such as numbers, strings, lists, and more. Understanding them is crucial for handling variables properly.",
          "code": "a = 10           # int\nb = 3.14         # float\nc = 'Python'     # str\nd = True         # bool",
          "example": "Try printing each type and using type() to inspect them."
        },
        {
          "topic": "Lists",
          "explain": "Lists in Python are ordered collections that can hold a variety of object types. They are mutable, meaning you can change their contents after creation.",
          "code": "fruits = ['apple', 'banana', 'cherry']\nprint(fruits[1])",
          "example": "Create a list of your favorite colors and print the second item."
        },
        {
          "topic": "Functions",
          "explain": "Functions are blocks of reusable code that perform a specific task. They help make programs more modular and manageable.",
          "code": "def greet(name):\n    return f'Hello, {name}'\n\nprint(greet('Alice'))",
          "example": "Write a function that returns the square of a number."
        },
        {
          "topic": "Loops",
          "explain": "Loops are used for iterating over sequences (like lists, dictionaries, etc.). Python has `for` and `while` loops.",
          "code": "for i in range(5):\n    print(i)",
          "example": "Print all numbers from 1 to 10 using a loop."
        },
        {
          "topic": "Conditionals",
          "explain": "Conditionals allow execution of certain code blocks based on logical conditions using if, elif, and else statements.",
          "code": "age = 18\nif age >= 18:\n    print('Adult')\nelse:\n    print('Minor')",
          "example": "Write a program to check if a number is even or odd."
        }
      ]
    }
  ],
  "quiz": [
    {
      "question": "What is the main use of Variables?",
      "options": [
        "To store data",
        "To define loops",
        "To display output",
        "To declare conditions"
      ],
      "correctAns": "To store data"
    },
    {
      "question": "What is the main use of Data Types?",
      "options": [
        "To specify the kind of data a variable holds",
        "To run programs faster",
        "To create user interfaces",
        "To define loops"
      ],
      "correctAns": "To specify the kind of data a variable holds"
    },
    {
      "question": "What is the main use of Lists?",
      "options": [
        "To store multiple values in a single variable",
        "To perform arithmetic operations",
        "To define conditional logic",
        "To manage memory"
      ],
      "correctAns": "To store multiple values in a single variable"
    },
    {
      "question": "What is the main use of Functions?",
      "options": [
        "To reuse blocks of code",
        "To define variables",
        "To execute loops",
        "To comment code"
      ],
      "correctAns": "To reuse blocks of code"
    },
    {
      "question": "What is the main use of Loops?",
      "options": [
        "To repeat a block of code",
        "To declare variables",
        "To stop program execution",
        "To handle exceptions"
      ],
      "correctAns": "To repeat a block of code"
    },
    {
      "question": "What is the main use of Conditionals?",
      "options": [
        "To execute code based on certain conditions",
        "To perform database operations",
        "To format strings",
        "To import modules"
      ],
      "correctAns": "To execute code based on certain conditions"
    }
  ],
  "flashcards": [
    {
      "front": "Variables",
      "back": "Used to store data in a program."
    },
    {
      "front": "Data Types",
      "back": "Used to define the type of data stored in variables."
    },
    {
      "front": "Lists",
      "back": "Used to store multiple items in a single variable."
    },
    {
      "front": "Functions",
      "back": "Reusable blocks of code."
    },
    {
      "front": "Loops",
      "back": "Used to repeat a block of code multiple times."
    },
    {
      "front": "Conditionals",
      "back": "Used to make decisions in code based on conditions."
    }
  ],
  "qa": [
    {
      "question": "What are Variables?",
      "answer": "Variables are names used to store data values in a program."
    },
    {
      "question": "What are Data Types?",
      "answer": "Data types define the kind of value a variable holds, like int, str, float, etc."
    },
    {
      "question": "What are Lists?",
      "answer": "Lists are used to store multiple items in a single variable."
    },
    {
      "question": "What are Functions?",
      "answer": "Functions are reusable blocks of code that perform a task."
    },
    {
      "question": "What are Loops?",
      "answer": "Loops allow you to run a block of code repeatedly."
    },
    {
      "question": "What are Conditionals?",
      "answer": "Conditionals execute code only if certain conditions are true."
    }
  ]
    },
    {
      "courseTitle": "JavaScript Mastery",
      "description": "Learn JavaScript Mastery with real examples, clear explanations, and practical tasks.",
      "banner_image": "/banner5.png",
      "category": "Tech & Coding",
     "chapters": [
    {
      "chapterName": "JavaScript Mastery Basics",
      "content": [
        {
          "topic": "Variables",
          "explain": "Variables in Python are used to store information that can be referenced and manipulated in a program. They provide a way of labeling data with a descriptive name so our programs can be understood more clearly by the reader and ourselves.",
          "code": "x = 5\ny = 'Hello'\nprint(x)\nprint(y)",
          "example": "For example, to store a number and a string: `x = 10`, `name = 'Alice'`"
        },
        {
          "topic": "Data Types",
          "explain": "Data types classify the type of data a variable can hold, such as numbers, strings, lists, and more. Understanding them is crucial for handling variables properly.",
          "code": "a = 10           # int\nb = 3.14         # float\nc = 'Python'     # str\nd = True         # bool",
          "example": "Try printing each type and using type() to inspect them."
        },
        {
          "topic": "Lists",
          "explain": "Lists in Python are ordered collections that can hold a variety of object types. They are mutable, meaning you can change their contents after creation.",
          "code": "fruits = ['apple', 'banana', 'cherry']\nprint(fruits[1])",
          "example": "Create a list of your favorite colors and print the second item."
        },
        {
          "topic": "Functions",
          "explain": "Functions are blocks of reusable code that perform a specific task. They help make programs more modular and manageable.",
          "code": "def greet(name):\n    return f'Hello, {name}'\n\nprint(greet('Alice'))",
          "example": "Write a function that returns the square of a number."
        },
        {
          "topic": "Loops",
          "explain": "Loops are used for iterating over sequences (like lists, dictionaries, etc.). Python has `for` and `while` loops.",
          "code": "for i in range(5):\n    print(i)",
          "example": "Print all numbers from 1 to 10 using a loop."
        },
        {
          "topic": "Conditionals",
          "explain": "Conditionals allow execution of certain code blocks based on logical conditions using if, elif, and else statements.",
          "code": "age = 18\nif age >= 18:\n    print('Adult')\nelse:\n    print('Minor')",
          "example": "Write a program to check if a number is even or odd."
        }
      ]
    },
     {
      "chapterName": "JavaScript Mastery Intermediate",
      "content": [
        {
          "topic": "Variables",
          "explain": "Variables in Python are used to store information that can be referenced and manipulated in a program. They provide a way of labeling data with a descriptive name so our programs can be understood more clearly by the reader and ourselves.",
          "code": "x = 5\ny = 'Hello'\nprint(x)\nprint(y)",
          "example": "For example, to store a number and a string: `x = 10`, `name = 'Alice'`"
        },
        {
          "topic": "Data Types",
          "explain": "Data types classify the type of data a variable can hold, such as numbers, strings, lists, and more. Understanding them is crucial for handling variables properly.",
          "code": "a = 10           # int\nb = 3.14         # float\nc = 'Python'     # str\nd = True         # bool",
          "example": "Try printing each type and using type() to inspect them."
        },
        {
          "topic": "Lists",
          "explain": "Lists in Python are ordered collections that can hold a variety of object types. They are mutable, meaning you can change their contents after creation.",
          "code": "fruits = ['apple', 'banana', 'cherry']\nprint(fruits[1])",
          "example": "Create a list of your favorite colors and print the second item."
        },
        {
          "topic": "Functions",
          "explain": "Functions are blocks of reusable code that perform a specific task. They help make programs more modular and manageable.",
          "code": "def greet(name):\n    return f'Hello, {name}'\n\nprint(greet('Alice'))",
          "example": "Write a function that returns the square of a number."
        },
        {
          "topic": "Loops",
          "explain": "Loops are used for iterating over sequences (like lists, dictionaries, etc.). Python has `for` and `while` loops.",
          "code": "for i in range(5):\n    print(i)",
          "example": "Print all numbers from 1 to 10 using a loop."
        },
        {
          "topic": "Conditionals",
          "explain": "Conditionals allow execution of certain code blocks based on logical conditions using if, elif, and else statements.",
          "code": "age = 18\nif age >= 18:\n    print('Adult')\nelse:\n    print('Minor')",
          "example": "Write a program to check if a number is even or odd."
        }
      ]
    }
  ],
  "quiz": [
    {
      "question": "What is the main use of Variables?",
      "options": [
        "To store data",
        "To define loops",
        "To display output",
        "To declare conditions"
      ],
      "correctAns": "To store data"
    },
    {
      "question": "What is the main use of Data Types?",
      "options": [
        "To specify the kind of data a variable holds",
        "To run programs faster",
        "To create user interfaces",
        "To define loops"
      ],
      "correctAns": "To specify the kind of data a variable holds"
    },
    {
      "question": "What is the main use of Lists?",
      "options": [
        "To store multiple values in a single variable",
        "To perform arithmetic operations",
        "To define conditional logic",
        "To manage memory"
      ],
      "correctAns": "To store multiple values in a single variable"
    },
    {
      "question": "What is the main use of Functions?",
      "options": [
        "To reuse blocks of code",
        "To define variables",
        "To execute loops",
        "To comment code"
      ],
      "correctAns": "To reuse blocks of code"
    },
    {
      "question": "What is the main use of Loops?",
      "options": [
        "To repeat a block of code",
        "To declare variables",
        "To stop program execution",
        "To handle exceptions"
      ],
      "correctAns": "To repeat a block of code"
    },
    {
      "question": "What is the main use of Conditionals?",
      "options": [
        "To execute code based on certain conditions",
        "To perform database operations",
        "To format strings",
        "To import modules"
      ],
      "correctAns": "To execute code based on certain conditions"
    }
  ],
  "flashcards": [
    {
      "front": "Variables",
      "back": "Used to store data in a program."
    },
    {
      "front": "Data Types",
      "back": "Used to define the type of data stored in variables."
    },
    {
      "front": "Lists",
      "back": "Used to store multiple items in a single variable."
    },
    {
      "front": "Functions",
      "back": "Reusable blocks of code."
    },
    {
      "front": "Loops",
      "back": "Used to repeat a block of code multiple times."
    },
    {
      "front": "Conditionals",
      "back": "Used to make decisions in code based on conditions."
    }
  ],
  "qa": [
    {
      "question": "What are Variables?",
      "answer": "Variables are names used to store data values in a program."
    },
    {
      "question": "What are Data Types?",
      "answer": "Data types define the kind of value a variable holds, like int, str, float, etc."
    },
    {
      "question": "What are Lists?",
      "answer": "Lists are used to store multiple items in a single variable."
    },
    {
      "question": "What are Functions?",
      "answer": "Functions are reusable blocks of code that perform a task."
    },
    {
      "question": "What are Loops?",
      "answer": "Loops allow you to run a block of code repeatedly."
    },
    {
      "question": "What are Conditionals?",
      "answer": "Conditionals execute code only if certain conditions are true."
    }
  ]
    },
    {
      "courseTitle": "React for Beginners",
      "description": "Learn React for Beginners with real examples, clear explanations, and practical tasks.",
      "banner_image": "/banner3.png",
      "category": "Tech & Coding",
      "chapters": [
    {
      "chapterName": "React for Beginners Basics",
      "content": [
        {
          "topic": "Variables",
          "explain": "Variables in Python are used to store information that can be referenced and manipulated in a program. They provide a way of labeling data with a descriptive name so our programs can be understood more clearly by the reader and ourselves.",
          "code": "x = 5\ny = 'Hello'\nprint(x)\nprint(y)",
          "example": "For example, to store a number and a string: `x = 10`, `name = 'Alice'`"
        },
        {
          "topic": "Data Types",
          "explain": "Data types classify the type of data a variable can hold, such as numbers, strings, lists, and more. Understanding them is crucial for handling variables properly.",
          "code": "a = 10           # int\nb = 3.14         # float\nc = 'Python'     # str\nd = True         # bool",
          "example": "Try printing each type and using type() to inspect them."
        },
        {
          "topic": "Lists",
          "explain": "Lists in Python are ordered collections that can hold a variety of object types. They are mutable, meaning you can change their contents after creation.",
          "code": "fruits = ['apple', 'banana', 'cherry']\nprint(fruits[1])",
          "example": "Create a list of your favorite colors and print the second item."
        },
        {
          "topic": "Functions",
          "explain": "Functions are blocks of reusable code that perform a specific task. They help make programs more modular and manageable.",
          "code": "def greet(name):\n    return f'Hello, {name}'\n\nprint(greet('Alice'))",
          "example": "Write a function that returns the square of a number."
        },
        {
          "topic": "Loops",
          "explain": "Loops are used for iterating over sequences (like lists, dictionaries, etc.). Python has `for` and `while` loops.",
          "code": "for i in range(5):\n    print(i)",
          "example": "Print all numbers from 1 to 10 using a loop."
        },
        {
          "topic": "Conditionals",
          "explain": "Conditionals allow execution of certain code blocks based on logical conditions using if, elif, and else statements.",
          "code": "age = 18\nif age >= 18:\n    print('Adult')\nelse:\n    print('Minor')",
          "example": "Write a program to check if a number is even or odd."
        }
      ]
    },
     {
      "chapterName": "IReact for Beginners Intermediate",
      "content": [
        {
          "topic": "Variables",
          "explain": "Variables in Python are used to store information that can be referenced and manipulated in a program. They provide a way of labeling data with a descriptive name so our programs can be understood more clearly by the reader and ourselves.",
          "code": "x = 5\ny = 'Hello'\nprint(x)\nprint(y)",
          "example": "For example, to store a number and a string: `x = 10`, `name = 'Alice'`"
        },
        {
          "topic": "Data Types",
          "explain": "Data types classify the type of data a variable can hold, such as numbers, strings, lists, and more. Understanding them is crucial for handling variables properly.",
          "code": "a = 10           # int\nb = 3.14         # float\nc = 'Python'     # str\nd = True         # bool",
          "example": "Try printing each type and using type() to inspect them."
        },
        {
          "topic": "Lists",
          "explain": "Lists in Python are ordered collections that can hold a variety of object types. They are mutable, meaning you can change their contents after creation.",
          "code": "fruits = ['apple', 'banana', 'cherry']\nprint(fruits[1])",
          "example": "Create a list of your favorite colors and print the second item."
        },
        {
          "topic": "Functions",
          "explain": "Functions are blocks of reusable code that perform a specific task. They help make programs more modular and manageable.",
          "code": "def greet(name):\n    return f'Hello, {name}'\n\nprint(greet('Alice'))",
          "example": "Write a function that returns the square of a number."
        },
        {
          "topic": "Loops",
          "explain": "Loops are used for iterating over sequences (like lists, dictionaries, etc.). Python has `for` and `while` loops.",
          "code": "for i in range(5):\n    print(i)",
          "example": "Print all numbers from 1 to 10 using a loop."
        },
        {
          "topic": "Conditionals",
          "explain": "Conditionals allow execution of certain code blocks based on logical conditions using if, elif, and else statements.",
          "code": "age = 18\nif age >= 18:\n    print('Adult')\nelse:\n    print('Minor')",
          "example": "Write a program to check if a number is even or odd."
        }
      ]
    }
  ],
  "quiz": [
    {
      "question": "What is the main use of Variables?",
      "options": [
        "To store data",
        "To define loops",
        "To display output",
        "To declare conditions"
      ],
      "correctAns": "To store data"
    },
    {
      "question": "What is the main use of Data Types?",
      "options": [
        "To specify the kind of data a variable holds",
        "To run programs faster",
        "To create user interfaces",
        "To define loops"
      ],
      "correctAns": "To specify the kind of data a variable holds"
    },
    {
      "question": "What is the main use of Lists?",
      "options": [
        "To store multiple values in a single variable",
        "To perform arithmetic operations",
        "To define conditional logic",
        "To manage memory"
      ],
      "correctAns": "To store multiple values in a single variable"
    },
    {
      "question": "What is the main use of Functions?",
      "options": [
        "To reuse blocks of code",
        "To define variables",
        "To execute loops",
        "To comment code"
      ],
      "correctAns": "To reuse blocks of code"
    },
    {
      "question": "What is the main use of Loops?",
      "options": [
        "To repeat a block of code",
        "To declare variables",
        "To stop program execution",
        "To handle exceptions"
      ],
      "correctAns": "To repeat a block of code"
    },
    {
      "question": "What is the main use of Conditionals?",
      "options": [
        "To execute code based on certain conditions",
        "To perform database operations",
        "To format strings",
        "To import modules"
      ],
      "correctAns": "To execute code based on certain conditions"
    }
  ],
  "flashcards": [
    {
      "front": "Variables",
      "back": "Used to store data in a program."
    },
    {
      "front": "Data Types",
      "back": "Used to define the type of data stored in variables."
    },
    {
      "front": "Lists",
      "back": "Used to store multiple items in a single variable."
    },
    {
      "front": "Functions",
      "back": "Reusable blocks of code."
    },
    {
      "front": "Loops",
      "back": "Used to repeat a block of code multiple times."
    },
    {
      "front": "Conditionals",
      "back": "Used to make decisions in code based on conditions."
    }
  ],
  "qa": [
    {
      "question": "What are Variables?",
      "answer": "Variables are names used to store data values in a program."
    },
    {
      "question": "What are Data Types?",
      "answer": "Data types define the kind of value a variable holds, like int, str, float, etc."
    },
    {
      "question": "What are Lists?",
      "answer": "Lists are used to store multiple items in a single variable."
    },
    {
      "question": "What are Functions?",
      "answer": "Functions are reusable blocks of code that perform a task."
    },
    {
      "question": "What are Loops?",
      "answer": "Loops allow you to run a block of code repeatedly."
    },
    {
      "question": "What are Conditionals?",
      "answer": "Conditionals execute code only if certain conditions are true."
    }
  ]
    },
    {
      "courseTitle": "Fullstack Development",
      "description": "Learn Fullstack Development with real examples, clear explanations, and practical tasks.",
      "banner_image": "/banner4.png",
      "category": "Tech & Coding",
      "chapters": [
    {
      "chapterName": "Fullstack Development Basics",
      "content": [
        {
          "topic": "Variables",
          "explain": "Variables in Python are used to store information that can be referenced and manipulated in a program. They provide a way of labeling data with a descriptive name so our programs can be understood more clearly by the reader and ourselves.",
          "code": "x = 5\ny = 'Hello'\nprint(x)\nprint(y)",
          "example": "For example, to store a number and a string: `x = 10`, `name = 'Alice'`"
        },
        {
          "topic": "Data Types",
          "explain": "Data types classify the type of data a variable can hold, such as numbers, strings, lists, and more. Understanding them is crucial for handling variables properly.",
          "code": "a = 10           # int\nb = 3.14         # float\nc = 'Python'     # str\nd = True         # bool",
          "example": "Try printing each type and using type() to inspect them."
        },
        {
          "topic": "Lists",
          "explain": "Lists in Python are ordered collections that can hold a variety of object types. They are mutable, meaning you can change their contents after creation.",
          "code": "fruits = ['apple', 'banana', 'cherry']\nprint(fruits[1])",
          "example": "Create a list of your favorite colors and print the second item."
        },
        {
          "topic": "Functions",
          "explain": "Functions are blocks of reusable code that perform a specific task. They help make programs more modular and manageable.",
          "code": "def greet(name):\n    return f'Hello, {name}'\n\nprint(greet('Alice'))",
          "example": "Write a function that returns the square of a number."
        },
        {
          "topic": "Loops",
          "explain": "Loops are used for iterating over sequences (like lists, dictionaries, etc.). Python has `for` and `while` loops.",
          "code": "for i in range(5):\n    print(i)",
          "example": "Print all numbers from 1 to 10 using a loop."
        },
        {
          "topic": "Conditionals",
          "explain": "Conditionals allow execution of certain code blocks based on logical conditions using if, elif, and else statements.",
          "code": "age = 18\nif age >= 18:\n    print('Adult')\nelse:\n    print('Minor')",
          "example": "Write a program to check if a number is even or odd."
        }
      ]
    },
     {
      "chapterName": "IFullstack Development Intermediate",
      "content": [
        {
          "topic": "Variables",
          "explain": "Variables in Python are used to store information that can be referenced and manipulated in a program. They provide a way of labeling data with a descriptive name so our programs can be understood more clearly by the reader and ourselves.",
          "code": "x = 5\ny = 'Hello'\nprint(x)\nprint(y)",
          "example": "For example, to store a number and a string: `x = 10`, `name = 'Alice'`"
        },
        {
          "topic": "Data Types",
          "explain": "Data types classify the type of data a variable can hold, such as numbers, strings, lists, and more. Understanding them is crucial for handling variables properly.",
          "code": "a = 10           # int\nb = 3.14         # float\nc = 'Python'     # str\nd = True         # bool",
          "example": "Try printing each type and using type() to inspect them."
        },
        {
          "topic": "Lists",
          "explain": "Lists in Python are ordered collections that can hold a variety of object types. They are mutable, meaning you can change their contents after creation.",
          "code": "fruits = ['apple', 'banana', 'cherry']\nprint(fruits[1])",
          "example": "Create a list of your favorite colors and print the second item."
        },
        {
          "topic": "Functions",
          "explain": "Functions are blocks of reusable code that perform a specific task. They help make programs more modular and manageable.",
          "code": "def greet(name):\n    return f'Hello, {name}'\n\nprint(greet('Alice'))",
          "example": "Write a function that returns the square of a number."
        },
        {
          "topic": "Loops",
          "explain": "Loops are used for iterating over sequences (like lists, dictionaries, etc.). Python has `for` and `while` loops.",
          "code": "for i in range(5):\n    print(i)",
          "example": "Print all numbers from 1 to 10 using a loop."
        },
        {
          "topic": "Conditionals",
          "explain": "Conditionals allow execution of certain code blocks based on logical conditions using if, elif, and else statements.",
          "code": "age = 18\nif age >= 18:\n    print('Adult')\nelse:\n    print('Minor')",
          "example": "Write a program to check if a number is even or odd."
        }
      ]
    }
  ],
  "quiz": [
    {
      "question": "What is the main use of Variables?",
      "options": [
        "To store data",
        "To define loops",
        "To display output",
        "To declare conditions"
      ],
      "correctAns": "To store data"
    },
    {
      "question": "What is the main use of Data Types?",
      "options": [
        "To specify the kind of data a variable holds",
        "To run programs faster",
        "To create user interfaces",
        "To define loops"
      ],
      "correctAns": "To specify the kind of data a variable holds"
    },
    {
      "question": "What is the main use of Lists?",
      "options": [
        "To store multiple values in a single variable",
        "To perform arithmetic operations",
        "To define conditional logic",
        "To manage memory"
      ],
      "correctAns": "To store multiple values in a single variable"
    },
    {
      "question": "What is the main use of Functions?",
      "options": [
        "To reuse blocks of code",
        "To define variables",
        "To execute loops",
        "To comment code"
      ],
      "correctAns": "To reuse blocks of code"
    },
    {
      "question": "What is the main use of Loops?",
      "options": [
        "To repeat a block of code",
        "To declare variables",
        "To stop program execution",
        "To handle exceptions"
      ],
      "correctAns": "To repeat a block of code"
    },
    {
      "question": "What is the main use of Conditionals?",
      "options": [
        "To execute code based on certain conditions",
        "To perform database operations",
        "To format strings",
        "To import modules"
      ],
      "correctAns": "To execute code based on certain conditions"
    }
  ],
  "flashcards": [
    {
      "front": "Variables",
      "back": "Used to store data in a program."
    },
    {
      "front": "Data Types",
      "back": "Used to define the type of data stored in variables."
    },
    {
      "front": "Lists",
      "back": "Used to store multiple items in a single variable."
    },
    {
      "front": "Functions",
      "back": "Reusable blocks of code."
    },
    {
      "front": "Loops",
      "back": "Used to repeat a block of code multiple times."
    },
    {
      "front": "Conditionals",
      "back": "Used to make decisions in code based on conditions."
    }
  ],
  "qa": [
    {
      "question": "What are Variables?",
      "answer": "Variables are names used to store data values in a program."
    },
    {
      "question": "What are Data Types?",
      "answer": "Data types define the kind of value a variable holds, like int, str, float, etc."
    },
    {
      "question": "What are Lists?",
      "answer": "Lists are used to store multiple items in a single variable."
    },
    {
      "question": "What are Functions?",
      "answer": "Functions are reusable blocks of code that perform a task."
    },
    {
      "question": "What are Loops?",
      "answer": "Loops allow you to run a block of code repeatedly."
    },
    {
      "question": "What are Conditionals?",
      "answer": "Conditionals execute code only if certain conditions are true."
    }
  ]
    }
  ]
}