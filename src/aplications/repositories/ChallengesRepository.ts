import { Challenge } from "../../domain/entities/Challenge";

export interface ChallengesRepository {
    findById(id: string): Promise<Challenge | null>;
}