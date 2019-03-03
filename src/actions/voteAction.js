export const VOTE_UP = "VOTE_UP";
export const voteUp = (id) => ({
  type: VOTE_UP,
  payload: {
    id
  }
});
export const VOTE_DOWN = "VOTE_DOWN";
export const voteDown = (id) => ({
  type: "VOTE_DOWN",
  payload: {
    id
  }
});