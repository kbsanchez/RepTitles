/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, RadioGroupFieldProps, SelectFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { StorageManagerProps } from "@aws-amplify/ui-react-storage";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ReptileUpdateFormInputValues = {
    typeOfReptile?: string;
    species?: string;
    alias?: string;
    sex?: string;
    hatchDate?: string;
    image?: string;
    isParent?: string;
    breederName?: string;
    breederEmail?: string;
    notes?: string;
};
export declare type ReptileUpdateFormValidationValues = {
    typeOfReptile?: ValidationFunction<string>;
    species?: ValidationFunction<string>;
    alias?: ValidationFunction<string>;
    sex?: ValidationFunction<string>;
    hatchDate?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    isParent?: ValidationFunction<string>;
    breederName?: ValidationFunction<string>;
    breederEmail?: ValidationFunction<string>;
    notes?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReptileUpdateFormOverridesProps = {
    ReptileUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    RowGrid0?: PrimitiveOverrideProps<GridProps>;
    typeOfReptile?: PrimitiveOverrideProps<TextFieldProps>;
    species?: PrimitiveOverrideProps<TextFieldProps>;
    alias?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid2?: PrimitiveOverrideProps<GridProps>;
    sex?: PrimitiveOverrideProps<SelectFieldProps>;
    hatchDate?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<StorageManagerProps>;
    isParent?: PrimitiveOverrideProps<RadioGroupFieldProps>;
    RowGrid5?: PrimitiveOverrideProps<GridProps>;
    breederName?: PrimitiveOverrideProps<TextFieldProps>;
    breederEmail?: PrimitiveOverrideProps<TextFieldProps>;
    notes?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type ReptileUpdateFormProps = React.PropsWithChildren<{
    overrides?: ReptileUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    reptile?: any;
    onSubmit?: (fields: ReptileUpdateFormInputValues) => ReptileUpdateFormInputValues;
    onSuccess?: (fields: ReptileUpdateFormInputValues) => void;
    onError?: (fields: ReptileUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReptileUpdateFormInputValues) => ReptileUpdateFormInputValues;
    onValidate?: ReptileUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ReptileUpdateForm(props: ReptileUpdateFormProps): React.ReactElement;
