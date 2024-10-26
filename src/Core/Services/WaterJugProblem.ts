import { Jug } from "../Models/Jug";
import { Solution } from "../Models/Solution";
import { StateStep } from "../Models/Steps";

export class WaterJugProblem {
    jugX: Jug;
    jugY: Jug;
    jugZ: Jug;
    solution: Solution[];

    constructor(
        jugXCapacity: number,
        jugYCapacity: number,
        jugZCapacity: number,
    ) {
        this.jugX = new Jug(jugXCapacity);
        this.jugY = new Jug(jugYCapacity);
        this.jugZ = new Jug(jugZCapacity);
        this.solution = [];

    }

    ReStart() {
        this.jugX.Empty();
        this.jugY.Empty();
        this.jugZ.Empty();
        this.solution = [];
    }

    /**
     * Calculate the greatest common divisor (GCM) of two numbers.
     * 
     * @param a .
     * @param b .
     * @returns The DCM of the two numbers.
     */
    GCD(a: number, b: number): number {
        if (b == 0) {
            return a;
        }
        return this.GCD(b, a % b);
    }

    /**
      * Records an action taken during the resolution of the problem.
      * 
      * @param action - Action taken.
      * @param jugX - State of the jug X.
      * @param jugY - State of the jug Y.
      */

    SetAction(
        action: string,
        jugX: Jug,
        jugY: Jug,
    ): void {
        this.solution = [
            ...this.solution,
            {
                action: action,
                stateStep: {
                    jugX: { ...jugX },
                    jugY: { ...jugY },
                } as StateStep
            } as Solution
        ];

    }


    /**
     * Solve the water jug problem using the capacity of the jugs.
     * and performs the corresponding actions to reach the solution.
     */
    Resolve(): void {
        const initialJugX: boolean = Math.abs(this.jugX.capacity - this.jugZ.capacity) < Math.abs(this.jugY.capacity - this.jugZ.capacity);

        let aux = 0;

        while (
            this.jugX.current !== this.jugZ.capacity &&
            this.jugY.current !== this.jugZ.capacity
        ) {
            aux++;

            if (initialJugX) {
                this.ProcessJugX();
            } else {
                this.ProcessJugY();
            }

            // Avoid a possible infinite loop.
            if (aux > 1000) {
                this.SetAction("Memory leak", this.jugX, this.jugY);
                return;
            }


        }

        if (
            this.jugX.current === this.jugZ.capacity ||
            this.jugY.current === this.jugZ.capacity
        ) {
            const lastAction = this.jugX.current === this.jugZ.capacity ? "Transfer  X to Z" : "Transfer  Y to Z";
            this.SetAction(lastAction, this.jugX, this.jugY);

        }
    }

    /**
     * Processes specific actions for jar X during problem solving.
     * If jar X is empty, fills it; if jar Y is full, empties it; otherwise, transfers water from X to Y.
     */
    private ProcessJugX() {
        //if jugX is empty, fill it
        if (this.jugX.current === 0) {
            this.jugX.Fill();
            this.SetAction("Fill X", this.jugX, this.jugY);
            return;
        }

        //if jugY is equal to jugY, empty jugY
        if (this.jugY.current === this.jugY.capacity) {
            this.jugY.Empty();
            this.SetAction("Empty Y", this.jugX, this.jugY);

            return;
        }

        // else 
        const transfer = Math.min(this.jugX.current, this.jugY.capacity - this.jugY.current);
        this.jugX.current -= transfer;
        this.jugY.current += transfer;
        this.SetAction("Transfer  X to Y", this.jugX, this.jugY);
    }

    /**
     * Processes specific actions for jug Y during problem solving.
     * If jar Y is empty, fills it; if jar X is full, empties it; otherwise, transfers water from Y to X.
     */
    private ProcessJugY() {
        //if jugY is empty, fill it
        if (this.jugY.current === 0) {
            this.jugY.Fill();
            this.SetAction("Fill Y", this.jugX, this.jugY);
            return;
        }

        //if jugX is equal to jugY Capacity, empty jugX
        if (this.jugX.current === this.jugX.capacity) {
            this.jugX.Empty();
            this.SetAction("Empty X", this.jugX, this.jugY);
            return;
        }

        // else
        const transfer = Math.min(this.jugY.current, this.jugX.capacity - this.jugX.current);
        this.jugY.current -= transfer;
        this.jugX.current += transfer;
        this.SetAction("Transfer  Y to X", this.jugX, this.jugY);

    }





} 