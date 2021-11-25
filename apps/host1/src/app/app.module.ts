import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        // {
        //   path: 'newremote',
        //   loadChildren: () =>
        //     loadRemoteModule({
        //       remoteEntry: 'http://localhost:4202/remoteEntry.js',
        //       remoteName: 'remotea',
        //       exposedModule: './Module',
        //     }).then(m => m.RemoteEntryModule)
        // },
        {
          path: 'remote2',
          loadChildren: () =>
            import('remote2/Module').then((m) => m.RemoteEntryModule),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
