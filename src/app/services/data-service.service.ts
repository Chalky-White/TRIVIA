import { Injectable } from '@angular/core';
import { Component } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  getRandomNumber() : number {
    return Math.floor(Math.random() * 1000);
  }
}