import { Question } from "../entities/Question";
import {RatingStrategy} from "./RatingStrategy";

export class AverageRatingStrategy implements RatingStrategy {

    getRating(question: Question): number {
        let sumOfWeights = 0;

        question.answers.map((ans)=>{
            sumOfWeights += ans.weight;
        });
        return sumOfWeights/question.answers.length;
    }

}