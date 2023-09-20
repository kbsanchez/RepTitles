/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTransaction = /* GraphQL */ `
  query GetTransaction($id: ID!) {
    getTransaction(id: $id) {
      id
      documentID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const listTransactions = /* GraphQL */ `
  query ListTransactions(
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        documentID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncTransactions = /* GraphQL */ `
  query SyncTransactions(
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTransactions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        documentID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const transactionsByDocumentID = /* GraphQL */ `
  query TransactionsByDocumentID(
    $documentID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    transactionsByDocumentID(
      documentID: $documentID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        documentID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getClutch = /* GraphQL */ `
  query GetClutch($id: ID!) {
    getClutch(id: $id) {
      id
      Reptiles {
        items {
          id
          typeOfReptile
          documents {
            items {
              id
              reptileID
              docType
              breederName
              breederEmail
              ownerName
              ownerEmail
              purchaseOrHatchDate
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          species
          alias
          sex
          hatchDate
          breederName
          breederEmail
          clutchID
          image
          isParent
          sold
          notes
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      hatchDate
      species
      Sire {
        id
        typeOfReptile
        documents {
          items {
            id
            reptile {
              id
              typeOfReptile
              species
              alias
              sex
              hatchDate
              breederName
              breederEmail
              clutchID
              image
              isParent
              sold
              notes
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            reptileID
            docType
            breederName
            breederEmail
            ownerName
            ownerEmail
            Transactions {
              nextToken
              startedAt
              __typename
            }
            purchaseOrHatchDate
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        species
        alias
        sex
        hatchDate
        breederName
        breederEmail
        clutchID
        image
        isParent
        sold
        notes
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      Dam {
        id
        typeOfReptile
        documents {
          items {
            id
            reptile {
              id
              typeOfReptile
              species
              alias
              sex
              hatchDate
              breederName
              breederEmail
              clutchID
              image
              isParent
              sold
              notes
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            reptileID
            docType
            breederName
            breederEmail
            ownerName
            ownerEmail
            Transactions {
              nextToken
              startedAt
              __typename
            }
            purchaseOrHatchDate
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        species
        alias
        sex
        hatchDate
        breederName
        breederEmail
        clutchID
        image
        isParent
        sold
        notes
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      breederName
      typeOfReptile
      breederEmail
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      clutchSireId
      clutchDamId
      owner
      __typename
    }
  }
`;
export const listClutches = /* GraphQL */ `
  query ListClutches(
    $filter: ModelClutchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClutches(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Reptiles {
          items {
            id
            typeOfReptile
            documents {
              nextToken
              startedAt
              __typename
            }
            species
            alias
            sex
            hatchDate
            breederName
            breederEmail
            clutchID
            image
            isParent
            sold
            notes
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        hatchDate
        species
        Sire {
          id
          typeOfReptile
          documents {
            items {
              id
              reptileID
              docType
              breederName
              breederEmail
              ownerName
              ownerEmail
              purchaseOrHatchDate
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          species
          alias
          sex
          hatchDate
          breederName
          breederEmail
          clutchID
          image
          isParent
          sold
          notes
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        Dam {
          id
          typeOfReptile
          documents {
            items {
              id
              reptileID
              docType
              breederName
              breederEmail
              ownerName
              ownerEmail
              purchaseOrHatchDate
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          species
          alias
          sex
          hatchDate
          breederName
          breederEmail
          clutchID
          image
          isParent
          sold
          notes
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        breederName
        typeOfReptile
        breederEmail
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        clutchSireId
        clutchDamId
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncClutches = /* GraphQL */ `
  query SyncClutches(
    $filter: ModelClutchFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncClutches(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        Reptiles {
          items {
            id
            typeOfReptile
            documents {
              nextToken
              startedAt
              __typename
            }
            species
            alias
            sex
            hatchDate
            breederName
            breederEmail
            clutchID
            image
            isParent
            sold
            notes
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        hatchDate
        species
        Sire {
          id
          typeOfReptile
          documents {
            items {
              id
              reptileID
              docType
              breederName
              breederEmail
              ownerName
              ownerEmail
              purchaseOrHatchDate
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          species
          alias
          sex
          hatchDate
          breederName
          breederEmail
          clutchID
          image
          isParent
          sold
          notes
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        Dam {
          id
          typeOfReptile
          documents {
            items {
              id
              reptileID
              docType
              breederName
              breederEmail
              ownerName
              ownerEmail
              purchaseOrHatchDate
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          species
          alias
          sex
          hatchDate
          breederName
          breederEmail
          clutchID
          image
          isParent
          sold
          notes
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        breederName
        typeOfReptile
        breederEmail
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        clutchSireId
        clutchDamId
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getReptile = /* GraphQL */ `
  query GetReptile($id: ID!) {
    getReptile(id: $id) {
      id
      typeOfReptile
      documents {
        items {
          id
          reptile {
            id
            typeOfReptile
            documents {
              nextToken
              startedAt
              __typename
            }
            species
            alias
            sex
            hatchDate
            breederName
            breederEmail
            clutchID
            image
            isParent
            sold
            notes
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          reptileID
          docType
          breederName
          breederEmail
          ownerName
          ownerEmail
          Transactions {
            items {
              id
              documentID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          purchaseOrHatchDate
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      species
      alias
      sex
      hatchDate
      breederName
      breederEmail
      clutchID
      image
      isParent
      sold
      notes
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const listReptiles = /* GraphQL */ `
  query ListReptiles(
    $filter: ModelReptileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReptiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        typeOfReptile
        documents {
          items {
            id
            reptile {
              id
              typeOfReptile
              species
              alias
              sex
              hatchDate
              breederName
              breederEmail
              clutchID
              image
              isParent
              sold
              notes
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            reptileID
            docType
            breederName
            breederEmail
            ownerName
            ownerEmail
            Transactions {
              nextToken
              startedAt
              __typename
            }
            purchaseOrHatchDate
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        species
        alias
        sex
        hatchDate
        breederName
        breederEmail
        clutchID
        image
        isParent
        sold
        notes
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncReptiles = /* GraphQL */ `
  query SyncReptiles(
    $filter: ModelReptileFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncReptiles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        typeOfReptile
        documents {
          items {
            id
            reptile {
              id
              typeOfReptile
              species
              alias
              sex
              hatchDate
              breederName
              breederEmail
              clutchID
              image
              isParent
              sold
              notes
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            reptileID
            docType
            breederName
            breederEmail
            ownerName
            ownerEmail
            Transactions {
              nextToken
              startedAt
              __typename
            }
            purchaseOrHatchDate
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        species
        alias
        sex
        hatchDate
        breederName
        breederEmail
        clutchID
        image
        isParent
        sold
        notes
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const reptilesByClutchID = /* GraphQL */ `
  query ReptilesByClutchID(
    $clutchID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelReptileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    reptilesByClutchID(
      clutchID: $clutchID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        typeOfReptile
        documents {
          items {
            id
            reptile {
              id
              typeOfReptile
              species
              alias
              sex
              hatchDate
              breederName
              breederEmail
              clutchID
              image
              isParent
              sold
              notes
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            reptileID
            docType
            breederName
            breederEmail
            ownerName
            ownerEmail
            Transactions {
              nextToken
              startedAt
              __typename
            }
            purchaseOrHatchDate
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        species
        alias
        sex
        hatchDate
        breederName
        breederEmail
        clutchID
        image
        isParent
        sold
        notes
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getDocument = /* GraphQL */ `
  query GetDocument($id: ID!) {
    getDocument(id: $id) {
      id
      reptile {
        id
        typeOfReptile
        documents {
          items {
            id
            reptile {
              id
              typeOfReptile
              species
              alias
              sex
              hatchDate
              breederName
              breederEmail
              clutchID
              image
              isParent
              sold
              notes
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            reptileID
            docType
            breederName
            breederEmail
            ownerName
            ownerEmail
            Transactions {
              nextToken
              startedAt
              __typename
            }
            purchaseOrHatchDate
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        species
        alias
        sex
        hatchDate
        breederName
        breederEmail
        clutchID
        image
        isParent
        sold
        notes
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      reptileID
      docType
      breederName
      breederEmail
      ownerName
      ownerEmail
      Transactions {
        items {
          id
          documentID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      purchaseOrHatchDate
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const listDocuments = /* GraphQL */ `
  query ListDocuments(
    $filter: ModelDocumentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDocuments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        reptile {
          id
          typeOfReptile
          documents {
            items {
              id
              reptileID
              docType
              breederName
              breederEmail
              ownerName
              ownerEmail
              purchaseOrHatchDate
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          species
          alias
          sex
          hatchDate
          breederName
          breederEmail
          clutchID
          image
          isParent
          sold
          notes
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        reptileID
        docType
        breederName
        breederEmail
        ownerName
        ownerEmail
        Transactions {
          items {
            id
            documentID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        purchaseOrHatchDate
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncDocuments = /* GraphQL */ `
  query SyncDocuments(
    $filter: ModelDocumentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDocuments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        reptile {
          id
          typeOfReptile
          documents {
            items {
              id
              reptileID
              docType
              breederName
              breederEmail
              ownerName
              ownerEmail
              purchaseOrHatchDate
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          species
          alias
          sex
          hatchDate
          breederName
          breederEmail
          clutchID
          image
          isParent
          sold
          notes
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        reptileID
        docType
        breederName
        breederEmail
        ownerName
        ownerEmail
        Transactions {
          items {
            id
            documentID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        purchaseOrHatchDate
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const documentsByReptileID = /* GraphQL */ `
  query DocumentsByReptileID(
    $reptileID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDocumentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    documentsByReptileID(
      reptileID: $reptileID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        reptile {
          id
          typeOfReptile
          documents {
            items {
              id
              reptileID
              docType
              breederName
              breederEmail
              ownerName
              ownerEmail
              purchaseOrHatchDate
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
              __typename
            }
            nextToken
            startedAt
            __typename
          }
          species
          alias
          sex
          hatchDate
          breederName
          breederEmail
          clutchID
          image
          isParent
          sold
          notes
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        reptileID
        docType
        breederName
        breederEmail
        ownerName
        ownerEmail
        Transactions {
          items {
            id
            documentID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        purchaseOrHatchDate
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
