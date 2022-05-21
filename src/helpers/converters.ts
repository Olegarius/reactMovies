export const getDuration = (time: number) => {
    const min = 60;
    const hours = 'h';
    const minutes = 'min';
    const fullHours = Math.ceil(time / min);
    const fullMinutes = time % min;

    return `${fullHours}${hours} ${fullMinutes}${minutes}`;
};