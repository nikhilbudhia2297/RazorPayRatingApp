import {QuestionOption} from "./QuestionOption";
import {RatingStrategy} from "../services/RatingStrategy";
import {AverageRatingStrategy} from "../services/AverageRatingStrategy";

export class Question {
    name : string;
    options : QuestionOption[];
    answers : QuestionOption[];
    ratingStrategy : RatingStrategy;

    constructor(name : string ) {
        this.name = name
        this.options = [];
        this.answers = [];
        this.ratingStrategy = new AverageRatingStrategy();
    }

    setOptions(options : QuestionOption[]) {
        this.options = options;
    }

    answerQuestion(option : QuestionOption) {
        this.answers.push(option);
    }

    getRating(){
        return this.ratingStrategy.getRating(this);
    }

    addOption(option : QuestionOption) {
        this.options.push(option);
    }

    updateOptionRating(options : QuestionOption, newRating : number) {

    }

    updateOptions(options : QuestionOption) {

    }

    deleteOptions(options : QuestionOption) {

    }
}