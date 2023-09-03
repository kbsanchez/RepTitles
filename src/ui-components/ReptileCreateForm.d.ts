/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { CheckboxFieldProps, GridProps, RadioGroupFieldProps, SelectFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { StorageManagerProps } from "@aws-amplify/ui-react-storage";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ReptileCreateFormInputValues = {
    typeOfReptile?: string;
    species?: string;
    alias?: string;
    sex?: string;
    hatchDate?: string;
    isParent?: string;
    image?: string;
    Field0?: boolean;
    breederName?: string;
    breederEmail?: string;
    notes?: string;
};
export declare type ReptileCreateFormValidationValues = {
    typeOfReptile?: ValidationFunction<string>;
    species?: ValidationFunction<string>;
    alias?: ValidationFunction<string>;
    sex?: ValidationFunction<string>;
    hatchDate?: ValidationFunction<string>;
    isParent?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    Field0?: ValidationFunction<boolean>;
    breederName?: ValidationFunction<string>;
    breederEmail?: ValidationFunction<string>;
    notes?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReptileCreateFormOverridesProps = {
    ReptileCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    RowGrid0?: PrimitiveOverrideProps<GridProps>;
    typeOfReptile?: PrimitiveOverrideProps<TextFieldProps>;
    species?: PrimitiveOverrideProps<TextFieldProps>;
    alias?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid2?: PrimitiveOverrideProps<GridProps>;
    sex?: PrimitiveOverrideProps<SelectFieldProps>;
    hatchDate?: PrimitiveOverrideProps<TextFieldProps>;
    isParent?: PrimitiveOverrideProps<RadioGroupFieldProps>;
    image?: PrimitiveOverrideProps<StorageManagerProps>;
    Field0?: PrimitiveOverrideProps<CheckboxFieldProps>;
    RowGrid6?: PrimitiveOverrideProps<GridProps>;
    breederName?: PrimitiveOverrideProps<TextFieldProps>;
    breederEmail?: PrimitiveOverrideProps<TextFieldProps>;
    notes?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type ReptileCreateFormProps = React.PropsWithChildren<{
    overrides?: ReptileCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ReptileCreateFormInputValues) => ReptileCreateFormInputValues;
    onSuccess?: (fields: ReptileCreateFormInputValues) => void;
    onError?: (fields: ReptileCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReptileCreateFormInputValues) => ReptileCreateFormInputValues;
    onValidate?: ReptileCreateFormValidationValues;
} & React.CSSProperties>;
export default function ReptileCreateForm(props: ReptileCreateFormProps): React.ReactElement;
