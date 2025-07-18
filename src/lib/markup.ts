// Convert HTML content to JSX
export const createMarkup = (html: string) => {
    return { __html: html };
};