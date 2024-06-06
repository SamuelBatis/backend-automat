import * as ExcelJS from "exceljs";
import path from "path";
import { MaterialController } from "./MaterialController";

export async function getExcelData(sheetName: string) {
  const absolutePath = path.resolve(__dirname, `Lista.xlsx`);
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(absolutePath);
  const worksheet = workbook.getWorksheet(sheetName);
  let cout = 0;
  worksheet?.eachRow(async (row) => {
    const value = row.getCell(2).value;
    const partes = value?.toString().split(" - ");
    const nomeProduto = partes ? partes[0] : null;
    const codigoProduto = partes ? partes[1] : null;

    const materialController = new MaterialController();
    if (cout > 0) {
      const envio = {
        codigo_mat: codigoProduto,
        descricao_mat: nomeProduto,
        preco_mat: row.getCell(5).value,
        area: row.getCell(6).value,
      };

      const response = await materialController.createMaterial(envio);
      console.log(response);
    }
    cout++;
  });
}
