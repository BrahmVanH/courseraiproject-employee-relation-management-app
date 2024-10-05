import mongoose from "mongoose";
import { Department } from "../types";

const departmentSchema = new mongoose.Schema<Department>({
  name: { type: String, required: true, maxlength: 50, minlength: 2 },
  employees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }],
});

const Department = mongoose.model<Department>('Department', departmentSchema);

export default Department;