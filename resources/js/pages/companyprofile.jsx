import React, { useEffect } from 'react';
import { usePage } from '@inertiajs/inertia-react';
import { InertiaLink } from '@inertiajs/inertia-react';

const CompanyProfile = () => {
    const { profile } = usePage().props;

    useEffect(() => {

    }, []);

    return (
        <div className="mx-auto px-10 w-full pt-10">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl text-black">Company Profile</h1>
                <div><InertiaLink
            href="/home"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Back to search
          </InertiaLink>
          </div>
            </div>
            <table className="table-auto shadow">
                <thead>
                    <tr tabindex="1" class="bg-gray-300 h-10 border-none">
                        <th>Attribute</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(profile[0]).map(([key, value]) => (
                        <tr className="max-w-xs break-words" key={key}>
                            <td className="border px-4 py-2 overflow-hidden">{key}</td>
                            <td className="border px-4 py-2 overflow-hidden">{value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CompanyProfile;
