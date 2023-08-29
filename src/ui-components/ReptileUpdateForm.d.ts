/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { StorageManagerProps } from "@aws-amplify/ui-react-storage";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Reptile } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ReptileUpdateFormInputValues = {
    alias?: string;
    species?: string;
    hatchDate?: string;
    sex?: string;
    breeder?: string;
    image?: string;
    isParent?: boolean;
};
export declare type ReptileUpdateFormValidationValues = {
    alias?: ValidationFunction<string>;
    species?: ValidationFunction<string>;
    hatchDate?: ValidationFunction<string>;
    sex?: ValidationFunction<string>;
    breeder?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    isParent?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReptileUpdateFormOverridesProps = {
    ReptileUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    alias?: PrimitiveOverrideProps<TextFieldProps>;
    species?: PrimitiveOverrideProps<TextFieldProps>;
    hatchDate?: PrimitiveOverrideProps<TextFieldProps>;
    sex?: PrimitiveOverrideProps<SelectFieldProps>;
    breeder?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<StorageManagerProps>;
    isParent?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type ReptileUpdateFormProps = React.PropsWithChildren<{
    overrides?: ReptileUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    reptile?: Reptile;
    onSubmit?: (fields: ReptileUpdateFormInputValues) => ReptileUpdateFormInputValues;
    onSuccess?: (fields: ReptileUpdateFormInputValues) => void;
    onError?: (fields: ReptileUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReptileUpdateFormInputValues) => ReptileUpdateFormInputValues;
    onValidate?: ReptileUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ReptileUpdateForm(props: ReptileUpdateFormProps): React.ReactElement;
