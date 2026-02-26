"use client";

import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Box,
} from "@mui/material";

export type Column<T> = {
  field: keyof T | "actions";
  headerName: string;
  align?: "left" | "center" | "right";
  width?: number;
  render?: (row: T) => React.ReactNode;
};

type GenericTableProps<T> = {
  rows: T[];
  columns: Column<T>[];
  getRowId: (row: T) => string | number;
  rowsPerPageOptions?: number[];
};

export default function GenericTable<T>({
  rows,
  columns,
  getRowId,
  rowsPerPageOptions = [5, 10, 25],
}: GenericTableProps<T>) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(rowsPerPageOptions[0]);

  const visibleRows = React.useMemo(
    () => rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [rows, page, rowsPerPage]
  );

  return (
    /* 
       Outer Box with 'minWidth: 0' and 'display: grid' is CRITICAL. 
       Ye table ko screen se bahar jane se rokta hai.
    */
    <Box sx={{ display: "grid", width: "100%", minWidth: 0 }}>
      <Paper 
        elevation={0} 
        sx={{ 
          width: "100%", 
          borderRadius: 2, 
          border: "1px solid #e0e0e0",
          overflow: "hidden" 
        }}
      >
        <TableContainer
          sx={{
            width: "100%",
            overflowX: "auto", // Sirf yahan scrollbar aayega
            "&::-webkit-scrollbar": { height: "8px" },
            "&::-webkit-scrollbar-track": { backgroundColor: "#f1f1f1" },
            "&::-webkit-scrollbar-thumb": { 
              backgroundColor: "#1d606e", 
              borderRadius: "10px" 
            },
          }}
        >
          {/* Table ki minWidth mobile screen se zyada honi chahiye tabhi scroll aayega */}
          <Table stickyHeader sx={{ minWidth: 850, tableLayout: "auto" }}>
            <TableHead>
              <TableRow>
                {columns.map((col) => (
                  <TableCell
                    key={String(col.field)}
                    align={col.align}
                    sx={{
                      fontWeight: "bold",
                      backgroundColor: "#1d606e !important",
                      color: "#ffffff !important",
                      whiteSpace: "nowrap", // Text line break nahi karega
                      py: 2,
                      width: col.width
                    }}
                  >
                    {col.headerName}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {visibleRows.map((row) => (
                <TableRow key={getRowId(row)} hover>
                  {columns.map((col) => (
                    <TableCell 
                      key={String(col.field)} 
                      align={col.align}
                      sx={{ 
                        whiteSpace: "nowrap", 
                        px: 2, 
                        py: 1.5,
                        fontSize: "0.875rem" 
                      }}
                    >
                      {col.render 
                        ? col.render(row) 
                        : String((row as any)[col.field])
                      }
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={(_, newPage) => setPage(newPage)}
          onRowsPerPageChange={(e) => {
            setRowsPerPage(parseInt(e.target.value, 10));
            setPage(0);
          }}
        />
      </Paper>
    </Box>
  );
}