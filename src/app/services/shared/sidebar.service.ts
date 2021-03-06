import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Dashboard', url: '/dashboard' },
        { titulo: 'ProgressBar', url: '/progress' },
        { titulo: 'Promesas', url: '/promesas' },
        { titulo: 'ProgressBar', url: '/progress' },
        { titulo: 'rxjs', url: '/rxjs' }

      ]
    }
  ];

  constructor() { }
}
