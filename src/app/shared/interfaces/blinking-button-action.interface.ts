import { EBlinkingLights } from '../enums/blinking-lights.enum';
import { IOutput } from './output.interface';

export interface IBlinkingButtonAction extends IOutput<any, EBlinkingLights> {
  payload: {
    blinking: boolean;
  }
}
