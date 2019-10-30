import { Component, Inject, forwardRef } from '@angular/core';
import { FeatureFlagService } from 'angularjsServices';

@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'sampleApp';

  constructor(
    @Inject(forwardRef(() => FeatureFlagService)) public featureFlagService: FeatureFlagService
){        
}
}
