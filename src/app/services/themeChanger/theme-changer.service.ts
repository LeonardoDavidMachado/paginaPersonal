import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeChangerService {

  constructor() { }

  changeTheme() {
    let aux = localStorage.getItem('isDark');
    let isDark = false;;
    if(aux && aux == 'true') {
      isDark = true;
    }
    if (isDark) {
      this.ligthTheme();
    } else {
      this.darkTheme();
    }
    isDark = !isDark;
    localStorage.setItem('isDark',isDark.toString());
    return isDark;
  }

  darkTheme() {
    document.documentElement.style.setProperty('--bodyBackground', '#1f0b6f');
    document.documentElement.style.setProperty('--textColor', 'white');
    document.documentElement.style.setProperty('--subtitleColor', 'chartreuse');
    document.documentElement.style.setProperty('--title', 'rgb(228, 210, 139)');
    document.documentElement.style.setProperty('--formacionColor', '#424242');
    document.documentElement.style.setProperty('--shadowColor', 'white');
    document.documentElement.style.setProperty('--iconColor', 'darkblue');
    document.documentElement.style.setProperty('--modeColor', 'yellow');
  }

  ligthTheme() {
    document.documentElement.style.setProperty('--bodyBackground', 'whitesmoke');
    document.documentElement.style.setProperty('--textColor', 'black');
    document.documentElement.style.setProperty('--subtitleColor', 'darkblue');
    document.documentElement.style.setProperty('--title', 'black');
    document.documentElement.style.setProperty('--formacionColor', 'rgb(201 189 151 / 78%)');
    document.documentElement.style.setProperty('--shadowColor', '#50096e');
    document.documentElement.style.setProperty('--iconColor', 'black');
    document.documentElement.style.setProperty('--modeColor', 'white');
  }

}
