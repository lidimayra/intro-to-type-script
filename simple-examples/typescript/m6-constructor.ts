// Example 1
class Greeter {
     element: HTMLElement;

      constructor(element: HTMLElement) {
          this.element = element;
      }

      greet(msg: string) {
          this.element.innerHTML = msg;
      }
}

// Example 2
class Greeter_2 {
    constructor(private element: HTMLElement) {
    }

    greet(msg: string) {
        this.element.innerHTML = msg;
    }
}
