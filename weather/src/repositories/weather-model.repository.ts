import {DefaultCrudRepository} from '@loopback/repository';
import {WeatherModel, WeatherModelRelations} from '../models';
import {ArnoldsMongoDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class WeatherModelRepository extends DefaultCrudRepository<
  WeatherModel,
  typeof WeatherModel.prototype._id,
  WeatherModelRelations
> {
  constructor(
    @inject('datasources.arnoldsMongoDB') dataSource: ArnoldsMongoDbDataSource,
  ) {
    super(WeatherModel, dataSource);
  }
}
