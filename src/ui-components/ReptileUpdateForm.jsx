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
  SelectField,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { StorageManager } from "@aws-amplify/ui-react-storage";
import { Field, getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Reptile } from "../models";
import { fetchByPath, processFile, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ReptileUpdateForm(props) {
  const {
    id: idProp,
    reptile: reptileModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    alias: "",
    species: "",
    hatchDate: "",
    sex: "",
    breeder: "",
    image: undefined,
    isParent: false,
  };
  const [alias, setAlias] = React.useState(initialValues.alias);
  const [species, setSpecies] = React.useState(initialValues.species);
  const [hatchDate, setHatchDate] = React.useState(initialValues.hatchDate);
  const [sex, setSex] = React.useState(initialValues.sex);
  const [breeder, setBreeder] = React.useState(initialValues.breeder);
  const [image, setImage] = React.useState(initialValues.image);
  const [isParent, setIsParent] = React.useState(initialValues.isParent);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = reptileRecord
      ? { ...initialValues, ...reptileRecord }
      : initialValues;
    setAlias(cleanValues.alias);
    setSpecies(cleanValues.species);
    setHatchDate(cleanValues.hatchDate);
    setSex(cleanValues.sex);
    setBreeder(cleanValues.breeder);
    setImage(cleanValues.image);
    setIsParent(cleanValues.isParent);
    setErrors({});
  };
  const [reptileRecord, setReptileRecord] = React.useState(reptileModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Reptile, idProp)
        : reptileModelProp;
      setReptileRecord(record);
    };
    queryData();
  }, [idProp, reptileModelProp]);
  React.useEffect(resetStateValues, [reptileRecord]);
  const validations = {
    alias: [{ type: "Required" }],
    species: [],
    hatchDate: [],
    sex: [],
    breeder: [],
    image: [],
    isParent: [],
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
          alias,
          species,
          hatchDate,
          sex,
          breeder,
          image,
          isParent,
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
          await DataStore.save(
            Reptile.copyOf(reptileRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ReptileUpdateForm")}
      {...rest}
    >
      <TextField
        label="Alias"
        isRequired={true}
        isReadOnly={false}
        value={alias}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              alias: value,
              species,
              hatchDate,
              sex,
              breeder,
              image,
              isParent,
            };
            const result = onChange(modelFields);
            value = result?.alias ?? value;
          }
          if (errors.alias?.hasError) {
            runValidationTasks("alias", value);
          }
          setAlias(value);
        }}
        onBlur={() => runValidationTasks("alias", alias)}
        errorMessage={errors.alias?.errorMessage}
        hasError={errors.alias?.hasError}
        {...getOverrideProps(overrides, "alias")}
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
              alias,
              species: value,
              hatchDate,
              sex,
              breeder,
              image,
              isParent,
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
              alias,
              species,
              hatchDate: value,
              sex,
              breeder,
              image,
              isParent,
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
      <SelectField
        label="Sex"
        placeholder="Please select an option"
        isDisabled={false}
        value={sex}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              alias,
              species,
              hatchDate,
              sex: value,
              breeder,
              image,
              isParent,
            };
            const result = onChange(modelFields);
            value = result?.sex ?? value;
          }
          if (errors.sex?.hasError) {
            runValidationTasks("sex", value);
          }
          setSex(value);
        }}
        onBlur={() => runValidationTasks("sex", sex)}
        errorMessage={errors.sex?.errorMessage}
        hasError={errors.sex?.hasError}
        {...getOverrideProps(overrides, "sex")}
      >
        <option
          children="Male"
          value="MALE"
          {...getOverrideProps(overrides, "sexoption0")}
        ></option>
        <option
          children="Female"
          value="FEMALE"
          {...getOverrideProps(overrides, "sexoption1")}
        ></option>
        <option
          children="Unknown"
          value="UNKNOWN"
          {...getOverrideProps(overrides, "sexoption2")}
        ></option>
      </SelectField>
      <TextField
        label="Breeder"
        isRequired={false}
        isReadOnly={false}
        value={breeder}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              alias,
              species,
              hatchDate,
              sex,
              breeder: value,
              image,
              isParent,
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
      <Field
        errorMessage={errors.image?.errorMessage}
        hasError={errors.image?.hasError}
        label={"Image"}
        isRequired={false}
        isReadOnly={false}
      >
        {reptileRecord && (
          <StorageManager
            defaultFiles={[{ key: reptileRecord.image }]}
            onUploadSuccess={({ key }) => {
              setImage((prev) => {
                let value = key;
                if (onChange) {
                  const modelFields = {
                    alias,
                    species,
                    hatchDate,
                    sex,
                    breeder,
                    image: value,
                    isParent,
                  };
                  const result = onChange(modelFields);
                  value = result?.image ?? value;
                }
                return value;
              });
            }}
            onFileRemove={({ key }) => {
              setImage((prev) => {
                let value = initialValues?.image;
                if (onChange) {
                  const modelFields = {
                    alias,
                    species,
                    hatchDate,
                    sex,
                    breeder,
                    image: value,
                    isParent,
                  };
                  const result = onChange(modelFields);
                  value = result?.image ?? value;
                }
                return value;
              });
            }}
            processFile={processFile}
            accessLevel={"protected"}
            acceptedFileTypes={["image/*"]}
            isResumable={false}
            showThumbnails={true}
            maxFileCount={1}
            {...getOverrideProps(overrides, "image")}
          ></StorageManager>
        )}
      </Field>
      <SwitchField
        label="This reptile is a parent"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isParent}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              alias,
              species,
              hatchDate,
              sex,
              breeder,
              image,
              isParent: value,
            };
            const result = onChange(modelFields);
            value = result?.isParent ?? value;
          }
          if (errors.isParent?.hasError) {
            runValidationTasks("isParent", value);
          }
          setIsParent(value);
        }}
        onBlur={() => runValidationTasks("isParent", isParent)}
        errorMessage={errors.isParent?.errorMessage}
        hasError={errors.isParent?.hasError}
        {...getOverrideProps(overrides, "isParent")}
      ></SwitchField>
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
          isDisabled={!(idProp || reptileModelProp)}
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
              !(idProp || reptileModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
