import mongoose, { Schema } from 'mongoose';
import { Employee } from '../types';

const employeeSchema = new Schema<Employee>({
	firstName: { type: String, required: true, maxlength: 50, minlength: 2 },
  lastName: { type: String, required: true, maxlength: 50, minlength: 2 },
	email: { type: String, required: true, unique: true },
	department: { type: Schema.Types.ObjectId, ref: 'Department' },
	patients: [{ type: Schema.Types.ObjectId, ref: 'Patient' }],
  projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
});

const Employee = mongoose.model<Employee>('Employee', employeeSchema);

export default Employee;