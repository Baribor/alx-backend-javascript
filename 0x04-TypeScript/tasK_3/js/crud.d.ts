import { RowID, RowElement } from "./interface";

export function insertRow(row: RowElement): number;

export function deleteRow(rowId: RowID);

export function updateRow(rowId: RowID, row: RowElement): RowID;