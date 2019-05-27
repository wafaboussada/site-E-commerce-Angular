export class Product {
    constructor(
    public id : number,
    public name: string,
    public price: number,
    public disponibility: boolean,
    public category: string,
	public picture: string,
	public created: Date ) { }
}