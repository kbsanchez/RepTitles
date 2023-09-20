/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { StorageManagerProps } from "@aws-amplify/ui-react-storage";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ReptileCreateFromClutchFormInputValues = {
    alias?: string;
    sex?: string;
    image?: string;
    notes?: string;
};
export declare type ReptileCreateFromClutchFormValidationValues = {
    alias?: ValidationFunction<string>;
    sex?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    notes?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReptileCreateFromClutchFormOverridesProps = {
    ReptileCreateFromClutchFormGrid?: PrimitiveOverrideProps<GridProps>;
    alias?: PrimitiveOverrideProps<TextFieldProps>;
    sex?: PrimitiveOverrideProps<SelectFieldProps>;
    image?: PrimitiveOverrideProps<StorageManagerProps>;
    notes?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type ReptileCreateFromClutchFormProps = React.PropsWithChildren<{
    overrides?: ReptileCreateFromClutchFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ReptileCreateFromClutchFormInputValues) => ReptileCreateFromClutchFormInputValues;
    onSuccess?: (fields: ReptileCreateFromClutchFormInputValues) => void;
    onError?: (fields: ReptileCreateFromClutchFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReptileCreateFromClutchFormInputValues) => ReptileCreateFromClutchFormInputValues;
    onValidate?: ReptileCreateFromClutchFormValidationValues;
} & React.CSSProperties>;
export default function ReptileCreateFromClutchForm(props: ReptileCreateFromClutchFormProps): React.ReactElement;
