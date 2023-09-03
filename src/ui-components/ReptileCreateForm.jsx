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
  Radio,
  RadioGroupField,
  SelectField,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { StorageManager } from "@aws-amplify/ui-react-storage";
import { Field, getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Reptile } from "../models";
import { fetchByPath, processFile, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ReptileCreateForm(props) {
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
    alias: "",
    sex: "",
    hatchDate: "",
    isParent: undefined,
    image: undefined,
    Field0: false,
    breederName: "",
    breederEmail: "",
    notes: "",
  };
  const [typeOfReptile, setTypeOfReptile] = React.useState(
    initialValues.typeOfReptile
  );
  const [species, setSpecies] = React.useState(initialValues.species);
  const [alias, setAlias] = React.useState(initialValues.alias);
  const [sex, setSex] = React.useState(initialValues.sex);
  const [hatchDate, setHatchDate] = React.useState(initialValues.hatchDate);
  const [isParent, setIsParent] = React.useState(initialValues.isParent);
  const [image, setImage] = React.useState(initialValues.image);
  const [Field0, setField0] = React.useState(initialValues.Field0);
  const [breederName, setBreederName] = React.useState(
    initialValues.breederName
  );
  const [breederEmail, setBreederEmail] = React.useState(
    initialValues.breederEmail
  );
  const [notes, setNotes] = React.useState(initialValues.notes);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTypeOfReptile(initialValues.typeOfReptile);
    setSpecies(initialValues.species);
    setAlias(initialValues.alias);
    setSex(initialValues.sex);
    setHatchDate(initialValues.hatchDate);
    setIsParent(initialValues.isParent);
    setImage(initialValues.image);
    setField0(initialValues.Field0);
    setBreederName(initialValues.breederName);
    setBreederEmail(initialValues.breederEmail);
    setNotes(initialValues.notes);
    setErrors({});
  };
  const validations = {
    typeOfReptile: [],
    species: [],
    alias: [],
    sex: [],
    hatchDate: [],
    isParent: [],
    image: [],
    Field0: [],
    breederName: [],
    breederEmail: [],
    notes: [],
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
          alias,
          sex,
          hatchDate,
          isParent,
          image,
          Field0,
          breederName,
          breederEmail,
          notes,
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
            alias: modelFields.alias,
            sex: modelFields.sex,
            hatchDate: modelFields.hatchDate,
            isParent: modelFields.isParent,
            image: modelFields.image,
            breederName: modelFields.breederName,
            breederEmail: modelFields.breederEmail,
            notes: modelFields.notes,
          };
          await DataStore.save(new Reptile(modelFieldsToSave));
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
      {...getOverrideProps(overrides, "ReptileCreateForm")}
      {...rest}
    >
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid0")}
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
                alias,
                sex,
                hatchDate,
                isParent,
                image,
                Field0,
                breederName,
                breederEmail,
                notes,
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
                alias,
                sex,
                hatchDate,
                isParent,
                image,
                Field0,
                breederName,
                breederEmail,
                notes,
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
      </Grid>
      <TextField
        label="Alias"
        descriptiveText=""
        isRequired={false}
        isReadOnly={false}
        value={alias}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              typeOfReptile,
              species,
              alias: value,
              sex,
              hatchDate,
              isParent,
              image,
              Field0,
              breederName,
              breederEmail,
              notes,
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
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid2")}
      >
        <SelectField
          label="Sex"
          placeholder="Please select an option"
          isDisabled={false}
          value={sex}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                typeOfReptile,
                species,
                alias,
                sex: value,
                hatchDate,
                isParent,
                image,
                Field0,
                breederName,
                breederEmail,
                notes,
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
                alias,
                sex,
                hatchDate: value,
                isParent,
                image,
                Field0,
                breederName,
                breederEmail,
                notes,
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
      </Grid>
      <RadioGroupField
        label="Select one:"
        name="isParent"
        isReadOnly={false}
        isRequired={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              typeOfReptile,
              species,
              alias,
              sex,
              hatchDate,
              isParent: value,
              image,
              Field0,
              breederName,
              breederEmail,
              notes,
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
      >
        <Radio
          children="This reptile is not a parent"
          value="NOTPARENT"
          {...getOverrideProps(overrides, "isParentRadio0")}
        ></Radio>
        <Radio
          children="Sire"
          value="SIRE"
          {...getOverrideProps(overrides, "isParentRadio1")}
        ></Radio>
        <Radio
          children="Dam"
          value="DAM"
          {...getOverrideProps(overrides, "isParentRadio2")}
        ></Radio>
      </RadioGroupField>
      <Field
        errorMessage={errors.image?.errorMessage}
        hasError={errors.image?.hasError}
        label={"Image"}
        isRequired={false}
        isReadOnly={false}
      >
        <StorageManager
          onUploadSuccess={({ key }) => {
            setImage((prev) => {
              let value = key;
              if (onChange) {
                const modelFields = {
                  typeOfReptile,
                  species,
                  alias,
                  sex,
                  hatchDate,
                  isParent,
                  image: value,
                  Field0,
                  breederName,
                  breederEmail,
                  notes,
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
                  typeOfReptile,
                  species,
                  alias,
                  sex,
                  hatchDate,
                  isParent,
                  image: value,
                  Field0,
                  breederName,
                  breederEmail,
                  notes,
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
      </Field>
      <CheckboxField
        label="I am the breeder"
        name="fieldName"
        value="fieldName"
        checked={Field0}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              typeOfReptile,
              species,
              alias,
              sex,
              hatchDate,
              isParent,
              image,
              Field0: value,
              breederName,
              breederEmail,
              notes,
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
      ></CheckboxField>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid6")}
      >
        <TextField
          label="Breeder"
          isRequired={false}
          isReadOnly={false}
          value={breederName}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                typeOfReptile,
                species,
                alias,
                sex,
                hatchDate,
                isParent,
                image,
                Field0,
                breederName: value,
                breederEmail,
                notes,
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
          label="Breeder email address"
          isRequired={false}
          isReadOnly={false}
          value={breederEmail}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                typeOfReptile,
                species,
                alias,
                sex,
                hatchDate,
                isParent,
                image,
                Field0,
                breederName,
                breederEmail: value,
                notes,
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
      <TextAreaField
        label="Additional notes"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              typeOfReptile,
              species,
              alias,
              sex,
              hatchDate,
              isParent,
              image,
              Field0,
              breederName,
              breederEmail,
              notes: value,
            };
            const result = onChange(modelFields);
            value = result?.notes ?? value;
          }
          if (errors.notes?.hasError) {
            runValidationTasks("notes", value);
          }
          setNotes(value);
        }}
        onBlur={() => runValidationTasks("notes", notes)}
        errorMessage={errors.notes?.errorMessage}
        hasError={errors.notes?.hasError}
        {...getOverrideProps(overrides, "notes")}
      ></TextAreaField>
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
