## API Report File for "@backstage/test-utils"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { AnalyticsApi } from '@backstage/core-plugin-api';
import { AnalyticsEvent } from '@backstage/core-plugin-api';
import { ComponentType } from 'react';
import { ErrorApi } from '@backstage/core-plugin-api';
import { ErrorApiError } from '@backstage/core-plugin-api';
import { ErrorApiErrorContext } from '@backstage/core-plugin-api';
import { ExternalRouteRef } from '@backstage/core-plugin-api';
import { Observable } from '@backstage/types';
import { ReactElement } from 'react';
import { ReactNode } from 'react';
import { RenderResult } from '@testing-library/react';
import { RouteRef } from '@backstage/core-plugin-api';
import { StorageApi } from '@backstage/core-plugin-api';
import { StorageValueChange } from '@backstage/core-plugin-api';

// @public
export type AsyncLogCollector = () => Promise<void>;

// @public
export type CollectedLogs<T extends LogFuncs> = {
  [key in T]: string[];
};

// @public
export type ErrorWithContext = {
  error: ErrorApiError;
  context?: ErrorApiErrorContext;
};

// @public @deprecated (undocumented)
export class Keyboard {
  constructor(
    target: any,
    {
      debug,
    }?: {
      debug?: boolean | undefined;
    },
  );
  // (undocumented)
  click(): Promise<void>;
  // (undocumented)
  debug: boolean;
  // (undocumented)
  document: any;
  // (undocumented)
  enter(value: any): Promise<void>;
  // (undocumented)
  escape(): Promise<void>;
  // (undocumented)
  get focused(): any;
  // (undocumented)
  static fromReadableInput(input: any): any;
  // (undocumented)
  _log(message: any, ...args: any[]): void;
  // (undocumented)
  _pretty(element: any): string;
  // (undocumented)
  send(chars: any): Promise<void>;
  // (undocumented)
  _sendKey(key: any, charCode: any, action: any): Promise<void>;
  // (undocumented)
  tab(): Promise<void>;
  // (undocumented)
  static toReadableInput(chars: any): any;
  // (undocumented)
  toString(): string;
  // (undocumented)
  static type(target: any, input: any): Promise<void>;
  // (undocumented)
  type(input: any): Promise<void>;
  // (undocumented)
  static typeDebug(target: any, input: any): Promise<void>;
}

// @public
export type LogCollector = AsyncLogCollector | SyncLogCollector;

// @public
export type LogFuncs = 'log' | 'warn' | 'error';

// @public
export class MockAnalyticsApi implements AnalyticsApi {
  // (undocumented)
  captureEvent({
    action,
    subject,
    value,
    attributes,
    context,
  }: AnalyticsEvent): void;
  // (undocumented)
  getEvents(): AnalyticsEvent[];
}

// @public
export function mockBreakpoint({
  matches,
}: {
  matches?: boolean | undefined;
}): void;

// @public
export class MockErrorApi implements ErrorApi {
  constructor(options?: MockErrorApiOptions);
  // (undocumented)
  error$(): Observable<{
    error: ErrorApiError;
    context?: ErrorApiErrorContext;
  }>;
  // (undocumented)
  getErrors(): ErrorWithContext[];
  // (undocumented)
  post(error: ErrorApiError, context?: ErrorApiErrorContext): void;
  // (undocumented)
  waitForError(pattern: RegExp, timeoutMs?: number): Promise<ErrorWithContext>;
}

// @public
export type MockErrorApiOptions = {
  collect?: boolean;
};

// @public
export class MockStorageApi implements StorageApi {
  // (undocumented)
  static create(data?: MockStorageBucket): MockStorageApi;
  // (undocumented)
  forBucket(name: string): StorageApi;
  // (undocumented)
  get<T>(key: string): T | undefined;
  // (undocumented)
  observe$<T>(key: string): Observable<StorageValueChange<T>>;
  // (undocumented)
  remove(key: string): Promise<void>;
  // (undocumented)
  set<T>(key: string, data: T): Promise<void>;
}

// @public
export type MockStorageBucket = {
  [key: string]: any;
};

// @public @deprecated (undocumented)
export const msw: {
  setupDefaultHandlers: (worker: {
    listen: (t: any) => void;
    close: () => void;
    resetHandlers: () => void;
  }) => void;
};

// @public
export function renderInTestApp(
  Component: ComponentType | ReactNode,
  options?: TestAppOptions,
): Promise<RenderResult>;

// @public
export function renderWithEffects(nodes: ReactElement): Promise<RenderResult>;

// @public
export function setupRequestMockHandlers(worker: {
  listen: (t: any) => void;
  close: () => void;
  resetHandlers: () => void;
}): void;

// @public
export type SyncLogCollector = () => void;

// @public
export type TestAppOptions = {
  routeEntries?: string[];
  mountedRoutes?: {
    [path: string]: RouteRef | ExternalRouteRef;
  };
};

// @public
export function withLogCollector(
  callback: AsyncLogCollector,
): Promise<CollectedLogs<LogFuncs>>;

// @public
export function withLogCollector(
  callback: SyncLogCollector,
): CollectedLogs<LogFuncs>;

// @public
export function withLogCollector<T extends LogFuncs>(
  logsToCollect: T[],
  callback: AsyncLogCollector,
): Promise<CollectedLogs<T>>;

// @public
export function withLogCollector<T extends LogFuncs>(
  logsToCollect: T[],
  callback: SyncLogCollector,
): CollectedLogs<T>;

// @public
export function wrapInTestApp(
  Component: ComponentType | ReactNode,
  options?: TestAppOptions,
): ReactElement;
```
