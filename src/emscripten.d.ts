// emscripten.d.ts

declare module 'emscripten' {
    export interface EmscriptenModule {
        onRuntimeInitialized: () => void;
        onAbort: () => void;
        ccall: (name: string, returnType: string, argTypes: string[], args: any[]) => any;
        cwrap: (name: string, returnType: string, argTypes: string[]) => (...args: any[]) => any;
    }

    export const Module: EmscriptenModule;
}
