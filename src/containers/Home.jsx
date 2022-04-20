const Home = () => {
	return (
		<div className="wrapper h-full overflow-y-scroll overflow-x-hidden">
			<div className="wrapper h-full flex flex-col centered">
				<div className="wrapper-fluid h-4/6 rounded-xl p-10 bg-[url('https://images.unsplash.com/photo-1576836165612-8bc9b07e7778?w=387&q=80')] bg-cover bg-bottom bg-no-repeat flex items-end">
					<h1 className="text-white font-bold text-4xl">Deco.</h1>
				</div>
			</div>
			<div className="wrapper py-10 flex centered">
				<div className="wrapper-fluid h-auto grid grid-cols-4 gap-4">
					{[1, 2, 3, 4, 5, 6, 7, 8].map(() => (
						<div className="w-full h-80 rounded-lg overflow-hidden flex flex-col shadow-xl">
							<img
								alt="title"
								className="w-full h-60 object-cover object-center"
								src="https://images.unsplash.com/photo-1576836165612-8bc9b07e7778?w=387&q=80"
							/>
							<div className="w-full h-20 bg-white p-2">
								<h4 className="truncate">Title</h4>
								<p className="truncate">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Ducimus dolorum quas earum magnam ex fugit provident maxime
									iusto debitis in?
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Home;
