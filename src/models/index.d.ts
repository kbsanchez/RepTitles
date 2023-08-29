import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum DocType {
  BIRTH = "BIRTH",
  SALE = "SALE"
}

export enum Sex {
  MALE = "MALE",
  FEMALE = "FEMALE",
  UNKNOWN = "UNKNOWN"
}



type EagerTransaction = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Transaction, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly documentID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTransaction = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Transaction, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly documentID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Transaction = LazyLoading extends LazyLoadingDisabled ? EagerTransaction : LazyTransaction

export declare const Transaction: (new (init: ModelInit<Transaction>) => Transaction) & {
  copyOf(source: Transaction, mutator: (draft: MutableModel<Transaction>) => MutableModel<Transaction> | void): Transaction;
}

type EagerClutch = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Clutch, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Reptiles?: (Reptile | null)[] | null;
  readonly hatchDate?: string | null;
  readonly species?: string | null;
  readonly Sire?: Reptile | null;
  readonly Dam?: Reptile | null;
  readonly breeder?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly clutchSireId?: string | null;
  readonly clutchDamId?: string | null;
}

type LazyClutch = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Clutch, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Reptiles: AsyncCollection<Reptile>;
  readonly hatchDate?: string | null;
  readonly species?: string | null;
  readonly Sire: AsyncItem<Reptile | undefined>;
  readonly Dam: AsyncItem<Reptile | undefined>;
  readonly breeder?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly clutchSireId?: string | null;
  readonly clutchDamId?: string | null;
}

export declare type Clutch = LazyLoading extends LazyLoadingDisabled ? EagerClutch : LazyClutch

export declare const Clutch: (new (init: ModelInit<Clutch>) => Clutch) & {
  copyOf(source: Clutch, mutator: (draft: MutableModel<Clutch>) => MutableModel<Clutch> | void): Clutch;
}

type EagerReptile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Reptile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly alias: string;
  readonly documents?: (Document | null)[] | null;
  readonly species?: string | null;
  readonly hatchDate?: string | null;
  readonly sex?: Sex | keyof typeof Sex | null;
  readonly breeder?: string | null;
  readonly image?: string | null;
  readonly isParent?: boolean | null;
  readonly clutchID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyReptile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Reptile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly alias: string;
  readonly documents: AsyncCollection<Document>;
  readonly species?: string | null;
  readonly hatchDate?: string | null;
  readonly sex?: Sex | keyof typeof Sex | null;
  readonly breeder?: string | null;
  readonly image?: string | null;
  readonly isParent?: boolean | null;
  readonly clutchID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Reptile = LazyLoading extends LazyLoadingDisabled ? EagerReptile : LazyReptile

export declare const Reptile: (new (init: ModelInit<Reptile>) => Reptile) & {
  copyOf(source: Reptile, mutator: (draft: MutableModel<Reptile>) => MutableModel<Reptile> | void): Reptile;
}

type EagerDocument = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Document, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly reptile?: Reptile | null;
  readonly reptileID: string;
  readonly dateCreated?: string | null;
  readonly docType?: DocType | keyof typeof DocType | null;
  readonly breederName?: string | null;
  readonly breederEmail?: string | null;
  readonly soldToName?: string | null;
  readonly soldToEmail?: string | null;
  readonly Transactions?: (Transaction | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly reptileDocumentsId?: string | null;
}

type LazyDocument = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Document, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly reptile: AsyncItem<Reptile | undefined>;
  readonly reptileID: string;
  readonly dateCreated?: string | null;
  readonly docType?: DocType | keyof typeof DocType | null;
  readonly breederName?: string | null;
  readonly breederEmail?: string | null;
  readonly soldToName?: string | null;
  readonly soldToEmail?: string | null;
  readonly Transactions: AsyncCollection<Transaction>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly reptileDocumentsId?: string | null;
}

export declare type Document = LazyLoading extends LazyLoadingDisabled ? EagerDocument : LazyDocument

export declare const Document: (new (init: ModelInit<Document>) => Document) & {
  copyOf(source: Document, mutator: (draft: MutableModel<Document>) => MutableModel<Document> | void): Document;
}