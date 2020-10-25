import Application from 'ember-internal-state-experiment/app';
import config from 'ember-internal-state-experiment/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
