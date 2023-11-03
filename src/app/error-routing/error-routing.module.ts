import { ErrorHandler, NgModule, Provider } from '@angular/core';
import { environment } from '../../environments/environment';
import { GlobalErrorHandlerService } from './error/global-error-handler.service';

const providers: Provider[] = [];

if (environment.production) {
  // register prod error handler
  providers.push({ provide: ErrorHandler, useClass: GlobalErrorHandlerService });
}

@NgModule({
  declarations: [
  ],
  providers
})
export class ErrorRoutingModule { }
