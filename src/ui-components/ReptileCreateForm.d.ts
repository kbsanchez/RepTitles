/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { StorageManagerProps } from "@aws-amplify/ui-react-storage";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ReptileCreateFormInputValues = {
    alias?: string;
    species?: string;
    hatchDate?: string;
    sex?: string;
    breeder?: string;
    image?: string;
    isParent?: boolean;
};
export declare type ReptileCreateFormValidationValues = {
    alias?: ValidationFunction<string>;
    species?: ValidationFunction<string>;
    hatchDate?: ValidationFunction<string>;
    sex?: ValidationFunction<string>;
    breeder?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    isParent?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReptileCreateFormOverridesProps = {
    ReptileCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    alias?: PrimitiveOverrideProps<TextFieldProps>;
    species?: PrimitiveOverrideProps<TextFieldProps>;
    hatchDate?: PrimitiveOverrideProps<TextFieldProps>;
    sex?: PrimitiveOverrideProps<SelectFieldProps>;
    breeder?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<StorageManagerProps>;
    isParent?: PrimitiveOverrideProps<SwitchFieldProps>;
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
