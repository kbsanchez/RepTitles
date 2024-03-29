/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeroLayout1OverridesProps = {
    HeroLayout1?: PrimitiveOverrideProps<FlexProps>;
    Left?: PrimitiveOverrideProps<FlexProps>;
    HeroMessage?: PrimitiveOverrideProps<FlexProps>;
    "REPTITLES:"?: PrimitiveOverrideProps<TextProps>;
    Message?: PrimitiveOverrideProps<FlexProps>;
    "Your Reptile Empire, Elevated"?: PrimitiveOverrideProps<TextProps>;
    "Unleash the power of efficiency and organization with RepTitles, the ultimate web application crafted exclusively for reptile breeders and purchasers. Say goodbye to the chaos of paperwork and welcome a new era of streamlined reptile management."?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    Right?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type HeroLayout1Props = React.PropsWithChildren<Partial<FlexProps> & {
    mode?: "Dark" | "Light";
} & {
    overrides?: HeroLayout1OverridesProps | undefined | null;
}>;
export default function HeroLayout1(props: HeroLayout1Props): React.ReactElement;
