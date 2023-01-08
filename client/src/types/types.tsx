export type Contact = {
    id: number;
    name: string;
    lastname: string;
    img:string;
}
export type Message = {
    id: number;
    recieverId:  number;
    senderId: number;
    content: string;
    // img: string;
}

// export type User = {
//     id :number;
//     name: any;
// }
