import { HeroBlockModel, HeroBlockProps } from "../models/HeroBlockModel";

export class HeroBlockController {
  private model: HeroBlockModel;

  constructor(props: HeroBlockProps) {
    this.model = new HeroBlockModel(props);
  }

  getModel() {
    return this.model;
  }
}
