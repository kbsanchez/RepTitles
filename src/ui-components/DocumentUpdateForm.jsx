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
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { fetchByPath, validateField } from "./utils";
import { API } from "aws-amplify";
import { getDocument } from "../graphql/queries";
import { updateDocument } from "../graphql/mutations";
export default function DocumentUpdateForm(props) {
  const {
    id: idProp,
    document: documentModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    docType: "",
    breederName: "",
    breederEmail: "",
    ownerName: "",
    ownerEmail: "",
    purchaseOrHatchDate: "",
  };
  const [docType, setDocType] = React.useState(initialValues.docType);
  const [breederName, setBreederName] = React.useState(
    initialValues.breederName
  );
  const [breederEmail, setBreederEmail] = React.useState(
    initialValues.breederEmail
  );
  const [ownerName, setOwnerName] = React.useState(initialValues.ownerName);
  const [ownerEmail, setOwnerEmail] = React.useState(initialValues.ownerEmail);
  const [purchaseOrHatchDate, setPurchaseOrHatchDate] = React.useState(
    initialValues.purchaseOrHatchDate
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = documentRecord
      ? { ...initialValues, ...documentRecord }
      : initialValues;
    setDocType(cleanValues.docType);
    setBreederName(cleanValues.breederName);
    setBreederEmail(cleanValues.breederEmail);
    setOwnerName(cleanValues.ownerName);
    setOwnerEmail(cleanValues.ownerEmail);
    setPurchaseOrHatchDate(cleanValues.purchaseOrHatchDate);
    setErrors({});
  };
  const [documentRecord, setDocumentRecord] = React.useState(documentModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getDocument,
              variables: { id: idProp },
            })
          )?.data?.getDocument
        : documentModelProp;
      setDocumentRecord(record);
    };
    queryData();
  }, [idProp, documentModelProp]);
  React.useEffect(resetStateValues, [documentRecord]);
  const validations = {
    docType: [],
    breederName: [],
    breederEmail: [],
    ownerName: [],
    ownerEmail: [],
    purchaseOrHatchDate: [],
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
          docType: docType ?? null,
          breederName: breederName ?? null,
          breederEmail: breederEmail ?? null,
          ownerName: ownerName ?? null,
          ownerEmail: ownerEmail ?? null,
          purchaseOrHatchDate: purchaseOrHatchDate ?? null,
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
            query: updateDocument,
            variables: {
              input: {
                id: documentRecord.id,
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
      {...getOverrideProps(overrides, "DocumentUpdateForm")}
      {...rest}
    >
      <SelectField
        label="Doc type"
        placeholder="Please select an option"
        isDisabled={false}
        value={docType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              docType: value,
              breederName,
              breederEmail,
              ownerName,
              ownerEmail,
              purchaseOrHatchDate,
            };
            const result = onChange(modelFields);
            value = result?.docType ?? value;
          }
          if (errors.docType?.hasError) {
            runValidationTasks("docType", value);
          }
          setDocType(value);
        }}
        onBlur={() => runValidationTasks("docType", docType)}
        errorMessage={errors.docType?.errorMessage}
        hasError={errors.docType?.hasError}
        {...getOverrideProps(overrides, "docType")}
      >
        <option
          children="Hatch"
          value="HATCH"
          {...getOverrideProps(overrides, "docTypeoption0")}
        ></option>
        <option
          children="Sale"
          value="SALE"
          {...getOverrideProps(overrides, "docTypeoption1")}
        ></option>
      </SelectField>
      <TextField
        label="Breeder name"
        isRequired={false}
        isReadOnly={false}
        value={breederName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              docType,
              breederName: value,
              breederEmail,
              ownerName,
              ownerEmail,
              purchaseOrHatchDate,
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
              docType,
              breederName,
              breederEmail: value,
              ownerName,
              ownerEmail,
              purchaseOrHatchDate,
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
      <TextField
        label="Owner name"
        isRequired={false}
        isReadOnly={false}
        value={ownerName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              docType,
              breederName,
              breederEmail,
              ownerName: value,
              ownerEmail,
              purchaseOrHatchDate,
            };
            const result = onChange(modelFields);
            value = result?.ownerName ?? value;
          }
          if (errors.ownerName?.hasError) {
            runValidationTasks("ownerName", value);
          }
          setOwnerName(value);
        }}
        onBlur={() => runValidationTasks("ownerName", ownerName)}
        errorMessage={errors.ownerName?.errorMessage}
        hasError={errors.ownerName?.hasError}
        {...getOverrideProps(overrides, "ownerName")}
      ></TextField>
      <TextField
        label="Owner email"
        isRequired={false}
        isReadOnly={false}
        value={ownerEmail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              docType,
              breederName,
              breederEmail,
              ownerName,
              ownerEmail: value,
              purchaseOrHatchDate,
            };
            const result = onChange(modelFields);
            value = result?.ownerEmail ?? value;
          }
          if (errors.ownerEmail?.hasError) {
            runValidationTasks("ownerEmail", value);
          }
          setOwnerEmail(value);
        }}
        onBlur={() => runValidationTasks("ownerEmail", ownerEmail)}
        errorMessage={errors.ownerEmail?.errorMessage}
        hasError={errors.ownerEmail?.hasError}
        {...getOverrideProps(overrides, "ownerEmail")}
      ></TextField>
      <TextField
        label="Purchase or hatch date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={purchaseOrHatchDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              docType,
              breederName,
              breederEmail,
              ownerName,
              ownerEmail,
              purchaseOrHatchDate: value,
            };
            const result = onChange(modelFields);
            value = result?.purchaseOrHatchDate ?? value;
          }
          if (errors.purchaseOrHatchDate?.hasError) {
            runValidationTasks("purchaseOrHatchDate", value);
          }
          setPurchaseOrHatchDate(value);
        }}
        onBlur={() =>
          runValidationTasks("purchaseOrHatchDate", purchaseOrHatchDate)
        }
        errorMessage={errors.purchaseOrHatchDate?.errorMessage}
        hasError={errors.purchaseOrHatchDate?.hasError}
        {...getOverrideProps(overrides, "purchaseOrHatchDate")}
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
          isDisabled={!(idProp || documentModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || documentModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
