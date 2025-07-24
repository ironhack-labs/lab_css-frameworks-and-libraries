function TailwindCard() {
  return (
	<div className="max-w-sm bg-white rounded-md shadow-lg flex flex-row md:flex-col overflow-hidden">
		<div>
			<img
				src="https://images.unsplash.com/photo-1673663096500-a0ec4a43929b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt=""
				width={400}
				height={180}
				className="aspect-1/2 md:aspect-3/2 object-cover"
			/>
		</div>
		<div className="pt-6 pb-8 px-8 text-left flex flex-col justify-center">
			<div className="text-slate-400">Running Shoes</div>
			<h3 className="text-indigo-500 font-bold text-2xl md:text-3xl mt-1 mb-3">
				AeroStride Pro
			</h3>
			<p className="description">
				Experience unparalleled comfort and performance. Perfect for
				both road and trail.
			</p>
		</div>
	</div>
  );
}

export default TailwindCard;
