export type Movie = {
    id: number;
    title: string;
    description: string;
    schedule: string;
    price: number;
    sala: number;
}

export type SeatOcupation = {
    id : number;
    seat: string;
    status: string;
}; 