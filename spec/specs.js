describe("PizzaMaker", function(){
	describe("size", function(){
		it("returns diameter of Pizza", function(){
			var testPizzaMaker = Object.create(PizzaMaker);
			testPizzaMaker.size(10);
			expect(testPizzaMaker.price).to.equal(8);
		});
	});
	describe("type", function(){
		it("returns type of Pizza", function(){
			var testPizzaMaker = Object.create(PizzaMaker);
			testPizzaMaker.type("pepperoni");
			expect(testPizzaMaker.price).to.equal(7);
		});
	});
});