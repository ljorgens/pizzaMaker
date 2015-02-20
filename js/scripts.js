var PizzaMaker = {
	price: 0.00,
	sliceNumber: 0,
	size: function(measurement) {
		if (measurement === 6) {
			this.price = this.price + 5;
			this.sliceNumber = this.sliceNumber + 4;
		} else if (measurement === 10) {
			this.price = this.price + 8;
			this.sliceNumber = this.sliceNumber + 6;
		} else if (measurement === 14){
			this.price = this.price + 12;
			this.sliceNumber = this.sliceNumber + 8;
		} else {
		this.price = this.price + 14;
		this.sliceNumber = this.sliceNumber + 10;
		}
	},
	type: function(topping) {
		if (topping === "cheese") {
			this.price = this.price + 5;
			this.sliceNumber = this.sliceNumber + 1;
		} else {
			this.price = this.price + 7;
			this.sliceNumber = this.sliceNumber + 2;
		}
	}
};

$(document).ready(function(){
	$("form#pizzaType").submit(function(event){
		event.preventDefault();
		
		var newPizza = Object.create(PizzaMaker);
		
		 newPizza.size(parseInt($("input[name=size]:radio:checked").val()));
		 newPizza.type($("input[name=toppings]:radio:checked").val());
		 
		 $(".pizzaPrice").show();
		 	$("#pizza").text("Your Pizza costs " + "$" + newPizza.price + " and will have " + newPizza.sliceNumber + " slices");
	});
});
