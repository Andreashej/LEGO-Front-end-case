import { Deserializeable } from './deserializeable';

export class Product implements Deserializeable {
    public SKU: string;
    public name: string;
    public price: number;
    public currency: string;
    public qty: number = 1;
    public description: string;

    add() {
        this.qty++;
    }

    remove() {
        if (this.qty > 1) {
            this.qty--;
        }
    }

    getTotalPrice() {
        return this.price * this.qty;
    }

    deserialize(input): this {
        return Object.assign(this, input);
    }
}
