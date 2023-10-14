export const styles = {
    section: 'w-[1100px] mx-auto h-screen flex justify-center items-start',
    content: 'flex gap-4 w-full bg-purple-100',
    title: 'text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4',
};

export function tabSelect(isActive: boolean) {
    return `hover:bg-background h-12 px-4 flex items-center cursor-pointer ${isActive ? 'text-primary' : 'text-text'}`;
}
