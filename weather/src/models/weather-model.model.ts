import {Entity, model, property} from '@loopback/repository';

@model({settings: { strict: false,
    mongodb: {
      collection: 'data',
    },
  }})
  
export class WeatherModel extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  _id: string;

  constructor(data?: Partial<WeatherModel>) {
    super(data);
  }
}

export interface WeatherModelRelations {
  // describe navigational properties here
}

export type WeatherModelWithRelations = WeatherModel & WeatherModelRelations;
