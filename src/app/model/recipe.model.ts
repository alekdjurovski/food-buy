export class IRecipe {
    public name: string;
    public description: string;
    public imgUrl: string;

    constructor (name: string, desc: string, img: string) {
      this.name = name;
      this.description = desc;
      this.imgUrl = img;
    }
}
