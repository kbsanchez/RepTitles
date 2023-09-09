/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { fetchByPath, validateField } from "./utils";
import { API } from "aws-amplify";
import { getClutch } from "../graphql/queries";
import { updateClutch } from "../graphql/mutations";
export default function ClutchUpdateForm(props) {
  const {
    id: idProp,
    clutch: clutchModelProp,
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
    hatchDate: "",
    breederName: "",
    breederEmail: "",
  };
  const [typeOfReptile, setTypeOfReptile] = React.useState(
    initialValues.typeOfReptile
  );
  const [species, setSpecies] = React.useState(initialValues.species);
  const [hatchDate, setHatchDate] = React.useState(initialValues.hatchDate);
  const [breederName, setBreederName] = React.useState(
    initialValues.breederName
  );
  const [breederEmail, setBreederEmail] = React.useState(
    initialValues.breederEmail
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = clutchRecord
      ? { ...initialValues, ...clutchRecord }
      : initialValues;
    setTypeOfReptile(cleanValues.typeOfReptile);
    setSpecies(cleanValues.species);
    setHatchDate(cleanValues.hatchDate);
    setBreederName(cleanValues.breederName);
    setBreederEmail(cleanValues.breederEmail);
    setErrors({});
  };
  const [clutchRecord, setClutchRecord] = React.useState(clutchModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getClutch,
              variables: { id: idProp },
            })
          )?.data?.getClutch
        : clutchModelProp;
      setClutchRecord(record);
    };
    queryData();
  }, [idProp, clutchModelProp]);
  React.useEffect(resetStateValues, [clutchRecord]);
  const validations = {
    typeOfReptile: [],
    species: [],
    hatchDate: [],
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
          typeOfReptile: typeOfReptile ?? null,
          species: species ?? null,
          hatchDate: hatchDate ?? null,
          breederName: breederName ?? null,
          breederEmail: breederEmail ?? null,
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
          await API.graphql({
            query: updateClutch,
            variables: {
              input: {
                id: clutchRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ClutchUpdateForm")}
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
              hatchDate,
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
              hatchDate,
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
              hatchDate: value,
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
              hatchDate,
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
              hatchDate,
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
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || clutchModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Update"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || clutchModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
