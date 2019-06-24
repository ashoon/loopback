import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './arnolds-mongo-db.datasource.json';

export class ArnoldsMongoDbDataSource extends juggler.DataSource {
  static dataSourceName = 'arnoldsMongoDB';

  constructor(
    @inject('datasources.config.arnoldsMongoDB', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
