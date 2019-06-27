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

  @property({
    type: 'number',
    id: false,
    required: false,
  })
  elevation: number;

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<WeatherModel>) {
    super(data);
  }
}

export interface WeatherModelRelations {
  // describe navigational properties here
}

export type WeatherModelWithRelations = WeatherModel & WeatherModelRelations;
