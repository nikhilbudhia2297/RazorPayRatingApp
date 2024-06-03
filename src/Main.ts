import {RatingApp} from "./RatingApp";
import {Survey} from "./entities/Survey";
import {Question} from "./entities/Question";
import {User} from "./entities/User";
import {QuestionOption} from "./entities/QuestionOption";

function main(){

    const app = new RatingApp();

    // adding users
    const u1 = new User('U1');
    const u2 = new User('U2');
    app.addUser(u1);
    app.addUser(u2);


    // creating survey
    const s1 = new Survey("S1");

    const q1_s1 = new Question("Question1");

    const o1_q1_s1 = new QuestionOption('A', 1);
    const o2_q1_s1 = new QuestionOption('B', 2);
    const o3_q1_s1 = new QuestionOption('C', 3);
    const o4_q1_s1 = new QuestionOption('D', 4);
    q1_s1.setOptions([o1_q1_s1, o2_q1_s1, o3_q1_s1, o4_q1_s1]);

    s1.addQuestion(q1_s1);

    app.addSurvey(s1);

    // u1 answers
    q1_s1.answerQuestion(o1_q1_s1);

    // u2 answers
    q1_s1.answerQuestion(o2_q1_s1);

    console.log(q1_s1.getRating());

}

main()