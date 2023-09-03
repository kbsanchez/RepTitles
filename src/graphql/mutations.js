/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTransaction = /* GraphQL */ `
  mutation CreateTransaction(
    $input: CreateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    createTransaction(input: $input, condition: $condition) {
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
export const updateTransaction = /* GraphQL */ `
  mutation UpdateTransaction(
    $input: UpdateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    updateTransaction(input: $input, condition: $condition) {
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
export const deleteTransaction = /* GraphQL */ `
  mutation DeleteTransaction(
    $input: DeleteTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    deleteTransaction(input: $input, condition: $condition) {
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
export const createClutch = /* GraphQL */ `
  mutation CreateClutch(
    $input: CreateClutchInput!
    $condition: ModelClutchConditionInput
  ) {
    createClutch(input: $input, condition: $condition) {
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
export const updateClutch = /* GraphQL */ `
  mutation UpdateClutch(
    $input: UpdateClutchInput!
    $condition: ModelClutchConditionInput
  ) {
    updateClutch(input: $input, condition: $condition) {
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
export const deleteClutch = /* GraphQL */ `
  mutation DeleteClutch(
    $input: DeleteClutchInput!
    $condition: ModelClutchConditionInput
  ) {
    deleteClutch(input: $input, condition: $condition) {
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
export const createReptile = /* GraphQL */ `
  mutation CreateReptile(
    $input: CreateReptileInput!
    $condition: ModelReptileConditionInput
  ) {
    createReptile(input: $input, condition: $condition) {
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
export const updateReptile = /* GraphQL */ `
  mutation UpdateReptile(
    $input: UpdateReptileInput!
    $condition: ModelReptileConditionInput
  ) {
    updateReptile(input: $input, condition: $condition) {
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
export const deleteReptile = /* GraphQL */ `
  mutation DeleteReptile(
    $input: DeleteReptileInput!
    $condition: ModelReptileConditionInput
  ) {
    deleteReptile(input: $input, condition: $condition) {
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
export const createDocument = /* GraphQL */ `
  mutation CreateDocument(
    $input: CreateDocumentInput!
    $condition: ModelDocumentConditionInput
  ) {
    createDocument(input: $input, condition: $condition) {
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
export const updateDocument = /* GraphQL */ `
  mutation UpdateDocument(
    $input: UpdateDocumentInput!
    $condition: ModelDocumentConditionInput
  ) {
    updateDocument(input: $input, condition: $condition) {
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
export const deleteDocument = /* GraphQL */ `
  mutation DeleteDocument(
    $input: DeleteDocumentInput!
    $condition: ModelDocumentConditionInput
  ) {
    deleteDocument(input: $input, condition: $condition) {
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
