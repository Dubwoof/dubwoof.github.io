export const styles = {
    section: `
    flex flex-col items-center justify-center min-h-screen py-2 px-4 relative
    lg:max-w-screen-md lg:mx-auto lg:min-h-[calc(70vh)] lg:w-[1000px] lg:max-w-[1000px] lg:px-0
    `,
    helloWrapper: `flex w-full`,
    hello: `w-full text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-start lg:text-8xl`,
    buttonRow: `flex flex-row justify-between w-full gap-4`,
    button: `text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600`,
    content: `
        flex flex-col w-full
        lg:flex-row lg:space-x-8
        lg:w-[1000px] lg:space-x-16
        xl:space-x-16
        `,
    intrudiction: `
    flex flex-col w-full 
    lg:w-1/2
    `,
    imageWrapper: `lg:w-1/2`,
    chevron: `
        absolute bottom-4 cursor-pointer left-1/2 transform -translate-x-1/2
        lg:bottom-4 lg:left-1/2 lg:transform -translate-x-1/2
    `,
};
