import Control from "./../../builder/controller";

export default class StartPage extends Control {
    constructor (parentNode: HTMLElement, tagName: string, className: string) {
       super(parentNode, tagName, className);

       (window.onresize = (() => this.windowResize(window.innerHeight)))()

       const header = new Control(this.node, 'div', 'header')
    }

    windowResize(h: number) {
        this.node.style.height = `${h}px`;
    }
}