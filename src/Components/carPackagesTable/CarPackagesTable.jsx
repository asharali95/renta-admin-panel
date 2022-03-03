import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function CarPackagesTable({ packages }) {
  // const { hours5, hours10, hours24, outOfCity, monthly, weekly } = packages[0];
  function createData(name, val) {
    return { name, val };
  }

  const rows = [
    createData("5 hours", packages[0]?.hours5),
    createData("10 hours", packages[0]?.hours10),
    createData("24 hours", packages[0]?.hours24),
    createData("Out Of City", packages[0]?.outOfCity),
    createData("Weekly", packages[0]?.weekly),
    createData("Monthly", packages[0]?.monthly),
  ];
  createData(packages);
  console.log(rows);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Package Names</TableCell>
            <TableCell align="right">Package Cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.val}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
