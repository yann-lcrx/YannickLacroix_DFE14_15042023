import { DataGrid, GridColDef, GridValidRowModel } from "@mui/x-data-grid";

function DataTable({ data, columns, keyProperty }: Props) {
  return (
    <DataGrid
      columns={columns}
      rows={data}
      getRowId={(row) => row[keyProperty]}
    />
  );
}

interface Props {
  data: GridValidRowModel[];
  columns: GridColDef[];
  keyProperty: string;
}

export default DataTable;
