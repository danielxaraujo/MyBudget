export class Transaction {
	constructor(
		public _id: string,
		public flag?: boolean,
		public flagColor?: string,
		public date?: Date,
		public checkId?: string,
		public payee?: string,
		public category?: number,
		public memo?: string,
		public outflow?: number,
		public inflow?: number
	) { }
}