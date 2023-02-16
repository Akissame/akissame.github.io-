import type { ID } from "../utils/internal";
import type { AuthObject } from "../utils/public";
import type { UserProgress } from "./models";
/**
 * A call to this function will retrieve a given user's
 * progress on a given list of games, targeted by game ID.
 *
 * @param authorization An object containing your userName and webApiKey.
 * This can be constructed with `buildAuthorization()`.
 *
 * @param payload.userName The user for which to retrieve the progress for.
 *
 * @param payload.gameIds An array of RetroAchievements game IDs. If you aren't
 * sure of the game ID, visit the game's page on the website and copy the number
 * at the end of the URL.
 *
 * @example
 * ```
 * const userProgress = await getUserProgress(
 *   authorization,
 *   { userName: "xelnia", gameIds: [1, 14402] }
 * );
 * ```
 *
 * @returns An object which is a map of summarized progress for games.
 * ```json
 * {
 *   "1": {
 *     numPossibleAchievements: 24,
 *     possibleScore: 255,
 *     numAchieved: 0,
 *     scoreAchieved: 0,
 *     numAchievedHardcore: 0,
 *     scoreAchievedHardcore: 0
 *   },
 *   "14402": {
 *     numPossibleAchievements: 24,
 *     possibleScore: 255,
 *     numAchieved: 0,
 *     scoreAchieved: 0,
 *     numAchievedHardcore: 0,
 *     scoreAchievedHardcore: 0
 *   }
 * }
 * ```
 */
export declare const getUserProgress: (authorization: AuthObject, payload: {
    userName: string;
    gameIds: ID[];
}) => Promise<UserProgress>;