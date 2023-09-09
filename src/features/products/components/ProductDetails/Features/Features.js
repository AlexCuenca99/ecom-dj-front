import React from 'react';
import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export function Features(props) {
	const { product } = props;

	return (
		<section aria-labelledby="details-heading" className="mt-12">
			<h2 id="details-heading" className="sr-only">
				Additional details
			</h2>

			<div className="border-t divide-y divide-gray-200">
				{product.details.map((detail) => (
					<Disclosure as="div" key={detail.name}>
						{({ open }) => (
							<>
								<h3>
									<Disclosure.Button className="group relative w-full py-6 flex justify-between items-center text-left">
										<span
											className={classNames(
												open
													? 'text-indigo-600'
													: 'text-gray-900',
												'text-sm font-medium'
											)}
										>
											{detail.name}
										</span>
										<span className="ml-6 flex items-center">
											{open ? (
												<MinusSmallIcon
													className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
													aria-hidden="true"
												/>
											) : (
												<PlusSmallIcon
													className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
													aria-hidden="true"
												/>
											)}
										</span>
									</Disclosure.Button>
								</h3>
								<Disclosure.Panel
									as="div"
									className="pb-6 prose prose-sm"
								>
									<ul>
										{detail.items.map((item) => (
											<li key={item}>{item}</li>
										))}
									</ul>
								</Disclosure.Panel>
							</>
						)}
					</Disclosure>
				))}
			</div>
		</section>
	);
}
