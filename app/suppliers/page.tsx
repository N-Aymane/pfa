import DashboardLayout from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Edit, MoreHorizontal, Phone, Plus, Search, Star, Trash } from "lucide-react"

// Sample suppliers data
const suppliers = [
  {
    id: "SUP001",
    name: "TechSupplies Inc.",
    contact: "John Smith",
    email: "john@techsupplies.com",
    phone: "+1 (555) 123-4567",
    categories: ["Electronics", "Computers"],
    rating: 4.8,
    status: "Active",
  },
  {
    id: "SUP002",
    name: "Office Furniture Co.",
    contact: "Sarah Johnson",
    email: "sarah@officefurniture.com",
    phone: "+1 (555) 987-6543",
    categories: ["Furniture", "Office Supplies"],
    rating: 4.5,
    status: "Active",
  },
  {
    id: "SUP003",
    name: "Global Electronics Ltd.",
    contact: "Michael Chen",
    email: "michael@globalelectronics.com",
    phone: "+1 (555) 456-7890",
    categories: ["Electronics", "Audio Equipment"],
    rating: 4.2,
    status: "Active",
  },
  {
    id: "SUP004",
    name: "Premium Stationery",
    contact: "Emily Davis",
    email: "emily@premiumstationery.com",
    phone: "+1 (555) 234-5678",
    categories: ["Office Supplies", "Stationery"],
    rating: 3.9,
    status: "Inactive",
  },
  {
    id: "SUP005",
    name: "Ergonomic Solutions",
    contact: "David Wilson",
    email: "david@ergonomicsolutions.com",
    phone: "+1 (555) 876-5432",
    categories: ["Furniture", "Office Equipment"],
    rating: 4.7,
    status: "Active",
  },
]

export default function SuppliersPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Suppliers</h1>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add Supplier
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Supplier Directory</CardTitle>
            <CardDescription>Manage your suppliers, contacts, and supplier performance.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Search className="h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search suppliers..." className="w-full sm:w-[300px]" />
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Supplier Name</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Categories</TableHead>
                      <TableHead>Rating</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {suppliers.map((supplier) => (
                      <TableRow key={supplier.id}>
                        <TableCell className="font-medium">{supplier.name}</TableCell>
                        <TableCell>
                          <div className="flex flex-col">
                            <span>{supplier.contact}</span>
                            <span className="text-sm text-muted-foreground">{supplier.email}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {supplier.categories.map((category) => (
                              <Badge key={category} variant="outline" className="text-xs">
                                {category}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-primary text-primary" aria-hidden="true" />
                            <span>{supplier.rating}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant={supplier.status === "Active" ? "default" : "secondary"}>
                            {supplier.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon">
                              <Phone className="h-4 w-4" />
                              <span className="sr-only">Call</span>
                            </Button>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="h-4 w-4" />
                                  <span className="sr-only">Open menu</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                  <Edit className="mr-2 h-4 w-4" />
                                  Edit
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Trash className="mr-2 h-4 w-4" />
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

