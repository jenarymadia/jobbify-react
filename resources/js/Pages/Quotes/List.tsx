import QuotesList from '@/Components/Datatable/QuotesList';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';

export default function List({
    auth,
    quotes,
}: PageProps<{ quotes: any[]; }>) {
    return (
        <AuthenticatedLayout
            header="Quote List"
        >
            <QuotesList quotes={quotes} />
        </AuthenticatedLayout>
    );
}
