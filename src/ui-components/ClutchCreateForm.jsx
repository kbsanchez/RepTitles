/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  CheckboxField,
  Flex,
  Grid,
  StepperField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { fetchByPath, validateField } from "./utils";
import { API } from "aws-amplify";
import { createClutch } from "../graphql/mutations";
export default function ClutchCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    typeOfReptile: "",
    species: "",
    Field0: 0,
    hatchDate: "",
    Field1: false,
    breederName: "",
    breederEmail: "",
  };
  const [typeOfReptile, setTypeOfReptile] = React.useState(
    initialValues.typeOfReptile
  );
  const [species, setSpecies] = React.useState(initialValues.species);
  const [Field0, setField0] = React.useState(initialValues.Field0);
  const [hatchDate, setHatchDate] = React.useState(initialValues.hatchDate);
  const [Field1, setField1] = React.useState(initialValues.Field1);
  const [breederName, setBreederName] = React.useState(
    initialValues.breederName
  );
  const [breederEmail, setBreederEmail] = React.useState(
    initialValues.breederEmail
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTypeOfReptile(initialValues.typeOfReptile);
    setSpecies(initialValues.species);
    setField0(initialValues.Field0);
    setHatchDate(initialValues.hatchDate);
    setField1(initialValues.Field1);
    setBreederName(initialValues.breederName);
    setBreederEmail(initialValues.breederEmail);
    setErrors({});
  };
  const validations = {
    typeOfReptile: [],
    species: [],
    Field0: [],
    hatchDate: [],
    Field1: [],
    breederName: [],
    breederEmail: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          typeOfReptile,
          species,
          Field0,
          hatchDate,
          Field1,
          breederName,
          breederEmail,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          const modelFieldsToSave = {
            typeOfReptile: modelFields.typeOfReptile,
            species: modelFields.species,
            hatchDate: modelFields.hatchDate,
            breederName: modelFields.breederName,
            breederEmail: modelFields.breederEmail,
          };
          await API.graphql({
            query: createClutch,
            variables: {
              input: {
                ...modelFieldsToSave,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ClutchCreateForm")}
      {...rest}
    >
      <TextField
        label="Type of reptile"
        isRequired={false}
        isReadOnly={false}
        value={typeOfReptile}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              typeOfReptile: value,
              species,
              Field0,
              hatchDate,
              Field1,
              breederName,
              breederEmail,
            };
            const result = onChange(modelFields);
            value = result?.typeOfReptile ?? value;
          }
          if (errors.typeOfReptile?.hasError) {
            runValidationTasks("typeOfReptile", value);
          }
          setTypeOfReptile(value);
        }}
        onBlur={() => runValidationTasks("typeOfReptile", typeOfReptile)}
        errorMessage={errors.typeOfReptile?.errorMessage}
        hasError={errors.typeOfReptile?.hasError}
        {...getOverrideProps(overrides, "typeOfReptile")}
      ></TextField>
      <TextField
        label="Species"
        isRequired={false}
        isReadOnly={false}
        value={species}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              typeOfReptile,
              species: value,
              Field0,
              hatchDate,
              Field1,
              breederName,
              breederEmail,
            };
            const result = onChange(modelFields);
            value = result?.species ?? value;
          }
          if (errors.species?.hasError) {
            runValidationTasks("species", value);
          }
          setSpecies(value);
        }}
        onBlur={() => runValidationTasks("species", species)}
        errorMessage={errors.species?.errorMessage}
        hasError={errors.species?.hasError}
        {...getOverrideProps(overrides, "species")}
      ></TextField>
      <StepperField
        label="Number of reptiles in this clutch"
        value={Field0}
        onStepChange={(e) => {
          let value = e;
          if (onChange) {
            const modelFields = {
              typeOfReptile,
              species,
              Field0: value,
              hatchDate,
              Field1,
              breederName,
              breederEmail,
            };
            const result = onChange(modelFields);
            value = result?.Field0 ?? value;
          }
          if (errors.Field0?.hasError) {
            runValidationTasks("Field0", value);
          }
          setField0(value);
        }}
        onBlur={() => runValidationTasks("Field0", Field0)}
        errorMessage={errors.Field0?.errorMessage}
        hasError={errors.Field0?.hasError}
        {...getOverrideProps(overrides, "Field0")}
      ></StepperField>
      <TextField
        label="Hatch date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={hatchDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              typeOfReptile,
              species,
              Field0,
              hatchDate: value,
              Field1,
              breederName,
              breederEmail,
            };
            const result = onChange(modelFields);
            value = result?.hatchDate ?? value;
          }
          if (errors.hatchDate?.hasError) {
            runValidationTasks("hatchDate", value);
          }
          setHatchDate(value);
        }}
        onBlur={() => runValidationTasks("hatchDate", hatchDate)}
        errorMessage={errors.hatchDate?.errorMessage}
        hasError={errors.hatchDate?.hasError}
        {...getOverrideProps(overrides, "hatchDate")}
      ></TextField>
      <CheckboxField
        label="I am the breeder"
        name="fieldName"
        value="fieldName"
        checked={Field1}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              typeOfReptile,
              species,
              Field0,
              hatchDate,
              Field1: value,
              breederName,
              breederEmail,
            };
            const result = onChange(modelFields);
            value = result?.Field1 ?? value;
          }
          if (errors.Field1?.hasError) {
            runValidationTasks("Field1", value);
          }
          setField1(value);
        }}
        onBlur={() => runValidationTasks("Field1", Field1)}
        errorMessage={errors.Field1?.errorMessage}
        hasError={errors.Field1?.hasError}
        {...getOverrideProps(overrides, "Field1")}
      ></CheckboxField>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid5")}
      >
        <TextField
          label="Breeder name"
          isRequired={false}
          isReadOnly={false}
          value={breederName}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                typeOfReptile,
                species,
                Field0,
                hatchDate,
                Field1,
                breederName: value,
                breederEmail,
              };
              const result = onChange(modelFields);
              value = result?.breederName ?? value;
            }
            if (errors.breederName?.hasError) {
              runValidationTasks("breederName", value);
            }
            setBreederName(value);
          }}
          onBlur={() => runValidationTasks("breederName", breederName)}
          errorMessage={errors.breederName?.errorMessage}
          hasError={errors.breederName?.hasError}
          {...getOverrideProps(overrides, "breederName")}
        ></TextField>
        <TextField
          label="Breeder email"
          isRequired={false}
          isReadOnly={false}
          value={breederEmail}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                typeOfReptile,
                species,
                Field0,
                hatchDate,
                Field1,
                breederName,
                breederEmail: value,
              };
              const result = onChange(modelFields);
              value = result?.breederEmail ?? value;
            }
            if (errors.breederEmail?.hasError) {
              runValidationTasks("breederEmail", value);
            }
            setBreederEmail(value);
          }}
          onBlur={() => runValidationTasks("breederEmail", breederEmail)}
          errorMessage={errors.breederEmail?.errorMessage}
          hasError={errors.breederEmail?.hasError}
          {...getOverrideProps(overrides, "breederEmail")}
        ></TextField>
      </Grid>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
