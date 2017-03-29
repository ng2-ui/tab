import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule  } from '@angular/common';

import { NguiTabComponent } from "./tab.component";

export { NguiTabComponent };

@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [NguiTabComponent],
  exports: [NguiTabComponent]
})
export class NguiTabModule {}
