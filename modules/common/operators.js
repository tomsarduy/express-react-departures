const operators = {
	LE: 'Abellio Greater Anglia,',
	AW: 'Arriva Trains Wales',
	CS: 'Caledonian Sleeper',
	CH: 'Chiltern Railway',
	XC: 'CrossCountry',
	DC: 'Devon and Cornwall Railway',
	EM: 'East Midlands Trains',
	GR: 'East Coast',
	ES: 'Eurostar',
	FC: 'First Capital Connect (defunct)',
	GW: 'First Great Western',
	HT: 'First Hull Trains',
	SR: 'First Scotrail',
	TP: 'First Transpennine Express',
	GX: 'Gatwick Express',
	ZZ: 'GB Railfreight',
	GC: 'Grand Central',
	LN: 'Great North Western Railway',
	GN: 'Great Northern',
	TL: 'Thameslink',
	HC: 'Heathrow Connect',
	HX: 'Heathrow Express',
	IL: 'Island Lines',
	LM: 'London Midland',
	ME: 'Merseyrail',
	LR: 'Network Rail (On-Track Machines)',
	TW: 'Nexus (Tyne & Wear Metro)',
	NY: 'North Yorkshire Moors Railway',
	NT: 'Northern Rail',
	SW: 'South West Trains',
	SE: 'Southeastern',
	SN: 'Southern',
	SJ: 'South Yorkshire Supertram',
	SP: 'Swanage Railway',
	XR: 'Crossrail',
	VT: 'Virgin Trains',
	WR: 'West Coast Railway Co.'
};


module.exports.getOperator  = (code) => {

	// Validate the operator code
	if(!code || typeof(code) !== 'string' || code.length!==2){
		return false;
	}

	const operatorCode = code.toUpperCase();
	const name = operators[operatorCode];

	// If the operator doesn't exist
	if(!name){
		return false;
	}

	// Return the operator Object
	return {
		name,
		code: operatorCode
	}
}

module.exports.getOperatorName  = (code) => {

	const operator = this.getOperator(code);

	if(!operator || typeof(operator) !== 'object'){
		return 'N/A';
	}

	return operator.name
}