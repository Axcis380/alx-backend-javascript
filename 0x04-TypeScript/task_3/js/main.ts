// Triple slash directive to include dependencies
/// <reference path="./crud.d.ts" />

// Import RowID and RowElement from interface.ts
import { RowID, RowElement } from './interface';
// Import everything from crud.js as CRUD
import * as CRUD from 'crud';

// Create an object called row
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Create a const variable named newRowID
const newRowID: RowID = CRUD.insertRow(row);

// Update row with an age field set to 23
const updatedRow: RowElement = { ...row, age: 23 };

// Call the updateRow and deleteRow commands
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
