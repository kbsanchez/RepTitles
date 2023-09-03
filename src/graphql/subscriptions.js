/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTransaction = /* GraphQL */ `
  subscription OnCreateTransaction(
    $filter: ModelSubscriptionTransactionFilterInput
    $owner: String
  ) {
    onCreateTransaction(filter: $filter, owner: $owner) {
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
export const onUpdateTransaction = /* GraphQL */ `
  subscription OnUpdateTransaction(
    $filter: ModelSubscriptionTransactionFilterInput
    $owner: String
  ) {
    onUpdateTransaction(filter: $filter, owner: $owner) {
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
export const onDeleteTransaction = /* GraphQL */ `
  subscription OnDeleteTransaction(
    $filter: ModelSubscriptionTransactionFilterInput
    $owner: String
  ) {
    onDeleteTransaction(filter: $filter, owner: $owner) {
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
export const onCreateClutch = /* GraphQL */ `
  subscription OnCreateClutch(
    $filter: ModelSubscriptionClutchFilterInput
    $owner: String
  ) {
    onCreateClutch(filter: $filter, owner: $owner) {
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
export const onUpdateClutch = /* GraphQL */ `
  subscription OnUpdateClutch(
    $filter: ModelSubscriptionClutchFilterInput
    $owner: String
  ) {
    onUpdateClutch(filter: $filter, owner: $owner) {
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
export const onDeleteClutch = /* GraphQL */ `
  subscription OnDeleteClutch(
    $filter: ModelSubscriptionClutchFilterInput
    $owner: String
  ) {
    onDeleteClutch(filter: $filter, owner: $owner) {
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
export const onCreateReptile = /* GraphQL */ `
  subscription OnCreateReptile(
    $filter: ModelSubscriptionReptileFilterInput
    $owner: String
  ) {
    onCreateReptile(filter: $filter, owner: $owner) {
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
export const onUpdateReptile = /* GraphQL */ `
  subscription OnUpdateReptile(
    $filter: ModelSubscriptionReptileFilterInput
    $owner: String
  ) {
    onUpdateReptile(filter: $filter, owner: $owner) {
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
export const onDeleteReptile = /* GraphQL */ `
  subscription OnDeleteReptile(
    $filter: ModelSubscriptionReptileFilterInput
    $owner: String
  ) {
    onDeleteReptile(filter: $filter, owner: $owner) {
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
export const onCreateDocument = /* GraphQL */ `
  subscription OnCreateDocument(
    $filter: ModelSubscriptionDocumentFilterInput
    $owner: String
  ) {
    onCreateDocument(filter: $filter, owner: $owner) {
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
export const onUpdateDocument = /* GraphQL */ `
  subscription OnUpdateDocument(
    $filter: ModelSubscriptionDocumentFilterInput
    $owner: String
  ) {
    onUpdateDocument(filter: $filter, owner: $owner) {
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
export const onDeleteDocument = /* GraphQL */ `
  subscription OnDeleteDocument(
    $filter: ModelSubscriptionDocumentFilterInput
    $owner: String
  ) {
    onDeleteDocument(filter: $filter, owner: $owner) {
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
