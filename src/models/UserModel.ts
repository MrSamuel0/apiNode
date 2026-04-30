export default class UserModel {
    id: number
    name: string
    email: string
    age: number
    
    constructor(private i: number, private n: string, private e: string, private a: number) {
        this.name = n
        this.email = e
        this.age = a
        this.id = i
    }

}