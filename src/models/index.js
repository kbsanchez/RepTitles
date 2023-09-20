// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Parent = {
  "NOTPARENT": "NOTPARENT",
  "SIRE": "SIRE",
  "DAM": "DAM"
};

const DocType = {
  "HATCH": "HATCH",
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
  Parent,
  DocType,
  Sex
};