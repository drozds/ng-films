import { HttpErrorResponse } from "@angular/common/http";
import { createAction, props } from "@ngrx/store";

import { ActorResponse } from "./actor.model";

export const getActor = createAction("[Actor] Get Actor", props<{ actorName: string }>())

export const getActorSuccess = createAction("[Actor] Get Actor Success", props<{ actorResponse: ActorResponse }>())

export const getActorFailure = createAction("[Actor] Get Actor Failure", props<{ error: HttpErrorResponse }>())
