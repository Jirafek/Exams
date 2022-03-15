import Control from "../builder/controller";
import StartPage from './pages/startPage';

export default class Application extends Control {
	constructor (parentNode: HTMLElement, tagName: string, className: string) {
		super(parentNode, tagName, className);
		this.onStartPage();
    }

	private onStartPage() {
		const startPage = new StartPage(this.node, 'div', 'start__page');
	}
}