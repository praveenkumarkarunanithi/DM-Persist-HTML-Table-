
var defaultData = new ej.data.DataManager({
  url: 'https://ej2services.syncfusion.com/js/development/api/UrlDataSource',
  adaptor: new ej.data.UrlAdaptor(),
  enablePersistence: true
});

let template =
  "<tr><td>${CurrentSalary}</td><td>${Designation}</td><td>${EmployeeID}</td></tr>";
let compiledFunction = ej.base.compile(template);
let table = document.getElementById("datatable");

let dataManager = new ej.data.DataManager({
  url: "https://services.syncfusion.com/js/production/api/UrlDataSource",
  adaptor: new ej.data.UrlAdaptor(),
  enablePersistence: true,
  id: "TestDM",
  ignoreOnPersist: ["onTake", "onSortBy"],
});
dataManager.executeQuery(new ej.data.Query().take(50)).then((e) => {
  (e.result).forEach((data) => {
    table.appendChild(compiledFunction(data)[0]);
  });
});

const btnQuery1 = document.getElementById("QueryTake");
btnQuery1.addEventListener("click", () => {
  const query1 = new ej.data.Query().take(10); // Replace with your actual query
  dataManager.executeQuery(query1).then((e) => {
    table.innerHTML = table.querySelector("tr:first-child").outerHTML; // Clear the existing table content
    (e.result).forEach((data) => {
      table.appendChild(compiledFunction(data)[0]);
    });
  });
});

const btnQuery2 = document.getElementById("QuerySort");
btnQuery2.addEventListener("click", () => {
  const query2 = new ej.data.Query().sortBy("Designation", "descending").take(8); // Replace with your actual query
  dataManager.executeQuery(query2).then((e) => {
    table.innerHTML = table.querySelector("tr:first-child").outerHTML; // Clear the existing table content
    (e.result).forEach((data) => {
      table.appendChild(compiledFunction(data)[0]);
    });
  });
});

const btnQuery3 = document.getElementById("QuerySearch");
btnQuery3.addEventListener("click", () => {
  const query2 = new ej.data.Query().search('PRO', ['Designation']).take(6); // Replace with your actual query
  dataManager.executeQuery(query2).then((e) => {
    table.innerHTML = table.querySelector("tr:first-child").outerHTML; // Clear the existing table content
    (e.result).forEach((data) => {
      table.appendChild(compiledFunction(data)[0]);
    });
  });
});

const clear = document.getElementById("clear");
clear.addEventListener("click", () => {
  dataManager.clearPersistence();
  location.reload();
});

// DM - II
let template2 =
  "<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>";
let compiledFunction2 = ej.base.compile(template2);
let table2 = document.getElementById("datatable2");

let DM2 = new ej.data.DataManager({
  json: hierarchyOrderdata,
  adaptor: new ej.data.JsonAdaptor(),
  id: "TestDM2",
  enablePersistence: true,
  ignoreOnPersist: ["onSelect"],
});
let result2 = DM2.executeLocal(new ej.data.Query().take(10));
result2.result.forEach((data) => {
  table2.appendChild(compiledFunction2(data)[0]);
});

const btnQuery12 = document.getElementById("QueryTake2");
btnQuery12.addEventListener("click", () => {
  const query1 = new ej.data.Query().take(5); // Replace with your actual query
  result2 = DM2.executeLocal(query1);
  table2.innerHTML = table2.querySelector("tr:first-child").outerHTML; // Clear the existing table2 content
  result2.forEach((data) => {
    table2.appendChild(compiledFunction2(data)[0]);
  });
});

let predicate = new ej.data.Predicate("CustomerID", "equal", "VINET");
predicate = predicate.or("CustomerID", "equal", "TOMSP");
const btnQuery22 = document.getElementById("QueryFilter2");
btnQuery22.addEventListener("click", () => {
  const query2 = new ej.data.Query().where(predicate).take(3); // Replace with your actual query
  result2 = DM2.executeLocal(query2);
  table2.innerHTML = table2.querySelector("tr:first-child").outerHTML; // Clear the existing table2 content
  result2.forEach((data) => {
    table2.appendChild(compiledFunction2(data)[0]);
  });
});

const btnQuery32 = document.getElementById("QuerySortasc2");
btnQuery32.addEventListener("click", () => {
  const query2 = new ej.data.Query().select(["OrderID", "CustomerID"]).take(5); // Replace with your actual query
  result2 = DM2.executeLocal(query2);
  table2.innerHTML = table2.querySelector("tr:first-child").outerHTML; // Clear the existing table2 content
  result2.forEach((data) => {
    table2.appendChild(compiledFunction2(data)[0]);
  });
});

const clear2 = document.getElementById("clear2");
clear2.addEventListener("click", () => {
  DM2.clearPersistence();
  location.reload();
});
