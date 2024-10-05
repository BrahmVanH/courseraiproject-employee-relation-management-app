import mongoose from 'mongoose';
import { Patient } from '../types';

const patientSchema = new mongoose.Schema<Patient>(
	{
		firstName: { type: String, required: true, maxlength: 50, minlength: 2 },
		lastName: { type: String, required: true, maxlength: 50, minlength: 2 },
		age: { type: Number, required: true },
	},
	{
		virtuals: true,
	}
);

patientSchema.virtual('fullName').get(function (this: Patient) {
	return `${this.firstName} ${this.lastName}`;
});

const Patient = mongoose.model<Patient>('Patient', patientSchema);

export default Patient;
