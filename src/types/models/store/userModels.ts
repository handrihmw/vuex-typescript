export interface userDetailState {
  loaded: boolean;
  loading: boolean;
  data: any;
}

export interface userState {
  detail: userDetailState;
}
