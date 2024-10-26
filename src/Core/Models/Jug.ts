export class Jug {
    capacity: number;
    current: number;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.current = 0;
    }

    Fill() {
        this.current = this.capacity;
    }

    Empty() {
        this.current = 0;
    }

}