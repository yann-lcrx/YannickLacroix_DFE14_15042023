import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import { ReactNode } from "react";

function DataTable<T>({ data, columns }: Props<T>) {
  return (
    <Table stickyHeader>
      <TableHead>
        <TableRow>
          {columns.map((column, index) => (
            <TableCell key={`${column.propertyName}_${index}_header`}>
              {column.label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((datum, indexRow) => (
          <TableRow key={indexRow}>
            {columns.map(({ propertyName, renderer }, indexCol) => (
              <TableCell key={`${propertyName}_${indexRow}_${indexCol}`}>
                {renderer(datum)}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export interface Column<T> {
  label: string;
  propertyName: string;
  renderer: (data: T) => ReactNode;
}

interface Props<T> {
  data: T[];
  columns: Column<T>[];
}

export default DataTable;
