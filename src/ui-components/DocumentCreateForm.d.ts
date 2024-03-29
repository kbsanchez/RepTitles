/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DocumentCreateFormInputValues = {
    docType?: string;
    breederName?: string;
    breederEmail?: string;
    ownerName?: string;
    ownerEmail?: string;
    purchaseOrHatchDate?: string;
};
export declare type DocumentCreateFormValidationValues = {
    docType?: ValidationFunction<string>;
    breederName?: ValidationFunction<string>;
    breederEmail?: ValidationFunction<string>;
    ownerName?: ValidationFunction<string>;
    ownerEmail?: ValidationFunction<string>;
    purchaseOrHatchDate?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DocumentCreateFormOverridesProps = {
    DocumentCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    docType?: PrimitiveOverrideProps<SelectFieldProps>;
    breederName?: PrimitiveOverrideProps<TextFieldProps>;
    breederEmail?: PrimitiveOverrideProps<TextFieldProps>;
    ownerName?: PrimitiveOverrideProps<TextFieldProps>;
    ownerEmail?: PrimitiveOverrideProps<TextFieldProps>;
    purchaseOrHatchDate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DocumentCreateFormProps = React.PropsWithChildren<{
    overrides?: DocumentCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DocumentCreateFormInputValues) => DocumentCreateFormInputValues;
    onSuccess?: (fields: DocumentCreateFormInputValues) => void;
    onError?: (fields: DocumentCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DocumentCreateFormInputValues) => DocumentCreateFormInputValues;
    onValidate?: DocumentCreateFormValidationValues;
} & React.CSSProperties>;
export default function DocumentCreateForm(props: DocumentCreateFormProps): React.ReactElement;
