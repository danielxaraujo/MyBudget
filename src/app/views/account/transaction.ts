export class Transaction {
	_id: string;
	flag?: boolean;
	flagColor?: string;
	date?: Date;
	checkId?: string;
	payee?: string;
	category?: number;
	memo?: string;
	outflow?: number;
	inflow?: number;
}