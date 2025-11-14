import { useState, useEffect } from 'react'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import axios from 'axios'

function Dashboard() {
  const [analytics, setAnalytics] = useState(null)
  const [statusCounts, setStatusCounts] = useState(null)

  useEffect(() => {
    loadAnalytics()
    loadOrderStatus()
  }, [])

  const loadAnalytics = async () => {
    try {
      const response = await axios.get('/api/analytics')
      setAnalytics(response.data)
    } catch (error) {
      console.error('Error loading analytics:', error)
    }
  }

  const loadOrderStatus = async () => {
    try {
      const response = await axios.get('/api/orders/status-counts')
      setStatusCounts(response.data)
    } catch (error) {
      console.error('Error loading order status:', error)
    }
  }

  const getTopProductsData = () => {
    if (!analytics || !analytics.topProducts) return []
    return analytics.topProducts.map(([name, quantity]) => ({
      name,
      sales: quantity
    }))
  }

  const getStatusData = () => {
    if (!statusCounts) return []
    return Object.entries(statusCounts).map(([status, count]) => ({
      status,
      count
    }))
  }

  return (
    <div className="dashboard">
      <h2>Sales Analytics Dashboard</h2>
      
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Revenue</h3>
          <p className="stat-value">${analytics?.totalRevenue || 0}</p>
        </div>
        <div className="stat-card">
          <h3>Total Orders</h3>
          <p className="stat-value">{analytics?.totalOrders || 0}</p>
        </div>
      </div>

      <div className="charts-grid">
        <div className="chart-container">
          <h3>Top Selling Products</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={getTopProductsData()}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-container">
          <h3>Order Status Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={getStatusData()}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="status" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
