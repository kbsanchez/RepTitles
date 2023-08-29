/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, StepperFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ClutchCreateFormInputValues = {
    hatchDate?: string;
    species?: string;
    breeder?: string;
    numReptilesInClutch?: number;
};
export declare type ClutchCreateFormValidationValues = {
    hatchDate?: ValidationFunction<string>;
    species?: ValidationFunction<string>;
    breeder?: ValidationFunction<string>;
    numReptilesInClutch?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClutchCreateFormOverridesProps = {
    ClutchCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    hatchDate?: PrimitiveOverrideProps<TextFieldProps>;
    species?: PrimitiveOverrideProps<TextFieldProps>;
    breeder?: PrimitiveOverrideProps<TextFieldProps>;
    numReptilesInClutch?: PrimitiveOverrideProps<StepperFieldProps>;
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
