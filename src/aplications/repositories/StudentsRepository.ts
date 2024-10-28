import { Student } from "../../domain/entities/Student";

export interface StudentsRepository {
    findById(id: string): Promise<Student | null>;
}