import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { useCallback, useMemo, useState } from 'react';
import { PageProps } from '@/types';
import { format } from 'date-fns';

export default function QuotesList({
    auth,
    quotes,
}: PageProps<{ quotes: any[]; auth: any[];}>) {
    // Row Data: The data to be displayed.
    const [rowData] = useState(quotes);
    
    // Column Definitions: Defines the columns to be displayed.
    const [colDefs] = useState([
        { 
            field: "quotation_number", 
            filter: 'agTextColumnFilter',
            headerName: "Quote Number" 
        },
        { 
            field: "subject", 
            filter: 'agTextColumnFilter',
            headerName: "Subject" 
        },
        { 
            field: "total", 
            filter: 'agTextColumnFilter',
            headerName: "Total",
            cellRenderer: (props: { value: number }) => {
                const formattedValue = Number(props.value).toLocaleString();
                return `${formattedValue} USD`;
            }
        },
        {
            headerName: "Status",
            field: "status",
            cellRenderer: (props : number) => {
                // put the value in bold
                if(props.value == 1) {
                    return <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">DRAFT</span>;
                }else if(props.value == 2) {
                    return <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-800 ring-1 ring-inset ring-blue-600/20">SENT</span>;
                }else if(props.value == 3) {
                    return <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-800 ring-1 ring-inset ring-green-600/20">ACCEPTED</span>;
                }else if(props.value == 4) {
                    return <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-800 ring-1 ring-inset ring-red-600/20">DECLINED</span>;
                }
            }
        },
        { 
            field: "accepted_at",
            headerName: "Date Accepted",
            cellRenderer: (props: { value: string }) => {
                return props.value ? format(new Date(props.value), 'MMMM dd, yyyy') : 'N/A';
            }
        },
        { 
            field: "declined_at",
            headerName: "Date Declined",
            cellRenderer: (props: { value: string }) => {
                return props.value ? format(new Date(props.value), 'MMMM dd, yyyy') : 'N/A';
            }
        },
        { 
            field: "created_at",
            headerName: "Date Created",
            cellRenderer: (props: { value: string }) => {
                return props.value ? format(new Date(props.value), 'MMMM dd, yyyy') : 'N/A';
            }
        },
        {
            headerName: "Action",
            field: "id",
            cellRenderer: (props : number) => {
                return <div><button
                    type="button"
                    className=" mr-2 rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Edit
                </button><button
                    type="button"
                    className="rounded bg-red-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                    delete
                </button></div>
                
            }
        },
        
    ]);

    const rowSelection = useMemo(() => { 
        return { 
            mode: 'multiRow' 
        };
    }, []);

    const pagination = true;
    const paginationPageSize = 10;
    const paginationPageSizeSelector = [10, 20, 50, 100];

    return (
        // wrapping container with theme & size
        <div
            className="ag-theme-quartz" // applying the Data Grid theme
            style={{ height: 500 }} // the Data Grid will fill the size of the parent container
        >
            <AgGridReact
                rowData={rowData}
                columnDefs={colDefs}
                rowSelection={rowSelection}
                pagination={pagination}
                paginationPageSize={paginationPageSize}
                paginationPageSizeSelector={paginationPageSizeSelector}
            />
        </div>
    );
}
