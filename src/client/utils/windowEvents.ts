export const addWindowEvents = (types: Array<keyof WindowEventMap>, listener: EventListenerOrEventListenerObject) =>
    types.forEach(value => window.addEventListener(value, listener));

export const removeWindowEvents = (types: Array<keyof WindowEventMap>, listener: EventListenerOrEventListenerObject) =>
    types.forEach(value => window.removeEventListener(value, listener));
