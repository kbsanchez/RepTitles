/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { CheckboxFieldProps, GridProps, StepperFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ClutchCreateFormInputValues = {
    typeOfReptile?: string;
    species?: string;
    Field0?: number;
    hatchDate?: string;
    Field1?: boolean;
    breederName?: string;
    breederEmail?: string;
};
export declare type ClutchCreateFormValidationValues = {
    typeOfReptile?: ValidationFunction<string>;
    species?: ValidationFunction<string>;
    Field0?: ValidationFunction<number>;
    hatchDate?: ValidationFunction<string>;
    Field1?: ValidationFunction<boolean>;
    breederName?: ValidationFunction<string>;
    breederEmail?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClutchCreateFormOverridesProps = {
    ClutchCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    typeOfReptile?: PrimitiveOverrideProps<TextFieldProps>;
    species?: PrimitiveOverrideProps<TextFieldProps>;
    Field0?: PrimitiveOverrideProps<StepperFieldProps>;
    hatchDate?: PrimitiveOverrideProps<TextFieldProps>;
    Field1?: PrimitiveOverrideProps<CheckboxFieldProps>;
    RowGrid5?: PrimitiveOverrideProps<GridProps>;
    breederName?: PrimitiveOverrideProps<TextFieldProps>;
    breederEmail?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ClutchCreateFormProps = React.PropsWithChildren<{
    overrides?: ClutchCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ClutchCreateFormInputValues) => ClutchCreateFormInputValues;
    onSuccess?: (fields: ClutchCreateFormInputValues) => void;
    onError?: (fields: ClutchCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ClutchCreateFormInputValues) => ClutchCreateFormInputValues;
    onValidate?: ClutchCreateFormValidationValues;
} & React.CSSProperties>;
export default function ClutchCreateForm(props: ClutchCreateFormProps): React.ReactElement;
