export class MenuItem{
    constructor(
        public id?: number,
        public short_name?: string,
        public name?: string,
        public description?: string,
        public price_small?: number,
        public price_large?: number,
        public small_portion_name?: string,
        public large_portion_name?: string
    ){}
}