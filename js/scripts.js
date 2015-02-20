var PizzaMaker = {
	price: 0.00,
	size: function(measurement) {
		if (measurement === 6) {
			this.price = this.price + 5;
		} else if (measurement === 10) {
			this.price = this.price + 8;
		} else if (measurement === 14){
			this.price = this.price + 12;
		} else
		this.price = this.price + 14
	}
}