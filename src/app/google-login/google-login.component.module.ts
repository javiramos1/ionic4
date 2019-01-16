import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { GoogleLoginComponent } from './google-login.component';

@NgModule({
	declarations: [GoogleLoginComponent],
	imports: [
		CommonModule, // <--- for angular directives
		IonicModule  // <--- for ionic components
	],
	exports: [GoogleLoginComponent]
})

export class GoogleComponentModule {}