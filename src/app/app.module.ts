import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

import { AppComponent } from './components/application/app.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { SubjectComponent } from './components/subjects/subject/subject.component';
import { OperatorsComponent } from './components/operators/operators.component';
import { SchedulerComponent } from './components/scheduler/scheduler.component';
import { BehaviorsComponent } from './components/subjects/behaviors/behaviors.component';
import { AsyncComponent } from './components/subjects/async/async.component';
import { ReplayComponent } from './components/subjects/replay/replay.component';
import { ObserversComponent } from './components/observers/observers.component';
import { CompletionsComponent } from './components/completions/completions.component';
import { MulticastComponent } from './components/subjects/multicast/multicast.component';
import { MulticastedComponent } from './components/subjects/multicasted/multicasted.component';
import { UtilityComponent } from './components/utility/utility.component';
import { CreationComponent } from './components/creation/creation.component';
import { IntroComponent } from './components/intro/intro.component';
import { FiltersComponent } from './components/filters/filters.component';
import { TransformationsComponent } from './components/transformations/transformations.component';
import { ConditionalsComponent } from './components/conditionals/conditionals.component';
import { CombinationsComponent } from './components/combinations/combinations.component';
import { MathematicalComponent } from './components/mathematical/mathematical.component';
import { ErrorhandlingComponent } from './components/errorhandling/errorhandling.component';
import { ObservablesComponent } from './components/observables/observables.component';
import { PersonComponent } from './components/filters/person/person.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectsComponent,
    SubjectComponent,
    OperatorsComponent,
    BehaviorsComponent,
    AsyncComponent,
    ReplayComponent,
    ObserversComponent,
    CompletionsComponent,
    MulticastComponent,
    MulticastedComponent,
    UtilityComponent,
    SchedulerComponent,
    CreationComponent,
    IntroComponent,
    FiltersComponent,
    TransformationsComponent,
    ConditionalsComponent,
    CombinationsComponent,
    MathematicalComponent,
    ErrorhandlingComponent,
    ObservablesComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    LoggerModule.forRoot({
      serverLoggingUrl: '/api/logs',
      level: NgxLoggerLevel.TRACE,
      serverLogLevel: NgxLoggerLevel.ERROR,
      disableConsoleLogging: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
