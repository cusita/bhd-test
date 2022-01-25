import { Inject, Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  constructor() { }

  public add(key: string, value: string) {
    window.localStorage.setItem(key, value);
  }

  public get(key: string) {
    return window.localStorage.getItem(key) ?? null;
  }

  public remove(key: string) {
    window.localStorage.removeItem(key);
  }
}
