import moment from 'moment';

let taskRunOnceTimestamp = {};

class TimeHelper {
	state = {
		runOnceInTimestamp: 0,
	}

	waitDelay = (miliseconds) => new Promise((resolve) => {
		setTimeout(() => {
			resolve(true);
		}, miliseconds);
	});

	runOnceIn = (id = 'null', miliseconds) => (func) => {
		let newTimestamp = new Date().getTime();
		if (!taskRunOnceTimestamp[id] || newTimestamp - taskRunOnceTimestamp[id] > miliseconds) {
			taskRunOnceTimestamp[id] = newTimestamp;
			if (typeof func === 'function') return func();
		}
	}

	convertNumberToTime = (data) => {
		if (!data) return undefined
		return moment(String(data).padStart(4, '0'), 'HHmm').format("HH:mm")
	}

	getDatesBetween = (from, to) => {
		if (from.isSameOrAfter(to, 'date')) return [from, to];
		let start = from.clone();
		let arr = [];
		while (start.isBefore(to, 'date')) {
			arr.push(start.clone());
			start.add(1, 'd');
		}
		return arr;
	}
}

export default new TimeHelper();
