import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document";
import React from "react";
import { ServerStyleSheet } from "styled-components";

// noinspection HtmlRequiredTitleElement
export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html lang="ru">
                <Head>
                    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                    <link rel="icon" type="image/png" href="/favicon.png" />
                    <meta name="theme-color" content="#457b9d" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <script>0</script>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
