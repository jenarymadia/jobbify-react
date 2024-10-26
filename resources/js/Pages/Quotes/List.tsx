import QuotesList from '@/Components/Datatable/QuotesList';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import { Link } from '@inertiajs/react';

function closeModal() {
    return true;
}
export default function List({
    auth,
    quotes,
}: PageProps<{ auth: any[];quotes: any[]; }>) {
    return (
        <AuthenticatedLayout
            header="Quote List"
        >   
            <div className="flex items-start mb-5">
                <Link
                    href={route('quotes.create')}
                    type="button"
                    className="ml-auto rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Add Quote
                </Link>
            </div>
            <QuotesList auth={auth} quotes={quotes} />
        </AuthenticatedLayout>
    );
}
