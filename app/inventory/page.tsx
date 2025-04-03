import DashboardLayout from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, ArrowDown, ArrowUp, QrCode, Search } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample inventory data
const inventoryItems = [
  {
    id: "INV001",
    product: "Laptop Dell XPS 13",
    location: "Warehouse A - Shelf 12",
    quantity: 24,
    minStock: 10,
    status: "In Stock",
    lastUpdated: "2023-10-15",
  },
  {
    id: "INV002",
    product: "Office Chair Ergonomic",
    location: "Warehouse B - Section 3",
    quantity: 15,
    minStock: 8,
    status: "In Stock",
    lastUpdated: "2023-10-12",
  },
  {
    id: "INV003",
    product: "Wireless Headphones",
    location: "Warehouse A - Shelf 5",
    quantity: 8,
    minStock: 10,
    status: "Low Stock",
    lastUpdated: "2023-10-14",
  },
  {
    id: "INV004",
    product: "Standing Desk",
    location: "Warehouse B - Section 7",
    quantity: 12,
    minStock: 5,
    status: "In Stock",
    lastUpdated: "2023-10-10",
  },
  {
    id: "INV005",
    product: "Mechanical Keyboard",
    location: "Warehouse A - Shelf 8",
    quantity: 0,
    minStock: 5,
    status: "Out of Stock",
    lastUpdated: "2023-10-08",
  },
]

// Sample inventory movements
const inventoryMovements = [
  {
    id: "MOV001",
    product: "Laptop Dell XPS 13",
    type: "Inbound",
    quantity: 10,
    date: "2023-10-15",
    reference: "PO-2023-001",
    user: "John Doe",
  },
  {
    id: "MOV002",
    product: "Wireless Headphones",
    type: "Outbound",
    quantity: 5,
    date: "2023-10-14",
    reference: "SO-2023-042",
    user: "Jane Smith",
  },
  {
    id: "MOV003",
    product: "Office Chair Ergonomic",
    type: "Inbound",
    quantity: 8,
    date: "2023-10-12",
    reference: "PO-2023-002",
    user: "John Doe",
  },
  {
    id: "MOV004",
    product: "Mechanical Keyboard",
    type: "Outbound",
    quantity: 12,
    date: "2023-10-08",
    reference: "SO-2023-039",
    user: "Jane Smith",
  },
  {
    id: "MOV005",
    product: "Standing Desk",
    type: "Inbound",
    quantity: 6,
    date: "2023-10-10",
    reference: "PO-2023-003",
    user: "John Doe",
  },
]

export default function InventoryPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Inventory Management</h1>
          <div className="flex gap-2">
            <Button variant="outline">
              <QrCode className="mr-2 h-4 w-4" /> Scan Barcode
            </Button>
            <Button>
              <ArrowDown className="mr-2 h-4 w-4" /> Stock In
            </Button>
            <Button variant="outline">
              <ArrowUp className="mr-2 h-4 w-4" /> Stock Out
            </Button>
          </div>
        </div>

        <Tabs defaultValue="current">
          <TabsList className="grid w-full md:w-[400px] grid-cols-2">
            <TabsTrigger value="current">Current Inventory</TabsTrigger>
            <TabsTrigger value="movements">Stock Movements</TabsTrigger>
          </TabsList>

          <TabsContent value="current" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Inventory Status</CardTitle>
                <CardDescription>View and manage your current inventory levels across all locations.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col sm:flex-row gap-4 justify-between">
                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      <Search className="h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Search inventory..." className="w-full sm:w-[300px]" />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Select defaultValue="all">
                        <SelectTrigger className="w-full sm:w-[180px]">
                          <SelectValue placeholder="Location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Locations</SelectItem>
                          <SelectItem value="warehouse-a">Warehouse A</SelectItem>
                          <SelectItem value="warehouse-b">Warehouse B</SelectItem>
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
                          <TableHead>Product</TableHead>
                          <TableHead>Location</TableHead>
                          <TableHead className="text-right">Quantity</TableHead>
                          <TableHead className="text-right">Min. Stock</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Last Updated</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {inventoryItems.map((item) => (
                          <TableRow key={item.id}>
                            <TableCell className="font-medium">{item.product}</TableCell>
                            <TableCell>{item.location}</TableCell>
                            <TableCell className="text-right">{item.quantity}</TableCell>
                            <TableCell className="text-right">{item.minStock}</TableCell>
                            <TableCell>
                              <Badge
                                variant={
                                  item.status === "In Stock"
                                    ? "default"
                                    : item.status === "Low Stock"
                                      ? "outline"
                                      : "destructive"
                                }
                                className="flex w-fit items-center gap-1"
                              >
                                {item.status === "Low Stock" && <AlertTriangle className="h-3 w-3" />}
                                {item.status}
                              </Badge>
                            </TableCell>
                            <TableCell>{item.lastUpdated}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="movements" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Stock Movements</CardTitle>
                <CardDescription>Track all inventory movements including stock ins and outs.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col sm:flex-row gap-4 justify-between">
                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      <Search className="h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Search movements..." className="w-full sm:w-[300px]" />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Select defaultValue="all">
                        <SelectTrigger className="w-full sm:w-[180px]">
                          <SelectValue placeholder="Movement Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Types</SelectItem>
                          <SelectItem value="inbound">Inbound</SelectItem>
                          <SelectItem value="outbound">Outbound</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Product</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead className="text-right">Quantity</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Reference</TableHead>
                          <TableHead>User</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {inventoryMovements.map((movement) => (
                          <TableRow key={movement.id}>
                            <TableCell className="font-medium">{movement.product}</TableCell>
                            <TableCell>
                              <Badge
                                variant={movement.type === "Inbound" ? "default" : "secondary"}
                                className="flex w-fit items-center gap-1"
                              >
                                {movement.type === "Inbound" ? (
                                  <ArrowDown className="h-3 w-3" />
                                ) : (
                                  <ArrowUp className="h-3 w-3" />
                                )}
                                {movement.type}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right">{movement.quantity}</TableCell>
                            <TableCell>{movement.date}</TableCell>
                            <TableCell>{movement.reference}</TableCell>
                            <TableCell>{movement.user}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

