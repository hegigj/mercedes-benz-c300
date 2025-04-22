export interface IOutput<PAYLOAD = any, TYPE = string> {
  type: TYPE;
  payload: PAYLOAD;
}
