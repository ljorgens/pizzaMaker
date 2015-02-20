describe("PizzaMaker", function(){
	describe("size", function(){
		it("returns diameter of Pizza", function(){
			var testPizzaMaker = Object.create(PizzaMaker);
			testPizzaMaker.size(10);
			expect(testPizzaMaker.price).to.equal(8);
		});
	});
});
	
// 	describe("slices",function(){
// 		it("returns number of slices based on diameter and slices", function(){
// 			var testPizzaMaker = Object.create(PizzaMaker);
			
// 		})
// 	})
// })