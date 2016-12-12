import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule  } from '@angular/common';

import { Ng2TabComponent } from "./ng2-tab.component";

export { Ng2TabComponent };

@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [Ng2TabComponent],
  exports: [Ng2TabComponent]
})
export class Ng2TabModule {}
