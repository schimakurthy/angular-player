export class Register {
    constructor(
        public firstName: string,
        public lastName: string,
        public phone: string,
        public emailAddress: string,
        public userName: string,
        public password: string,
        public confirmPassword: string,
        public mailingAddress: string,
        public city: string,
        public state: string,
        public zip: string
    ) { }
}