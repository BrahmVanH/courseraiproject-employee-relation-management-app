export interface Employee {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  department: Department;
  patients: Patient[];
  projects: Project[];
}

export interface Patient {
  _id: string;
  firstName: string;
  lastName: string;
  age: number;

}

export interface Department {
  _id: string;
  name: string;
  employees: Employee[];
}

export interface Project {
  _id: string;
  name: string;
  department: Department;
  employees: Employee[];
}