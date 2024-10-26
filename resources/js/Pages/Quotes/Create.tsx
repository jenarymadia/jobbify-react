import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/ui/select";
import { Textarea } from "@/Components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/Components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@/Components/ui/table';

function closeModal() {
    return true;
}
export default function List({
    auth,
    quotes,
}: PageProps<{ quotes: any[]; }>) {
    return (
        <AuthenticatedLayout
            header="Quote List > Create a new quote"
        >   
        
        <div className="grid grid-flow-row-dense gap-5 grid-cols-3 grid-rows-3 mx-auto max-w-5xl">
            <div className="col-span-3 xl:col-span-2">        
                <Card>
                    <CardContent>
                        <section className="bg-white dark:bg-gray-900">
                            <div className="py-8">
                                <form action="#">
                                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                        <div className="sm:col-span-2">
                                            <Label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                Client
                                            </Label>
                                            <Input
                                                type="text"
                                                id="name"
                                                placeholder="Type product name"
                                                required
                                                className="dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                            />
                                        </div>
                                        <div className="sm:col-span-2">
                                            <Label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                Subject
                                            </Label>
                                            <Input
                                                type="text"
                                                id="name"
                                                placeholder="Type product name"
                                                required
                                                className="dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                            />
                                        </div>
                                        

                                        <div className="w-full">
                                        <Label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Brand
                                        </Label>
                                        <Input
                                            type="text"
                                            id="brand"
                                            placeholder="Product brand"
                                            required
                                            className="dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                        />
                                        </div>

                                        <div className="w-full">
                                        <Label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Price
                                        </Label>
                                        <Input
                                            type="number"
                                            id="price"
                                            placeholder="$2999"
                                            required
                                            className="dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                        />
                                        </div>

                                        <div>
                                        <Label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Category
                                        </Label>
                                        <Select required>
                                            <SelectTrigger id="category">
                                            <SelectValue placeholder="Select category" />
                                            </SelectTrigger>
                                            <SelectContent>
                                            <SelectItem value="TV">TV/Monitors</SelectItem>
                                            <SelectItem value="PC">PC</SelectItem>
                                            <SelectItem value="GA">Gaming/Console</SelectItem>
                                            <SelectItem value="PH">Phones</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        </div>

                                        <div>
                                        <Label htmlFor="item-weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Item Weight (kg)
                                        </Label>
                                        <Input
                                            type="number"
                                            id="item-weight"
                                            placeholder="12"
                                            required
                                            className="dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                        />
                                        </div>

                                        {/* <div className="sm:col-span-2">
                                            <Label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                Description
                                            </Label>
                                            <Textarea
                                                id="description"
                                                placeholder="Your description here"
                                                className="dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                            />
                                        </div> */}
                                        <div className="sm:col-span-2">
                                            <Table className="divide-y divide-gray-300 w-full">
                                            <TableHead>
                                                <TableRow>
                                                <TableCell className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                                    Plan
                                                </TableCell>
                                                <TableCell className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">
                                                    Memory
                                                </TableCell>
                                                <TableCell className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">
                                                    CPU
                                                </TableCell>
                                                <TableCell className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">
                                                    Storage
                                                </TableCell>
                                                <TableCell className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                    Price
                                                </TableCell>
                                                <TableCell className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                                    <span className="sr-only">Select</span>
                                                </TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                            </TableBody>
                                            </Table>
                                        </div>
                                    </div>


                                </form>
                            </div>
                            </section>
                    </CardContent>
                </Card>
            </div>
            <div className='col-span-3 xl:col-span-1'>
                <Card>
                    <CardContent>
                        <section className="bg-white dark:bg-gray-900">
                            <div className="py-8">
                                <dl className="mt-10 space-y-6 text-sm font-medium text-gray-500">
                                    <div className="flex justify-between">
                                        <dt>Subtotal</dt>
                                        <dd className="text-gray-900">100,000</dd>
                                    </div>
                                    <div className="flex justify-between">
                                        <dt>Taxes</dt>
                                        <dd className="text-gray-900">100,000</dd>
                                    </div>
                                    <div className="flex justify-between">
                                        <dt>Shipping</dt>
                                        <dd className="text-gray-900">100,000</dd>
                                    </div>
                                    <div className="flex items-center justify-between border-t border-gray-200 pt-6 text-gray-900">
                                        <dt className="text-base">Total</dt>
                                        <dd className="text-base"><b>100,000</b></dd>
                                    </div>
                                </dl>
                            </div>
                        </section>
                    </CardContent>
                    <CardFooter className='flex items-start'>
                            <Button
                                type="submit"
                                    className="ml-auto inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg focus:ring-4 focus:ring-indigo-200 dark:focus:ring-indigo-900 hover:bg-indigo-800"
                                >
                                Add product
                            </Button>
                            <Button
                                type="submit"
                                    className="ml-2 inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-green-700 rounded-lg focus:ring-4 focus:ring-green-200 dark:focus:ring-green-900 hover:bg-green-800"
                                >
                                Add product
                            </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>

        </AuthenticatedLayout>
    );
}
