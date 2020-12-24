import { Action, createReducer, on } from "@ngrx/store";
import * as actorActions from './actor.action';
import { ActorState, initialState } from "./actor.model";

const reducer = createReducer(initialState,
    on(actorActions.getActor, (state) => ({
        ...state,
        isLoading: true
    })),
    on(actorActions.getActorSuccess, (state, options) => ({
        ...state,
        singleActor: options.actor,
        actorMovies: options.movies,
        isLoading: false
    })),
    on(actorActions.getActorFailure, (state) => ({
        ...state,
        isLoading: false
    })),

)

export function actorReducer(state: ActorState, action: Action) {
    return reducer(state, action)
}