import mongoose from "mongoose";
import { Project } from "../types";

const projectSchema = new mongoose.Schema<Project>({
  name: { type: String, required: true, maxlength: 50, minlength: 2 },
  department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
  employees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }],
});

const Project = mongoose.model<Project>('Project', projectSchema);

export default Project;