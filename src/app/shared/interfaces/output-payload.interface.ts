export interface IOutputPayload<PAYLOAD = any, TYPE = string> {
  type: TYPE;
  payload: PAYLOAD;
}
