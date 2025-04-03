import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts"
import { Download } from "lucide-react"

// Sample data for charts
const monthlySalesData = [
  { name: "Jan", value: 12000 },
  { name: "Feb", value: 19000 },
  { name: "Mar", value: 15000 },
  { name: "Apr", value: 24000 },
  { name: "May", value: 28000 },
  { name: "Jun", value: 18000 },
  { name: "Jul", value: 21000 },
  { name: "Aug", value: 23000 },
  { name: "Sep", value: 26000 },
  { name: "Oct", value: 17000 },
  { name: "Nov", value: 20000 },
  { name: "Dec", value: 32000 },
]

const categoryData = [
  { name: "Electronics", value: 42 },
  { name: "Furniture", value: 28 },
  { name: "Office Supplies", value: 15 },
  { name: "Stationery", value: 10 },
  { name: "Other", value: 5 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"]

const supplierPerformanceData = [
  {
    name: "TechSupplies Inc.",
    deliveryTime: 95,
    qualityScore: 92,
    priceCompetitiveness: 88,
  },
  {
    name: "Office Furniture Co.",
    deliveryTime: 88,
    qualityScore: 90,
    priceCompetitiveness: 85,
  },
  {
    name: "Global Electronics Ltd.",
    deliveryTime: 82,
    qualityScore: 85,
    priceCompetitiveness: 92,
  },
  {
    name: "Premium Stationery",
    deliveryTime: 78,
    qualityScore: 80,
    priceCompetitiveness: 95,
  },
  {
    name: "Ergonomic Solutions",
    deliveryTime: 92,
    qualityScore: 94,
    priceCompetitiveness: 82,
  },
]

export default function ReportsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Reports & Analytics</h1>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" /> Export Reports
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="w-full md:w-auto">
            <Select defaultValue="current-year">
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Time Period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="current-year">Current Year</SelectItem>
                <SelectItem value="last-year">Last Year</SelectItem>
                <SelectItem value="last-6-months">Last 6 Months</SelectItem>
                <SelectItem value="last-3-months">Last 3 Months</SelectItem>
                <SelectItem value="custom">Custom Range</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Tabs defaultValue="sales">
          <TabsList className="grid w-full md:w-[600px] grid-cols-3">
            <TabsTrigger value="sales">Sales & Inventory</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
            <TabsTrigger value="suppliers">Supplier Performance</TabsTrigger>
          </TabsList>

          <TabsContent value="sales" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Sales Trend</CardTitle>
                <CardDescription>Track your sales performance over the past 12 months.</CardDescription>
              </CardHeader>
              <CardContent className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlySalesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`$${value}`, "Sales"]} />
                    <Line type="monotone" dataKey="value" stroke="hsl(var(--primary))" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Key Metrics</CardTitle>
                  <CardDescription>Summary of important inventory metrics.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Total Products</span>
                      <span className="font-bold">1,284</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Low Stock Items</span>
                      <span className="font-bold text-amber-500">24</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Out of Stock Items</span>
                      <span className="font-bold text-destructive">8</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Average Order Value</span>
                      <span className="font-bold">$245.80</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Inventory Value</span>
                      <span className="font-bold">$342,567.00</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Inventory Turnover</CardTitle>
                  <CardDescription>Quarterly inventory turnover rate.</CardDescription>
                </CardHeader>
                <CardContent className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={[
                        { quarter: "Q1", rate: 4.2 },
                        { quarter: "Q2", rate: 5.1 },
                        { quarter: "Q3", rate: 4.8 },
                        { quarter: "Q4", rate: 5.5 },
                      ]}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="quarter" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="rate" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="categories" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Inventory by Category</CardTitle>
                <CardDescription>Distribution of products across different categories.</CardDescription>
              </CardHeader>
              <CardContent className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={150}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`, "Percentage"]} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Category Performance</CardTitle>
                <CardDescription>Sales and growth by product category.</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={[
                      { name: "Electronics", sales: 125000, growth: 15 },
                      { name: "Furniture", sales: 84000, growth: 8 },
                      { name: "Office Supplies", sales: 45000, growth: 5 },
                      { name: "Stationery", sales: 30000, growth: 2 },
                      { name: "Other", sales: 15000, growth: -3 },
                    ]}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" orientation="left" stroke="hsl(var(--primary))" />
                    <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                    <Tooltip />
                    <Legend />
                    <Bar
                      yAxisId="left"
                      dataKey="sales"
                      name="Sales ($)"
                      fill="hsl(var(--primary))"
                      radius={[4, 4, 0, 0]}
                    />
                    <Bar yAxisId="right" dataKey="growth" name="Growth (%)" fill="#82ca9d" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="suppliers" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Supplier Performance Metrics</CardTitle>
                <CardDescription>Comparison of key performance indicators across suppliers.</CardDescription>
              </CardHeader>
              <CardContent className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={supplierPerformanceData}
                    layout="vertical"
                    margin={{ top: 20, right: 30, left: 100, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" domain={[0, 100]} />
                    <YAxis dataKey="name" type="category" width={150} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="deliveryTime" name="On-Time Delivery (%)" fill="#0088FE" />
                    <Bar dataKey="qualityScore" name="Quality Score (%)" fill="#00C49F" />
                    <Bar dataKey="priceCompetitiveness" name="Price Competitiveness (%)" fill="#FFBB28" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Supplier Order Volume</CardTitle>
                <CardDescription>Total order volume by supplier over the past year.</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={[
                      { name: "TechSupplies Inc.", value: 245000 },
                      { name: "Office Furniture Co.", value: 180000 },
                      { name: "Global Electronics Ltd.", value: 135000 },
                      { name: "Premium Stationery", value: 95000 },
                      { name: "Ergonomic Solutions", value: 120000 },
                    ]}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`$${value}`, "Order Volume"]} />
                    <Bar dataKey="value" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

