/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  StepperField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Clutch } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
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
    hatchDate: "",
    species: "",
    breeder: "",
    numReptilesInClutch: 0,
  };
  const [hatchDate, setHatchDate] = React.useState(initialValues.hatchDate);
  const [species, setSpecies] = React.useState(initialValues.species);
  const [breeder, setBreeder] = React.useState(initialValues.breeder);
  const [numReptilesInClutch, setNumReptilesInClutch] = React.useState(
    initialValues.numReptilesInClutch
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setHatchDate(initialValues.hatchDate);
    setSpecies(initialValues.species);
    setBreeder(initialValues.breeder);
    setNumReptilesInClutch(initialValues.numReptilesInClutch);
    setErrors({});
  };
  const validations = {
    hatchDate: [],
    species: [],
    breeder: [],
    numReptilesInClutch: [],
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
          hatchDate,
          species,
          breeder,
          numReptilesInClutch,
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
            hatchDate: modelFields.hatchDate,
            species: modelFields.species,
            breeder: modelFields.breeder,
          };
          await DataStore.save(new Clutch(modelFieldsToSave));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ClutchCreateForm")}
      {...rest}
    >
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
              hatchDate: value,
              species,
              breeder,
              numReptilesInClutch,
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
      <TextField
        label="Species"
        isRequired={false}
        isReadOnly={false}
        value={species}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              hatchDate,
              species: value,
              breeder,
              numReptilesInClutch,
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
      <TextField
        label="Breeder"
        isRequired={false}
        isReadOnly={false}
        value={breeder}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              hatchDate,
              species,
              breeder: value,
              numReptilesInClutch,
            };
            const result = onChange(modelFields);
            value = result?.breeder ?? value;
          }
          if (errors.breeder?.hasError) {
            runValidationTasks("breeder", value);
          }
          setBreeder(value);
        }}
        onBlur={() => runValidationTasks("breeder", breeder)}
        errorMessage={errors.breeder?.errorMessage}
        hasError={errors.breeder?.hasError}
        {...getOverrideProps(overrides, "breeder")}
      ></TextField>
      <StepperField
        label="Number of Reptiles in Clutch"
        value={numReptilesInClutch}
        onStepChange={(e) => {
          let value = e;
          if (onChange) {
            const modelFields = {
              hatchDate,
              species,
              breeder,
              numReptilesInClutch: value,
            };
            const result = onChange(modelFields);
            value = result?.numReptilesInClutch ?? value;
          }
          if (errors.numReptilesInClutch?.hasError) {
            runValidationTasks("numReptilesInClutch", value);
          }
          setNumReptilesInClutch(value);
        }}
        onBlur={() =>
          runValidationTasks("numReptilesInClutch", numReptilesInClutch)
        }
        errorMessage={errors.numReptilesInClutch?.errorMessage}
        hasError={errors.numReptilesInClutch?.hasError}
        {...getOverrideProps(overrides, "numReptilesInClutch")}
      ></StepperField>
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
