export class Account {
	constructor(
		public _id: string,
		public name: string,
		public type: number,
		public offBudget: boolean,
		public exhibitionOrder: number
	) { }
}