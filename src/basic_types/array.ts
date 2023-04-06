//Arrays
let skills: string[] = [];
skills[0] = 'Problem Solving';
skills[1] = 'Programming';
console.log(skills); //[ 'Problem Solving', 'Programming' ]

//push
skills.push('Software Design');

console.log(skills); //[ 'Problem Solving', 'Programming', 'Software Design' ]
console.log(skills.length);
//Methods: JavaScript

// Storing values of mixed types
let scores: (number | string)[];
scores = ['Programming', 5, 'Software Design', 4];
console.log(scores); //[ 'Programming', 5, 'Software Design', 4 ]
