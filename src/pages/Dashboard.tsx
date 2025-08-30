import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
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
  Area,
  AreaChart,
} from "recharts";
import {
  TrendingUp,
  TrendingDown,
  Users,
  DollarSign,
  Target,
  Activity,
  Zap,
  AlertTriangle,
  CheckCircle,
  Clock,
  Building,
  Phone,
  Mail,
  Calendar,
  Download,
  Settings,
  Link,
  Database,
  BarChart3,
  PieChart as PieChartIcon,
  UserCheck,
  Coins,
  Shield,
  Globe,
} from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data for charts
  const channelROIData = [
    { channel: "Google Ads", spend: 15000, conversions: 45, revenue: 135000, roas: 9.0 },
    { channel: "LinkedIn", spend: 8000, conversions: 22, revenue: 88000, roas: 11.0 },
    { channel: "Zillow", spend: 12000, conversions: 38, revenue: 114000, roas: 9.5 },
    { channel: "Facebook", spend: 6000, conversions: 15, revenue: 45000, roas: 7.5 },
    { channel: "Organic", spend: 0, conversions: 28, revenue: 84000, roas: 0 },
  ];

  const ltvTrendData = [
    { month: "Jan", ltv: 18500, churn: 12 },
    { month: "Feb", ltv: 19200, churn: 9 },
    { month: "Mar", ltv: 20100, churn: 8 },
    { month: "Apr", ltv: 21300, churn: 7 },
    { month: "May", ltv: 22400, churn: 6 },
    { month: "Jun", ltv: 23100, churn: 5 },
  ];

  const attributionData = [
    { name: "First Touch", value: 35, color: "hsl(var(--chart-1))" },
    { name: "Last Touch", value: 25, color: "hsl(var(--chart-2))" },
    { name: "Multi-Touch", value: 40, color: "hsl(var(--chart-3))" },
  ];

  const connectors = [
    { name: "HubSpot", status: "connected", lastSync: "2 min ago", records: 1247 },
    { name: "Salesforce", status: "connected", lastSync: "5 min ago", records: 892 },
    { name: "Yardi", status: "syncing", lastSync: "Syncing...", records: 2156 },
    { name: "Google Ads", status: "connected", lastSync: "1 min ago", records: 455 },
    { name: "LinkedIn Ads", status: "error", lastSync: "2 hours ago", records: 0 },
    { name: "Zillow", status: "connected", lastSync: "10 min ago", records: 678 },
  ];

  const prospects = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      phone: "(555) 123-4567",
      source: "Google Ads",
      ltvScore: 92,
      churnRisk: "Low",
      property: "Sunset Apartments",
      status: "Hot Lead",
      nextAction: "Schedule Tour",
    },
    {
      id: 2,
      name: "Mike Chen",
      email: "mike.chen@email.com",
      phone: "(555) 234-5678",
      source: "LinkedIn",
      ltvScore: 87,
      churnRisk: "Low",
      property: "Downtown Lofts",
      status: "Applied",
      nextAction: "Credit Check",
    },
    {
      id: 3,
      name: "Emma Davis",
      email: "emma.d@email.com",
      phone: "(555) 345-6789",
      source: "Zillow",
      ltvScore: 74,
      churnRisk: "Medium",
      property: "Garden View",
      status: "Nurturing",
      nextAction: "Send Incentive",
    },
  ];

  const recommendations = [
    {
      type: "budget",
      title: "Increase LinkedIn Ad Spend",
      description: "LinkedIn shows highest ROAS. Recommend +$2,000/day allocation.",
      impact: "+15% conversions",
      priority: "high",
    },
    {
      type: "incentive",
      title: "Offer Rent Credit to Emma Davis",
      description: "Predicted 73% conversion uplift with $500 rent credit offer.",
      impact: "$18,500 LTV gain",
      priority: "medium",
    },
    {
      type: "retention",
      title: "At-Risk Residents Alert",
      description: "3 residents showing churn signals. Deploy retention campaign.",
      impact: "Save $45,000 in turnover costs",
      priority: "high",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Smart Leasing Dashboard
              </h1>
              <Badge variant="secondary" className="text-xs">MVP</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="connectors" className="flex items-center gap-2">
              <Link className="h-4 w-4" />
              Connectors
            </TabsTrigger>
            <TabsTrigger value="prospects" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Prospects 360
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <PieChartIcon className="h-4 w-4" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="optimization" className="flex items-center gap-2">
              <Target className="h-4 w-4" />
              Optimization
            </TabsTrigger>
            <TabsTrigger value="insights" className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              AI Insights
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="gradient-border">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                  <DollarSign className="h-4 w-4 text-chart-1" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$466,000</div>
                  <p className="text-xs text-muted-foreground">
                    <TrendingUp className="inline h-3 w-3 mr-1" />
                    +12.3% from last month
                  </p>
                </CardContent>
              </Card>

              <Card className="gradient-border">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Prospects</CardTitle>
                  <Users className="h-4 w-4 text-chart-2" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">148</div>
                  <p className="text-xs text-muted-foreground">
                    <TrendingUp className="inline h-3 w-3 mr-1" />
                    +8 new this week
                  </p>
                </CardContent>
              </Card>

              <Card className="gradient-border">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg. LTV</CardTitle>
                  <Target className="h-4 w-4 text-chart-3" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$23,100</div>
                  <p className="text-xs text-muted-foreground">
                    <TrendingUp className="inline h-3 w-3 mr-1" />
                    +5.4% improvement
                  </p>
                </CardContent>
              </Card>

              <Card className="gradient-border">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Churn Rate</CardTitle>
                  <Activity className="h-4 w-4 text-chart-4" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5%</div>
                  <p className="text-xs text-muted-foreground">
                    <TrendingDown className="inline h-3 w-3 mr-1 text-green-500" />
                    -2% from last month
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Channel Performance</CardTitle>
                  <CardDescription>ROAS by marketing channel</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={channelROIData}>
                      <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                      <XAxis dataKey="channel" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="roas" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>LTV & Churn Trends</CardTitle>
                  <CardDescription>Monthly progression analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={ltvTrendData}>
                      <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                      <XAxis dataKey="month" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip />
                      <Line yAxisId="left" type="monotone" dataKey="ltv" stroke="hsl(var(--chart-1))" strokeWidth={3} />
                      <Line yAxisId="right" type="monotone" dataKey="churn" stroke="hsl(var(--chart-2))" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Connectors Tab */}
          <TabsContent value="connectors" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {connectors.map((connector, index) => (
                <Card key={index} className="transition-all hover:shadow-lg">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-lg">{connector.name}</CardTitle>
                    <Badge variant={
                      connector.status === "connected" ? "default" :
                      connector.status === "syncing" ? "secondary" : "destructive"
                    }>
                      {connector.status === "connected" && <CheckCircle className="h-3 w-3 mr-1" />}
                      {connector.status === "syncing" && <Clock className="h-3 w-3 mr-1" />}
                      {connector.status === "error" && <AlertTriangle className="h-3 w-3 mr-1" />}
                      {connector.status}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Last Sync:</span>
                        <span>{connector.lastSync}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Records:</span>
                        <span className="font-medium">{connector.records.toLocaleString()}</span>
                      </div>
                      <Separator />
                      <Button variant="outline" size="sm" className="w-full">
                        <Database className="h-4 w-4 mr-2" />
                        Configure
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Prospects 360 Tab */}
          <TabsContent value="prospects" className="space-y-6">
            <div className="space-y-4">
              {prospects.map((prospect) => (
                <Card key={prospect.id} className="transition-all hover:shadow-lg">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-semibold">
                            {prospect.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold">{prospect.name}</h3>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <span className="flex items-center">
                                <Mail className="h-3 w-3 mr-1" />
                                {prospect.email}
                              </span>
                              <span className="flex items-center">
                                <Phone className="h-3 w-3 mr-1" />
                                {prospect.phone}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">Source:</span>
                            <div className="font-medium">{prospect.source}</div>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Property:</span>
                            <div className="font-medium">{prospect.property}</div>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Status:</span>
                            <Badge variant="secondary" className="ml-1">{prospect.status}</Badge>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Next Action:</span>
                            <div className="font-medium text-primary">{prospect.nextAction}</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right space-y-2">
                        <div className="text-2xl font-bold text-chart-1">{prospect.ltvScore}</div>
                        <div className="text-xs text-muted-foreground">LTV Score</div>
                        <Badge variant={prospect.churnRisk === "Low" ? "default" : "secondary"}>
                          {prospect.churnRisk} Risk
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Attribution Model Performance</CardTitle>
                  <CardDescription>Multi-touch attribution breakdown</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={attributionData}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}%`}
                      >
                        {attributionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Revenue Trends</CardTitle>
                  <CardDescription>Monthly recurring revenue growth</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={ltvTrendData}>
                      <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="ltv" stroke="hsl(var(--chart-1))" fill="hsl(var(--chart-1))" fillOpacity={0.3} />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Optimization Tab */}
          <TabsContent value="optimization" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Budget Allocation</CardTitle>
                  <CardDescription>AI-recommended spend distribution</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {channelROIData.slice(0, 4).map((channel, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{channel.channel}</span>
                        <span className="font-medium">${channel.spend.toLocaleString()}</span>
                      </div>
                      <Progress value={(channel.spend / 20000) * 100} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Incentive Performance</CardTitle>
                  <CardDescription>Conversion uplift by offer type</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <div className="flex items-center space-x-3">
                        <Coins className="h-5 w-5 text-chart-1" />
                        <span>Rent Credit</span>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">+23%</div>
                        <div className="text-xs text-muted-foreground">conversion</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <div className="flex items-center space-x-3">
                        <Shield className="h-5 w-5 text-chart-2" />
                        <span>Fee Waiver</span>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">+18%</div>
                        <div className="text-xs text-muted-foreground">conversion</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <div className="flex items-center space-x-3">
                        <Globe className="h-5 w-5 text-chart-3" />
                        <span>Gift Card</span>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">+15%</div>
                        <div className="text-xs text-muted-foreground">conversion</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* AI Insights Tab */}
          <TabsContent value="insights" className="space-y-6">
            <div className="space-y-4">
              {recommendations.map((rec, index) => (
                <Card key={index} className="transition-all hover:shadow-lg">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Badge variant={rec.priority === "high" ? "destructive" : "secondary"}>
                            {rec.priority} priority
                          </Badge>
                          <Badge variant="outline">{rec.type}</Badge>
                        </div>
                        <h3 className="text-lg font-semibold">{rec.title}</h3>
                        <p className="text-muted-foreground">{rec.description}</p>
                        <div className="flex items-center space-x-2 text-sm">
                          <TrendingUp className="h-4 w-4 text-green-500" />
                          <span className="font-medium text-green-500">{rec.impact}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">Dismiss</Button>
                        <Button size="sm">Apply</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;