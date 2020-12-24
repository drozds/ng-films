import { Actor, Movie } from "src/app/shared";

export interface ActorResponse {
    name: string;
}

export interface ActorState {
    singleActor: Actor;
    actorMovies: Movie[];
    isLoading: boolean
}

export const initialState: ActorState = {
    singleActor: null,
    actorMovies: [] || null,
    isLoading: false
}