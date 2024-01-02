import TitleView from "../Headers/titleView";
import AddProduct from "./addProducts";
import ReportProducts from "./reportProducts";
import TableBasic from "../Tables/tableBasic";
import { Card } from "@mui/material";
export default function ContainerProducts() {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
    },
  ];
  return (
    <div className="bg-slate-100 flex flex-col flex-1">
      <Card className=" h-[100%]">
        <div className=" flex justify-between items-center mx-[20px] my-[20px]">
          <TitleView title={"Inventario Productos"} />
          <div className="flex gap-[15px]">
            <ReportProducts />
            <AddProduct />
          </div>
        </div>
        <div>
          <TableBasic header={columns} />
        </div>
      </Card>
    </div>
  );
}
