import {Survey} from "./entities/Survey";
import {User} from "./entities/User";
import {Question} from "./entities/Question";

export class RatingApp{
    surveyList : Map<string, Survey>; // surveyName <> Survey
    userList : Map<string, User>; // userName <> User

    constructor() {
        this.surveyList = new Map<string, Survey>();
        this.userList  = new Map<string, User>();
    }

    addSurvey(survey : Survey){
        // check for name
        if(this.surveyList.get(survey.name)){
            console.log('SURVEY EXISTS');
            return;
        }
        this.surveyList.set(survey.name, survey);
    }

    addUser(user : User){
        if(this.userList.get(user.name)){
            console.log('USER EXISTS');
            return;
        }
        this.userList.set(user.name, user);
    }
}