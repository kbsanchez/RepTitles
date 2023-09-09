/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ClutchUpdateFormInputValues = {
    typeOfReptile?: string;
    species?: string;
    hatchDate?: string;
    breederName?: string;
    breederEmail?: string;
};
export declare type ClutchUpdateFormValidationValues = {
    typeOfReptile?: ValidationFunction<string>;
    species?: ValidationFunction<string>;
    hatchDate?: ValidationFunction<string>;
    breederName?: ValidationFunction<string>;
    breederEmail?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClutchUpdateFormOverridesProps = {
    ClutchUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    typeOfReptile?: PrimitiveOverrideProps<TextFieldProps>;
    species?: PrimitiveOverrideProps<TextFieldProps>;
    hatchDate?: PrimitiveOverrideProps<TextFieldProps>;
    breederName?: PrimitiveOverrideProps<TextFieldProps>;
    breederEmail?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ClutchUpdateFormProps = React.PropsWithChildren<{
    overrides?: ClutchUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    clutch?: any;
    onSubmit?: (fields: ClutchUpdateFormInputValues) => ClutchUpdateFormInputValues;
    onSuccess?: (fields: ClutchUpdateFormInputValues) => void;
    onError?: (fields: ClutchUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ClutchUpdateFormInputValues) => ClutchUpdateFormInputValues;
    onValidate?: ClutchUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ClutchUpdateForm(props: ClutchUpdateFormProps): React.ReactElement;
