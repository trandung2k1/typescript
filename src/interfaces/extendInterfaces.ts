interface Mailable {
    send(email: string): boolean;
    queue(email: string): boolean;
}
interface FutureMailable extends Mailable {
    later(email: string, after: number): boolean;
}
class Mail implements FutureMailable {
    later(email: string, after: number): boolean {
        console.log(`Send email to ${email} in ${after} ms.`);
        return true;
    }
    send(email: string): boolean {
        console.log(`Sent email to ${email} after ms. `);
        return true;
    }
    queue(email: string): boolean {
        console.log(`Queue an email to ${email}.`);
        return true;
    }
}

//Example

class Control {
    private state: boolean;
    constructor(state: boolean) {
        this.state = state;
    }
}
interface StatefulControl extends Control {
    enable(): void;
}

class Button extends Control implements StatefulControl {
    constructor(state: boolean) {
        super(state);
    }
    enable(): void {
        console.log(`Enable`);
    }
}

export {};
