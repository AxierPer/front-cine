export type Movie = {
    id: string;
    title: string;
    description: string;
    schedule: string;
    price: number;
    sala: number;
}

export interface MovieCreate extends Movie {
    image: string;
    genero: string;
}

export type SeatOcupation = {
    id : number;
    seat: string;
    status: string;
    movie: string;
}; 