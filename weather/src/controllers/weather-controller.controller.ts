import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {WeatherModel} from '../models';
import {WeatherModelRepository} from '../repositories';

export class WeatherControllerController {
  constructor(
    @repository(WeatherModelRepository)
    public weatherModelRepository : WeatherModelRepository,
  ) {}

  @post('/weather', {
    responses: {
      '200': {
        description: 'WeatherModel model instance',
        content: {'application/json': {schema: {'x-ts-type': WeatherModel}}},
      },
    },
  })
  async create(@requestBody() weatherModel: WeatherModel): Promise<WeatherModel> {
    return await this.weatherModelRepository.create(weatherModel);
  }

  @get('/weather/count', {
    responses: {
      '200': {
        description: 'WeatherModel model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(WeatherModel)) where?: Where<WeatherModel>,
  ): Promise<Count> {
    return await this.weatherModelRepository.count(where);
  }

  @get('/weather', {
    responses: {
      '200': {
        description: 'Array of WeatherModel model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': WeatherModel}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(WeatherModel)) filter?: Filter<WeatherModel>,
  ): Promise<WeatherModel[]> {
    return await this.weatherModelRepository.find(filter);
  }

  @patch('/weather', {
    responses: {
      '200': {
        description: 'WeatherModel PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() weatherModel: WeatherModel,
    @param.query.object('where', getWhereSchemaFor(WeatherModel)) where?: Where<WeatherModel>,
  ): Promise<Count> {
    return await this.weatherModelRepository.updateAll(weatherModel, where);
  }

  @get('/weather/{id}', {
    responses: {
      '200': {
        description: 'WeatherModel model instance',
        content: {'application/json': {schema: {'x-ts-type': WeatherModel}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<WeatherModel> {
    return await this.weatherModelRepository.findById(id);
  }

  @patch('/weather/{id}', {
    responses: {
      '204': {
        description: 'WeatherModel PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() weatherModel: WeatherModel,
  ): Promise<void> {
    await this.weatherModelRepository.updateById(id, weatherModel);
  }

  @put('/weather/{id}', {
    responses: {
      '204': {
        description: 'WeatherModel PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() weatherModel: WeatherModel,
  ): Promise<void> {
    await this.weatherModelRepository.replaceById(id, weatherModel);
  }

  @del('/weather/{id}', {
    responses: {
      '204': {
        description: 'WeatherModel DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.weatherModelRepository.deleteById(id);
  }
}
