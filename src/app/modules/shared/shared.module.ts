import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';

import { InputComponent } from './components/input/input.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { ChipComponent } from './components/chip/chip.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { ShimmerComponent } from './components/shimmer/shimmer.component';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';
import { CheckBoxComponent } from './components/check-box/check-box.component';
import { RadioComponent } from './components/radio/radio.component';
import { MultiSelectComponent } from './components/multi-select/multi-select.component';

@NgModule({
  declarations: [
    InputComponent,
    TooltipComponent,
    ChipComponent,
    ProgressBarComponent,
    ShimmerComponent,
    ScrollTopComponent,
    CheckBoxComponent,
    RadioComponent,
    MultiSelectComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    CalendarModule,
  ],
  exports: [
  ]
})
export class SharedModule { }
