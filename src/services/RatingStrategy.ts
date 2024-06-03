import {Question} from "../entities/Question";

export interface RatingStrategy{
    getRating(question : Question): number;
}