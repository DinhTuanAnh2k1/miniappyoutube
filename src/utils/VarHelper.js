class VarHelper {
	stringToColour = (name) => {
		if (name) {
			var hash = 0;
			for (var i = 0; i < name.length; i++) {
				hash = name.charCodeAt(i) + ((hash << 5) - hash);
			}
			var colour = '#';
			for (var i = 0; i < 3; i++) {
				var value = (hash >> (i * 8)) & 0xff;
				colour += ('00' + value.toString(16)).substr(-2);
			}
			return colour;
		}
		return '';
	};
}

export default new VarHelper;
