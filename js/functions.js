// ref: https://www.w3schools.com/jquery/eff_toggle.asp
// 		https://stackoverflow.com/questions/2554149/html-javascript-change-div-content
function submitReview()
{
	$(".review-box").toggle(700, function()
		{
			$(".review-feedback").toggle(500);
		});
	
	console.log("clicked");
}

function removeAcai()
{
	var yogurt = document.getElementById('yogurt-item');
	var total = document.getElementById('total');

	if (yogurt.style.display == 'none') // if no items in cart
	{

		total.innerHTML="Grand Total: $0.00";
		$(".cart-acai-item").toggle(700);
		$(".total").toggle(600);
		$(".product-table").toggle(600, function()
		{
			$(".empty-cart").toggle(800);
		});
	}
	else //if 1 item left in cart
	{
		//hide this item
		$(".cart-acai-item").toggle(700);
		total.innerHTML="Grand Total: $4.50";
	}
}

function removeYogurt()
{
	var acai = document.getElementById('acai-item');
	var total = document.getElementById('total');

	if (acai.style.display == 'none') // if no items in cart
	{

		total.innerHTML="Grand Total: $0.00";
		$(".cart-yogurt-item").toggle(700);
		$(".total").toggle(600);
		$(".product-table").toggle(600, function()
		{
			$(".empty-cart").toggle(800);
		});
	}
	else //if 1 item left in cart
	{
		//hide this item
		$(".cart-yogurt-item").toggle(700);
		total.innerHTML="Grand Total: $5.00";
	}
}

