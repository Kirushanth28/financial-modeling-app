import React, { useEffect } from 'react';
import { usePage } from '@inertiajs/inertia-react';
import { InertiaLink } from '@inertiajs/inertia-react';

const CompanyQuote = () => {
    const { quote } = usePage().props;

    useEffect(() => {

    }, []);

    return (
        <div className="mx-auto px-10 md:w-1/2 w-full pt-10">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                <div class="flex justify-start text-2xl text-black">Company Quote</div>
                <div class="flex justify-end">
                    <InertiaLink
                        href="/home"
                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Back to search
                    </InertiaLink>
                </div>
            </div>
            <div class="flex flex-col overflow-x-auto mt-3">
                <div class="sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div class="overflow-x-auto">
                            <table class="min-w-full text-left text-sm font-light">
                                <thead class="border-b font-medium dark:border-neutral-500">
                                    <tr>
                                    <th scope="col" class="px-6 py-4">Attribute</th>
                                    <th scope="col" class="px-6 py-4">Value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                    quote[0]?
                                    Object.entries(quote[0]).map(([key, value]) => (
                                    <tr class="border-b dark:border-neutral-500 break-words" key={key}>
                                        <td class="px-6 py-4">{key}</td>
                                        <td class="px-6 py-4">{value}</td>
                                    </tr>
                                    ))
                                    :
                                    <tr class="border-b dark:border-neutral-500">
                                        <td colSpan={2} className="border px-4 py-2 overflow-hidden">No results found</td>
                                    </tr>
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyQuote;