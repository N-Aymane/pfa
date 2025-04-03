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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Edit, MoreHorizontal, Plus, Search, Trash } from "lucide-react"
import { Badge } from "@/components/ui/badge"

// Sample product data
const products = [
  {
    id: "PRD001",
    name: "Laptop Dell XPS 13",
    category: "Electronics",
    sku: "DELL-XPS13-001",
    price: 1299.99,
    stock: 24,
    status: "In Stock",
  },
  {
    id: "PRD002",
    name: "Office Chair Ergonomic",
    category: "Furniture",
    sku: "CHAIR-ERG-002",
    price: 249.99,
    stock: 15,
    status: "In Stock",
  },
  {
    id: "PRD003",
    name: "Wireless Headphones",
    category: "Electronics",
    sku: "AUDIO-WH-003",
    price: 159.99,
    stock: 8,
    status: "Low Stock",
  },
  {
    id: "PRD004",
    name: "Standing Desk",
    category: "Furniture",
    sku: "DESK-STD-004",
    price: 399.99,
    stock: 12,
    status: "In Stock",
  },
  {
    id: "PRD005",
    name: "Mechanical Keyboard",
    category: "Electronics",
    sku: "KB-MECH-005",
    price: 129.99,
    stock: 0,
    status: "Out of Stock",
  },
]

export default function ProductsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Products</h1>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add Product
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Product Inventory</CardTitle>
            <CardDescription>Manage your products, categories, and inventory levels.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-between">
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search products..." className="w-full sm:w-[300px]" />
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-full sm:w-[180px]">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="electronics">Electronics</SelectItem>
                      <SelectItem value="furniture">Furniture</SelectItem>
                      <SelectItem value="clothing">Clothing</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-full sm:w-[180px]">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="in-stock">In Stock</SelectItem>
                      <SelectItem value="low-stock">Low Stock</SelectItem>
                      <SelectItem value="out-of-stock">Out of Stock</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product Name</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>SKU</TableHead>
                      <TableHead className="text-right">Price</TableHead>
                      <TableHead className="text-right">Stock</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {products.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell className="font-medium">{product.name}</TableCell>
                        <TableCell>{product.category}</TableCell>
                        <TableCell>{product.sku}</TableCell>
                        <TableCell className="text-right">${product.price.toFixed(2)}</TableCell>
                        <TableCell className="text-right">{product.stock}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              product.status === "In Stock"
                                ? "default"
                                : product.status === "Low Stock"
                                  ? "outline"
                                  : "destructive"
                            }
                          >
                            {product.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
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

