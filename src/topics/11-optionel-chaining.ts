export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Leonel'
}
const passenger2: Passenger = {
    name: 'Astrid',
    children: ['Isabel', 'Amelie']
}

const printChildren = (passenger: Passenger) => {
    //const howManyChildren = passenger.children?.length || 0;
    const howManyChildren = passenger.children?.length || 0;

    console.log(passenger.name, howManyChildren);
}

printChildren(passenger2);