import { extendTheme } from "@chakra-ui/react";
import { breakPoints } from "./breakPoints";
import { colors } from "./colors";
import { fonts } from "./fonts";

export const theme = extendTheme({ breakPoints, fonts, colors });
