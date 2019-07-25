// CODE here for your Lambda Classes
class Person {
    constructor (attributes) {
        this.name=attributes.name;
        this.age=attributes.age;
        this.location=attributes.location;
    }

    speak () {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    };
}

class Instructor extends Person {
    constructor (attributes) {
        super (attributes);
        this.specialty=attributes.specialty;
        this.favLanguage=attributes.favLanguage;
        this.catchPhrase=attributes.catchPhrase;
    }

    demo (subject) {
        return `Today we are learning about ${subject}.`
    }

    grade (student, subject) {
        return `${this.name} receives a perfect score on ${subject}`
    }
    points (student) {
        let score = (Math.random() - 0.5) * 10;
        return student.grade += score;
    }
}

class Student extends Person {
    constructor (attributes) {
        super (attributes);
        this.previousBackground=attributes.previousBackground;
        this.className=attributes.className;
        this.favSubjects=attributes.favSubjects;
        this.grade=attributes.grade;
    }
    listSubjects () {
        return (`${this.favSubjects}`);
    }
    PRAssignment (student, subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge (student, subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
    }
    graduate (instructor) {
       while (this.grade<70) {
               instructor.points(this);
               console.log(this.grade);
            }
        return `You are ready to graduate`
        } 
}


class ProjectManager extends Instructor {
    constructor (attributes) {
        super(attributes);
        this.gradClassName=attributes.graClassName;
        this.favInstructor=attributes.favInstructor;
    }
    standUp (slack) {
        return `${this.name} announces to ${slack}, @channel standy times`
    }

    debugsCode (student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}

const instructorOne = new Instructor ({
    name: "Monica",
    age: 41,
    location: "San Francisco",
    specialty: "CSS",
    favLanguage: "JavaScript",
    catchPhrase: "Keep trying"
})

const instructorTwo = new Instructor ({
    name: "Henry",
    age: 24,
    location: "Boston",
    specialty: "Python",
    favLanguage: "JavaScript",
    catchPhrase: "I will tell you..."
})

const studentOne = new Student ({
    name: "Hector",
    age: 19,
    location: "San Antonio",
    previousBackground: "Call Center",
    className: "WEB21",
    favSubjects: "JavaScript",
    grade: 69
})

const studentTwo = new Student ({
    name: "Preeti",
    age: 23,
    location: "New Hampshire",
    previousBackground: "Researcher",
    className: "WEB16",
    favSubjects: "JavaScript",
    grade: 75
})

const projectManagerOne = new ProjectManager ({
    name: "Ken",
    age: 29,
    location: "San Antonio",
    specialty: "React",
    favLanguage: "JavaScript",
    catchPhrase: "Goosey",
    gradClassName: "WEBPT5",
    favInsturctor: "Google"
})

const projectManagerTwo = new ProjectManager ({
    name: "Megan",
    age: 35,
    location: "San Diego",
    specialty: "React",
    favLanguage: "JavaScript",
    catchPhrase: "Goosey",
    gradClassName: "WEB15",
    favInsturctor: "Google"
})

console.log(instructorOne.demo("Java"));
console.log(instructorTwo.speak());
console.log(studentOne.listSubjects());
console.log(instructorOne.grade(studentOne, "HTML"));
console.log(studentOne.sprintChallenge(studentOne, "CSS"));
console.log(projectManagerOne.standUp("webpt5_ken"));
console.log(projectManagerOne.debugsCode(studentOne, "JavaScript"));
console.log(projectManagerOne.demo("Redux"));
console.log(instructorOne.points(studentOne));
console.log(studentTwo.graduate(instructorOne));
console.log(studentOne.graduate(instructorTwo));