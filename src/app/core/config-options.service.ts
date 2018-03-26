import { Injectable } from '@angular/core';

class Config {
  id: number;
  login: string;
  email: string;
}

@Injectable()
export class ConfigOptionsService {
  private config: Config = new Config();

  constructor() {}

  getId(): number {
    return this.config.id;
  }

  setId(id: number): void {
    this.config.id = id;
  }

  getLogin(): string {
    return this.config.login;
  }

  setLogin(login: string): void {
    this.config.login = login;
  }

  getEmail(): string {
    return this.config.email;
  }

  setEmail(email: string): void {
    this.config.email = email;
  }
}
