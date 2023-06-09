export class Cylinder {
    private static getPerimeter(radius: number): number {
        return 2 * Math.PI * radius;
    }
    private static getBaseArea(radius: number): number {
        return Math.PI * radius * radius;
    }
    public static getVolume(radius: number, height: number): number {
        let perimeter: number = this.getPerimeter(radius);
        let baseArea: number = this.getBaseArea(radius);
        return perimeter * height + 2 * baseArea;
    }
}