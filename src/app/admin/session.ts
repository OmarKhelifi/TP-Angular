export class Session {
    constructor(
        public id: number,
        public name: string,
        public track: string,
        public date: Date,
        public duree: number,
        public adress: string,
        public participants: number,
        public isCompleted: boolean) { }
}

export const SESSIONITEMS: Session[] = [
    {
        id: 1,
        name: 'Web',
        track: 'MEAN Stack',
        date: new Date('2023-06-13'),
        duree: 3,
        adress: 'Lyon',
        participants: 0,
        isCompleted: false
    },
    {
        id: 2,
        name: 'Mobile',
        track: 'Angular et Ionic',
        date: new Date('2023-08-10'),
        duree: 5,
        adress: 'Paris',
        participants: 0,
        isCompleted: false
    },
    {
        id: 3,
        name: 'Web',
        track: 'NodeJS',
        date: new Date('2023-07-20'),
        duree: 5,
        adress: 'Lyon',
        participants: 0,
        isCompleted: false
    }];