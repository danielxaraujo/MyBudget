export class Transaction {
	constructor(
		public _id: string,
		public checkId?: string,
		public flag?: string,
		public date?: Date,
		public payee?: string,
		public category?: number,
		public memo?: string,
		public outflow?: number,
		public inflow?: number,
		public cleared: boolean = false
	) { }
}