import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ActorState } from "./actor.model";

export const selectActorState = createFeatureSelector<ActorState>("actor")

export const singleActorData = createSelector(selectActorState, state => state.singleActor)
export const actorMoviesData = createSelector(selectActorState, state => state.actorMovies)
export const isLoadingData = createSelector(selectActorState, state => state.isLoading) 