type Callback = () => void;

export class Eventing {
  events: { [key: string]: Callback[] } = {};

  // registers an event handler with this object so other parts of the app
  // know when something changes
  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  // triggers an event to tell other parts of the app that something has changed
  trigger(eventName: string): void {
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) return;

    handlers.forEach((cb) => {
      cb();
    });
  }
}
