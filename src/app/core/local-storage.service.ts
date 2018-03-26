import { Injectable } from '@angular/core';

import StorageService from './storage.service';

@Injectable()
export class LocalStorageService implements StorageService {
  private localStorageSupported: boolean;

  constructor () {
    this.localStorageSupported = !!window.localStorage;
  }

  setItem(key: string, value: any): void {
    if (this.localStorageSupported) {
      const json = JSON.stringify(value);
      window.localStorage.setItem(key, json);
    }
  }

  getItem(key: string): any {
    if (!this.localStorageSupported) {
      return undefined;
    }

    const value = window.localStorage.getItem(key);
    return JSON.parse(value);
  }

  removeItem(key: string): void {
    if (this.localStorageSupported) {
      window.localStorage.removeItem(key);
    }
  }
}
