import { Submission } from "../../domain/entities/submission";
import { StudentsRepository } from '../repositories/StudentsRepository';
import { ChallengesRepository } from '../repositories/ChallengesRepository';

type CreateChallengesSubmissionRequest = {
    studentId: string;
    challengeId: string;
}

export class CreateChallengesSubmission {
    constructor(
        private StudentsRepository: StudentsRepository,
        private ChallengesRepository: ChallengesRepository
    ) {}
    async execute({studentId, challengeId}: CreateChallengesSubmissionRequest) {
        
        const student = await this.StudentsRepository.findById(studentId)

        if(!student) {
            throw new Error('Student not found');
        }

        const challenge = await this.ChallengesRepository.findById(challengeId);
        
        if(!challenge) {
            throw new Error('Challenge not found');
        }


        const submission = Submission.create({
            studentId,
            challengeId,
        })
        return submission;
    }
}