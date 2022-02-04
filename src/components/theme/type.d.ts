import 'styled-components';

declare module 'styled-components'{
    export interface DefaultTheme{
        colors: {
            text: string,
            background: string,
            hover: string,
            background2: string,
            negative: string,
            positive: string,
        },
    }
}

