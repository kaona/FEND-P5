var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Mimi');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.imgAttribution = ko.observable('https://www.flickr.com')
	// adding clickCounter method. the only time we are writing viewModel methods is 
	// when we have to change something ourselve like with clickCounter.
	// this code will be a lot smaller. We are not writing octopus code because
	// knockout is handling view -> model, model -> view sync for us. We are no longer
	// asking the octopus to go get the information from the model for us.
	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};
	this.catLevel = ko.computed(function() {
		if (this.clickCount() < 11 ) {
		return 'Newborn';
		} else if (10 < this.clickCount() < 51 ) {
			return 'Infant';
		} else  if (50 < this.clickCount() < 100) {
			this.catLevel  = 'Youngin';
		} else if (this.clickCount() > 99) {
		return 'Adult';
		}
	}, this);
}

ko.applyBindings(new ViewModel());