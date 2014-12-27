if (!String.prototype.endsWith) {
 	Object.defineProperty(String.prototype, 'endsWith', {
		value: function(searchString, position) {
			var subjectString = this.toString();
			if (position === undefined || position > subjectString.length) {
				position = subjectString.length;
			}
			position -= searchString.length;
			var lastIndex = subjectString.indexOf(searchString, position);
			return lastIndex !== -1 && lastIndex === position;
		}
	});
}

$.get('/data', function(data) {
	var children = data.children;
	var data = [];

	for(var i = 0; i < children.length; i++) {
		if(children[i].name.toLowerCase().endsWith('jpg')) {
			data.push({
				image: '/images/' + children[i].name,
				thumb: '/images/' + children[i].name,
				big: '/images/' + children[i].name,
				title: '',
				description: ''
			})
		}
	}

	Galleria.loadTheme('jquery-galleria/src/themes/classic/galleria.classic.js');
    Galleria.run('#gallery', {
    	dataSource: data,
    	thumbnails: 'numbers',
    	carousel: false,
    	transition: 'fade',
    	trueFullscreen: true
    });
});
