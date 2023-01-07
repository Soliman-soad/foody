import Link from "next/link";


const Story = () => {
    return (
        <div>
            <section className="bg-[#A3BB98] text-gray-800 mt-20">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=740&t=st=1673069251~exp=1673069851~hmac=6d6988e946cac0c790e71587f937b34539a30ad155dff3119372ca9488e9c20b" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-4xl">
            Delicious food creates memories
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">
            Belton is food studio that not just caters out deliciousness, but lives by the philosophy that nothing brings people together like good food. Whatever the occasion that you need our food for, whatever dietary requirements, we will make it happen.	
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<Link href="Products/Products" className="px-8 py-3 text-lg font-semibold rounded bg-gray-900 text-gray-50">Products</Link>
			</div>
		</div>
	</div>
</section>
        </div>
    );
};

export default Story;