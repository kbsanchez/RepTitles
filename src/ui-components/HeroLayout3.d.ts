/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeroLayout3OverridesProps = {
    HeroLayout3?: PrimitiveOverrideProps<FlexProps>;
    "Type Lock Up"?: PrimitiveOverrideProps<FlexProps>;
    "Main Body"?: PrimitiveOverrideProps<FlexProps>;
    "Your Reptiles, All In One Place"?: PrimitiveOverrideProps<TextProps>;
    "Don't let the complexities of reptile breeding bog you down. Elevate your breeding game with RepTitles \u2013 the modern breeder's ultimate toolkit. With features tailored to your needs and a commitment to simplicity, RepTitles is here to propel your reptile business to new heights. Manage your reptiles, documents, and transactions from the palm of your hand."?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type HeroLayout3Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: HeroLayout3OverridesProps | undefined | null;
}>;
export default function HeroLayout3(props: HeroLayout3Props): React.ReactElement;
