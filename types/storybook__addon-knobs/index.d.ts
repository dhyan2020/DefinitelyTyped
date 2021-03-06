// Type definitions for @storybook/addon-knobs 3.0
// Project: https://github.com/storybooks/storybook
// Definitions by: Joscha Feth <https://github.com/joscha>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';
import { RenderFunction } from '@storybook/react';

export interface KnobOption<T> {
    value: T;
    type: 'text' | 'boolean' | 'number' | 'color' | 'object' | 'select' | 'date';
}

export interface StoryContext {
    kind: string;
    story: string;
}

export interface NumberOptions {
    range: boolean;
    min: number;
    max: number;
    step: number;
}

export function knob<T>(name: string, options: KnobOption<T>): T;

export function text(name: string, value: string | null): string;

export function boolean(name: string, value: boolean): boolean;

export function number(name: string, value: number, options?: NumberOptions): number;

export function color(name: string, value: string): string;

export function object<T>(name: string, value: T): T;

export function select<T>(name: string, options: { [s: string]: T }, value: string): T;
export function select(name: string, options: string[], value: string): string;

export function date(name: string, value?: Date): Date;

export interface WrapStoryProps {
    context?: object;
    storyFn?: RenderFunction;
    channel?: object;
    knobStore?: object;
    initialContent?: object;
}

export function withKnobs(storyFn: RenderFunction, context: StoryContext): React.ReactElement<WrapStoryProps>;
export function withKnobsOptions(options: { debounce: boolean, timestamps: boolean }): (storyFn: RenderFunction, context: StoryContext) => React.ReactElement<WrapStoryProps>;
