export class User{
    static SEQ : number = 0;
    id : number
    name : string

    constructor(name : string) {
        this.name = name;
        this.id = User.SEQ++;
    }
}