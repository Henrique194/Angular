const handlers = {
    click: (target: HTMLElement) => {},
    scroll: (distance: number) => {}
} as const;

type Handlers = typeof handlers;
type HandlersType = keyof Handlers;

const x = 10;
type typeOfX = typeof x;