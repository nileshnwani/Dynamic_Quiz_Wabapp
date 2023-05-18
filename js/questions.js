// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "How constructor can be used for a servlet?",
    answer: "Initialization and Constructor function",
    options: [
      "Initialization",
      "Constructor function",
      "Initialization and Constructor function",
      "Setup() method"
    ]
  }, 
    {
    numb: 2,
    question: "Which of the following code is used to get an attribute in a HTTP Session object in servlets?",
    answer: "session.getAttribute(String name)",
    options: [
      "session.getAttribute(String name)",
      "session.alterAttribute(String name)",
      "session.updateAttribute(String name)",
      "session.setAttribute(String name)"
    ]
  },
    {
    numb: 3,
    question: "Which of the following is the correct order of servlet life cycle phase methods?",
    answer: "init(), service(), destroy()",
    options: [
      "init(), service(), destroy()",
      "initialize(), service(), destroy()",
      "init(), execute(), destroy()",
      "init(), service(), delete()"
    ]
  },
    {
    numb: 4,
    question: "___ is widely known as the father of the World Wide Web",
    answer: "Tim Berners-Lee",
    options: [
      "Tom burners-lee",
      "Tom bruce-lee",
      "Tim bruce-lee",
      "Tim Berners-Lee"
    ]
  },

    {
    numb: 5,
    question: "Which cookie it is valid for single session only and it is removed each time when the user closes the browser?",
    answer: "Non-persistent cookie",
    options: [
      "Persistent cookie",
      "Non-persistent cookie",
      "All the above",
      "None of the above"
    ]
  },

  {
    numb: 6,
    question: "_________ keyword is used to declare variables in javascript.",
    answer: "Var",
    options: [
      "Var",
      "Dim",
      "String",
      "None of the above"
    ]
  },
  {
    numb: 7,
    question: "Which Tag Is Used To Include A Separately Defined Style Sheet In Web Pages ?",
    answer: "link",
    options: [
      "style",
      "link",
      "body",
      "import"
    ]
  },

  {
    numb: 8,
    question: "Ajax stands for ______.",
    answer: "Asynchronous JavaScript and XML",
    options: [
      "Asynchronous JavaScript and XML",
      "Asynchronous JSON and XML",
      "Asynchronous Java and XML",
      "Asynchronous JavaScript and XMLHttpRequest"
    ]
  },
  
  {
    numb: 9,
    question: "Which of the following function is used to set cookie in PHP?",
    answer: "setcookie()",
    options: [
      "createcookie()",
      "makecookie()",
      "setcookie()",
      "None of the above"
    ]
  },
  
  {
    numb: 10,
    question: "Which of the following is not a type of database?",
    answer: "Decentralized",
    options: [
      "Hierarchical",
      "Network",
      "Distributed",
      "Decentralized"
    ]
  },
  
  
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 11
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];