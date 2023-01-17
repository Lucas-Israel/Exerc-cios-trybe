import { IPlane } from "./interfaces";

export default class Plane implements IPlane {
  fly(): void { console.log('Flying a plane'); }
}