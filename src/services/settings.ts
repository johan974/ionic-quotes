export class SettingsService {
  altBackground : boolean = false;
  setBackground( isAltBackground : boolean) {
    this.altBackground = isAltBackground;
    console.log( 'SettingsService: SetBackground = ' +  this.altBackground);
  }
  isAltBackground() {
    console.log( 'SettingsService: IsAltBackground = ' +  this.altBackground)
    return this.altBackground;
  }
}
