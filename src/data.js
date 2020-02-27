export const columns = [
 {
  name: "firstName",
  label: "First Name",
  options: {
   filter: false,
   sort: true,
  }
 },
 {
  name: "lastName",
  label: "Last Name",
  options: {
   filter: false,
   sort: true,
  }
 },
 {
  name: "role",
  label: "Role",
  options: {
   filter: true,
   sort: true,
  }
 },
 {
  name: "department",
  label: "Department",
  options: {
   filter: true,
   sort: true,
  }
 },
];

export const data = [
  { firstName: "John",   lastName: "Doe",      role: "CEO",                   department: "Management" }, 
  { firstName: "Joe",    lastName: "Rop",      role: "Product Manager",       department: "Management" }, 
  { firstName: "Blarf",  lastName: "Ranlp",    role: "Senior Engineer",       department: "Engineering" }, 
  { firstName: "Jort",   lastName: "Plawn",    role: "Junior Engineer",       department: "Engineering" }, 
  { firstName: "Wort",   lastName: "Plorry",   role: "Sales Lead",            department: "Sales" }, 
  { firstName: "Wrop",   lastName: "Furtin",   role: "Creative Director",     department: "Marketing" },
  { firstName: "Tril",   lastName: "Yurktun",  role: "Social Media Manager",  department: "Marketing" }
];

export const options = {
  filterType: 'checkbox',
  print: false,
  download: false
};

