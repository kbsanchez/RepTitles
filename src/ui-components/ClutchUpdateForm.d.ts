/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Clutch } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ClutchUpdateFormInputValues = {
    hatchDate?: string;
    species?: string;
    breeder?: string;
};
export declare type ClutchUpdateFormValidationValues = {
    hatchDate?: ValidationFunction<string>;
    species?: ValidationFunction<string>;
    breeder?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClutchUpdateFormOverridesProps = {
    ClutchUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    hatchDate?: PrimitiveOverrideProps<TextFieldProps>;
    species?: PrimitiveOverrideProps<TextFieldProps>;
    breeder?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ClutchUpdateFormProps = React.PropsWithChildren<{
    overrides?: ClutchUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    clutch?: Clutch;
    onSubmit?: (fields: ClutchUpdateFormInputValues) => ClutchUpdateFormInputValues;
    onSuccess?: (fields: ClutchUpdateFormInputValues) => void;
    onError?: (fields: ClutchUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ClutchUpdateFormInputValues) => ClutchUpdateFormInputValues;
    onValidate?: ClutchUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ClutchUpdateForm(props: ClutchUpdateFormProps): React.ReactElement;
