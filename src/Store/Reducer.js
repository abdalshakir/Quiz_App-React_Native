const INITIAL_STATE = {
    questions: [
        {
            question: "Where <script> tag placed?",
            options: [
                "The <body> section",
                "Both the <head> section and the <body> section are correct",
                "The <head> section"
            ],
            correctAnswer: "Both the <head> section and the <body> section are correct",
        },
        {
            question: "Inside which HTML element do we put the JavaScript?",
            options: [
                "link",
                "script",
                "h1",
            ],
            correctAnswer: "script",
        },
        {
            question: "The external JavaScript file must contain the <script> tag.",
            options: [
                "False",
                "True",
                "None of the above",
            ],
            correctAnswer: "True",
        },
        {
            question: 'How do you write "Hello World" in an alert box?',
            options: [
                'alert("Hello World");',
                'msg("Hello World");',
                'msgBox("Hello World");',
    
            ],
            correctAnswer: 'alert("Hello World");',
        },
        {
            question: "How do you create a function in JavaScript?",
            options: [
                "function=myFunction()",
                "function:myFunction()",
                "function myFunction()",
            ],
            correctAnswer: "function myFunction()",
        },
        {
            question: 'How do you call a function named "myFunction"?',
            options: [
                "call function myFunction()",
                "myFunction()",
                "call myFunction()",
            ],
            correctAnswer: "myFunction()",
        },
        {
            question: "How to write an IF statement in JavaScript?",
            options: [
                "if i = 5",
                "if (i == 5)",
                "if (i == 5) then"
            ],
            correctAnswer: "if (i == 5)",
        },
        {
            question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
            options: [
                "if (i != 5)",
                "if i =! 5 then",
                "if i <> 5"
            ],
            correctAnswer: "if (i != 5)",
        },
        {
            question: "How does a FOR loop start?",
            options: [
                "for (i = 0; i <= 5)",
                "for i = 1 to 5",
                "for (i = 0; i <= 5; i++)"
            ],
            correctAnswer: "for (i = 0; i <= 5; i++)",
        },
        {
            question: "How can you add a comment in a JavaScript?",
            options: [
                '"This is comment',
                "<--This is comment-->",
                "// This is comment"
            ],
            correctAnswer: "// This is comment",
        }
    ]
};

const reducer = (state = INITIAL_STATE) => {
    return state
}
export default reducer;