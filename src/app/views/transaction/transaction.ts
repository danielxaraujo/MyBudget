export class Transaction {
	constructor(
		public _id: string,
		public cleared: boolean,
		public account_id: string,
		public checked: boolean,
		public checkId?: string,
		public flag?: string,
		public date?: Date,
		public payee?: string,
		public category?: number,
		public memo?: string,
		public outflow?: number,
		public inflow?: number,
	) { }
}