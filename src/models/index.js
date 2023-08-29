// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const DocType = {
  "BIRTH": "BIRTH",
  "SALE": "SALE"
};

const Sex = {
  "MALE": "MALE",
  "FEMALE": "FEMALE",
  "UNKNOWN": "UNKNOWN"
};

const { Transaction, Clutch, Reptile, Document } = initSchema(schema);

export {
  Transaction,
  Clutch,
  Reptile,
  Document,
  DocType,
  Sex
};