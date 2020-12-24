export interface AppState {
    movies: MoviesState;
    actor: ActorState;
    user: UserState;
    search: SearchState;
}

export const reducers = {
    movies: moviesReducer,
    actor: actorReducer,
    user: userReducer,
    search: searchReducer,
}

export const effects = [
    MoviesEffect,
    ActorEffect,
    UserEffect,
    SearchEffect,
]

export const facades = [
    MoviesFacade,
    ActorFacade,
    UserFacade,
    SearchFacade,
]