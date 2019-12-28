export class UserForm {
  constructor(public parent: Element) {}

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:button': this.onButtonClick,
    };
  }

  onButtonClick(): void {
    console.log("Hi There");
  }

  template(): string {
    return `
      <div>
        <h1>UserForm</h1>
        <input />
        <button>Click me</button>
      </div>
    `;
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');

      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      })
    }
  }

  render(): void {
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();
    this.parent.append(templateElement.content);

    this.bindEvents(templateElement.content);
  }
}
