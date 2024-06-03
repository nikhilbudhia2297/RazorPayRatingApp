import {Question} from "./Question";

export class Survey{
    readonly name : string
    questionsList : any[]

    constructor(name : string) {
        this.name = name;
        this.questionsList = [];
    }

    addQuestion(question : Question){
        this.questionsList.push(question);
    }

    setQuestions(questions : Question[]){
        this.questionsList  = questions;
    }

}