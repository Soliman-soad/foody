import Link from 'next/link';
import React from 'react';

const Event = () => {
    return (
        <div>
            <section className="bg-gray-100 text-gray-800 md:mt-24 mt-16">
	<div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
		<div>
			<h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-gray-900">Our offers for your occasion or event</h2>
		</div>
		<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
			<div>
				<h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-gray-900">Home event Offer</h3>
				<p className="mt-3 text-lg text-gray-600">We have some awesome food for your home event check those</p>
				<div className="mt-12 space-y-12">
					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#FFB100] text-gray-50">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-medium leading-6 text-gray-900">Mini pizzas</h4>
							<p className="mt-2 text-gray-600">Delectable and bite-sized, mini pizzas are a favorite of all age groups.</p>
						</div>
					</div>
					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#FFB100] text-gray-50">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-medium leading-6 text-gray-900">Homemade French Fries</h4>
							<p className="mt-2 text-gray-600">Surprise your guests with the best gourmet french fries they’ve ever tasted.</p>
						</div>
					</div>
					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#FFB100] text-gray-50">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-medium leading-6 text-gray-900">Stuffed Mushrooms</h4>
							<p className="mt-2 text-gray-600">A kitchen classic, this is the perfect choice if you’ve vegans in your party.</p>
						</div>
					</div>
				</div>
			</div>
			<div aria-hidden="true" className="mt-10 lg:mt-0">
				<img src="https://img.freepik.com/free-photo/luxurious-dinner-hall-with-large-crystal-chandelier_8353-565.jpg?w=740&t=st=1673071257~exp=1673071857~hmac=39b7175f7b6b7f97e5a3c6523d06e54fa56bb612adee819e336bbbf30b4a3793" alt="" className="mx-auto rounded-lg shadow-lg bg-gray-500" />
			</div>
		</div>
		<div>
			<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
				<div className="lg:col-start-2">
					<h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-gray-900">Official event offer</h3>
					<p className="mt-3 text-lg text-gray-600">We are dedicated to offer our special food to make your event effective</p>
					<div className="mt-12 space-y-12">
						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#FFB100] text-gray-50">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-medium leading-6 text-gray-900">Smoked Trout Empanadas</h4>
								<p className="mt-2 text-gray-600">Every empanada is filled, made, and cooked by hand.</p>
							</div>
						</div>
						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#FFB100] text-gray-50">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-medium leading-6 text-gray-900">Mini Lamb Burger</h4>
								<p className="mt-2 text-gray-600">Although the flavors are slightly unusual, guests always go for seconds.</p>
							</div>
						</div>
						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#FFB100] text-gray-50">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-medium leading-6 text-gray-900">Duck Confit Quesadillas</h4>
								<p className="mt-2 text-gray-600">Sophistication and flavor come together in this perfectly cheesy quesadilla. </p>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
					<img src="https://img.freepik.com/free-photo/decorated-wedding-hall-with-candles-round-tables-centerpieces_8353-10057.jpg?w=740&t=st=1673071212~exp=1673071812~hmac=8756c5c515c97cef734be4ab48e703471ffe080c9305c21db5034ddc7e0a042d" alt="" className="mx-auto rounded-lg shadow-lg bg-gray-500" />
				</div>
			</div>
		</div>
	</div>
</section>
<div className="p-6 py-12 bg-[#FFB100] text-gray-50 mt-10">
	<div className="container mx-auto">
		<div className="flex flex-col items-center justify-between">
			<h2 className="text-center text-6xl tracking-tighter font-bold">First, we eat. Then we do everything else. Let us take care of food at your special event.
			</h2>
			<div className='mt-10'>
            <Link href="Products/Products" className="px-5 mt-10 lg:mt-0 py-3  border block bg-gray-900 text-gray-50 border-gray-600">Products</Link>
            </div>
		</div>
	</div>
</div>
        </div>
    );
};

export default Event;