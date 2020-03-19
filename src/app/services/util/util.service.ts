import { Injectable } from '@angular/core';
import { Icon, icons } from '../icons/icons.service';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  constructor() {}

  getRandomIcon(): Icon {
    return icons.icons[Math.floor(Math.random() * icons.icons.length)];
  }
}
