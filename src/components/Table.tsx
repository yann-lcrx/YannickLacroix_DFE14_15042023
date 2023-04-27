import {
  DataGrid,
  GridColDef,
  GridValidRowModel,
  GridToolbar,
} from "@mui/x-data-grid";
import { FC } from "react";

const DataTable: FC<Props> = ({ data, columns, keyProperty }) => {
  return (
    <DataGrid
      autoHeight
      columns={columns}
      rows={data}
      getRowId={(row) => row[keyProperty]}
      slots={{ toolbar: GridToolbar }}
    />
  );
};

interface Props {
  data: GridValidRowModel[];
  columns: GridColDef[];
  keyProperty: string;
}

export default DataTable;
