import { navigation } from './footerNavigation';

export function Footer() {
	return (
		<footer className="bg-white" aria-labelledby="footer-heading">
			<h2 id="footer-heading" className="sr-only">
				Footer
			</h2>
			<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
				<div className="xl:grid xl:grid-cols-3 xl:gap-8">
					<div className="grid grid-cols-2 gap-8 xl:col-span-2">
						<div className="md:grid md:grid-cols-2 md:gap-8">
							<div>
								<h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
									Solutions
								</h3>
								<ul role="list" className="mt-4 space-y-4">
									{navigation.solutions.map((item) => (
										<li key={item.name}>
											<a
												href={item.href}
												className="text-base text-gray-500 hover:text-gray-900"
											>
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
							<div className="mt-12 md:mt-0">
								<h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
									Support
								</h3>
								<ul role="list" className="mt-4 space-y-4">
									{navigation.support.map((item) => (
										<li key={item.name}>
											<a
												href={item.href}
												className="text-base text-gray-500 hover:text-gray-900"
											>
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className="md:grid md:grid-cols-2 md:gap-8">
							<div>
								<h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
									Company
								</h3>
								<ul role="list" className="mt-4 space-y-4">
									{navigation.company.map((item) => (
										<li key={item.name}>
											<a
												href={item.href}
												className="text-base text-gray-500 hover:text-gray-900"
											>
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
							<div className="mt-12 md:mt-0">
								<h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
									Legal
								</h3>
								<ul role="list" className="mt-4 space-y-4">
									{navigation.legal.map((item) => (
										<li key={item.name}>
											<a
												href={item.href}
												className="text-base text-gray-500 hover:text-gray-900"
											>
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
					<div className="mt-8 xl:mt-0">
						<h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
							Subscribe to our newsletter
						</h3>
						<p className="mt-4 text-base text-gray-500">
							The latest news, articles, and resources, sent to
							your inbox weekly.
						</p>
						<form className="mt-4 sm:flex sm:max-w-md">
							<label htmlFor="email-address" className="sr-only">
								Email address
							</label>
							<input
								type="email"
								name="email-address"
								id="email-address"
								autoComplete="email"
								required
								className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:placeholder-gray-400"
								placeholder="Enter your email"
							/>
							<div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
								<button
									type="submit"
									className="w-full bg-indigo-600 flex items-center justify-center border border-transparent rounded-md py-2 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
								>
									Subscribe
								</button>
							</div>
						</form>
					</div>
				</div>
				<div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
					<div className="flex space-x-6 md:order-2">
						{navigation.social.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className="text-gray-400 hover:text-gray-500"
							>
								<span className="sr-only">{item.name}</span>
								<item.icon
									className="h-6 w-6"
									aria-hidden="true"
								/>
							</a>
						))}
					</div>
					<p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
						&copy; 2020 Workflow, Inc. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
