"use client";

import { Box, Button, Chip, IconButton, Typography } from "@mui/material";
import { Edit, BookA, Plus, Eye } from "lucide-react";
import GenericTable, { Column } from "../components/GenericTable";

// Example Data
 const MOCK_PRODUCTS = [
  { id: 1, name: "Premium Wireless Headphones", category: "Electronics", price: 299, stock: 45, status: "In Stock" },
  { id: 2, name: "Mechanical Keyboard", category: "Accessories", price: 120, stock: 12, status: "Low Stock" },
  { id: 3, name: "Smart Watch", category: "Wearables", price: 199, stock: 0, status: "Out of Stock" },
  { id: 4, name: "4K Monitor", category: "Electronics", price: 389, stock: 18, status: "In Stock" },
  { id: 5, name: "Wireless Mouse", category: "Accessories", price: 49, stock: 7, status: "Low Stock" },
  { id: 6, name: "Bluetooth Speaker", category: "Electronics", price: 89, stock: 30, status: "In Stock" },
  { id: 7, name: "USB-C Hub", category: "Accessories", price: 39, stock: 0, status: "Out of Stock" },
  { id: 8, name: "Gaming Chair", category: "Furniture", price: 259, stock: 14, status: "In Stock" },
  { id: 9, name: "Laptop Stand", category: "Accessories", price: 34, stock: 5, status: "Low Stock" },
  { id: 10, name: "Noise Cancelling Earbuds", category: "Wearables", price: 149, stock: 22, status: "In Stock" }
];

export default function ProductPage() {
  const columns: any[] = [
    { field: "name", headerName: "Product Name", width: 250 },
    { field: "category", headerName: "Category", width: 150 },
    { field: "price", headerName: "Price", width: 100, render: (row: any) => `$${row.price}` },
    { field: "stock", headerName: "Stock", width: 100 },
    { 
      field: "status", 
      headerName: "Status", 
      width: 150, 
      render: (row: any) => (
        <Chip 
          label={row.status} 
          size="small" 
          color={row.status === "In Stock" ? "success" : "warning"} 
          variant="outlined" 
        />
      ) 
    },
    { 
      field: "actions", 
      headerName: "Actions", 
      align: "right", 
      width: 120, 
      render: (row: any) => (
        <Box display="flex" gap={1} justifyContent="flex-end">
          <IconButton size="small"><Eye size={18} /></IconButton>
          <IconButton size="small" sx={{ color: "#1d606e" }}><Edit size={18} /></IconButton>
        </Box>
      )
    },
  ];

  return (
    /* overflowX: "hidden" yahan zaroori hai taaki poora page scroll na ho */
    <Box sx={{ width: "100%", maxWidth: "100%", overflowX: "hidden" }}>
      
      {/* Header */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4, flexWrap: "wrap", gap: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <BookA size={32} color="#1d606e" />
          <Typography variant="h5" fontWeight="bold">Inventory Management</Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<Plus size={18} />}
          sx={{ backgroundColor: "#1d606e", textTransform: "none", "&:hover": { backgroundColor: "#144a56" } }}
        >
          Add Product
        </Button>
      </Box>

      {/* Table - Only this will scroll horizontally */}
      <GenericTable
        rows={MOCK_PRODUCTS}
        columns={columns}
        getRowId={(row) => row.id}
      />
    </Box>
  );
}