import { Challenge } from "../../domain/entities/Challenge";
import { Student } from "../../domain/entities/Student";
import { InMemoryChallengesRepository } from "../../tests/repositories/in-memory-challenges-repository";
import { InMemoryStudentsRepository } from "../../tests/repositories/in-memory-students-repository";
import { CreateChallengesSubmission } from "./create-challenge-submission";

describe('Create challenge submission use case', () => {
    it('should be able to create a new challenge submission', async () => {
        const studentsRepository = new InMemoryStudentsRepository();
        const challengesRepository = new InMemoryChallengesRepository();

        const student = Student.create({
            name: 'John Doe',
            email: 'john.doe@example.com',
        });

        const challenge = Challenge.create({
            title: 'Challenge 01',
            instructionsUrl: 'http://example.com', 
        });

        // Adiciona o estudante e o desafio aos repositórios em memória
        studentsRepository.items.push(student);
        challengesRepository.items.push(challenge);

        const sut = new CreateChallengesSubmission(
            studentsRepository, 
            challengesRepository,
        );

        // Aqui usa-se os ids reais dos objetos criados
        const response = await sut.execute({
            studentId: student.id,  // Usa o id real do estudante
            challengeId: challenge.id,  // Usa o id real do desafio
        });

        expect(response).toBeTruthy();
    });
});
