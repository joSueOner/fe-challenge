import { Jug } from "./Jug";

export class StateStep {
    jugX: Jug;
    jugY: Jug;


    constructor() {
        this.jugX = new Jug(0);
        this.jugY = new Jug(0);
    }

    // public getCapacity(): string {
    //     return `(${this.jugA.capacity}, ${this.jugB.capacity})`;
    // }

    // public getCurrent(): string {
    //     return `(${this.jugA.current}, ${this.jugB.current})`;
    // }




}